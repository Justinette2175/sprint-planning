import Sprint from '../models/sprint.model';

const saveSprint = (sprint) => {
  return new Promise((resolve) => {
    sprint.save((e, value) => resolve(value));
  });
};

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
    projects: [],
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
    return saveSprint(sprint);
  });
};

const ACTION_TYPES = {
  ADD: 'ADD',
  DELETE: 'DELETE'
};

const modifySprintProjects = async (sprint, type, projectId) => {
  const sprintProjects = [].concat(sprint.projects);
  const indexOfProjectInSprintProjects = sprintProjects.indexOf(projectId);
  if (type === ACTION_TYPES.DELETE && indexOfProjectInSprintProjects > -1) {
    sprintProjects.splice(indexOfProjectInSprintProjects, 1);
    sprint.projects = sprintProjects;
    return saveSprint(sprint);
  }
  if (type === ACTION_TYPES.ADD && indexOfProjectInSprintProjects < 0) {
    sprint.projects.push(projectId);
    return saveSprint(sprint);
  }
};

exports.addProjectToSprint = (req, res) => {
  const { projectId, id } = req.params;
  return Sprint.findById(id, (err, sprint) => {
    if (err) { return; }
    modifySprintProjects(sprint, ACTION_TYPES.ADD, projectId)
      .then((result) => {
        res.status(200).send(result);
      });
  });
};

exports.deleteProjectFromSprint = (req, res) => {
  const { projectId, id } = req.params;
  return Sprint.findById(id, (err, sprint) => {
    if (err) { return; }
    modifySprintProjects(sprint, ACTION_TYPES.DELETE, projectId)
      .then((result) => {
        res.status(200).send(result);
      });
  });
};
