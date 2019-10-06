import mongoose, { Schema } from 'mongoose';

const MemberSchema = new Schema({
  name: { type: String },
  avatar: { type: String },
});

// Export the model
module.exports = mongoose.model('Member', MemberSchema);
