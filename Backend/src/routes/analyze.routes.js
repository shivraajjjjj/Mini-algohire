import express from "express";
const algoRouter = express.Router();
import { findRoles } from "../controllers/analyze.controller.js";

algoRouter.post('/your-roles',findRoles);

export default algoRouter;