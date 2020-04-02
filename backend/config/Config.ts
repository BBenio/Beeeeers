import {resolve} from "path";

require('dotenv').config({ path: resolve(__dirname, '../../.env') });

export const config_beers = {
    DB: process.env.MONGO_URL_BEER ? process.env.MONGO_URL_BEER : 'mongodb://localhost:23456/beers',
    APP_PORT: process.env.APP_PORT_BEER ? process.env.APP_PORT_BEER : 88,
    IP_ADDR: process.env.IP_ADDR ? process.env.IP_ADDR : 'localhost'
};
