import mongoose from 'mongoose';
import authorSchema from '../schema/author.js';

const AuthorModel = mongoose.model('Author', authorSchema);

export default AuthorModel;
