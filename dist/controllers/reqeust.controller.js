"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//   /lib/controllers/request.controller.ts
const mongoose = require("mongoose");
const request_model_1 = require("../models/request.model");
const ServiceRequest = mongoose.model('Request', request_model_1.ServiceRequestSchema);
class RequestController {
    getRequest(req, res) {
        ServiceRequest.find({}, (err, org) => {
            if (err) {
                res.send(err);
            }
            res.json(org);
        });
    }
    getRequestWithID(req, res) {
        ServiceRequest.findById(req.params.requestId, (err, org) => {
            if (err) {
                res.send(err);
            }
            res.json(org);
        });
    }
    addNewRequest(req, res) {
        let newServiceRequest = new ServiceRequest(req.body);
        newServiceRequest.save((err, org) => {
            if (err) {
                res.send(err);
            }
            res.json(org);
        });
    }
    updateRequest(req, res) {
        ServiceRequest.findOneAndUpdate({ _id: req.params.requestId }, req.body, { new: true }, (err, org) => {
            if (err) {
                res.send(err);
            }
            res.json(org);
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
//# sourceMappingURL=reqeust.controller.js.map