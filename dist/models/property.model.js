"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//   /lib/models/property.model.ts
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.PropertySchema = new Schema({
    name: {
        type: String,
        required: 'Enter the property name'
    },
    star: {
        type: String
    },
    capacity: {
        type: String
    },
    org_id: {
        type: String
    },
});
//# sourceMappingURL=property.model.js.map