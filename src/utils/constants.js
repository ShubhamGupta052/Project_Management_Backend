export const UserRolesEnum = {
  ADMIN: "admin",
  PROJECT_ADMIN: "projectAdmin",
  MEMBER: "member",
};

export const AvalibleUserRoles = Object.values(UserRolesEnum);

export const TaskStatusEnum = {
  TODO: "todo",
  IN_PROGRESS: "inProgress",
  DONE: "done",
};

export const AvalibleProjectRoles = Object.values(TaskStatusEnum);

/*we can group-export these all varaible like

export {UserRolesEnum, AvalibleUserRoles, TaskStatusEnum, AvalibleProjectRoles}

but exporting it like this is prefered as it exports it as the variable gets decalred.
*/
