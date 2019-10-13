import mongoose, { Schema } from 'mongoose';

const ProjectSchema = new Schema({
  name: { type: String },
  gitlabProjectId: { type: String },
});


// Export the model
module.exports = mongoose.model('Sprint', ProjectSchema);
