/* eslint-disable no-console, func-names */
import mongoose from 'mongoose';

interface UserDocument extends mongoose.Document {
  email: string;
  name: string;
  pw: string;
}

interface UserModel extends mongoose.Model<UserDocument> {
  createSampleUser: () => Promise<UserModel>;
  findByEmail: (
    email: string
  ) => mongoose.DocumentQuery<UserDocument[], UserDocument>;
  sampleUserExists: () => Promise<boolean>;
}

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  pw: { type: String, required: true },
});

const sampleUserData = {
  name: 'Hyunjin Jeong',
  email: 'das01063@snu.ac.kr',
  pw: 'pw',
};

userSchema.statics.createSampleUser = function (): Promise<UserModel> {
  const sampleUser = new this(sampleUserData);
  return sampleUser.save();
};

userSchema.statics.findByEmail = function (
  email: string
): mongoose.DocumentQuery<UserDocument[], UserDocument> {
  return this.find({ email });
};

userSchema.statics.sampleUserExists = async function (): Promise<boolean> {
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

const User = mongoose.model<UserDocument, UserModel>('User', userSchema);

export default User;
