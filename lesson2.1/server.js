const http = require('http');
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((request, response) => {
    console.log(response.url, response.method);

    // set header content type

    response.setHeader('Content-Type', 'text/html');

    let path = "./views";
    switch(request.url){
        case '/':
            path += "/index.html";
            response.statusCode = 200;
            break;
        case '/about':
            path += "/about.html";
            response.statusCode = 200;
            break;
        case '/about-me':
            response.statusCode = 301;
            response.setHeader('Location', '/about');
            response.end()
            break;
        default:
            path += "/404.html"
            response.statusCode = 404
    }

    fs.readFile(path, (error,data) =>{
        if(error){
            console.log(error)
            response.end()
        }else{
            response.write(data)
            response.end()
        }
    })

});

server.listen(3000, 'localhost', () => {
    console.log("Listening for requests on port 3000");
    // localhost is loop back ip address : 127.0.0.1 : redirects connection back to same computer
})