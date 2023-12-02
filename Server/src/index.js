const http = require('http');
const characters = require("./utils/data.js")


http
.createServer((req, res) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  if(req.url.includes('/rickandmorty/character')){
    const id = req.url.split('/').pop();
    const character = characters.find(character => character.id == Number(id))
    if (character){
      return res
        .writeHead(200, {'Content-Type': 'application/json'})
        .end(JSON.stringify(character))
    }else{
      return res
        .writeHead(404, {'Content-Type': 'application/json'})
        .end(JSON.stringify({message: 'Character not found'}))
    }
  }
  else{
    return res
      .writeHead(404, {'Content-Type': 'application/json'})
      .end(JSON.stringify({message: 'Roth not found'}))
  }

})
.listen(3001, "127.0.0.1", () => (console.log("Server listening")))