"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express = require("express");
//controller
var get_database_list_1 = require("../controller/get-database-list");
//controller
exports.router = express.Router();
exports.router.get('/list', get_database_list_1.controller);
