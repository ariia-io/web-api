"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// lib/server.ts
const app_1 = require("./app");
const http = require("http");
const fs = require("fs");
const cors = require("cors");
const PORT = 3000;
var tenantSlug;
const httpsOptions = {
    key: fs.readFileSync('./config/key.pem'),
    cert: fs.readFileSync('./config/cert.pem')
};
/* https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log('ariia node server listening on port ' + PORT);
}) */
http.createServer(app_1.default).listen(PORT, '0.0.0.0', () => {
    console.log('ariia node server listening on ' + PORT);
});
app_1.default.use(cors());
// define a deafult simple route
app_1.default.get('/', (req, res) => {
    res.json({ "message": "Welcome to Ariia Web API!" });
});
app_1.default.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});
//# sourceMappingURL=server.js.map