import jwt from "jsonwebtoken";
import { AppError } from "../utils/appError.utils";
// import User model

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1] || req.cookies.token;

    if (!token) {
        return next(AppError.error(401, "Unauthorized", "Unauthorized, Please log in or Register"));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_ACCESS);

        req.user = decoded;

        const user = await User.findById(decoded.id);

        if (!user) {
            return next(AppError.error(401, "Unauthorized", "User not found"));
        }

        if (user.isSuspended) {
            return next(AppError.error(403, "Forbidden", "Your account is temporarily suspended"));
        }

        req.user = user;

        return next();

    } catch (err) {
        const errorMessage = err.name === "TokenExpiredError" ? "Token has expired" : "Invalid token";
        return next(AppError.error(401, "failed", errorMessage));
    }
}

export default verifyToken;