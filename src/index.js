import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 6000, (req, res) => {});
    console.log(`Connected to MongoDB !! at port ${process.env.PORT}`);
  })
  .catch((err) => {
    console.log(err.message);
  });
