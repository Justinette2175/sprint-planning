import Sprint from '../models/sprint.model';

//Simple version, without validation or sanitation
exports.getSprints = (req, res) => {
  Sprint.find({ }, (err, sprints) => {
    res.send(sprints);
  });
};


exports.getSprintById = (req, res) => {
  const sprintId = req.params.id;
  Sprint.findById(sprintId).then((sprint) => {
    res.send(sprint);
  });
};

// Create a new Sprint
exports.createSprint = (req, res) => {
  const newSprint = new Sprint({
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  });
  newSprint.save()
    .then((result) => {
      res.status(200).send(result);
    }, (err) => {
      console.log('error||sprint.controller||createSprint', err);
    });
};

exports.updateSprintById = (req, res) => {
  const sprintId = req.params.id;
  const { options } = req.body;
  Sprint.findById(sprintId, (err, sprint) => {
    if (err) { return; }
    Object.keys(options).map((key) => {
      sprint[key] = options[key];
    });
    sprint.save((err, value) => console.log(err, value));
  });
};
