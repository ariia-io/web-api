"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//   /lib/controllers/org.controller.ts
const mongoose = require("mongoose");
const org_model_1 = require("../models/org.model");
const Org = mongoose.model('Org', org_model_1.OrgSchema);
class OrgController {
    getOrg(req, res) {
        Org.find({}, (err, org) => {
            if (err) {
                res.send(err);
            }
            res.json(org);
        });
    }
    getOrgWithID(req, res) {
        Org.findById(req.params.orgId, (err, org) => {
            if (err) {
                res.send(err);
            }
            res.json(org);
        });
    }
    addNewOrg(req, res) {
        let newOrg = new Org(req.body);
        newOrg.save((err, org) => {
            if (err) {
                res.send(err);
            }
            res.json(org);
        });
    }
    updateOrg(req, res) {
        Org.findOneAndUpdate({ _id: req.params.orgId }, req.body, { new: true }, (err, org) => {
            if (err) {
                res.send(err);
            }
            res.json(org);
        });
    }
    deleteOrg(req, res) {
        Org.findOneAndDelete({ _id: req.params.orgId }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted org!' });
        });
    }
}
exports.OrgController = OrgController;
//# sourceMappingURL=org.controller.js.map