import { Job } from "../models";
import { JobBody, JobCreationResult, JobData, JobDelete } from "../types/job";

/**
 * Represents a repository for managing jobs.
 * This class provides methods to perform CRUD (Create, Read, Update, Delete) operations on job data.
 * @class - JobRepository
 */
export class JobRepository {
  /**
   * Asynchronously creates a new job based on the provided data.
   *
   * @async
   * @param {JobBody} data - The data object containing information about the job to be created.
   * @returns {Promise<JobCreationResult>} A Promise that resolves with the result of the job creation operation.
   *                                          If successful, it resolves with the created job data.
   */
  async createJob(data: JobBody): Promise<JobCreationResult> {
    try {
      let create = (await Job.create(data)) as JobData;
      return create;
    } catch (error) {
      console.log("createJob error -->", error);
      return null;
    }
  }

  /**
   * Retrieves a list of jobs asynchronously from the database.
   *
   * @async
   * @returns {Promise<JobData[] | null>} A promise that resolves to an array of JobData objects if successful, or null if an error occurs.
   * @throws {Error} Throws an error if there's an issue with retrieving job data.
   */
  async listJob(): Promise<JobData[] | null> {
    try {
      let data = (await Job.find()) as JobData[];
      return data;
    } catch (error) {
      console.log("listJob error -->", error);
      return null;
    }
  }

  /**
   * Deletes a job from the database.
   * @async
   * @param {JobDelete} data - The data object containing the ID of the job to be deleted.
   * @returns {Promise<JobCreationResult>} A Promise that resolves to a JobCreationResult indicating the outcome of the deletion operation.
   * @throws {Error} If an error occurs during the deletion process.
   * @description This function asynchronously deletes a job from the database based on the provided job ID.
   *              It uses the job model to perform the deletion operation. If the job is successfully deleted,
   *              it returns a success message; otherwise, it returns a failure message indicating that the job was not found or not deleted.
   *              If an error occurs during the deletion process, it logs the error and returns null.
   */
  async deleteJob(data: JobDelete): Promise<JobCreationResult> {
    try {
      const deletedJob = await Job.findByIdAndDelete(data._id);

      if (deletedJob) {
        return "Job deleted successfully";
      } else {
        return "Job not found or not deleted";
      }
    } catch (error) {
      console.error("Error deleting Job:", error);
      return null;
    }
  }

  /**
   * Asynchronously updates an existing Job in the database.
   * @async
   * @param {JobData} data - The updated Job data.
   * @returns {Promise<JobCreationResult>} A Promise that resolves to the updated Job data or a descriptive error message.
   * @throws {Error} Throws an error if there's an issue updating the Job.
   */
  async updateJob(data: JobData): Promise<JobCreationResult> {
    try {
      const updatedJob = (await Job.findByIdAndUpdate(data._id, data, {
        new: true,
      })) as JobData;

      if (updatedJob) {
        return updatedJob;
      } else {
        return "Job not found or not updated";
      }
    } catch (error) {
      console.error("Error updating Job:", error);
      return null;
    }
  }
}
