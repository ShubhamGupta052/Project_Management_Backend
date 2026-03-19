import { User } from "../models/user.models.js";
import { Project } from "../models/project.models.js";
import { ApiResponse } from "../utils/Api-Response.js";
import { ApiError } from "../utils/Api-Error.js";
import { asyncHandler } from "../utils/async-handler.js";

const getProject = asyncHandler(async (req, res) => {
  //test
});

const getProjectById = asyncHandler(async (req, res) => {
  //test
});

const createProject = asyncHandler(async (req, res) => {
  //test
});

const updateProject = asyncHandler(async (req, res) => {
  //test
});

const deleteProject = asyncHandler(async (req, res) => {
  //test
});

const addMembersToProject = asyncHandler(async (req, res) => {
  //test
});

const getProjectsMembers = asyncHandler(async (req, res) => {
  //test
});

const updateMemberRole = asyncHandler(async (req, res) => {
  //test
});

const deleteMemberRole = asyncHandler(async (req, res) => {
  //test
});

export {
  getProject,
  addMembersToProject,
  createProject,
  getProjectById,
  getProjectsMembers,
  deleteProject,
  deleteMemberRole,
  updateMemberRole,
  updateProject,
};
