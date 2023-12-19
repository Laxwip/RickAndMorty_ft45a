const { User } = require("../DB_connection")

const login = async (req, res) =>{
  try {
    const email = req.query.email;
    const password = req.query.password
    if(email && password){
      const actualUser = await User.findOne({
        where: {email: email}
      })
      if(actualUser){
        if(actualUser.password === password){
          return res.status(200).json({
            access:true
          });
        }
        return res.status(403).send("Contraseña incorrecta")
      }
      return res.status(404).send("Usuario no encontrado")
    }
    return res.status(400).send("Faltan datos")
  } catch (error) {
    return res.status(500).send(error.message)
  }

}

module.exports = login
// const matchingUsers = User.find(user => email === user.email && password === user.password)

// if(matchingUsers){
//   res.status(200).json({access: true})
// } else {
//   res.status(400).send("Faltan datos")
// }