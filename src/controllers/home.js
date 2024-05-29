import {
    existSkaterQuery,
 } from "../database/skateDB.js";

import {
    pswdOkQuery,
} from "../database/validaciones.js"; 

export const homeCtrl = async (req, res) => {
  res.render("Home");
};

export const registroCtrl = async (req, res) => {
  res.render("Registro");
};

export const loginCtrl = async (req, res) => {
  res.render("Login");
};

