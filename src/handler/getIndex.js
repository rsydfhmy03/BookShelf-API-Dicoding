/**
 * Returns a response object containing a welcome message and information about the Bookshelf API.
 *
 * @param {Object} request - The request object.
 * @param {Object} h - The response toolkit object.
 * @return {Object} A response object with a success status and information about the API.
 */
const getIndex = (request, h) => {
  return h
    .response({
      status: "success",
      message: "Welcome to Bookshelf API Dicoding Submission",
      data: {
        name: "Bookshelf API",
        version: "1.0.0",
        author: "Mitahudev03 (Fahmy Rosyadi CC-44)",
        status: "Active Student",
        school: "Politeknik Negeri Jember",
      },
    })
    .code(200);
};

module.exports = getIndex;
