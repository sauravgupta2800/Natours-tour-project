const dotenv = require('dotenv');

dotenv.config({ path: './config.env' }); // such that we will be able to access

const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  // console.log('app is listening at post ' + port);
});
