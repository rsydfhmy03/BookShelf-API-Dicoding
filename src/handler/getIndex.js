/**
 * Returns a response object containing a welcome message and information about the Bookshelf API.
 *
 * @param {Object} request - the request object
 * @param {Object} h - the response toolkit object
 * @return {Object} a response object with a success status, a welcome message, and information about the API
 */
const getIndex = (request, h) => {
  const response = h.response({
    status: "success",
    message: "Welcome to Bookshelf API Dicoding Submission",
    data: {
      name: "Bookshelf API",
      version: "1.0.0",
      author: "Mitahudev03 (Fahmy Rosyadi CC-44)",
      status: "Active Student",
      school: "Politeknik Negeri Jember",
    },
  });
  response.code(200);
  return response;
};

module.exports = getIndex;
