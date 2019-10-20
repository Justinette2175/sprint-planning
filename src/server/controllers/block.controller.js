import Block from '../models/block.model';

exports.getBlocks = (req, res) => {
  const { sprintId, memberId } = req.query;
  Block.find({ sprintId, memberId }, (err, blocks) => {
    res.send(blocks || []);
  });
};

exports.deleteBlock = (req, res) => {
  const { id } = req.params;
  Block.deleteOne({ _id: id })
    .then(() => {
      res.send(200);
    });
};

exports.createBlock = (req, res) => {
  const { sprintId, weight, memberId, description } = req.body;
  const newBlock = new Block({
    sprintId,
    weight,
    memberId,
    description,
  });
  return newBlock.save()
    .then((data) => {
      res.send(data);
    });
};
