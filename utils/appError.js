class AppError extends Error {
  constructor(message, statusCode) {
    super(message); // this.message = message is dont required as we are already calling super(), which will set it for us
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor); // requird to see the stacktract if you console.log(err.stack) in error controller
  }
}

module.exports = AppError;
