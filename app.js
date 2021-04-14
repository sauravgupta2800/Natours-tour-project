const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const app = express();

// 1. MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());
app.use((req, res, next) => {
  console.log('Hello from middleware');
  next();
});

const port = 3000;

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
// 4. SERVER STARTING
app.listen(port, () => {
  console.log('app is listening at post ' + port);
});
