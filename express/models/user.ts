/* eslint-disable no-console, func-names */
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export interface UserInterface {
  email: string;
  pw: string;
}

interface UserDocument extends mongoose.Document {
  email: UserInterface['email'];
  pw: UserInterface['pw'];
  validatePw: (inputPw: UserInterface['pw']) => boolean;
}

interface UserModel extends mongoose.Model<UserDocument> {
  addUser: (userInput: UserInterface) => Promise<UserDocument>;
  addSampleUser: () => Promise<UserDocument>;
  findByEmail: (
    email: UserInterface['email']
  ) => mongoose.DocumentQuery<UserDocument[], UserDocument>;
  checkSampleUser: () => Promise<boolean>;
}

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  pw: { type: String, required: true },
});

userSchema.statics.addUser = function (
  userInput: UserInterface
): Promise<UserDocument> {
  const newUser = new this(userInput);
  return newUser.save();
};

userSchema.statics.findByEmail = function (
  email: UserInterface['email']
): mongoose.DocumentQuery<UserDocument[], UserDocument> {
  return this.find({ email });
};

userSchema.methods.validatePw = function (
  inputPw: UserInterface['pw']
): boolean {
  return bcrypt.compareSync(inputPw, this.pw);
};

userSchema.pre<UserDocument>('save', function (next) {
  if (!this.isModified('pw')) {
    return next();
  }
  this.pw = bcrypt.hashSync(this.pw, 10);
  return next();
});

const User = mongoose.model<UserDocument, UserModel>('User', userSchema);

export default User;
