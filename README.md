# Back — Node.js + Express + Sequelize

Backend API built with **Node.js**, **Express 5**, **Sequelize 6**, and **MySQL**.

## 🛠️ Technologies

- Node.js
- Express 5
- Sequelize 6
- MySQL
- MySQL2
- CORS
- Nodemon

## 📦 Installation

Clone the project:

```bash
git clone <repository-url>
cd back

Install dependencies:

npm install
⚙️ Configuration

Create a .env file at the root of the project:

PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_NAME=your_database
DB_USER=root
DB_PASSWORD=your_password

Make sure your MySQL server is running and that the database exists.

🚀 Running the Project

Start the development server:

npm start

The project uses Nodemon, so the server automatically restarts when files are modified.

The API will be available at:

http://localhost:3000
📁 Project Structure
back/
├── node_modules/
├── migrations/
├── models/
├── seeders/
├── index.js
├── package.json
├── package-lock.json
├── .env
└── README.md
🗄️ Sequelize

Sequelize is used as the ORM to communicate with MySQL.

Initialize Sequelize

If Sequelize has not been initialized yet:

npx sequelize-cli init

This creates the following directories:

config/
models/
migrations/
seeders/
Create a Model

Create a model and its migration:

npx sequelize-cli model:generate --name User --attributes name:string,email:string
Run Migrations

Apply all pending migrations:

npx sequelize-cli db:migrate
Undo the Last Migration
npx sequelize-cli db:migrate:undo
🌱 Seeders

Create a seeder:

npx sequelize-cli seed:generate --name demo-users

Run all seeders:

npx sequelize-cli db:seed:all

Undo all seeders:

npx sequelize-cli db:seed:undo:all
🔄 Development Workflow
Create / modify model
        ↓
Create migration
        ↓
Run migration
        ↓
Create controller / service
        ↓
Create API route
        ↓
Test API
📜 Available Scripts
Command	Description
npm install	Install project dependencies
npm start	Start the development server with Nodemon
npx sequelize-cli init	Initialize Sequelize
npx sequelize-cli db:migrate	Run database migrations
npx sequelize-cli db:migrate:undo	Undo the last migration
npx sequelize-cli db:seed:all	Run all seeders
npx sequelize-cli db:seed:undo:all	Undo all seeders
🔒 Environment Variables

📌 Notes
The project uses CommonJS ("type": "commonjs").
Sequelize 6 is used as the ORM.
MySQL is the current database.
mysql2 is used as the MySQL driver.
Nodemon is used for development.
Database schema changes should be managed with Sequelize migrations.
Environment variables are stored in .env.
Do not commit sensitive credentials to the repository.