// /lib/routes/request.routes.ts
import {Request, Response} from "express";
import * as cors from 'cors';
import { RequestController } from "../controllers/request.controller";

export class RequestRoutes {       

    public requestController: RequestController = new RequestController();

    public routes(app): void {      
        
        app.use(cors());
        
        app.route('/api/v1/requests') 
        // GET endpoint 
        .get(this.requestController.getRequest)     
        // POST endpoint
        .post(this.requestController.addNewRequest);

        app.route('/api/v1/requests/:requestId')
        // get specific Property entry
        .get(this.requestController.getRequestWithID)
        // update specific Property           
        .put(this.requestController.updateRequest)
        // delete specific Property  
        .delete(this.requestController.deleteRequest)
    }
}
