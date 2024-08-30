class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something Went Wrong",
    // this is a very very very bad mssg
    errors = [],
    stack = "", //error stack
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export { ApiError };
