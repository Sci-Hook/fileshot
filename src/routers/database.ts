import * as express from 'express';

//controller
import { controller as get_database_list } from '../controller/get-database-list';
import { controller as get_database_collections } from '../controller/get-database-collections';
import { controller as get_collection_datas } from '../controller/get-collection-datas';
//controller

export const router = express.Router();

router.get('/list',get_database_list);
router.get('/collections/:database',get_database_collections);
router.get('/collections/:database/:collection',get_collection_datas);