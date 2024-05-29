import { existSkaterQuery } from "../database/skateDB.js";
import {
    pswdOkQuery,
    mensaje,
 } from "../database/validaciones.js";

// Al agregar skater nuevo, se debe validar, que no exista un skater con el mismo email y que entregue todos los campos necesario
export const addSkaterCtrl = async (req, res) => {
    const { email, nombre, password, anos_experiencia, especialidad } = req.body;
    mensaje("entre");
    try {
        
        if (!email || !nombre || !password || !anos_experiencia || !especialidad) {
            return res.status(400).send("Todos los campos son obligatorios");
        }
        else {
            mensaje(email);
            if (!existSkaterQuery(email)) {
                return res.status(400).send("El correo ya existe, ya esta registrado este Skater");
            }
            else {              // el correo es correcto ahora se debe validar largo del nombre >= 3
                if (nombre.length < 3) {
                    return res.status(400).send("El nombre debe tener más de 3 caracteres");
                }
                else {
                    // el correo y el nombre son correctos, se agrega el skater
                    if (!pswdOkQuery(password)) {
                        return res.status(400).send("La contraseña debe tener al menos 8 caracteres, una mayúscula, una minuscula, un numero y un caracter especial");
                    }
                    else {
                      //acá ya se valido, correo, nombre y password, por lo que se puede ya ingresar el skater.
                    }
                }
            }
            
        }
    }
    catch {
        res.status(500).send("Error al agregar skater");
    };
};