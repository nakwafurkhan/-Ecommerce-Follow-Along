# Ecommerce-Follow-Along
     
     https://github.com/nakwafurkhan/-Ecommerce-Follow-Along.git

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

### Milestone 9: Product Form Creation

1. *Create Product Form:*
   - Make a form for adding product details like name, description, price, and images.

2. *Image Uploads:*
   - Allow users to upload multiple images for the product.

3. *Form Validation:*
   - Check that the form fields are filled correctly (e.g., price is a number, name is not empty).

### Milestone 10: Product Schema & Endpoint

1. *Product Schema:*
   - Define product details (name, description, price, image URL) using Mongoose with validation.

2. *Endpoint Creation:*
   - Create a POST endpoint to save product data to MongoDB.

3. *Why Validation?*
   - Ensures only valid data is saved, keeping the database accurate.

### Milestone 11 Endpoint for Product

1. *Overview*
    - This endpoint retrieves all products from the database.

2. *Endpoint*
    - `GET /products`

3. *Description*
    - This endpoint is used to fetch all products stored in the database. It performs an asynchronous operation to retrieve the data and sends
      the list of products as a response. If an error occurs during the fetching process, it logs the error and sends an internal server error message.

4. *Response*
    - **Success (200)**: Returns an array of product objects.
    - **Error (500)**: Returns an error message indicating an internal server error.

