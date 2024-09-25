# Bookshelf API Dicoding Submission

## Introduction

Welcome to the **Bookshelf API**, a simple RESTful API designed for managing a collection of books. This API allows users to add, update, delete, and retrieve book information efficiently. 

### Author

This project is created by **Mitahudev03** (Fahmy Rosyadi), a student at **Politeknik Negeri Jember**. The API serves as a submission for a course project and aims to demonstrate practical skills in API development.

## What is Bookshelf API?

The Bookshelf API is a backend service that provides endpoints for managing a bookshelf of books. The API supports various operations, including:

- **Add a Book**: Allows users to add new books to the collection.
- **Update a Book**: Users can update the details of existing books.
- **Delete a Book**: Users can remove books from their collection.
- **Get All Books**: Retrieve a list of all books in the collection.
- **Get Book by ID**: Fetch details of a specific book using its unique identifier.

This API responds with JSON format, ensuring that data is easy to parse and use in various applications.

## Tech Stack

The Bookshelf API is built using the following technologies:

- **Node.js**: A JavaScript runtime for building server-side applications.
- **Hapi.js**: A rich framework for building applications and services in Node.js, providing robust features for handling requests and responses.
- **JavaScript**: The programming language used for developing the API logic.
- **Postman**: A collaboration platform for API development, used for testing the API endpoints.
- **Nodemon**: A utility that monitors for changes in the application and automatically restarts the server.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version)
- [NPM](https://www.npmjs.com/) (Node package manager, which comes with Node.js)
- [BUN](https://bun.sh/) (JavaScript runtime, package manager, test runner and bundler built from scratch using the Zig programming language.)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rsydfhmy03/BookShelf-API-Dicoding.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd bookshelf-api
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

   or 
      ```bash
   bun install
   ```

### Running the API

To start the server, use the following command:

```bash
npm run start
```

By default, the API will run on `http://localhost:3000`.

### Testing the API

To run tests for the API, you can use:

```bash
npm run start-dev
```

Or :

```bash
bun run start-dev
```

## API Endpoints

### Base URL

```
http://localhost:9000
```

### Endpoints

- `GET /` - Welcome message and API information.
- `POST /books` - Add a new book.
- `GET /books` - Get all books.
- `GET /books/{bookId}` - Get a book by its ID.
- `PUT /books/{bookId}` - Update a book by its ID.
- `DELETE /books/{bookId}` - Delete a book by its ID.

## Conclusion

The Bookshelf API serves as a fundamental example of a RESTful API using modern JavaScript technologies. It allows users to manage their book collections effectively and can be extended with additional features as needed.

---
