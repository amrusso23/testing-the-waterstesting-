let myhttp = require("http");
// define variable, 

//dot notastion in js to access an object and its methods-- will start an http
//createServer needs some arguements --- lets add a function 
let myserver = myhttp.createServer(


  function ( myRequest, myResponse) {


    console.log(myRequest.url);
    //http response header

    let mytext;
    if (myRequest.url === "/hey") {
      mytext = "Well hi there...";
    } else {
      mytext = "Ehh get away!";
    }

    mytext = mytext + "please help me... I am trapped in a node.js server!";



    myResponse.writeHead(200, {"content-type":"text/plain"});

    myResponse.end("Hello Vera!\n");
  
  
  }
);

//asl http to start listening
myserver.listen(8080, "0.0.0");


console.log("eat it");