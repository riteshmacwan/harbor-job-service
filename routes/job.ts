import express, { Router } from "express";
import { JobController } from "../controllers";
import { jobDataValidation } from "../middlewares/validations/job";
import { validation } from "../middlewares/validations/communication";

const jobController = new JobController();
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Job
 *   description: The Job managing APIs
 */
export default (router: Router) => {
  /**
   * @swagger
   * /job:
   *   post:
   *     summary: Create a new job
   *     tags: [Job]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               title:
   *                 type: string
   *     responses:
   *       200:
   *         description:
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Department'
   */
  router.post("/job", jobDataValidation, validation, jobController.createJob);

  /**
   * @swagger
   * /job:
   *   get:
   *     summary: Get a list of all jobs
   *     tags: [Job]
   *     responses:
   *       '200':
   *         description: A list of jobs
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Department'
   */
  router.get("/job", jobController.listJob);

  /**
   * @swagger
   * /job/:id:
   *   delete:
   *     summary: Delete a Job
   *     tags: [Job]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               _id:
   *                 type: string
   *     responses:
   *       200:
   *         description:
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Department'
   */
  router.delete("/job/:id", jobController.deleteJob);

  /**
   * @swagger
   * /job:
   *   put:
   *     summary: Update a job by ID
   *     tags: [Job]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               _id:
   *                 type: string
   *               name:
   *                 type: string
   *     responses:
   *       200:
   *         description: Job updated successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Department'
   */
  router.put("/job/:id", jobController.updateJob);
};
