const axios = require('axios');
const tunnel = require('tunnel');
const fs = require("fs");
require("dotenv").config();
const { INBOUND_PROXY,OUTBOUND_PROXY,VGS_PROXY_AUTH,SERVER_UPSTREAM_HOST,VENDOR_URL,NODE_EXTRA_CA_CERTS,PORT,ACCESS_CREDENTIALS, PAYLOAD,PATH } = process.env;

const proxyOptions = {
    servername: OUTBOUND_PROXY,
    host: OUTBOUND_PROXY,
    port: PORT,
    proxyAuth: ACCESS_CREDENTIALS
};

const agent = tunnel.httpsOverHttps({
    proxy: proxyOptions,
     ca: fs.readFileSync(NODE_EXTRA_CA_CERTS),
});


const instance = axios.create({
    baseURL: VENDOR_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    httpsAgent: agent,
});


async function run() {
    console.log('Sending POST request via proxy...');
    try {
        const response = await instance.post('/api/',PAYLOAD)
        console.log(response?.data)
    } catch (error) {
        console.error('Error caught during request:', error.message);
        throw error;
    }
}




run().then(() => {
    console.log('Post request via proxy succeeded.');
}).catch(() => {
    console.log('Post request via proxy failed.');
});