import express from "express";
import {
    homeCtrl,
    registroCtrl,
    loginCtrl,
    addSkaterCtrl,
 } from "../controllers/home.js";

const router = express.Router();
//const __dirname = import.meta.dirname;

router.get("/", homeCtrl);
router.get("/registro", registroCtrl);
router.get("/login", loginCtrl);

router.post("/skaters", addSkaterCtrl);

export default router;
