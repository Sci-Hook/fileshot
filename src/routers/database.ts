import * as express from 'express';
import {MongoClient} from 'mongodb';

export const router = express.Router();

router.get('/list', async (req,res,next) => {
    const client = new MongoClient(<string>global.env.DATABASE);
    const admin = client.db('admin');
    const result = await admin.command({ listDatabases: 1,nameOnly:true});
    var databases:string[] = [];
    result.databases.syncForEach(function (database,next) {
        databases.push(database.name);
        next();
    } ,() => {
        res.json(databases);
    })
})