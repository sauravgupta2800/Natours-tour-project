const express = require('express');
const morgan = require('morgan');
const globalErrorController = require('./controller/errorController');
const AppError = require('./utils/appError');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1. MIDDLEWARE
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`)); // helps render public folder, diff than router
app.use((req, res, next) => {
  // console.log('Hello from middleware');
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server !`, 404));
});

// GLOBAL ERROR HANDLING MIDDLEWARE
app.use(globalErrorController);

module.exports = app;
