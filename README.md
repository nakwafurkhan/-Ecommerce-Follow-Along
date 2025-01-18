# Ecommerce Follow-Along

Welcome to the Ecommerce Follow-Along Project! This project is part of a mentor-led series designed to provide hands-on experience in building a full-fledged e-commerce application using the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Project Description
This project focuses on building a scalable and secure e-commerce application. You will learn to implement core functionalities like user authentication, product management, and order handling while using modern tools and technologies. CRUD (Create, Read, Update, Delete) operations will be implemented for managing resources such as users, products, and orders.

## Technologies Used
1. **MongoDB**  
   **Purpose**: Database to store application data (users, products, orders).  
   **Usage**:  
   - Perform CRUD operations for data persistence.  
   - Store and retrieve product, user, and order data.

2. **Mongoose**  
   **Purpose**: Object Data Modeling (ODM) library for MongoDB.  
   **Usage**:  
   - Define schemas and perform CRUD operations easily.

3. **Node.js**  
   **Purpose**: Runtime environment for building the backend server.  
   **Usage**:  
   - Handle backend logic for CRUD operations.

4. **Express.js**  
   **Purpose**: Backend framework for building REST APIs.  
   **Usage**:  
   - Create routes for CRUD operations such as:
     - Create: Add new users, products, or orders.
     - Read: Fetch data (e.g., product list, order details).
     - Update: Modify existing user or product data.
     - Delete: Remove users, products, or orders from the database.

5. **React.js**  
   **Purpose**: Frontend library for creating the user interface.  
   **Usage**:  
   - Display data retrieved from CRUD operations.  
   - Implement user interaction for creating, updating, and deleting resources.

6. **CSS**  
   **Purpose**: Styling the application.  
   **Usage**:  
   - Enhance the visual design of CRUD-related UI components.

7. **Axios**  
   **Purpose**: HTTP client for API calls.  
   **Usage**:  
   - Send API requests to perform CRUD operations.

8. **Nodemon**  
   **Purpose**: Development utility to monitor file changes.  
   **Usage**:  
   - Restart the server automatically during CRUD development.

9. **Dotenv**  
   **Purpose**: Load environment variables from a `.env` file.  
   **Usage**:  
   - Manage sensitive data like database credentials.

10. **Git & GitHub**  
   **Purpose**: Version control and repository hosting.  
   **Usage**:  
   - Track changes to CRUD logic and collaborate.

## CRUD Operations Overview
1. **Users**
   - **Create**: Register new users with credentials.
   - **Read**: View user profiles and details.
   - **Update**: Edit user details like email or password.
   - **Delete**: Remove a user account.

2. **Products**
   - **Create**: Add new products to the catalog.
   - **Read**: Fetch product details and lists.
   - **Update**: Modify product information like price or stock.
   - **Delete**: Remove products from the catalog.

3. **Orders**
   - **Create**: Place new customer orders.
   - **Read**: View order details and status.
   - **Update**: Update order statuses (e.g., "Shipped", "Delivered").
   - **Delete**: Cancel orders.

## Milestone 1: Project Overview
**Goals Covered:**
- Understand the overall structure of a MERN project.
- Learn to set up a new project repository.
- Explore the functionalities of an e-commerce application, including CRUD operations.

## Latest Update
### New Features:
- **Login Page**: A user login page has been implemented using **React Router DOM** for navigation and **useState** for managing state.
- **Home Page**: A dynamic home page has been added with a simple greeting and a "Login" button to redirect to the login page.

### New Backend Features:
- **User Creation**: A new API endpoint (`/create`) has been added to create new users. It accepts user data in the request body, stores it in MongoDB, and returns a success message.
- **File Upload**: A file upload feature has been added using **Multer**. Files can be uploaded via the `/upload` endpoint, which saves the file to the server's `uploads` directory.

### Next Steps:
- Set up the development environment for the MERN stack.
- Implement basic CRUD operations for users, products, and orders.
- Integrate backend CRUD logic with the React frontend.

## Running the Application

1. **Clone the repository**:  
   ```bash
   git clone https://github.com/your-username/ecommerce-follow-along.git
