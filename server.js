const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTIONS! SHUTTING DOWN');
  process.exit(1); // 0 means success 1 means rejection
});

dotenv.config({ path: './config.env' }); // such that we will be able to access

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('db connection successfull !'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log('app is listening at post ' + port);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! SHUTTING DOWN');
  server.close(() => {
    process.exit(1); // 0 means success 1 means rejection
  });
});
