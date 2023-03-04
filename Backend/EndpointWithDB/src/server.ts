import express, { json } from "express";
import router from "./Router";
import authrouter from "./Router/authRoutes";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/../.env" });
dotenv.config();

const app = express();

//Register some Middlewares
app.use(cors());
app.use(json()); //adds a body to the Request

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/flights", router);
app.use("/auth", authrouter);

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});
