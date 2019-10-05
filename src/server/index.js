import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import sprintRoutes from './routes/sprint.route';

const app = express();

app.use(express.static('dist'));

// Set up mongoose connection
const devDbUrl = 'mongodb://localhost/sprint_planning';
const mongoDB = process.env.MONGODB_URI || devDbUrl;
mongoose.connect(mongoDB, {})
  .then((err) => {
    console.error.bind(console, 'MongoDB connection error:', err);
  });
mongoose.Promise = global.Promise;
const db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/sprints', sprintRoutes);

app.get('/sprints', (req, res) => {
  console.log('getting stuff')
  res.send({ username: "Good to go!" });
})

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
