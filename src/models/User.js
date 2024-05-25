import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema(
  {
    fullname: {
      type: String,
      required: [true, 'Username is required'],
    },
    email: {
      type: String,
      unique: [true, 'Email already exists'],
      required: [true, 'Email is required'],
    },
    mobileNo: {
      type: String,
      required: [true, 'Mobile No. is required'],
    },
    dob: {
      type: String,
      required: [true, 'Date Of Birth is required'],
    },
    nin: {
      type: String,
      required: [true, 'NIN is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
  },
  {
    timestamps: true,
  }
)

const User = models.Users || model('Users', UserSchema)

export default User
