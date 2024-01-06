const http = require('http'); // require the http module

const PORT = 3000;

// using the creteServer function we can actually crete a bassic using http module 
//this function return as server object , and takes the a callback as an argument 
// this function created the server obect but did't Start the server  
const server = http.createServer(function listener(req, res) {
  // this callback is a kind of listenner function that is going to collect 
  // every http request that we made to our server

  // TODO ... 
     if(req.url == '/home'){
        // if we make a reqest on /home this if block will execute
        res.end("this takur here"); 
     }
  console.log("incoming request  details", req);
  console.log("Response object detail", res);
  console.log("request received");
});

server.listen(PORT, function exec() {
    // onec we succes fuly  boot up the server on the given port , this cllback will be 
    // ececuted .
  console.log(`Server is up and running on the port: ${PORT}`);
});




