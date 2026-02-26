class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went Wrong",
    stack = "",
    errors = [],
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.error = errors;
    this.data = null;
    this.success = false;

    if (stack) {
      this.stack = stack;
    }
  }
}

export { ApiError };
