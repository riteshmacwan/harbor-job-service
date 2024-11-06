/**
 * Represents the body of a job, typically used for creating or updating job.
 * @interface JobBody
 */
export interface JobBody {
  title: string;
}

/**
 * Represents the data structure for deleting a job.
 * @interface JobDelete
 */
export interface JobDelete {
  _id?: string;
}

/**
 * Represents the data structure for a job, typically used for fetching or updating job.
 * @interface JobData
 */
export interface JobData {
  _id: string;
  title: string;
}

export type JobCreationResult = JobData | string | null;
