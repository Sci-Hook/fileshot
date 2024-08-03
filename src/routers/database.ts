import * as express from 'express';

//controller
import { controller as get_database_list } from '../controller/get-database-list';
//controller

export const router = express.Router();

router.get('/list',get_database_list);