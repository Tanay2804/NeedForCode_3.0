import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Volunteer } from "../models/volunteer.model.js";
import { Donor } from "../models/donor.model.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import jwt from "jsonwebtoken";
import { Query } from "mongoose";

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, phone, password, isVolunteer } = req.body;

    if (!name || !email || !phone || !password) {
        throw new ApiError(400, "All Fields are Required");
    }

    if (isVolunteer) {
        const existedVolunteer = await Volunteer.findOne({ email });
        if (existedVolunteer) {
            throw new ApiError(409, "Volunteer already exists");
        }

        const volunteer = await Volunteer.create({
            name,
            email,
            phone,
            password,
        });

        const createdVolunteer = await Volunteer.findOne({ email }).select(
            "-password -refreshToken",
        );

        if (!createdVolunteer) {
            throw new ApiError(
                500,
                "Volunteer was not created/registered in DB",
            );
        }

        return res
            .status(201)
            .json(
                new ApiResponse(
                    200,
                    volunteer,
                    "Volunteer Registered Successfully",
                ),
            );
    } else {
        const existedDonor = await Donor.findOne({ email });
        if (existedDonor) {
            throw new ApiError(409, "Donor already exists");
        }

        const donor = await Donor.create({
            name,
            email,
            phone,
            password,
        });

        const createdDonor = await Donor.findOne({ email }).select(
            "-password -refreshToken",
        );

        if (!createdDonor) {
            throw new ApiError(500, "Donor was not created/registered in DB");
        }

        return res
            .status(201)
            .json(
                new ApiResponse(
                    200,
                    createdDonor,
                    "Donor Registered Successfully",
                ),
            );
    }
});

const loginUser = asyncHandler(async (req, res) => {
    try {
        const { email, name, password } = req.body;
        if (!name && !email) {
            throw new ApiError(400, "Username or email Required");
        }
        const volunteer = await Volunteer.findOne({
            email,
        });
        const donor = await Donor.findOne({
            email,
        });
        if (!volunteer && !donor) {
            throw new ApiError(404, "User not found");
        }
        if (volunteer) {
            const isPasswordValid = volunteer.isPasswordCorrect(password);
            if (!isPasswordValid) {
                throw new ApiError(401, "Password Incorrect");
            }
            const { accessToken, refreshToken } =
                await generateAccessAndRefreshToken(volunteer._id, true);
            const loggedInUser = await Volunteer.findById(volunteer._id).select(
                "-password -refreshToken",
            );
            const cookieOptions = {
                httpOnly: true,
                secure: true,
            };
            return res
                .status(200)
                .cookie("accessToken", accessToken, cookieOptions)
                .cookie("refreshToken", refreshToken, cookieOptions)
                .json(
                    new ApiResponse(
                        200,
                        {
                            user: loggedInUser,
                            accessToken,
                            refreshToken,
                        },
                        "User logged In Successfully",
                    ),
                );
        }
        if (donor) {
            const isPasswordValid = donor.isPasswordCorrect(password);
            if (!isPasswordValid) {
                throw new ApiError(401, "Password Incorrect");
            }
            const { accessToken, refreshToken } =
                await generateAccessAndRefreshToken(donor._id, false);
            const loggedInUser = await Donor.findById(donor._id).select(
                "-password -refreshToken",
            );
            const cookieOptions = {
                httpOnly: true,
                secure: true,
            };
            return res
                .status(200)
                .cookie("accessToken", accessToken, cookieOptions)
                .cookie("refreshToken", refreshToken, cookieOptions)
                .json(
                    new ApiResponse(
                        200,
                        {
                            user: loggedInUser,
                            accessToken,
                            refreshToken,
                        },
                        "User logged In Successfully",
                    ),
                );
        } else {
            return res.status(401).json(new ApiResponse("Incorrect Password"));
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json(new ApiResponse(500, error));
    }
});

const generateAccessAndRefreshToken = async (userId, isVolunteer) => {
    try {
        if (isVolunteer) {
            const user = await Volunteer.findById(userId);
            const accessToken = await user.generateAccessToken();
            const refreshToken = await user.generateRefreshToken();
            user.refreshToken = refreshToken;
            await user.save({ validateBeforeSave: false });
            return { accessToken, refreshToken };
        } else {
            const user = await Donor.findById(userId);
            const accessToken = await user.generateAccessToken();
            const refreshToken = await user.generateRefreshToken();
            user.refreshToken = refreshToken;
            await user.save({ validateBeforeSave: false });
            return { accessToken, refreshToken };
        }
    } catch (error) {
        throw new ApiError(
            500,
            "Something went wrong while Geneerating Tokens",
            error,
        );
    }
};

const logoutUser = asyncHandler(async (req, res) => {
    const cookieOptions = {
        httpOnly: true,
        secure: true,
    };

    return res
        .status(200)
        .clearCookie("accessToken", cookieOptions)
        .clearCookie("refreshToken", cookieOptions)
        .json(new ApiResponse(200, {}, "User logged Out"));
});

const getVolunteers = asyncHandler(async (req, res) => {
    try {
        const { Skill } = req.body;
        const volunteers = await Volunteer.aggregate([
            {
                $project: {
                    _id: 0,
                    name: 1,
                    Skills: 1,
                },
            },
        ]);

        console.log(JSON.stringify(volunteers, null, 2));
        const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
        const model = genAI.getGenerativeModel({
            model: "gemini-pro",
        });
        const query =
            "You are given a list of volunteers and their respective skills array after % sign. Your task is to identify and return the names of volunteers whose skills match the skill mentioned in the Query, Query is Mentioned after $ symbol.Return the list of such users 1 name per line" +
            "%" +
            JSON.stringify(volunteers, null, 2) +
            "$" +
            Skill +
            "$";
        const Result = await model.generateContent(query);
        const response = await Result.response;
        const text = response.text();
        console.log(text);

        return res
            .status(200)
            .json(
                new ApiResponse(200, text, "Volunteers Fetched Successfully"),
            );
    } catch (error) {
        console.error("Error fetching volunteers:", error);
        throw error;
    }
});

export {
    registerUser,
    loginUser,
    logoutUser,
    getVolunteers,
    // refreshAccessToken,
    // getCurrentUser,
};
