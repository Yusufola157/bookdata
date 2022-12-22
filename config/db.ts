import mongoose from "mongoose";
const URI =
  "mongodb+srv://Sukanmi157:Sukanmi157@cluster0.dorzl9v.mongodb.net/iBooks?retryWrites=true&w=majority";

mongoose.connect(URI);
mongoose.connection
  .on("open", () => {
    console.log("db is on");
  })
  .once("err", (error) => {
    console.log("an error occ");
  });
