const axios = require("axios");

require('dotenv').config()

const __OAUTH_ENDPOINT = "https://hackday-22-prod.auth.eu-west-1.amazoncognito.com"
const __API_REST_PRIVATE = "https://mqjl9s6vf4.execute-api.eu-west-1.amazonaws.com/prod/v1/hackday/private/event";
const authorization = (Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`)).toString("base64");

(async () => {
    
    const authConfig = {
        url: `${__OAUTH_ENDPOINT}/oauth2/token?grant_type=client_credentials`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization' : `Basic ${authorization}`,
            'Accept': 'application/json'
        }
    }

    const {access_token, expires_in, token_type } = (await axios(authConfig)).data;

    const getConfig = {
        method: 'GET',
        url: __API_REST_PRIVATE,
        headers: {
            'Authorization': `${token_type} ${access_token}`,
            'Accept': 'application/json'
        }
    }
    
    console.log((await axios(getConfig)).data);
})()