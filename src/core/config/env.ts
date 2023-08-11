import dotenv = require('dotenv');
dotenv.config();

export const DATABASE_NAME = process.env.DATABASE_NAME;
export const PORT = process.env.PORT;
export const MODE = process.env.MODE;
