//   /lib/models/property.model.ts
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PropertySchema = new Schema({
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