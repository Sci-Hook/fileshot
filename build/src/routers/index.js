"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express = require("express");
var database_1 = require("./database");
exports.router = express.Router();
exports.router.use('/database', database_1.router);
