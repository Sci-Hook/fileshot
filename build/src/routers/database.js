"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express = require("express");
//controller
var get_database_list_1 = require("../controller/get-database-list");
var get_database_collections_1 = require("../controller/get-database-collections");
var get_collection_datas_1 = require("../controller/get-collection-datas");
//controller
exports.router = express.Router();
exports.router.get('/list', get_database_list_1.controller);
exports.router.get('/collections/:database', get_database_collections_1.controller);
exports.router.get('/collections/:database/:collection', get_collection_datas_1.controller);
