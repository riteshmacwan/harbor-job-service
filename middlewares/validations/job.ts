import { NextFunction, Request, Response } from "express";
import { check, ValidationChain, validationResult } from "express-validator";

/**
 * Represents an item containing validation result information.
 * @interface ValidationResultItem
 * @property {string} msg - A message describing the validatin result.
 */
interface ValidationResultItem {
  msg: string;
}
/**
 * Validates the careation of a job object.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 * @returns {void}
 */
export const jobDataValidation: ValidationChain[] = [
  check("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required.")
    .isLength({ max: 150 })
    .withMessage("Title must not exceed 150 characters."),

  check("skill_ids")
    .notEmpty()
    .withMessage("Skill are required.")
    .isArray()
    .withMessage("skills must be list of skills."),
  check("skill_ids.*")
    .isString()
    .withMessage("in the list of skills,each skill must be string."),
  check("location")
    .notEmpty()
    .withMessage("Location is required.")
    .isString()
    .withMessage("Location must be string."),
  check("start_date")
    .notEmpty()
    .withMessage("start date is required.")
    .isISO8601()
    .withMessage("start date must be a Date and in YYYY-MM-DD format."),
  check("end_date")
    .notEmpty()
    .withMessage("end date is required.")
    .isISO8601()
    .withMessage("end date must be a Date and in YYYY-MM-DD format."),
  check("start_time")
    .notEmpty()
    .withMessage("start date is required.")
    .isDate()
    .withMessage("start date must be a Date and in YYYY-MM-DD format."),
  check("end_time")
    .notEmpty()
    .withMessage("end date is required.")
    .isDate()
    .withMessage("end date must be a Date and in YYYY-MM-DD format."),
  check("amount")
    .notEmpty()
    .withMessage("amount is required.")
    .isInt({ min: 1 })
    .withMessage("amount can't be 0 or negative value."),
  check("currency")
    .notEmpty()
    .withMessage("currency is required")
    .isIn(["USD", "INR"])
    .withMessage("currency must be one of the following : ['USD', 'INR']."),
  check("description")
    .trim()
    .notEmpty()
    .withMessage("Title is required.")
    .isLength({ max: 150 })
    .withMessage("Title must not exceed 150 characters."),
  check("image").isArray().withMessage("image must be list of images."), // each image validation will be added later
  check("status")
    .notEmpty()
    .withMessage("status is required")
    .isIn(["active", "pending", "complated", "draft"])
    .withMessage(
      'status must be one of the following : ["active", "pending", "complated", "draft"].'
    ),
  check("user_id")
    .notEmpty()
    .withMessage("user_id is required.")
    .isString()
    .withMessage("user_id must be string."),
];

export const validation = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const result = validationResult(req).array();
  if (!result.length) return next();

  const error = result.map((validationResultItem) => validationResultItem.msg);

  return res
    .status(400)
    .json({ status: false, message: error[0], data: {}, code: 400 });
};
