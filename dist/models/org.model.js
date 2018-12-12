"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//   /lib/models/org.model.ts
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.AddressSchema = new Schema({
    street1: {
        type: String,
    },
    street2: {
        type: String,
    },
    city: {
        type: String,
    },
    county: {
        type: String,
    },
    postcode: {
        type: String,
    }
});
exports.OrgSchema = new Schema({
    type: {
        type: String,
        required: 'Type of org: HotelGroup, CareHomeGroup, DevelopmentGroup'
    },
    name: {
        type: String,
        required: 'Enter the property name'
    },
    tenant_id: {
        type: Number,
        required: 'Enter the property name'
    },
    tenant_slug: {
        type: String,
        lowercase: true // Always convert to lowercase
    },
    addresses: [exports.AddressSchema]
});
//# sourceMappingURL=org.model.js.map