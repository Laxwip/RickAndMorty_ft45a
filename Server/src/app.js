const express = require("express");
const server = express();
const router = require("./routes/index")




//+ MIDDLEWARES
//° Middleware para Control de Acceso de Recursos Cruzados (CORS)
server.use((req, res, next) => {
  // (*) Significa que cualquier dominio puede realizar solicitudes.
  res.header('Access-Control-Allow-Origin', '*');
  // Se permite el envío de credenciales
  res.header('Access-Control-Allow-Credentials', 'true');
  // Especifica qué encabezados HTTP pueden ser utilizados durante la solicitud real
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  // Se están permitiendo los métodos GET, POST, OPTIONS, PUT y DELETE.
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  // Pasamos al sig middleware
  next();

  // En resumen, este middleware está configurado para permitir el acceso desde cualquier origen, permitir el envío de credenciales, especificar los encabezados permitidos y los métodos HTTP permitidos. Esto es útil cuando estás construyendo una API que debe ser accesible desde diferentes dominios, por ejemplo, cuando desarrollas una aplicación frontend en un dominio diferente al backend de la API.
});
//° Middleware JSON
// Se encarga de analizar el JSON que llega por POST y y lo hace disponible en el objeto req.body de tu ruta o controlador.
server.use(express.json());
//° Middleware Prefijo de ruta
// Especifica que cualquier ruta con el prefijo "/rickandmorty" será manejada por el enrutador "router".
server.use("/rickandmorty", router)


module.exports = server