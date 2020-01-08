import {resolve} from "path";

require('dotenv').config({ path: resolve(__dirname, '../.env') });

console.log(process.env.MONGO_URL_TODO);
export const config_todos = {
    DB: process.env.MONGO_URL_TODO ? process.env.MONGO_URL_TODO : 'mongodb://localhost:23456/todos',
    APP_PORT: process.env.APP_PORT_TODO ? process.env.APP_PORT_TODO : 80,
};

export const config_beers = {
    DB: process.env.MONGO_URL_BEER ? process.env.MONGO_URL_BEER : 'mongodb://localhost:23456/beers',
    APP_PORT: process.env.APP_PORT_BEER ? process.env.APP_PORT_BEER : 88,
};
