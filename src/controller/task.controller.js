import { User } from "../models/user.models.js";
import { Project } from "../models/project.models.js";
import { Task } from "../models/task.models.js";
import { Subtask } from "../models/subtask.models.js";
import { ApiResponse } from "../utils/Api-Response.js";
import { ApiError } from "../utils/Api-Error.js";
import { asyncHandler } from "../utils/async-handler.js";
import mongoose from "mongoose";
import { AvalibleProjectRoles, UserRolesEnum } from "../utils/constants.js";

const getTasks = asyncHandler(async (req, res) => {
  const {projectId}=req.params,
  const project = await Project.findById(projectId);
  if(!projectId){
    throw new ApiError(404,"Project not found");
  }

  const tasks = await Task.find({
    project:new mongoose.Types.ObjectId(projectId)
  }).populate("assignedTo","avatar username fullName")

  return res.status(201).json(201,tasks,"Task created successfully")
});
const createTasks = asyncHandler(async (req, res) => {
  const { title, description, assignedTo, status } = req.body;
  const { projectId } = req.params;
  const project = await Project.findById(projectId);
  if (!project) {
    throw new ApiError(404, "Project not found");
  }
  const files = req.files || [];

  files.map((file) => {
    return {
      url: `${process.env.SERVER_URL}/images/${file.originalname}`,
      mimetype: file.mimetype,
      size: file.size,
    };
  });

  const task = await Task.create({
    title,
    description,
    project: new mongoose.Types.ObjectId(projectId),
    assignedTo: assignedTo
      ? new mongoose.Types.ObjectId(req.user._id)
      : undefined,
    status,
    assignedBy: new mongoose.Types.ObjectId(req.user._id),
    attachments,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, task, "Task created successfully"));
});
const getTaskById = asyncHandler(async (req, res) => {
  //chai
});
const updateTasks = asyncHandler(async (req, res) => {
  //chai
});
const deleteTasks = asyncHandler(async (req, res) => {
  //chai
});
const createSubTasks = asyncHandler(async (req, res) => {
  //chai
});
const updateSubTasks = asyncHandler(async (req, res) => {
  //chai
});
const deleteSubTasks = asyncHandler(async (req, res) => {
  //chai
});

export {
  getTasks,
  createTasks,
  createSubTasks,
  deleteSubTasks,
  deleteTasks,
  updateSubTasks,
  updateTasks,
  getTaskById,
};
