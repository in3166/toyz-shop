import mongoose from 'mongoose'

const ProductsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name for this Products.'],
      maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: [true, "Please provide the Products owner's id"],
      maxlength: [60, "Owner's id cannot be more than 20 characters"],
    },
    price: {
      type: Number,
      required: [true, 'Please provied the Products price.'],
    },
    description: {
      type: String,
      required: [true, 'Please provied the Products description.'],
      maxlength: [1000, 'Description cannot be more than 1000 characters'],
    },
    image: {
      required: [true, 'Please provide an image url for this Products.'],
      type: String,
    },
  },
  { timestamps: true }
)

export default mongoose.models.Products || mongoose.model('Products', ProductsSchema)
