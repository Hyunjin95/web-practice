/* eslint-disable no-console, func-names */
import mongoose from 'mongoose';

export interface UserInterface extends mongoose.Document {
  email: string;
  name: string;
  pw: string;
}

interface UserModel extends mongoose.Model<UserInterface> {
  addUser: (userInput: UserInterface) => Promise<UserInterface>;
  addSampleUser: () => Promise<UserInterface>;
  findByEmail: (
    email: string
  ) => mongoose.DocumentQuery<UserInterface[], UserInterface>;
  checkSampleUser: () => Promise<boolean>;
}

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  pw: { type: String, required: true },
});

const sampleUserData = {
  name: 'Hyunjin Jeong',
  email: 'das01063@snu.ac.kr',
  pw: 'pw',
};

userSchema.statics.addUser = function (
  userInput: UserInterface
): Promise<UserModel> {
  const newUser = new this(userInput);
  return newUser.save();
};

userSchema.statics.addSampleUser = function (): Promise<UserModel> {
  return this.addUser(sampleUserData);
};

userSchema.statics.findByEmail = function (
  email: string
): mongoose.DocumentQuery<UserInterface[], UserInterface> {
  return this.find({ email });
};

userSchema.statics.checkSampleUser = async function (): Promise<boolean> {
  try {
    const { email } = sampleUserData;
    const user = await this.findByEmail(email);

    if (!user.length) {
      return false;
    }
    return true;
  } catch (err) {
    throw new Error('Database Error!');
  }
};

const User = mongoose.model<UserInterface, UserModel>('User', userSchema);

export default User;
