import express from "express";
import { currentUser, privateRoute } from "../controllers/auth";
import { findOrCreateUser } from '../middlewares/index'
const router = express.Router();

router.post("/current-user",findOrCreateUser, currentUser);
router.get("/private-route",findOrCreateUser, privateRoute);

module.exports = router;