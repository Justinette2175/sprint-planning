import mongoose, { Schema } from 'mongoose';

const AssigneeSchema = new Schema({ memberId: { type: Schema.Types.ObjectId } }, { _id: false });

const TaskSchema = new Schema({
  name: { type: String },
  sprintId: { type: Schema.Types.ObjectId },
  gitlabId: { type: String },
  gitlabIid: { type: String },
  description: { type: String },
  assignedTo: { type: [AssigneeSchema] },
  gitlabProjectId: { type: String },
  weight: { type: Number },
  projectId: { type: Schema.Types.ObjectId },
});

// Export the model
module.exports = mongoose.model('Task', TaskSchema);
