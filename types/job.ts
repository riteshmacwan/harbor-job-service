import { Date } from "mongoose";

/**
 * Represents the body of a job, typically used for creating or updating job.
 * @interface JobBody
 */
export interface JobBody {
  title: string;
  skill_ids: [string];
  location: string;
  start_date: Date;
  end_date: Date;
  start_time: Date;
  end_time: Date;
  amount: number;
  currency: string;
  description: string;
  image: [string];
  status: string;
  user_id: string;
}

/**
 * Represents the data structure for deleting a job.
 * @interface JobDelete
 */
export interface JobDelete {
  id?: string;
}

/**
 * Represents the data structure for a job, typically used for fetching or updating job.
 * @interface JobData
 */
export interface JobData {
  _id: string;
  title: string;
  skill_ids: [string];
  location: string;
  start_date: Date;
  end_date: Date;
  start_time: Date;
  end_time: Date;
  amount: number;
  currency: string;
  description: string;
  image: [string];
  status: string;
  user_id: string;
}

export type JobCreationResult = JobData | string | null;
