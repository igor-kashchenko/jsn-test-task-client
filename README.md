# Superhero CRUD App

This is a web application for managing a superhero database, allowing you to perform CRUD (Create, Read, Update, Delete) operations on superhero entities. The application is built using React, TypeScript, Node.js, Express.js, Sequelize (a Node.js ORM for PostgreSQL), and Material-UI.

[DEMO](https://igor-kashchenko.github.io/jsn-test-task-client/)

## Objective

The objective of this web application is to create and manage a superhero database. Each superhero consists of the following attributes:

- Nickname: e.g., Superman
- Real Name: e.g., Clark Kent
- Origin Description: A brief description of the superhero's origin story.
- Superpowers: List of superpowers possessed by the superhero.
- Catch Phrase: An iconic catchphrase associated with the superhero.
- Images: A set of images representing the superhero.

## Functional Requirements

The web application provides the following functionality:

- Create, Edit, and Remove Superheroes: You can create new superheroes, edit existing ones, and remove superheroes. When creating  a superhero, you can assign or remove images associated with the superhero.
- List Superheroes: You can view a paginated list of superheroes, displaying only one image along with their nickname. By default, it shows 4 items per page.
- View Superhero Details: You can view detailed information about a specific superhero, including all attributes and associated images.

## Technical Requirements
The web application adheres to the following technical requirements:
- Tech Stack: The tech stack includes:
   1. Frontend: React, TypeScript, Material-UI
   2. Backend: Node.js, Express.js, Sequelize
   3. Database: PostgreSQL

- Readme: This README file provides instructions on how to run the solution and lists any assumptions made during development.

## Getting Started
To run the superhero CRUD application locally, follow these steps:
- Clone this repository to your local machine: `git clone <repository-url>`
- Navigate to the project directory: `cd <repository-url>`
- Install dependencies for  the client: `npm install .`
- Run the client: `npm run dev`
- Access the application in your web browser at `http://localhost:3000`

## Assumptions
- Server Hosting: The server-side of the application is hosted on Render.com. This assumes that the server is deployed and accessible via a Render.com-hosted URL.
- The PostgreSQL database is set up and configured properly.
- Images Storage: Images associated with superheroes are stored using ImageKit.io's Media Library, and in the database, only the URLs pointing to these images are stored. This assumes that ImageKit.io is set up and configured to serve and manage the images used in the application.
- Pagination is implemented with a default of 4 items per page, but this value can be adjusted in the code if needed.
- The application assumes a development environment, and production deployment steps are not included in this README.
