class ResponseFormatter {
  static success(h, message, data = {}, code = 200) {
    return h
      .response({
        status: "success",
        message,
        data,
      })
      .code(code);
  }

  static fail(h, message, code = 400) {
    return h
      .response({
        status: "fail",
        message,
      })
      .code(code);
  }

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
