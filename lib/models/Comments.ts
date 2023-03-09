import mongoose from 'mongoose';

const CommentssSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Products',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
    },
    parentComment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comments',
      default: null,
    },
    text: {
      type: String,
      required: [true, 'Please input text.'],
      maxlength: [250, 'Comment cannot be more than 250 characters'],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Comments || mongoose.model('Comments', CommentssSchema);
