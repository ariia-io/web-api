//   /lib/models/request.model.ts
import * as mongoose from 'mongoose';
import { Int32 } from 'bson';

const Schema = mongoose.Schema;

export const ServiceRequestPayloadSchema = new Schema({
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

export const ServiceRequestSchema = new Schema({
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
    payload: [ServiceRequestPayloadSchema]
});