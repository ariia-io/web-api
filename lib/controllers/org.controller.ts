//   /lib/controllers/org.controller.ts
import * as mongoose from 'mongoose';
import { OrgSchema } from '../models/org.model';
import { Request, Response } from 'express';

const Org = mongoose.model('Org', OrgSchema);

export class OrgController{
    public getOrg (req: Request, res: Response) {           
        Org.find({}, (err, org) => {
            if(err){
                res.send(err);
            }
            res.json(org);
        });
    }

    public getOrgWithID (req: Request, res: Response) {           
        Org.findById(req.params.orgId, (err, org) => {
            if(err){
                res.send(err);
            }
            res.json(org);
        });
    }

    public addNewOrg (req: Request, res: Response) {                
        let newOrg = new Org(req.body);
        newOrg.save((err, org) => {
            if(err){
                res.send(err);
            }    
            res.json(org);
        });
    }

    public updateOrg (req: Request, res: Response) {           
        Org.findOneAndUpdate({ _id: req.params.orgId }, req.body, { new: true }, (err, org) => {
            if(err){
                res.send(err);
            }
            res.json(org);
        });
    }

    public deleteOrg (req: Request, res: Response) {           
        Org.findOneAndDelete({ _id: req.params.orgId }, (err) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted org!'});
        });

    }
}