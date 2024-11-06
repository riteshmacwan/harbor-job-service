import { JobRepository } from "../repository";
import { JobBody, JobCreationResult, JobData, JobDelete } from "../types/job";

/**
 * Service class for managing departments.
 * @class
 */
export class JobService {
  /**
   * @private
   */
  private jobRepository: JobRepository;

  /**
   * Creates an instance of JobService.
   * @constructor
   */
  constructor() {
    this.jobRepository = new JobRepository();
  }

  /**
   * Creates a new Job.
   * @async
   * @param {JobBody} data - The data of the Job to be created.
   * @returns {Promise<JobCreationResult>} A Promise that resolves when the Job is created.
   */
  async createJob(data: JobBody): Promise<JobCreationResult> {
    return await this.jobRepository.createJob(data);
  }

  /**
   * Lists all Jobs.
   * @async
   * @returns {Promise<JobData[]|null>} A Promise that resolves with a list of all Jobs.
   */
  async listJob(): Promise<JobData[] | null> {
    return await this.jobRepository.listJob();
  }

  /**
   * Deletes a Job.
   * @async
   * @param {JobDelete} data - The data specifying the Job to be deleted.
   * @returns {Promise<JobCreationResult>} A Promise that resolves when the Job is deleted.
   */
  async deleteJob(data: JobDelete): Promise<JobCreationResult> {
    return await this.jobRepository.deleteJob(data);
  }

  /**
   * Updates an existing Job.
   * @async
   * @param {JobData} data - The data specifying the Job to be updated.
   * @returns {Promise<JobCreationResult>} A Promise that resolves when the Job is updated.
   */
  async updateJob(data: JobData): Promise<JobCreationResult> {
    return await this.jobRepository.updateJob(data);
  }
}
