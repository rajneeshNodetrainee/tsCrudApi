"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersAll = void 0;
const user_1 = require("../database_models/user");
const usersAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield user_1.user.find();
        if (!response) {
            return res.status(404).json({ message: "There is currently no User" });
        }
        const result = yield user_1.user.find({ isActive: true });
        res.status(200).json({ result });
    }
    catch (e) {
        const errMsg = e.message;
        return res.status(404).json({ error: errMsg });
    }
});
exports.usersAll = usersAll;
