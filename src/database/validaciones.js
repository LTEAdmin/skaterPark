export function emailOkQuery (newSkaterEmail) {
    try {
       const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return emailRegex.test(newSkaterEmail); 
    } catch  {
        console.log("Error al validar existencia de skater");
        return false;
    }    
};  
