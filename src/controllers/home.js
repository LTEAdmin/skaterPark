export const homeCtrl = async (req, res) => {
  res.render("Home");
};

export const registroCtrl = async (req, res) => {
  res.render("Registro");
};

export const loginCtrl = async (req, res) => {
  res.render("Login");
};

export const addSkaterCtrl = async (req, res) => {
    try { 
        const { email, nombre, password, anos_experiencia, especialidad } =
          req.body;
        const { foto } = req.files;
        const { name } = foto;
        const dataSkater = [
                email,
                nombre,
                password,
                anos_experiencia,
                especialidad];
        console.log(dataSkater);
    }
    catch {
        res.status(500).send("Error al agregar skater");
     }
    
}