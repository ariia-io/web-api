// /lib/routes/org.routes.ts
import {Request, Response} from "express";
import * as cors from 'cors';
import { OrgController } from "../controllers/org.controller";

export class OrgRoutes {       

    public orgController: OrgController = new OrgController();

    public routes(app): void {      
        
        app.use(cors());
        
        app.route('/orgs') 
        // GET endpoint 
        .get(this.orgController.getOrg)     
        // POST endpoint
        .post(this.orgController.addNewOrg);

        app.route('/orgs/:orgId')
        // get specific Property entry
        .get(this.orgController.getOrgWithID)
        // update specific Property           
        .put(this.orgController.updateOrg)
        // delete specific Property  
        .delete(this.orgController.deleteOrg)
    }
}
