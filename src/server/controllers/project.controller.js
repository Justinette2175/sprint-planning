import Project from '../models/project.model';


exports.getProjects = (req, res) => {
  const options = req.query;
  Project.find(options, (err, projects) => res.send(projects));
};

exports.getProjectById = (req, res) => {
  const projectId = req.params.id;
  Project.findById(projectId).then((project) => {
    res.send(project);
  });
};
