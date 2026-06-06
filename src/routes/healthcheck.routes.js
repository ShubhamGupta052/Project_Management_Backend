import { Router } from "express";
import { healthCheck } from "../controller/healthcheck.controller.js";

const router = Router();

router.route("/").get(healthCheck);

/*
router
  .route("/")  
  .get(getUsers)
  .post(createUser);

  router.get("/", getUsers);
  router.post("/", createUser);
*/

export default router;
