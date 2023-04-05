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
exports.postData = void 0;
const user_1 = require("../database_models/user");
const validator_1 = __importDefault(require("validator"));
const postData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = req.body;
        //console.log(req.body)
        if (!validator_1.default.isEmail(req.body.email)) {
            return res.status(422).json({ error: "Invalid Email" });
        }
        if (!result) {
            return res.status(404).json({ error: "Nothing found" });
        }
        else {
            const User = new user_1.user(result);
            const email = req.body.email;
            const response = yield user_1.user.findOne({ email: email });
            if (response) {
                return res.status(409).json({ error: "Someone is using this email id" });
            }
            yield User.save();
            return res.status(201).json({ message: "user is created" });
        }
    }
    catch (e) {
        const errMsg = e.message;
        return res.status(404).json({ error: errMsg });
    }
});
exports.postData = postData;
