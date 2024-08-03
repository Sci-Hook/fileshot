"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express = require("express");
//controller
var get_database_list_1 = require("../controller/get-database-list");
var get_database_collections_1 = require("../controller/get-database-collections");
//controller
exports.router = express.Router();
exports.router.get('/list', get_database_list_1.controller);
exports.router.get('/collections/:database', get_database_collections_1.controller);
