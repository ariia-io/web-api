"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const org_controller_1 = require("../controllers/org.controller");
class OrgRoutes {
    constructor() {
        this.orgController = new org_controller_1.OrgController();
    }
    routes(app) {
        app.use(cors());
        app.route('/api/v1/orgs')
            // GET endpoint 
            .get(this.orgController.getOrg)
            // POST endpoint
            .post(this.orgController.addNewOrg);
        app.route('/api/v1/orgs/:orgId')
            // get specific Property entry
            .get(this.orgController.getOrgWithID)
            // update specific Property           
            .put(this.orgController.updateOrg)
            // delete specific Property  
            .delete(this.orgController.deleteOrg);
    }
}
exports.OrgRoutes = OrgRoutes;
//# sourceMappingURL=org.routes.js.map