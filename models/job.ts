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
    skill_ids: {
      type: [String],
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
    start_time: {
      type: Date,
      required: true,
    },
    end_time: {
      type: Date,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      enum: ["USD", "INR"],
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: [String],
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["active", "pending", "complated", "draft"],
      default: "pending",
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  {
    collection: "jobs",
  }
);

export const Job: Model<IJob> = model<IJob>("Job", JobSchema);
