import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/dataBase.js";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app is lishening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB not connected", err);
  });
