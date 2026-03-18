import mongoose, { Schema } from "mongoose";
import { AvalibleProjectRoles, TaskStatusEnum } from "../utils/constants.js";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      requied: true,
      trim: true,
    },
    description: String,

    project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    assignedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: AvalibleTaskStatues,
      default: TaskStatusEnum.TODO,
    },
    attachments: {
      type: [
        {
          url: String,
          mimetype: String,
          size: Number,
        },
      ],
      default: [],
    },
  },
  { timestamps: true },
);

export const Task = mongoose.model("Task", taskSchema);
