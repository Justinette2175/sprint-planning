import mongoose, { Schema } from 'mongoose';

const SprintSchema = new Schema({
  name: { type: String },
  startTime: { type: String },
  endTime: { type: String },
  milestoneId: { type: String },
});


// Export the model
module.exports = mongoose.model('Sprint', SprintSchema);
