"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controller/controller");
const multer_1 = __importDefault(require("../config/multer"));
const router = (0, express_1.Router)();
router.route("/post").post(multer_1.default, controller_1.post);
router.route("/getOne/:id").get(controller_1.getOne);
router.route("/getAll").get(controller_1.getAll);
router.route("/update/:id").patch(controller_1.updateViews);
router.route("/search").get(controller_1.Search);
exports.default = router;
