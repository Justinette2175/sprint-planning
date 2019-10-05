import Sprint from '../models/sprint.model';

//Simple version, without validation or sanitation
exports.getSprints = (req, res) => {

};

exports.getSprint = (req, res) => {

};


// Create a new Sprint
exports.createSprint = (req, res) => {
  console.log('creating sprint');
  const newSprint = new Sprint(
    {
      name: req.body.name,
    }
  );

  newSprint.save()
    .then((savedSprint) => {
      // TODO handle confirm saving action
    });
};
