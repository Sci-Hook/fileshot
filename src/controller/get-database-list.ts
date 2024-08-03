import { Request, Response } from 'express';
import {MongoClient} from 'mongodb';
import { log_message } from '../utils/log-message';

export async function controller(req:Request,res:Response) {

    try {
        var client = new MongoClient(<string>global.env.DATABASE);
    } catch (error) {
        return log_message('Database connection failed' , 'error');    
    }

    const admin = client.db('admin');
    const result = await admin.command({ listDatabases: 1,nameOnly:true});

    var databases:string[] = [];
    result.databases.syncForEach(function (database,next) {
        if (database.name != 'admin') databases.push(database.name );
        next();
    } ,() => {
        res.json({
            status:true,
            message:'Databases finded',
            data:databases
        });
    });

}