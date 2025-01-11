const http = require('http');

const server = http.createServer((req,res)=>{
   

    if(req.url == '/')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>hi World!<h1/>'); //write a response to the client
        res.end(); //end the response
    } 
    else  if(req.url == '/about')
        {
            res.setHeader('Content-Type', 'text/html');
            res.write('<h1>hi this is about us!<h1/>'); //write a response to the client
            res.end(); //end the response
        }
        else{
            res.writeHead(404,{'Content-Type':'text/html'});
            res.end('404 Not Found');
        }

  
});


server.listen(3000,()=>{
    console.log("server created");
})