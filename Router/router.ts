import { Router } from "express";
import {
  post,
  getOne,
  getAll,
  updateViews,
  Search,
} from "../controller/controller";
import viewImage from "../config/multer";
const router = Router();

router.route("/post").post(viewImage, post);
router.route("/getOne/:id").get(getOne);
router.route("/getAll").get(getAll);
router.route("/update/:id").patch(updateViews);
router.route("/search").get(Search);
export default router;
