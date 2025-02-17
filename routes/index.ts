import express, { Router } from "express";
import department from "./department";
import communication from "./communication";
import skill from "./skill";
import plan from "./plan";
import user from "./user";
import job from "./job";
const router = express.Router();

export default (): Router => {
  department(router);
  communication(router);
  skill(router);
  plan(router);
  user(router);
  job(router);
  return router;
};
