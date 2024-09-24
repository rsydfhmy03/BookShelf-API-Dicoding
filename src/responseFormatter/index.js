class ResponseFormatter {
  /**
   * Format response for successful request
   * @param {Object} h - Hapi response toolkit
   * @param {string} message - Response message
   * @param {Object} [data={}] - Response data
   * @param {number} [code=200] - HTTP status code
   * @returns {Object} Response object from Hapi
   */
  static success(h, message, data = {}, code = 200) {
    return h
      .response({
        status: "success",
        message,
        data,
      })
      .code(code);
  }
  /**
   * Format response for failed request
   * @param {Object} h - Hapi response toolkit
   * @param {string} message - Response message
   * @param {number} [code=400] - HTTP status code
   * @returns {Object} Response object from Hapi
   */
  static fail(h, message, code = 400) {
    return h
      .response({
        status: "fail",
        message,
      })
      .code(code);
  }
  /**
   * Format response for server error
   * @param {Object} h - Hapi response toolkit
   * @param {string} message - Response message
   * @param {number} [code=500] - HTTP status code
   * @returns {Object} Response object from Hapi
   */
  static error(h, message, code = 500) {
    return h
      .response({
        status: "error",
        message,
      })
      .code(code);
  }
}

module.exports = ResponseFormatter;
