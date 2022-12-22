import mongoose from "mongoose";
interface Books {
  author: string;
  coverImage: string;
  authorImage: string;
  title: string;
  summary: string;
  category: string;
  view: [];
}
interface iBooks extends Books, mongoose.Document {}

const BookSch = new mongoose.Schema(
  {
    author: String,
    coverImage: String,
    authorImage: String,
    title: String,
    summary: String,
    category: String,
    view: [],
  },
  { timestamps: true }
);
export default mongoose.model<iBooks>("modelbook", BookSch);
