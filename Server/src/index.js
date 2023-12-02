const http = require('http');

http.createServer((req, res) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  if(req.url === '/rickandmorty/character'){
    if(err){
      res.end('Error');
    }else{
      res.end(JSON.stringify(data));
    }
  }else if(req.url === '/rickandmorty/location'){
    
  }
}).listen(3001, "127.0.0.1")