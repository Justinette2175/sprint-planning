import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import sprintRoutes from './routes/sprint.route';
import projectRoutes from './routes/project.route';
import taskRoutes from './routes/task.route';
import memberRoutes from './routes/member.route';
import dataUpdateService from './services/dataUpdate.service';

const app = express();

// Refresh data every 30 seconds
const REFRESH_DATA_INTERVAL = 30000;

app.use(express.static('dist'));

// Set up mongoose connection
const devDbUrl = 'mongodb://localhost:27017/sprint_planning';
const mongoDB = process.env.MONGODB_URI || devDbUrl;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

dataUpdateService.refreshAllData();

// Refresh data from Gitlab at an interval
setTimeout(() => dataUpdateService.refreshAllData(), REFRESH_DATA_INTERVAL);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/sprints', sprintRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/member', memberRoutes);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

