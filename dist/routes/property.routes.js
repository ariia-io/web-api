"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const property_controller_1 = require("../controllers/property.controller");
class Routes {
    constructor() {
        this.propertyController = new property_controller_1.PropertyController();
    }
    routes(app) {
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
            .delete(this.propertyController.deleteProperty);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=property.routes.js.map