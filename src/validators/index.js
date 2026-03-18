import { body } from "express-validator";

const userRegisterValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is requied")
      .isEmail()
      .withMessage("Email is invalid"),
    body("username")
      .trim()
      .notEmpty()
      .withMessage("Username is requied")
      .isLowercase()
      .withMessage("Username is must be Lowercase")
      .isLength({ min: 3 })
      .withMessage("Username must be at least 3 characters long"),
    body("password").trim().notEmpty().withMessage("Password is requied"),
    body("fullName").optional().trim(),
  ];
};

const userLoginValidator = () => {
  return [
    body("email").optional().isEmail().withMessage("Email is invalid."),
    body("password").notEmpty().withMessage("Password is required."),
  ];
};

const userChangeCurrentPasswordValidattor = () => {
  return [
    body("oldPassword").notEmpty().withMessage("Old Password is required"),
    body("newPassword").notEmpty().withMessage("New Password is required"),
  ];
};

const userForgotPasswordValidator = () => {
  return [
    body("email")
      .notEmpty()
      .withMessage("Email is requied.")
      .isEmail()
      .withMessage("Email is invalid"),
  ];
};

const userResetForgotPasswordValidator = () => {
  return [body("newPassword").notEmpty().withMessage("Password is requied.")];
};

export {
  userRegisterValidator,
  userLoginValidator,
  userChangeCurrentPasswordValidattor,
  userForgotPasswordValidator,
  userResetForgotPasswordValidator,
};
