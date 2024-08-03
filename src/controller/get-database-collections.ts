import { Request, Response } from 'express';
import {MongoClient} from 'mongodb';
import { log_message } from '../utils/log-message';
import 'syncforeachloop';

export async function controller(req:Request,res:Response) {
    try {
        var client = new MongoClient(<string>global.env.DATABASE);
    } catch (error) {
        return log_message('Database connection failed' , 'error');    
    }

    const database = client.db(req.params.database);
    var result = await database.listCollections().toArray();
    var collections:string[] = [];

    result.syncForEach(function (collection,next) {
        collections.push(collection.name);
        next();
    } ,() => {
        res.json({
            status:true,
            message:'Database collections listed',
            data:{
                database:req.params.database,
                collections
            }

        });
    });

}