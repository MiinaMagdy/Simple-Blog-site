# Simple Blog site
## Description
This is a simple blog site that allows users to create, read, update and delete blog posts. It is built using Node.js, Express.js, MongoDB and Mongoose. The site is deployed on Onrender and uses MongoDB Atlas for the database.
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [API Endpoints](#api-endpoints)

## Installation
To install the necessary dependencies, run the following command:
```
npm install
```
## Usage
To run the application, run the following command:
```
npm start
```

## API Endpoints
> Base URL: https://blog-app-726n.onrender.com
#### Users: `api/users/`
<!-- table -->
| Method | Endpoint  | Description         | body                  |
| ------ | --------- | ------------------- | --------------------- |
| GET    | `/`       | Get all users       |                       |
| POST   | `/signup` | register new user   | name, email, password |
| POST   | `/login`  | Update a user by id | email, password       |

#### Blogs: `api/blogs/`

<!-- table -->
| Method | Endpoint    | Description            | body                                                  |
| ------ | ----------- | ---------------------- | ----------------------------------------------------- |
| GET    | `/`         | Get all blogs          |                                                       |
| GET    | `/:id`      | Get blog by id         |                                                       |
| POST   | `/add`      | Add new blog           | title, description, image (image url), user (user id) |
| PUT    | `/update`   | Update a blog by id    | title, description, image (image url), user (user id) |
| DELETE | `/:id`      | Delete a blog by id    |                                                       |
| GET    | `/user/:id` | Get blogs of a user id |                                                       |
