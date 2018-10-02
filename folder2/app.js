console.log('hello app');
const fs = require('fs');
const url = require('url');
const module1 = require('./module1');



const handleRequest=(req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(module1.string);
    res.write('<br/>');
    res.write(module1.greetings);
    
    var path = url.parse(req.url).pathname;
      switch (path) {
          case '/index':
              const index=fs.readFileSync('index.html');
              res.write(index);
              break;
          case '/login':
              const login=fs.readFileSync('login.html');
              res.write(login);
              break;
          

      }
    res.end();
    
}

module.exports={
    handleRequest
}