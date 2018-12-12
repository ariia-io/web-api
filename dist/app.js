"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const property_routes_1 = require("./routes/property.routes");
const org_routes_1 = require("./routes/org.routes");
const request_routes_1 = require("./routes/request.routes");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.propertyRoute = new property_routes_1.Routes();
        this.orgRoute = new org_routes_1.OrgRoutes();
        this.requestRoute = new request_routes_1.RequestRoutes();
        this.app = express();
        this.config();
        this.propertyRoute.routes(this.app);
        this.orgRoute.routes(this.app);
        this.requestRoute.routes(this.app);
        this.mongoSetup();
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        const dbConfig = require('./config/database.config');
        mongoose.connect(dbConfig.mongoUrl, { useNewUrlParser: true })
            .then(() => {
            console.log("Successfully connected to mongo database");
        })
            .catch((err) => {
            console.log("Error connecting to mongo database", err);
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map