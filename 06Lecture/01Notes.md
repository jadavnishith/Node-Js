# EJS

=> EJS, or Embedded JavaScript, is a templating language that lets you generate HTML markup with plain JavaScript. It’s often used in web applications to render dynamic content by embedding JavaScript logic directly within HTML.

=> EJS (Embedded JavaScript) is a templating language used to create dynamic HTML pages. It lets you write HTML with embedded JavaScript code, allowing you to include variables, loops, and conditionals directly in your HTML.

=> This makes it easy to display different content based on data from your server. It’s commonly used in web applications with Node.js and helps in generating web pages that can change based on user interactions or data.

# view Engine

=> View Engine: This line configures the app to use EJS as the templating engine, allowing you to render EJS files.

# Middleware

=> 404 Middleware: This middleware function catches any requests that do not match the defined routes (e.g., /notfound). It sets the response status to 404 and renders a 404.ejs page, indicating that the requested page was not found.

# MVC (Model View Controller)

=> MVC, or Model-View-Controller, is a design pattern commonly used in software development, especially in web applications. It separates an application into three interconnected components, promoting organized code and separation of concerns. Here’s a brief overview of each component:

1. Model:

=> Represents the data and business logic of the application.

=> Handles data retrieval, storage, and manipulation (e.g., database interactions).

=> Notifies the view of any changes to the data.

2. View:

=> Responsible for the user interface and presentation layer.

=> Displays data to the user and reflects the current state of the model.

=> Receives user input and sends it to the controller.

3. Controller:

=> Acts as an intermediary between the model and the view.

=> Processes user input (e.g., from forms or buttons) and updates the model.

=> Determines which view to render based on user actions and model changes.

# Benefits of MVC:

=> Separation of Concerns: Each component has a distinct role, making the code easier to manage and test.

=> Reusability: Models and views can be reused across different parts of the application.

=> Maintainability: Changes in one part of the application (e.g., changing the view) have minimal impact on others.

# Example in a Web Context:

=> In a web application using MVC:

=> Model: The database and data models that define the application's data structure.

=> View: HTML templates (like EJS or others) that display data to users.

=> Controller: JavaScript functions that handle HTTP requests, update models, and return the appropriate view.

# This structure is widely adopted in frameworks like Express, Ruby on Rails, and Django, making it a fundamental concept in web development.

# Basic Understanding of Middleware used

1. app.use(...):

=> This method sets up middleware in your Express app. Middleware functions have access to the request (req) and response (res) objects, and they can modify them or terminate the request-response cycle.

2. (req, res) => { ... }:

=> This is an arrow function that takes two parameters: req (the incoming request) and res (the response to send back).

3. res.status(404):

=> This sets the HTTP response status code to 404, which indicates that the requested resource was not found. It's a standard response for a missing page.

4. .render("404"):

=> This tells Express to render a view called 404. This view should be an EJS file (like 404.ejs) that you have created in your views directory. It typically contains a friendly message informing the user that the page they tried to access does not exist.

# Purpose

=> This middleware function is used to catch any requests that do not match the defined routes (like /, /home, or /contact).

=> When a user navigates to an undefined route (e.g., /notfound), this middleware is triggered, and it responds with a 404 status and renders the 404.ejs page.