//   /lib/models/org.model.ts
import * as mongoose from 'mongoose';
import { Int32 } from 'bson';

const Schema = mongoose.Schema;

export const AddressSchema = new Schema({
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

export const OrgSchema = new Schema({
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
    addresses: [AddressSchema]
});