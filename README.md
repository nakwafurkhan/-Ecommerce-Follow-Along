# Ecommerce-Follow-Along
     
     A hands-on project demonstrating the power of the MERN stack by creating a functional e-commerce platform.

## E-Commerce Application using MERN Stack

Welcome to the E-Commerce Application project! 🚀 This project involves building a full-fledged e-commerce platform from scratch using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). This repository serves as a comprehensive guide and documentation for the application.

---

## 🌟 Features of the Application

- **User Authentication**: Secure registration and login system.
- **Product Management**: Add, update, and retrieve product details.
- **Order Handling**: Seamlessly manage customer orders.
- **REST API Integration**: Well-structured endpoints for interaction.
- **Database Schema Design**: Efficient schema structure in MongoDB.
- **Authentication & Authorization**: Role-based access for secure transactions. 


## Milestones

### Milestone 1: Repository Creation

* Created a GitHub repository named "Ecommerce-Follow-Along" with a README file.

### Milestone 2: Initial Setup & Login Page

* Pushed code to the GitHub repository.
* Created separate folders for frontend and backend.
* Implemented a functional Login Page in the frontend.

### Milestone 3: Project Setup & Foundation

* Established project structure, database connection, and basic error handling.

### Milestone 4: User Authentication & File Uploads

* Implemented user registration, login, and file upload functionalities.
* Integrated user authentication and authorization middleware.

### Milestone 5: User Signup

* Created the Signup page with form validation.

### Milestone 6

1. **Encrypt Password:**
    * Hash the user's password using `bcrypt` during signup.
    * Store the hashed password in the database.

2. **Store User Data:**
    * Save all user data (e.g., name, email) in the database. 
    * Ensure the password remains encrypted and secure.


### Milestone 7:

**Login Endpoint**

1. **Accept User Credentials:** Receive user input for email/username and password.
2. **Retrieve User:** Query the database to find the user associated with the provided credentials.
3. **Password Validation:**
    * Hash the entered password using `bcrypt`.
    * Compare the hashed input with the stored hashed password in the database. 
    * If they match, authentication is successful.

### Milestone 8: Product Card & Homepage Layout

* Created a reusable Card Component with props for product details.
* Designed the Homepage layout using a grid or flexbox to display multiple product cards.

## Milestone 9: Product Input Form

*   **Product Details Form:** Developed a comprehensive form to collect all necessary product information.
*   **Multiple Image Upload:** Implemented functionality for uploading multiple images for each product.


# Milestone 10: Product Schema & Endpoint

Create a Mongoose product schema with validation and a POST endpoint to store product details in MongoDB.

**Goals:**

* Product schema creation
* Endpoint for product data (POST)
* Data validation


## Milestone 11: Data Fetching and Display

This milestone focuses on fetching product data from the backend and dynamically displaying it on the frontend using product cards.

**Key Objectives:**

* Implement a backend endpoint to retrieve all product data from MongoDB and send it to the frontend.
* Create a frontend function to fetch the product data from the endpoint.
* Dynamically render the retrieved product data using the existing product card component.

## Milestone 12: My Products Page

This milestone focuses on creating a "My Products" page that displays only the products added by the logged-in user (identified by their email).



## Milestone 13: Update Functionality

This milestone focuses on implementing the update functionality for product data.  Key achievements include:

    *   Developed a backend endpoint to receive updated product information and persist changes to the MongoDB database.
    *   Implemented frontend functionality to pre-populate a product edit form with existing data when the "Edit" button is clicked.
    *   Enabled users to modify the pre-filled data and save the updates, triggering the backend update process.

This milestone demonstrates a solid understanding of update operations in a full-stack context, covering both backend data persistence and user-friendly frontend form handling.



## Milestone 14: Product Delete Feature

Implemented product deletion: backend endpoint to delete products by ID and frontend "Delete" button functionality.


## Milestone 15: Navbar Component
    
Added a reusable navigation bar (Navbar) to all app screens.
This enables smooth navigation and improves user experience.


## Milestone 16: Product Info Page

Created a page displaying product details, quantity selection, and an "Add to Cart" button.  


## Milestone 17: Backend Cart

Implementrd a backend endpoint to add products to the user's cart and store it in the database. 


## Milestone 18

In this milestone, I implemented the backend functionality for the cart page by adding essential endpoints. Specifically, I created an endpoint for the cart page itself and another endpoint to fetch the products currently stored in the cart for a specific user.


## Milestone 19

- Created frontend cart page with product display and +/- quantity adjustment, backed by new backend endpoints for persisting cart quantity changes.
- Integrated frontend quantity controls with backend API to ensure accurate cart updates and data consistency.


## Milestone 20

- Implemented backend endpoint to serve user profile data and created a frontend profile page displaying user info and address (with "Add Address" functionality).
- Added "No address found" message when no address is available and integrated address management features.



**Key Objectives:**

* Implement a backend endpoint that retrieves products from MongoDB, filtering by the user's email address.
* Create a frontend function to fetch the filtered product data from the endpoint.
* Dynamically render the retrieved product data on the "My Products" page using the existing product card component.

