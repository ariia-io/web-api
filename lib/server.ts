// lib/server.ts
import app from "./app";
import * as https from 'https';
import * as http from 'http';
import * as fs from 'fs';
import * as cors from 'cors';

const PORT = 3000;
var tenantSlug;

const httpsOptions = {
    key: fs.readFileSync('./config/key.pem'),
    cert: fs.readFileSync('./config/cert.pem')
}

/* https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log('ariia node server listening on port ' + PORT);
}) */

http.createServer(app).listen(PORT, '0.0.0.0', () => {
    console.log('ariia node server listening on ' + PORT);
})


app.use(cors());

// define a deafult simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Ariia Web API!"});
});

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});



