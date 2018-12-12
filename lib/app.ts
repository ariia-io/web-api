import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/property.routes";
import { OrgRoutes } from "./routes/org.routes"; 
import { RequestRoutes } from "./routes/request.routes"; 
import * as mongoose from "mongoose";

class App {

    public app: express.Application;
    public propertyRoute: Routes = new Routes();
    public orgRoute: OrgRoutes = new OrgRoutes();
    public requestRoute: RequestRoutes = new RequestRoutes();
  
    constructor() {
        this.app = express();
        this.config();       
        this.propertyRoute.routes(this.app);
        this.orgRoute.routes(this.app);
        this.requestRoute.routes(this.app);
        this.mongoSetup();
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void{
        const dbConfig = require('./config/database.config');
        mongoose.connect(dbConfig.mongoUrl,{ useNewUrlParser: true })
            .then(()=>{
                console.log("Successfully connected to mongo database");
            })
            .catch((err)=>{
                console.log("Error connecting to mongo database",err);
            });
    }

}

export default new App().app;