"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//   /lib/controllers/request.controller.ts
const mongoose = require("mongoose");
const request_model_1 = require("../models/request.model");
const ServiceRequest = mongoose.model('Request', request_model_1.ServiceRequestSchema);
class RequestController {
    getRequest(req, res) {
        ServiceRequest.find({}, (err, servicerequest) => {
            if (err) {
                res.send(err);
            }
            res.type('json');
            res.json({ results: servicerequest });
            //res.json(servicerequest);
        });
    }
    getRequestWithID(req, res) {
        ServiceRequest.findById(req.params.requestId, (err, servicerequest) => {
            if (err) {
                res.send(err);
            }
            res.json(servicerequest);
        });
    }
    addNewRequest(req, res) {
        let newServiceRequest = new ServiceRequest(req.body);
        newServiceRequest.save((err, servicerequest) => {
            if (err) {
                res.send(err);
            }
            res.json(servicerequest);
        });
    }
    updateRequest(req, res) {
        ServiceRequest.findOneAndUpdate({ _id: req.params.requestId }, req.body, { new: true }, (err, servicerequest) => {
            if (err) {
                res.send(err);
            }
            res.json(servicerequest);
        });
    }
    deleteRequest(req, res) {
        ServiceRequest.findOneAndDelete({ _id: req.params.requestId }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted service request!' });
        });
    }
}
exports.RequestController = RequestController;
//# sourceMappingURL=request.controller.js.map