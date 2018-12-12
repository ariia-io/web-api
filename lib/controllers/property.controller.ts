//   /lib/controllers/property.controller.ts
import * as mongoose from 'mongoose';
import { PropertySchema } from '../models/property.model';
import { Request, Response } from 'express';

const Property = mongoose.model('Property', PropertySchema);

export class PropertyController{
    public getProperty (req: Request, res: Response) {           
        Property.find({}, (err, property) => {
            if(err){
                res.send(err);
            }
            res.json(property);
        });
    }

    public getPropertyWithID (req: Request, res: Response) {           
        Property.findById(req.params.propertyId, (err, property) => {
            if(err){
                res.send(err);
            }
            res.json(property);
        });
    }

    public addNewProperty (req: Request, res: Response) {                
        let newProperty = new Property(req.body);
        newProperty.save((err, property) => {
            if(err){
                res.send(err);
            }    
            res.json(property);
        });
    }

    public updateProperty (req: Request, res: Response) {           
        Property.findOneAndUpdate({ _id: req.params.propertyId }, req.body, { new: true }, (err, property) => {
            if(err){
                res.send(err);
            }
            res.json(property);
        });
    }

    public deleteProperty (req: Request, res: Response) {           
        Property.findOneAndDelete({ _id: req.params.propertyId }, (err) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted property!'});
        });

    }
}