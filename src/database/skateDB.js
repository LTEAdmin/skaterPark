import dbase from "../config/db.js";

//funcion para verificar existencia de correo en la BBDD + 
export function existSkaterQuery(email) {
  try {

    const correo = email.toLowerCase()
    const response = dbase.query(` SELECT * FROM skaters WHERE email = $1", [email]`);
    if (response.rows.length > 0) {
      return true;
    }
    else {
      return false;
    }
  }
  catch {
    console.log("Error al validar existencia de skater");
  }

};
