//   /lib/controllers/request.controller.ts
import * as mongoose from 'mongoose';
import { ServiceRequestSchema } from '../models/request.model';
import { Request, Response } from 'express';

const ServiceRequest = mongoose.model('Request', ServiceRequestSchema);

export class RequestController{
    public getRequest (req: Request, res: Response) {           
        ServiceRequest.find({}, (err, servicerequest) => {
            if(err){
                res.send(err);
            }
            res.type('json');
            res.json({ results: servicerequest });
            //res.json(servicerequest);
        });
    }

    public getRequestWithID (req: Request, res: Response) {           
        ServiceRequest.findById(req.params.requestId, (err, servicerequest) => {
            if(err){
                res.send(err);
            }
            res.json({ results: servicerequest });
        });
    }

    public addNewRequest (req: Request, res: Response) {                
        let newServiceRequest = new ServiceRequest(req.body);
        newServiceRequest.save((err, servicerequest) => {
            if(err){
                res.send(err);
            }    
            res.json({ results: servicerequest });
        });
    }

    public updateRequest (req: Request, res: Response) {           
        ServiceRequest.findOneAndUpdate({ _id: req.params.requestId }, req.body, { new: true }, (err, servicerequest) => {
            if(err){
                res.send(err);
            }
            res.json({ results: servicerequest });
        });
    }

    public deleteRequest (req: Request, res: Response) {           
        ServiceRequest.findOneAndDelete({ _id: req.params.requestId }, (err) => {
            if(err){
                res.send(err);
            }
            res.json({ results: 'Successfully deleted service request:' + req.params.requestId });
        });

    }
}