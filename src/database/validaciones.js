export function emailOkQuery (newSkaterEmail) {
    try {
       const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return emailRegex.test(newSkaterEmail); 
    } catch  {
        console.log("Error al validar existencia de skater");
        return false;
    }    
};  

// acá se define que la contraseña, como minimo necesita 8 caracteres
export function pswdOkQuery(newSkaterPassword) {
    try { 
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;          
        return passwordRegex.test(newSkaterPassword);
    }
    catch { 
        console.log("Error al validar contraseña ingresada de skater");
        return false;
    };
 }
