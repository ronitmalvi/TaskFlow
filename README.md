# TaskFlow

TaskFlow is a web application for managing tasks and notifications. It is built with a React frontend and a Node.js backend.

## Project Structure
```
web-app/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── assets/       # Images, data files
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── redux/        # Redux state management
│   │   ├── utils/        # Helper functions
│   │   ├── App.jsx       # Main app component
│   │   └── main.jsx      # Entry point
│   ├── .env              # Environment variables
│   └── package.json      # Frontend dependencies
│
└── server/               # Backend Node.js application
    ├── controllers/      # Route controllers
    ├── middlewares/     # Express middlewares
    ├── models/          # MongoDB models
    ├── routes/          # API routes
    ├── utils/           # Helper functions
    ├── .env             # Environment variables
    ├── index.js         # Server entry point
    └── package.json     # Backend dependencies
```

### Technologies Used
1. Frontend: React, Redux Toolkit, Tailwind CSS, Vite
2. Backend: Node.js, Express, MongoDB
3. Authentication: JWT

### Getting Started
1. Clone the repository
2. Install dependencies for both client and server
3. Set up environment variables
4. Run development servers

### Setup & Installation
```
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### Running the Application
```
# Run client (from client directory)
npm run dev

# Run server (from server directory)
npm start
```

## Client

The client is a React application bootstrapped with Vite.

### Available Scripts

In the `client` directory, you can run:

- `npm install`: Installs the dependencies.
- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the codebase using ESLint.

### Configuration

- `vite.config.js`: Vite configuration file.
- `tailwind.config.js`: Tailwind CSS configuration file.
- `postcss.config.js`: PostCSS configuration file.
- `.env`: Environment variables for the client.

## Server

The server is a Node.js application using Express.

### Available Scripts

In the `server` directory, you can run:

- `npm install`: Installs the dependencies.
- `npm start`: Starts the server.
- `npm run dev`: Starts the server in development mode using nodemon.

### Configuration

- `.env`: Environment variables for the server.

### Directory Structure

- `controllers/`: Contains the controller files for handling requests.
- `middlewares/`: Contains middleware files for authentication and error handling.
- `models/`: Contains the Mongoose models for the database.
- `routes/`: Contains the route definitions.
- `utils/`: Contains utility functions.

## License

This project is licensed under the MIT License.
