const express = require('express');
const request = require('request');

const config = require('./config/config');

const port = 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/translate', (req, res) => {
    const apiURL = 'https://openapi.naver.com/v1/papago/n2mt';
    const params = {
        'source': 'ko',
        'target': 'en',
        'text': '안녕'
    };
    const headers = {
        'X-Naver-Client-Id': config.client_id,
        'X-Naver-Client-Secret': config.client_secret
    };
    const options = {
        url: apiURL,
        form: params,
        headers: headers,
    };

    request.post(options, (err, response, body) => {
        if(err || response.statusCode != 200) return res.status(response.statusCode).end();
        console.log(response.body);
        res.writeHead(200, {
            'Content-Type': 'text/json;charset=utf-8'
        });
        res.end(body);
    })
})

app.listen(port, () => {console.log(`Listening on port ${port}...`)})