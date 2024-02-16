# Introduction 
This is a simple POC to understand the Node.js ecosystem with Javascript as the main language, Sequelize as ORM framework, and Angular as the Web app.

# Getting Started
To start building/running the system, it will be necessary to have installed: Docker, to run PostgreSQL, MongoDB, the server, and the client app; Node.js with NVM; as well as the best code editor of your choice. This project uses VS Code.

To start your own project just follow:

Server
1. Start the backend app:                               `npm init`
2. Install the Express dependencies:                    `npm install express`
3. Install the MongoDb dependencies:                    `npm install mongodb mongoose`
4. Install the Sequelize with postgreSQL dependencies:  `npm install pg pg-hstore sequelize sequelize-cli`
5. Init Sequelize configuration:                        `npx sequelize-cli init`
6. Create Sequelize Model (Optional):                   `npx sequelize-cli model:generate`

Client
1. Install Angular-CLI:                                 `npm install -f @angular/cli`
2. Create the frontend web app:                         `ng new library`
3. Install dependencies:                                `npm install`

# Build and Test
In the root folder run: `docker compose up -d --build`