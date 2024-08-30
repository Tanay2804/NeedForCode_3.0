// for verifying Presence of logged in user
import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Volunteer } from "../models/volunteer.model.js";
import { Donor } from "../models/donor.model.js";
export const verifyJWT = asyncHandler(async (req, _, next) => {
    try {
        const token =
            (await req.cookies?.accessToken) ||
            req.header("Authorization")?.replace("Bearer ", "");

        if (!token) throw new ApiError(401, "Unauthorized Request");
        const decodedToken = await jwt.verify(
            token,
            process.env.ACCESS_TOKEN_SECRET,
        );
        const volunteer = await Volunteer.findById(decodedToken?._id).select(
            "-password -refreshToken",
        );
        const donor = await Donor.findById(decodedToken?._id).select(
            "-password -refreshToken",
        );
        if (!volunteer && !donor) {
            throw new ApiError(401, "Unauthorized Request");
        }
        if (volunteer) {
            req.user = volunteer;
            next();
        } else {
            req.user = donor;
            next();
        }
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid Access Token");
    }
});
