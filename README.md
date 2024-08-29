# Mitt-Arv-Question1
# Atishay's Kanban Board

This project is a Kanban Board application built using React, Redux, and Material-UI. The app allows users to manage tasks by adding, searching, and organizing them in different stages of a Kanban board. It also features a responsive UI with customized styles.

## Features

- **Task Management**: Add, view, and manage tasks on a Kanban board.
- **Search Functionality**: Filter tasks based on the search query.
- **Responsive Design**: The UI is built using Material-UI components and is fully responsive.
- **Redux State Management**: The global state is managed using Redux, allowing for consistent and scalable state management.

## Project Structure

- **`App.js`**: The main entry point of the application. It sets up the layout, handles the task search functionality, and integrates the Kanban board and task form components.
- **`components/Board.js`**: The component responsible for rendering the Kanban board, where tasks are organized into different stages.
- **`components/TaskForm.js`**: A form component for adding new tasks to the board.
- **`features/tasks/tasksSlice.js`**: Manages the state related to tasks using Redux.
- **`store.js`**: Configures the Redux store for global state management.
- **`index.css`**: Contains the global styles for the application.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v12 or higher)
- **npm** (v6 or higher) or **yarn**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/jnatishay78/kanban-board.git
   cd kanban-board

Install dependencies:

Using npm:

bash
npm install
Or using yarn:

bash
yarn install
Start the development server:

Using npm:

bash
npm start
Or using yarn:

bash
yarn start
Open your browser and navigate to http://localhost:3000 to view the application.

Atishay's Kanban Baord Live Application Link:
https://mitt-arv-question1.vercel.app/
