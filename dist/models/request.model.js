"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//   /lib/models/request.model.ts
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.ServiceRequestPayloadSchema = new Schema({
    category: {
        type: String,
    },
    description: {
        type: String,
    },
    request_for_date: {
        type: Date
    },
});
exports.ServiceRequestSchema = new Schema({
    property_id: {
        type: String
    },
    room_id: {
        type: String,
    },
    room_number: {
        type: String,
    },
    type: {
        type: String,
        required: 'Type of org: ServiceRequest'
    },
    status: {
        type: String,
    },
    priority: {
        type: String,
    },
    request_date: {
        type: Date
    },
    source: {
        type: String,
        lowercase: true // Always convert to lowercase
    },
    payload: [exports.ServiceRequestPayloadSchema]
});
//# sourceMappingURL=request.model.js.map