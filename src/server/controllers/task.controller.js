import Task from '../models/task.model';


//Simple version, without validation or sanitation
exports.getTasks = (req, res) => {
  const options = req.query;
  Task.find(options, (err, tasks) => res.send(tasks));
};

exports.getTaskById = (req, res) => {
  const taskId = req.params.id;
  Task.findById(taskId).then((task) => {
    res.send(task);
  });
};

// Create a new Sprint
exports.createTask = (req, res) => {
  const newTask = new Task({
    name: req.body.name,
  });

  newTask.save();
};

exports.updateTaskById = (req, res) => {
  const TaskId = req.params.id;
  const { options } = req.body;
  Task.findById(TaskId, (err, task) => {
    if (err) { return; }
    Object.keys(options).map((key) => {
      task[key] = options[key];
    });
    task.save((err2, value) => console.log(err, value));
  });
};
