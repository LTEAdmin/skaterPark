import express from "express";
import { homeCtrl } from "../controllers/home.js";

const router = express.Router();
const __dirname = import.meta.dirname;

router.get("/", homeCtrl);

export default router;
