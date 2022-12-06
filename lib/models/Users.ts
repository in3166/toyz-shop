import mongoose from 'mongoose'

const UsersSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: 1,
      required: [true, "Please enter the User's id"],
      maxlength: [60, "Owner's Id cannot be more than 60 characters"],
    },
    name: {
      type: String,
      required: [true, "Please enter a User's name."],
      maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    password: {
      type: String,
      required: [true, "Please enter the User's password."],
    },
    email: {
      type: String,
      required: [true, "Please enter the User's email."],
      maxlength: [1000, 'Email cannot be more than 1000 characters'],
      unique: 1,
    },
    phone: {
      required: [true, "Please enter the User's Phone Number."],
      type: String,
    },
    likes: [
      {
        products: { type: mongoose.Schema.Types.ObjectId, ref: 'Products' },
      },
    ],
    role: {
      type: Number,
      required: [true, 'Role is requied.'],
      default: 1,
    },
  },
  { timestamps: true }
)

export default mongoose.models.Users || mongoose.model('Users', UsersSchema)
