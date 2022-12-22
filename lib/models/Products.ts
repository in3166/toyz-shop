import mongoose from 'mongoose'

const ProductsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a title for this Products.'],
      maxlength: [60, 'Title cannot be more than 60 characters'],
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
    status: {
      type: Number,
      default: 1, // 1: 판매중, 2: 예약중, 3: 판매완료
    },
  },
  { timestamps: true }
)

export default mongoose.models.Products || mongoose.model('Products', ProductsSchema)
