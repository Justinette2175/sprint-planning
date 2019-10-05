import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import sprintRoutes from './routes/sprint.route';

const app = express();

app.use(express.static('dist'));

// Set up mongoose connection
const devDbUrl = 'mongodb://localhost:27017/sprint_planning';
const mongoDB = process.env.MONGODB_URI || devDbUrl;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/sprints', sprintRoutes);

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
