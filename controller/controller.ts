import model from "../model/model";
import { Response, Request } from "express";
import cloudinary from "../config/cloudinary";
import { request } from "http";

const post = async (req: Request, res: Response): Promise<Response> => {
  try {
    const image = cloudinary.uploader.upload(req?.params!.id);
    const { author, coverImage, title, summary, category } = req.body;

    const postBook = await model.create({
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
  } catch (error) {
    return res.status(400).json({
      message: "posted",
    });
  }
};
const getAll = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getBooks = await model.find();
    return res.status(201).json({
      message: "here are the books",
      data: getBooks,
    });
  } catch (error) {
    return res.status(400).json({
      message: "error",
      data: error,
    });
  }
};
const getOne = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getBooks = await model.findById(req.params.id);
    return res.status(201).json({
      message: "here are the books",
      data: getBooks,
    });
  } catch (error) {
    return res.status(400).json({
      message: "error",
      data: error,
    });
  }
};
const updateViews = async (req: Request, res: Response): Promise<Response> => {
  try {
    const views = await model.findByIdAndUpdate(
      req.params.id,
      {
        $push: { view: req.body.ip },
      },
      { new: true }
    );
    return res.status(201).json({
      data: views,
    });
  } catch (error) {
    return res.status(400).json({
      message: "error hppn",
    });
  }
};
const Search = async (req: Request, res: Response): Promise<Response> => {
  try {
    const queryData = req.query;
    const makeSearch = await model.find(queryData);
    return res.status(201).json({
      message: "here is the data",
      data: makeSearch,
    });
  } catch (error) {
    return res.status(201).json({
      message: "cant find data",
      data: error,
    });
  }
};
export { post, getAll, getOne, updateViews, Search };
