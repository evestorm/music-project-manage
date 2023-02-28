const getProject = {
  "message": "success",
  "data": {
      "project": [
          {
              "projectId": "pr1",
              "projectName": "项目1",
              "projectType": "业务制作项目",
              "priority": "非常紧急",
              "projectGrade": "S",
              "completionRate": 50,
              "productionDirector": "NICO",
              "contentOwner": "JUNJUN"
          },
          {
              "projectId": "pr2",
              "projectName": "项目2",
              "parentProjectName": "项目1",
              "projectType": "业务制作项目",
              "priority": "一般",
              "projectGrade": "A",
              "completionRate": 30,
              "productionDirector": "NICO",
              "contentOwner": "JUNJUN"
          }
      ],
      "stage": [
          {
              "projectId": "pr1",
              "stageId": "st1",
              "name": "阶段1",
              "relevantDep": "A",
              "chargePerson": "NICO",
              "completionRate": 50
          },
          {
              "projectId": "pr1",
              "stageId": "st2",
              "name": "阶段2",
              "relevantDep": "B",
              "chargePerson": "JUNJUN",
              "completionRate": 60
          },
          {
              "projectId": "pr1",
              "stageId": "st3",
              "name": "阶段3",
              "relevantDep": "A/B",
              "chargePerson": "LiangLiang",
              "completionRate": 40
          },
          {
              "projectId": "pr1",
              "stageId": "st4",
              "name": "阶段4",
              "relevantDep": "C",
              "chargePerson": "NICO",
              "completionRate": 80
          },
          {
              "projectId": "pr1",
              "stageId": "st5",
              "name": "阶段5",
              "relevantDep": "D",
              "chargePerson": "L",
              "completionRate": 30
          },
          {
              "projectId": "pr1",
              "stageId": "st6",
              "name": "阶段6",
              "relevantDep": "A/C/D",
              "chargePerson": "L",
              "completionRate": 50
          },
          {
              "projectId": "pr2",
              "stageId": "st7",
              "name": "阶段1",
              "relevantDep": "A",
              "chargePerson": "NICO",
              "completionRate": 30
          },
          {
              "projectId": "pr2",
              "stageId": "st8",
              "name": "阶段2",
              "relevantDep": "B",
              "chargePerson": "NICO",
              "completionRate": 40
          },
          {
              "projectId": "pr2",
              "stageId": "st9",
              "name": "阶段3",
              "relevantDep": "C",
              "chargePerson": "NICO",
              "completionRate": 30
          },
          {
              "projectId": "pr2",
              "stageId": "st10",
              "name": "阶段4",
              "relevantDep": "D",
              "chargePerson": "NICO",
              "completionRate": 50
          }
      ],
      "schedules": [
          {
              "projectId": "pr1",
              "stageId": "st1",
              "scheduleTime": "2023/02/25",
              "scheduleType": "task",
              "taskName": "执行任务",
              "executor": "NICO"
          },
          {
              "projectId": "pr1",
              "stageId": "st1",
              "scheduleTime": "2023/02/28",
              "scheduleType": "task",
              "taskName": "观察任务",
              "executor": "JUNJUN"
          },
          {
              "projectId": "pr1",
              "stageId": "st2",
              "scheduleTime": "2023/03/10",
              "scheduleType": "node",
              "nodeName": "关键节点1"
          },
          {
              "projectId": "pr1",
              "stageId": "st2",
              "scheduleTime": "2023/03/12",
              "scheduleType": "task",
              "taskName": "执行任务",
              "executor": "NICO"
          },
          {
              "projectId": "pr1",
              "stageId": "st2",
              "scheduleTime": "2023/03/13",
              "scheduleType": "task",
              "taskName": "观察任务",
              "executor": "JUNJUN"
          },
          {
              "projectId": "pr1",
              "stageId": "st3",
              "scheduleTime": "2023/03/20",
              "scheduleType": "note",
              "content": "备忘内容1"
          },
          {
              "projectId": "pr1",
              "stageId": "st3",
              "scheduleTime": "2023/04/1",
              "scheduleType": "node",
              "nodeName": "关键节点2"
          }
      ]
  }
}

module.exports = {
    getProject
}