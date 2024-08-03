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
    var collection = await database.collection(req.params.collection);
    var datas = await collection.find({}).toArray();
    res.json({
        status:true,
        message:'Databases listed',
        data:datas
    });}