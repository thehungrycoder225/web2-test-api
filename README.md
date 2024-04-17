# Test API Sandbox

This repository is a sandbox for exploring the setup of a REST API using Node Express. It includes routing for managing sample data about authors, including their name and age.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/test-api.git`
2. Install the dependencies: `npm install`
3. Start the server: `npm start`

## API Endpoints

The following API endpoints are available:

- `GET /authors`: Get a list of all authors
- `GET /authors/:id`: Get details of a specific author
- `POST /authors`: Create a new author
- `PUT /authors/:id`: Update details of a specific author
- `DELETE /authors/:id`: Delete a specific author

## Sample Data

The sample data for authors includes the following fields:

- `name`: The name of the author
- `age`: The age of the author

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Setting up Environment Variables

To set up environment variables for this project, follow these steps:

1. Create a new file named `.env` in the root directory of the project.
2. Open the `.env` file and add the following variables:

   ```
   PORT=3000
   DATABASE_URL=mongodb://localhost:27017/test-api
   ```

   Replace `3000` with the desired port number for the server, and `mongodb://localhost:27017/test-api` with the connection URL for your MongoDB database.

3. Save the `.env` file.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/test-api.git`
2. Install the dependencies: `npm install`
3. Start the server: `npm start`

Now you have successfully set up the environment variables and started the server. You can proceed to use the API endpoints as described in the previous section.
