import "dotenv/config";
import express from "express";
import errorHandeler from "./middlewares/errorHandler.js";
import playerRoutes from "./routes/players.routes.js";
const app = express();
const port = process.env.PORT;
//middelwers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", playerRoutes);
app.use(errorHandeler);
app.listen(port, () => {
  console.log(`server was running on port number ${port}`);
});
