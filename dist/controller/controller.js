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
exports.Search = exports.updateViews = exports.getOne = exports.getAll = exports.post = void 0;
const model_1 = __importDefault(require("../model/model"));
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
// import { request } from "http";
const post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const image = cloudinary_1.default.uploader.upload(req === null || req === void 0 ? void 0 : req.file.path);
        const { author, title, summary, category } = req.body;
        const postBook = yield model_1.default.create({
            author,
            coverImage: image,
            authorImage: author.charAt(0).toUpperCase(),
            title,
            summary,
            category,
            view: [],
        });
        return res.status(201).json({
            message: "posted",
            data: postBook,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "posted",
        });
    }
});
exports.post = post;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getBooks = yield model_1.default.find();
        return res.status(201).json({
            message: "here are the books",
            data: getBooks,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "error",
            data: error,
        });
    }
});
exports.getAll = getAll;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getBooks = yield model_1.default.findById(req.params.id);
        return res.status(201).json({
            message: "here are the books",
            data: getBooks,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "error",
            data: error,
        });
    }
});
exports.getOne = getOne;
const updateViews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const views = yield model_1.default.findByIdAndUpdate(req.params.id, {
            $push: { view: req.body.ip },
        }, { new: true });
        return res.status(201).json({
            data: views,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "error hppn",
        });
    }
});
exports.updateViews = updateViews;
const Search = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryData = req.query;
        const makeSearch = yield model_1.default.find(queryData);
        return res.status(201).json({
            message: "here is the data",
            data: makeSearch,
        });
    }
    catch (error) {
        return res.status(201).json({
            message: "cant find data",
            data: error,
        });
    }
});
exports.Search = Search;
