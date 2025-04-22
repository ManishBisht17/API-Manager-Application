import { Router } from "express";
import { FetchAllRequest } from "./controller/requestController.js";
import express from "express";
const app = express();
app.use(express.json());

import cors from "cors";
app.use(cors());

app.use("/api", FetchAllRequest);
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
