"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//   /lib/controllers/property.controller.ts
const mongoose = require("mongoose");
const property_model_1 = require("../models/property.model");
const Property = mongoose.model('Property', property_model_1.PropertySchema);
class PropertyController {
    getProperty(req, res) {
        Property.find({}, (err, property) => {
            if (err) {
                res.send(err);
            }
            res.json(property);
        });
    }
    getPropertyWithID(req, res) {
        Property.findById(req.params.propertyId, (err, property) => {
            if (err) {
                res.send(err);
            }
            res.json(property);
        });
    }
    addNewProperty(req, res) {
        let newProperty = new Property(req.body);
        newProperty.save((err, property) => {
            if (err) {
                res.send(err);
            }
            res.json(property);
        });
    }
    updateProperty(req, res) {
        Property.findOneAndUpdate({ _id: req.params.propertyId }, req.body, { new: true }, (err, property) => {
            if (err) {
                res.send(err);
            }
            res.json(property);
        });
    }
    deleteProperty(req, res) {
        Property.findOneAndDelete({ _id: req.params.propertyId }, (err) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted property!' });
        });
    }
}
exports.PropertyController = PropertyController;
//# sourceMappingURL=property.controller.js.map