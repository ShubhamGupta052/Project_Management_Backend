import mongoose, { Schema } from "mongoose";

const subTaskSchema = new Schema(
  {
    title: {
      type: String,
      requied: true,
      trim: true,
    },
    task: {
      type: Schema.Types.ObjectId,
      ref: "Task",
      requied: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    craetedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      requied: True,
    },
  },
  { timestamps: true },
);

export const Subtask = mongoose.model("Subtask", subTaskSchema);
