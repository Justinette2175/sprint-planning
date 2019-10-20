import Project from '../models/project.model';
import Task from '../models/task.model';


exports.getProjects = (req, res) => {
  const options = req.query;
  return Project.find(options, (err, projects) => res.send(projects));
};

exports.getProjectById = (req, res) => {
  const projectId = req.params.id;
  return Project.findById(projectId).then((project) => {
    res.send(project);
  });
};

exports.getTasksInProject = (req, res) => {
  const projectId = req.params.id;
  console.log("getting tasks in project", projectId);
  return Task.find({ projectId })
    .then((tasks) => {
      res.send(tasks);
    });
};
