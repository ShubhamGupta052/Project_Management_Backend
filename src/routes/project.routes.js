import { Router } from "express";
import {
  getProject,
  addMembersToProject,
  createProject,
  getProjectById,
  getProjectsMembers,
  deleteProject,
  deleteMember,
  updateMemberRole,
  updateProject,
} from "../controller/project.contollers.js";
import { validate } from "../middlewares/validator.middleware.js";
import {
  createProjectValidator,
  addMembertoProjectValidator,
} from "../validators/index.js";
import {
  verifyJWT,
  validateProjectPermission,
} from "../middlewares/auth.middleware.js";
import { AvalibleProjectRoles, UserRolesEnum } from "../utils/constants.js";

const router = Router();
router.use(verifyJWT);

router
  .route("/")
  .get(getProject)
  .post(createProjectValidator(), validate, createProject);

router
  .route("/:projectId")
  .get(validateProjectPermission(AvalibleProjectRoles), getProjectById)
  .put(
    validateProjectPermission([UserRolesEnum.ADMIN]),
    validate,
    updateProject,
  )
  .delete(validateProjectPermission([UserRolesEnum.ADMIN]), deleteProject);

router
  .route("/:projectId/members")
  .get(getProjectsMembers)
  .post(
    validateProjectPermission([UserRolesEnum.ADMIN]),
    addMembertoProjectValidator(),
    validate,
    addMembersToProject,
  );

router
  .route("/:projectId/members/:userId")
  .put(validateProjectPermission([UserRolesEnum.ADMIN], updateMemberRole))
  .delete(validateProjectPermission([UserRolesEnum.ADMIN]), deleteMember);

export default router;
