# Node.js + Express.js + MongoDB REST API using MVC Pattern

This project demonstrates how to build a RESTful API using **Node.js**, **Express.js**, and **MongoDB** following the **MVC (Model-View-Controller) pattern.**

---

## 📂 Folder Structure

```text
project-root/
├── MVC_PATTERN/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.js
├── package.json
└── README.md
```

### Folder Breakdown:

* `controllers/`: Contains the logic to handle incoming API requests and interact with the database.
* `models/`: Contains the MongoDB schema definitions and handles database operations.
* `routes/`: Connects API endpoints to their corresponding controller functions.
* `index.js`: The entry point of the application where the server and database connection are initialized.

---

## 🚀 Technologies Used

* **Node.js:** JavaScript runtime environment for server-side applications.
* **Express.js:** Fast, minimal web framework for Node.js to build APIs.
* **MongoDB:** NoSQL database used to store application data.
* **Mongoose:** ODM (Object Data Modeling) library to interact with MongoDB easily.

---

## ⚙️ Project Setup

### Steps to Run:

1. Clone the repository to your local machine.
2. Install all project dependencies using `npm install`.
3. Make sure MongoDB server is running locally or configure a cloud database URI.
4. Start the project using the npm script, usually `npm run mvc`.

---

## 📌 Understanding the MVC Pattern

### Model

The **Model** defines the structure of your data using schemas and manages database interactions. It ensures data consistency and validation rules.

### View

In a pure API project, **View** is generally not used. However, in full-stack MVC projects, the view would represent the user interface (frontend).

### Controller

The **Controller** handles the request and response cycle. It contains all the logic to process requests, interact with the database (through the Model), and send appropriate responses.

### Route

The **Route** maps the HTTP request methods (GET, POST, PATCH, DELETE) and API endpoints to specific controller functions.

---

## 🛠️ API Endpoints Overview

* **GET /api/users:** Retrieve all users from the database.
* **POST /api/users:** Add a new user to the database.
* **GET /api/users/\:id:** Retrieve a specific user by their unique ID.
* **PATCH /api/users/\:id:** Update an existing user's information by their ID.
* **DELETE /api/users/\:id:** Delete a user by their ID.

---

## 🔗 How It Works

1. **The client (Postman, frontend, etc.) makes a request to an API endpoint.**
2. **The router directs the request to the appropriate controller function.**
3. **The controller handles the business logic, often communicating with the model.**
4. **The model performs database operations like fetching, updating, or deleting data.**
5. **The controller sends back the appropriate response to the client.**

---

## 🛠️ Tools You Can Use for Testing

* **Postman / Thunder Client:** For sending HTTP requests to your API.
* **MongoDB Compass:** GUI to visualize MongoDB collections and documents.

---

## ✅ Best Practices to Follow

* Use meaningful folder names and maintain clear separation of concerns.
* Always handle errors using try-catch blocks and proper middleware.
* Validate incoming data using libraries like Joi or Zod.
* Secure APIs with authentication (e.g. JWT) if needed.

---

## 📚 Future Enhancements

* Add input validation.
* Add user authentication and authorization.
* Add pagination and filtering for large datasets.
* Connect MongoDB Atlas for cloud-based database storage.
* Build a frontend (React/Next.js) to consume the API.

---

## 💡 Summary

This project follows the **clean MVC pattern** to build scalable, maintainable APIs using **Node.js, Express.js, and MongoDB.**
It helps separate application concerns and is widely used in modern backend architecture.


