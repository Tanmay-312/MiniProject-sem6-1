# Backend Server for User Authentication and Data Management

## Introduction

Welcome to our backend server implemented in GoLang. This server provides APIs for user authentication, registration, login, and post management functionalities, all integrated seamlessly with PostgreSQL for robust data storage.

## Features

- User Authentication: Allows users to register, login, and manage their accounts securely.
- Post Management: Enables users to create, update, delete, and view posts.
- Database Integration: Utilizes PostgreSQL for efficient data storage and retrieval.
- Scalable and Performant: Designed to handle large-scale applications with high performance.

## Installation

1. Clone the repository:

```bash
git clone <repository_url>
```

2. Install dependencies:

```bash
go mod tidy
```

3. Set up PostgreSQL database:

- Create a PostgreSQL database named `stocksdb`.
- Set up the database connection configuration in the `main.go` file.

4. Run the server:

```bash
go run main.go
```

## Usage

- Register a new user: Send a POST request to `/register` with username and password in the request body.
- Login: Send a POST request to `/login` with username and password in the request body.
- Create a new post: Send a POST request to `/posts` with the post data in the request body.
- Update a post: Send a PUT request to `/posts/{post_id}` with the updated post data in the request body.
- Delete a post: Send a DELETE request to `/posts/{post_id}` to delete a specific post.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.