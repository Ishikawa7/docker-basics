const express = require('express');
const redis = require('redis');
//const process = require('process'); for testing

const app = express();
const client = redis.createClient({
    host: 'redis-server', //connecting with the redis container
    port: 6379 //default port of redis
});
client.set('visits',0);

app.get('/', (req, res) =>{
    //process.exit(0); for testing
    client.get('visits', (err, visits) =>{
        res.send('Number of visits is '+visits);
        client.set('visits',parseInt(visits)+1);
    });
});

app.listen(8081, () => {
    console.log('listening on port 8081');
});