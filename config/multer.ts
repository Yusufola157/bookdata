import multer from "multer";
import { Request } from "express";
type destinationCallBack = (error: Error | null, destination: string) => void;
type filenameCallBack = (error: Error | null, destination: string) => void;

const storage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: destinationCallBack
  ) => {
    cb(null, "uploads");
  },
  filename: (req: Request, file: Express.Multer.File, cb: filenameCallBack) => {
    cb(null, file.originalname);
  },
});
const viewImage = multer({
  storage: storage,
}).single("coverImage");
export default viewImage;
