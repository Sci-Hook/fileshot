"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log_message = void 0;
var colors = {
    success: "\u001b[32m",
    warn: "\u001b[33m",
    error: "\u001b[31m"
};
var sign = {
    success: "✓",
    warn: "!",
    error: "X"
};
function log_message(message, type) {
    console.log("".concat(colors[type], "[").concat(sign[type], "]\u001B[0m ").concat(message));
}
exports.log_message = log_message;
