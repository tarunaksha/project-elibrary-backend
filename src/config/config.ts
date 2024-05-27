import { config as dotenvConfig } from 'dotenv';
dotenvConfig(); // this will load the .env file and set the corresponding environment variables.    

const _config = {
    port: process.env.PORT,
    apiKeys: ''
}

export const config = Object.freeze(_config); // freeze is used to make the object immutable. This is a good practice to avoid accidental changes to the object.