import mongoose, { Schema } from 'mongoose';

const SprintSchema = new Schema({
  name: { type: String },
});


// Export the model
module.exports = mongoose.model('Sprint', SprintSchema);
