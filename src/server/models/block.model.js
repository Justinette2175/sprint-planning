import mongoose, { Schema } from 'mongoose';

const BlockSchema = new Schema({
  sprintId: { type: Schema.Types.ObjectId },
  weight: { type: Number },
  memberId: { type: Schema.Types.ObjectId },
  description: { type: String },
});

// Export the model
module.exports = mongoose.model('Block', BlockSchema);
