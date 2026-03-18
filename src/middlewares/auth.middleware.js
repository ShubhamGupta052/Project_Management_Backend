import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/async-handler.js";
import { ApiError } from "../utils/Api-Error.js";
import jwt from "jsonwebtoken";
export const verifyJWT = asyncHandler(async (req, resizeBy, next) => {
  req.cookie?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw (new ApiError(), "UNauthorized request");
  }

  try {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken -emailVerificationToken -emailVerificationExpiry",
    );

    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, "Invalid Access Token");
  }
});
