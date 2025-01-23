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

## Milestone 4: User Model, Controller, and File Uploads
By the end of this milestone, you will:

1. **Create a User Model**: Design the blueprint for storing user data in the database. This includes defining schemas in MongoDB that outline what information (e.g., name, email, password) will be stored for each user.

2. **Create a User Controller**: Manage user-related operations such as adding new users, retrieving user details, and responding to frontend requests.

3. **Enable and Configure Multer**: Set up file uploads to handle user-uploaded files, such as profile pictures, and store them in the backend. Multer simplifies the process of managing and organizing uploaded files.

4. **Update the README File**: Document the progress and changes made during this milestone.

### What’s a Model?
A model is like a detailed map or plan for the data structure. When creating a User Model:
- You define how user data (e.g., name, email, password) is stored in the database.
- A schema acts as a blueprint to ensure consistency in the data format.

### What’s a Controller?
A controller is responsible for managing the interactions between the app and the database. For example:
- It handles requests like user registration or login.
- It processes the incoming data and sends appropriate responses.

### File Uploads with Multer
File uploads enable users to upload images or documents. Multer:
- Stores these files on the server.
- Acts as a virtual file cabinet to manage uploads efficiently.

## Latest Update
### New Features:
- **Login Page**: A user login page has been implemented using **React Router DOM** for navigation and **useState** for managing state.
- **Home Page**: A dynamic home page with a greeting and a "Login" button that redirects to the login page.
- **User Creation API**: A new endpoint (`/create`) to add users to the database.
- **File Uploads**: Added file upload functionality using **Multer** for managing user-uploaded files.

## Next Steps
1. Set up the development environment for the MERN stack.
2. Implement basic CRUD operations for users, products, and orders.
3. Integrate backend CRUD logic with the React frontend.

## Running the Application
1. **Clone the repository**:  
   ```bash
   git clone https://github.com/your-username/ecommerce-follow-along.git
   ```
2. **Install dependencies**:  
   ```bash
   cd ecommerce-follow-along
   npm install
   ```
3. **Run the backend server**:  
   ```bash
   npm run server
   ```
4. **Start the frontend**:  
   ```bash
   npm start
   ```

