import * as express from 'express';
import {router as database} from './database';

export const router = express.Router();

router.use('/database', database);