import express from "express";
import {
    homeCtrl,
    registroCtrl,
    loginCtrl,
 } from "../controllers/home.js";
import {
    addSkaterCtrl,
    
 } from "../controllers/skaterCtrl.js";

const router = express.Router();
//const __dirname = import.meta.dirname;

router.get("/", homeCtrl);
router.get("/registro", registroCtrl);
router.get("/login", loginCtrl);

router.post("/skaters", addSkaterCtrl);

export default router;
