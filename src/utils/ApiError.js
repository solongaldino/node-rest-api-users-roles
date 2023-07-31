class ApiError extends Error {
  statusCode;
  message;
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }

  static authorizationError(error) {
    const env = process.env.NODE_ENV || 'development';
    const isDevelopment = env === 'development' || env === 'local';

    return new ApiError(401, isDevelopment ? error.message : 'Invalid token');
  }
}

module.exports = ApiError;
