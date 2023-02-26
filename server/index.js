const express = require('express');

const app = express();
const router = express.Router();

app.use('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use('/api', router);

router.get('/project/getProject',  async (req, res) => {
  res.json({
    message: 'success',
    data: {
      project: [
        {
          projectId: 1,
          projectType: 1,
          projectGrade: 'A',
          priority: 'A',
          completionRate: '100%',
          productionDirector: 'Lance',
          contentOwner: 'GC'
        }
      ],
      stage: [
        {
          stageId: 1,
          projectId: 1,
          relevantDep: '研发部',
          chargePerson: 'Lance',
          completionRate: '100%'
        }
      ],
      schedules: [
        {
          projectId: 1,
          stageId: 1,
          scheduleTime: '2023-02-16'
        }
      ]
    }
  })
});

app.listen('3033', () => {
  console.log('server is running 3033');
});