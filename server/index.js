const express = require("express");

const app = express();
const router = express.Router();

app.use("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/api", router);

router.get("/project/getProject", async (req, res) => {
  res.json({
    message: "success",
    data: {
      project: [
        {
          projectId: "1",
          projectName: "项目1",
          projectType: "1",
          projectGrade: "A",
          priority: "A",
          completionRate: "100",
          productionDirector: "Lance",
          contentOwner: "GC",
        },
        {
          projectId: "2",
          projectName: "项目2",
          projectType: "1",
          projectGrade: "B",
          priority: "C",
          completionRate: "90",
          productionDirector: "Lance",
          contentOwner: "GC",
        },
      ],
      stage: [
        {
          stageId: "1",
          projectId: "1",
          relevantDep: "研发部",
          chargePerson: "Lance",
          completionRate: "100",
        },
        {
          stageId: "2",
          projectId: "2",
          relevantDep: "研发部",
          chargePerson: "Lance",
          completionRate: "70",
        },
        {
          stageId: "3",
          projectId: "2",
          relevantDep: "研发部",
          chargePerson: "Lance",
          completionRate: "20",
        },
      ],
      schedules: [
        {
          projectId: "1",
          stageId: "1",
          scheduleTime: "2023/02/26",
          scheduleType: "task",
          taskName: "working",
        },
        {
          projectId: "2",
          stageId: "2",
          scheduleTime: "2023/02/28",
          scheduleType: "node",
          nodeName: "some todo",
        },
        {
          projectId: "2",
          stageId: "3",
          scheduleTime: "2023/04/01",
          scheduleType: "node",
          nodeName: "some todo",
        },
      ],
    },
  });
});

app.listen("3033", () => {
  console.log("server is running 3033");
});
