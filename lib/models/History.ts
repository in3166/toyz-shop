import mongoose from 'mongoose'

const HistorySchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: [true, 'Please provide a orderId.'],
      unique: true,
    },
    price: {
      type: String,
      required: [true, 'Please provide a price.'],
    },
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
    paymentKey: {
      type: String,
    },
  },
  { timestamps: true }
)

export default mongoose.models.History || mongoose.model('History', HistorySchema)
