import mongoose, { Schema } from 'mongoose';

const SprintSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  price: { type: Number, required: true },
});


// Export the model
module.exports = mongoose.model('Sprint', SprintSchema);
