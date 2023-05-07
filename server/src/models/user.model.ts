const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  otp: { type: Number },
  status: { type: String }
});

export const UserModel = mongoose.model('user', postSchema);
