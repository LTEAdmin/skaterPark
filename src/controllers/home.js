import {
    existSkaterQuery,
    
 } from "../database/skateDB.js";

export const homeCtrl = async (req, res) => {
  res.render("Home");
};

export const registroCtrl = async (req, res) => {
  res.render("Registro");
};

export const loginCtrl = async (req, res) => {
  res.render("Login");
};

/* Al agregar skater nuevo, se debe validar, que no exista un skater con el mismo email y que entregue todos los campos necesario
*/
export const addSkaterCtrl = async (req, res) => {
    try {
        if (!email || !nombre || !password || !anos_experiencia || !especialidad) {
            return res.status(400).send("Todos los campos son obligatorios");
        }
        else {
            if (!existSkaterQuery(email)) {
                return res.status(400).send("El correo ya existe, ya esta registrado este Skater");
            }
            else {              //

            }
            
        }
    }
    catch {
        res.status(500).send("Error al agregar skater");
    };
};