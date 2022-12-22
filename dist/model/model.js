"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BookSch = new mongoose_1.default.Schema({
    author: String,
    coverImage: String,
    authorImage: String,
    title: String,
    summary: String,
    category: String,
    view: [],
}, { timestamps: true });
exports.default = mongoose_1.default.model("modelbook", BookSch);
