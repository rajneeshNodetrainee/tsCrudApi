"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("./database_connection/mongodb");
const routes_1 = require("./routes/routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.router);
mongodb_1.connect;
app.listen(3000, () => {
    console.log("Started listening on port 3000");
});
