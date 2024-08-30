import { Router } from "express";
import {
    getVolunteers,
    loginUser,
    logoutUser,
    // changeCurrentPassword,
    // getCurrentUser,
    // refreshAccessToken,
    registerUser,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();
// http://localhost:3000/api/v1/users/

// injecting middleware
router.route("/signup").post(registerUser);

router.route("/login").post(loginUser);


router.route("/logout").post(verifyJWT, logoutUser);
router.route("/getvolunteers").get(getVolunteers);

// router.route("/refresh-token").post(refreshAccessToken);

// router.route("/user").get(verifyJWT, getCurrentUser);

// router.route("/change-password").post(verifyJWT, changeCurrentPassword);
export default router;
