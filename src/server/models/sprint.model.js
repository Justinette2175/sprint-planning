import mongoose, { Schema } from 'mongoose';

const SprintSchema = new Schema({
  name: { type: String },
  startDate: { type: String },
  endDate: { type: String },
  milestoneId: { type: String },
  projects: { type: Array },
});


// Export the model
module.exports = mongoose.model('Sprint', SprintSchema);
