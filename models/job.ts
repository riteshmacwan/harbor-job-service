import { Schema, Document, Model, model } from "mongoose";
import { JobBody } from "../types/job";

/**
 * Interface representing a script category document.
 */
type IJob = JobBody & Document;

const JobSchema: Schema<IJob> = new Schema<IJob>(
  {
    title: {
      required: true,
      type: String,
    },
  },
  {
    collection: "jobs",
  }
);

export const Job: Model<IJob> = model<IJob>("Job", JobSchema);
