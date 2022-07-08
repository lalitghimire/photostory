# Photostory

A fullstack application built with MERN stack (MongoDB, Express, React and NodeJS)

-   [Introduction](#introduction)
-   [Technologies Used](#technologies-used)
    -   [Client](#client)
    -   [Server](#server)
    -   [Database](#database)
-   [Folder Structure](#folder-structure)
-   [Configuration and Setup](#configuration-and-setup)

## Introduction

A fullstack application where any user can view photos and read the story behind it. A user can register and login to create a photostory of own. Only registerd users can create a story. A logged in user can only edit or delete own stories.

## Technologies used

Some of the technologies and tools used in the project are listed below:

### Client

-   React JS (Javascript framework for frontend)
-   Redux-toolkit (Handle state management in react)
-   React-router-dom (Used for routing)
-   Axios (To make http requests to backend )
-   Material UI (For styling )
-   React-toastify (For notifications)

### Server

-   Express (Web framework for Node.js)
-   Mongoose (To connect express to MongoDB)
-   JWT(For authentication and authorization)
-   bcrypt (For password encryption)
-   CORS (To enable cross origin support)

### Database

-   MongoDB Atlas (Cloud based MongoDB database(NOSQL) )

## Folder Structure

The main folder contains all the files for the project. The front-end codes resides in the client folder whereas all other files are backend codes.

```
photostory
├── client
│   ├──...
│   ├──...
│   └── ...
├── All other server files
├── ...
└── .gitignore

```

## Configuration and Setup

### Install

The project needs nodejs(created with v14.16) installed in the system to run locally. Clone this repository and install dependencies as follow

```
git clone git@github.com:lalitghimire/photostory.git
cd photostory
npm install (to install server side dependencies)
cd client
npm install (to install client side dependencies )

```

### Setup

After installation is complete, create a .env file in the root of the directory and provide following variables:

```
MONGO_URI= (from MongoDB atlas to connect to database. How to from here https://www.mongodb.com/docs/atlas/getting-started/ )
JWT_SECRET= (any secret string)

```

### Run

```
npm start (to start the server at port 5000)

```

In another terminal goto the client folder and,

```
npm start (to start the client at port 3000)

```
