import Member from '../models/member.model';

exports.getMembers = (req, res) => {
  Member.find({ }, (err, sprints) => res.send(sprints));
};

exports.getMemberById = (req, res) => {
  const memberId = req.params.id;
  Member.findById(memberId).then(res.send);
};

exports.createMember = (req, res) => {
  const newMember = new Member({
    name: req.body.name,
    avatar: req.body.avatar,
  });

  newMember.save();
};
