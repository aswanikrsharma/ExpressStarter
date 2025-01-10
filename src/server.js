import express from "express";
import { PORT } from "./config/serverConfig.js";
import connectDb from "./config/dbConfig.js";

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}));


app.listen(PORT, async () => {
  await connectDb();
  console.log(`Server is listening on port ${PORT}`);
});