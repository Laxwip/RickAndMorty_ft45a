const users = require("../utils/users")

const login = (req, res) =>{
  const email = req.query.email;
  const password = req.query.password

  const matchingUsers = users.find(user => email === user.email && password === user.password)

  if(matchingUsers){
    res.status(200).json({access: true})
  } else {
    res.status(200).json({access: false})
  }
}

module.exports = login