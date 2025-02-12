# To-Do App

A simple to-do app built with **Spring Boot** (Java) for the backend and **React** for the frontend. This app allows users to create, update, and manage their to-do items.

## Features

- **Create a new to-do item**: Add a new task with a title and optional description.
- **Update to-do status**: Mark a task as completed or incomplete.
- **View all to-do items**: List all tasks with their current status.
- **SQLite Database**: Lightweight, file-based database for storing to-do items.

## Technologies Used

- **Backend**: Spring Boot (Java)
- **Frontend**: React (JavaScript)
- **Database**: SQLite
- **Build Tool**: Maven

## Prerequisites

Before running the project, ensure you have the following installed:

- **Java Development Kit (JDK)**: Version 17 or higher.
- **Node.js**: For running the React frontend.
- **Maven**: For building and managing the Spring Boot project.
- **SQLite**: For the database (no installation required, as it's embedded).

## Setup and Installation

### Backend (Spring Boot)

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app/backend
   ```
2. Build the project using Maven:
```bash
mvn clean install
```
3. Run the Spring Boot application:
```bash
mvn spring-boot:run
```
### Frontend (React)

1.Navigate to the frontend directory:

```bash
cd ../frontend
```

2.Install dependencies:

```bash
npm install
```

3.Start the React development server:

```bash
npm start
```

The frontend will start at `http://localhost:3000`.



## API Endpoints

The backend exposes the following RESTful API endpoints:

- **GET** `/api/todos`: Retrieve all to-do items.
- **POST** `/api/todos`: Create a new to-do item.

  **Request Body**:
  ```json
  {
    "title": "Buy groceries",
    "completed": false
  }
  ```

- **PUT** `/api/todos/{id}/status`: Update the status of a to-do item.

  **Query Parameter**: `completed` (boolean).

---

## Database Configuration

The app uses **SQLite** as the database. The database file (`todo.db`) is created automatically in the root of the project.

- **Database File**: `todo.db`
- **Hibernate DDL Auto**: `update` (automatically updates the schema based on entity classes).

---

## CORS Configuration

CORS (Cross-Origin Resource Sharing) is configured to allow requests from the React frontend (`http://localhost:3000`). You can modify the `CorsConfig` class to adjust the settings.

---

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push to the branch.
4. Submit a pull request.
"""
