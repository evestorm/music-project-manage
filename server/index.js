const express = require("express");
const { getProject } = require('./mock/project');

const app = express();
const router = express.Router();

app.use(express.static('wwwroot'));

app.use("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/api", router);

router.get("/project/getProject", async (req, res) => {
  res.json(getProject);
});

app.listen("3033", () => {
  console.log("server is running 3033");
});
