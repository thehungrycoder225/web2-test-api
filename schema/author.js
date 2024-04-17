import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  username: String,
  password: String,
});

authorSchema.pre('save', function (next) {
  const username = this.name.toLowerCase().replace(/\s/g, '');
  const password = `${this.name}${this.age}`;
  this.username = username;
  this.password = password;
  next();
});

export default authorSchema;
