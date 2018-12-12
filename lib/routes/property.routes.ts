// /lib/routes/property.routes.ts
import {Request, Response} from "express";
import * as cors from 'cors';
import { PropertyController } from "../controllers/property.controller";

export class Routes {       

    public propertyController: PropertyController = new PropertyController();

    public routes(app): void {        
        
        app.use(cors());
        
        /* Properties */
        app.route('/api/v1/properties') 
        // GET endpoint 
        .get(this.propertyController.getProperty)     
        // POST endpoint
        .post(this.propertyController.addNewProperty);

        /* Single Property */
        app.route('/api/v1/properties/:propertyId')
        // get specific Property entry
        .get(this.propertyController.getPropertyWithID)
        // update specific Property           
        .put(this.propertyController.updateProperty)
        // delete specific Property  
        .delete(this.propertyController.deleteProperty)
    }
}