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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const user_1 = require("../database_models/user");
const lodash_1 = __importDefault(require("lodash"));
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = req.params.id;
        if (lodash_1.default.isEmpty(req.body)) {
            return res.status(404).json({ error: "There is nothing to update" });
        }
        const result = yield user_1.user.findById(_id);
        if (!result) {
            return res.status(404).json({ message: "User not found" });
        }
        if (result.isActive == false) {
            return res.status(404).json({ error: "User does not exist" });
        }
        else {
            const updatedUser = yield user_1.user.findByIdAndUpdate(_id, req.body);
            return res.status(200).json({ message: "User updated successfully" });
        }
    }
    catch (e) {
        const errMsg = e.message;
        return res.status(404).json({ error: errMsg });
    }
});
exports.updateUser = updateUser;
