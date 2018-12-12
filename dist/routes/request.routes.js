"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const request_controller_1 = require("../controllers/request.controller");
class RequestRoutes {
    constructor() {
        this.requestController = new request_controller_1.RequestController();
    }
    routes(app) {
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
            .delete(this.requestController.deleteRequest);
    }
}
exports.RequestRoutes = RequestRoutes;
//# sourceMappingURL=request.routes.js.map