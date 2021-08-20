//Writing my first javascript into repl.it 
let myhttp = require("http");

// creating arguments for createServer() using dot notation
let myserver = myhttp.createServer( 

  function( myrequest, myresponse ){

    console.log( myrequest.url );
    let mytext;
      if( myrequest.url === "/hey"){
        mytext = "Well Hi there...";

      }else{ 
        mytext = "Nope not it buddy";

      }

    myresponse.writeHead( 200, {"Content-Type": "text/plain"});

    myresponse.end(mytext +"\n");

  }
);

myserver.listen(8080, "0.0.0.0");

console.log("server has started");

