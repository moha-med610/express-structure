import { AppError } from "../utils/appError.utils";

export default (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return next(AppError.error(401, 'Unauthorized', 'You are not logged in.'));
        }

        if (!roles.includes(req.user.role)) {
            return next(AppError.error(403, 'Forbidden', 'You do not have permission to access this resource.'));
        }

        next();
    };
};