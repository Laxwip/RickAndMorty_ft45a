const server = require("./app");
const PORT = 3001;


// Iniciamos el servidor 
server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
})
