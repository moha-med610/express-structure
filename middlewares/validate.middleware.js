import { validationResult } from "express-validator";
import { AppError } from "../utils/appError.utils";

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const extractedErrors = errors.array().map(err => err.msg);
        return next(AppError.error(400, "Bad Request", extractedErrors.join(", ")));
    }
    next();
};

export default validate;
