"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config({ path: '../.env' });
exports.config = {
    DB: process.env.MONGO_URL ? process.env.MONGO_URL : 'mongodb://localhost:27017/todos',
    APP_PORT: process.env.APP_PORT ? process.env.APP_PORT : 80,
};
