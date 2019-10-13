import mongoose, { Schema } from 'mongoose';

const ProjectSchema = new Schema({
  name: { type: String },
  gitlabId: { type: String },
});


// Export the model
module.exports = mongoose.model('Project', ProjectSchema);
