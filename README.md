# **Permalist**
<br/>

## Overview

Permalist is a simple to-do list web application built with Node.js, Express, and PostgreSQL for storing tasks. Users can add, edit, and delete tasks, with the data being persisted in a PostgreSQL database.

## Features

User can view a list of tasks

Add new tasks

Edit tasks

Delete tasks

Uses PostgreSQL to persist tasks

Configurable environment variables for database credentials

## Tech Stack

Node.js - JavaScript runtime for building scalable network applications.

Express - Web framework for Node.js to handle HTTP requests and routing.

PostgreSQL - Relational database management system for storing tasks.

dotenv - Module for loading environment variables from a .env file.

body-parser - Middleware for parsing incoming request bodies.

pg (node-postgres) - PostgreSQL client for Node.js, used to interact with the database.

Frontend: HTML, CSS, and EJS (Embedded JavaScript Templates)

## Installation & Usage

#### Clone the repository:

git clone https://github.com/kevin256013/permalist.git

cd permalist

#### Install Dependencies

npm install

#### Set up the PostgreSQL database:

Create a database named permalist or modify the database connection string in index.js to match your environment.

Run the SQL queries from queries.sql to set up the necessary tables.

#### Create a .env file in the root directory with the following content:

PG_USER=your-postgres-username

PG_HOST=localhost

PG_DATABASE=permalist

PG_PASSWORD=your-postgres-password

PG_PORT=5432

#### Run the Application:

npm index.js

#### Visit the Application: 

The application will be available at http://localhost:3000.
