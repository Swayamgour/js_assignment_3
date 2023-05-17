// Form Validation Error Handling:
// When handling form submissions in a web application, you need to validate user input to ensure it meets the required criteria. If validation fails, you can display error messages to the user. For example, if a user forgets to fill out a required field, you can display an error message next to that field.


// Example form validation error handling
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Perform form validation
    if (form.username.value === '') {
        displayError('username', 'Username is required');
    }

    // Submit form if validation passes
});

function displayError(field, message) {
    const errorField = document.querySelector(`#${field}-error`);
    errorField.textContent = message;
    errorField.style.display = 'block';
}


// 2:- API Error Handling:
// When making HTTP requests to APIs, it's crucial to handle errors gracefully. You can check the response status code and handle different scenarios accordingly. For example, if an API request fails, you can display an error message to the user or retry the request.


// Example API error handling using fetch
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('API request failed');
        }
        return response.json();
    })
    .then(data => {
        // Process the API response data
    })
    .catch(error => {
        // Handle API error
        console.error(error);
        // Display error message to the user
    });


// 3:- File Upload Error Handling:
// When allowing users to upload files, you need to handle potential errors, such as file size restrictions or unsupported file types. You can validate the file before uploading and show appropriate error messages to the user.

// Example file upload error handling
const fileInput = document.querySelector('#file-input');

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    // Check file size
    if (file.size > 10 * 1024 * 1024) {
        displayError('file', 'File size exceeds the limit');
        return;
    }

    // Check file type
    if (!file.type.startsWith('image/')) {
        displayError('file', 'Only image files are allowed');
        return;
    }

    // Upload the file
});

function displayError(field, message) {
    // Display error message to the user
}


// 4:- Database Error Handling:
// When working with databases in JavaScript applications, errors can occur during database operations, such as connecting to the database or executing queries. Proper error handling is essential to handle database-related issues gracefully.


// Example database error handling using a library like mongoose (for MongoDB)
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true })
    .then(() => {
        // Perform database operations
    })
    .catch((error) => {
        // Handle database connection error
        console.error(error);
        // Display error message to the user
    });


    // 5:- File System Error Handling:
// When dealing with file system operations in a Node.js application, errors can occur while reading or writing files, creating directories, etc. Proper error handling ensures that your application can handle these situations and provide appropriate feedback.

// Example file system error handling in Node.js
c// Example file system error handling in Node.js
const fs = require('fs');

fs.readFile('myfile.txt', 'utf8', (error, data) => {
  if (error) {
    // Handle file read error
    console.error(error);
    // Display error message to the user
    return;
  }

  // Process the file data
});

