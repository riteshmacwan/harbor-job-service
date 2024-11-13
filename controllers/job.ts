import { Request, Response } from "express";
import { JobService } from "../service";
import { JobBody, JobData, JobDelete } from "../types/job";

/**
 * Controller class responsible for handling operations related to jobs.
 * This class interacts with the JobService to perform CRUD operations on jobs.
 */
export class JobController {
  /**
   * Service responsible for managing job data.
   * @private
   */
  private jobService: JobService;

  /**
   * Creates an instance of JobController.
   * Initializes the jobService for interacting with job data.
   * @constructor
   */
  constructor() {
    this.jobService = new JobService();
  }

  /**
   * Creates a job based on the request body.
   * @async
   * @function - createJob
   * @param {Request<{}, {}, JobBody>} req - The request object containing the job data.
   * @param {Response} res - The response object.
   * @returns {Promise<Response>} The response indicating success or failure.
   */
  createJob = async (
    req: Request<{}, {}, JobBody>,
    res: Response
  ): Promise<Response> => {
    // Create job using the provided data
    const data = await this.jobService.createJob(req.body);
    // Send success response
    return res.status(200).json({
      status: true,
      data: data,
    });
  };

  /**
   * Retrieves a list of jobs.
   * @async
   * @function - listJob
   * @param {Request} req - The request object (not used in this function).
   * @param {Response} res - The response object.
   * @returns {Promise<Response>} The response containing the list of jobs or an error message.
   */
  listJob = async (req: Request, res: Response): Promise<Response> => {
    // Create job using the provided data
    const data = await this.jobService.listJob();
    // Send success response
    return res.status(200).json({
      status: true,
      data: data,
    });
  };

  /**
   * Deletes a job based on the provided job ID.
   * @async
   * @function - deleteJob
   * @param {Request<{}, {}, JobDelete>} req - The request object containing the job ID in the query.
   * @param {Response} res - The response object.
   * @returns {Promise<Response>} The response indicating success or failure.
   */
  deleteJob = async (
    req: Request<JobDelete, {}, JobDelete>,
    res: Response
  ): Promise<Response> => {
    // Create job using the provided data
    const data = await this.jobService.deleteJob(req.params);
    // Send success response
    return res.status(200).json({
      status: true,
      data: data,
    });
  };

  /**
   * Updates a job based on the provided data.
   * @async
   * @function - updateJob
   * @param {Request<{}, {}, JobData>} req - The request object containing the updated job data.
   * @param {Response} res - The response object.
   * @returns {Promise<Response>} The response indicating success or failure.
   */
  updateJob = async (
    req: Request<{}, {}, JobData>,
    res: Response
  ): Promise<Response> => {
    // Create job using the provided data
    const data = await this.jobService.updateJob(req.body);
    // Send success response
    return res.status(200).json({
      status: true,
      data: data,
    });
  };
}
