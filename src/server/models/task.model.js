import mongoose, { Schema } from 'mongoose';

const AssigneeSchema = new Schema({ memberId: { type: Schema.Types.ObjectId } });

const TaskSchema = new Schema({
  name: { type: String },
  sprintId: { type: Schema.Types.ObjectId },
  gitlabId: { type: String },
  description: { type: String },
  assignedTo: { type: [AssigneeSchema] },
  projectId: { type: String },
  weight: { type: Number },
});

// Export the model
module.exports = mongoose.model('Task', TaskSchema);
