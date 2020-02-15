const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    let path = "";
    if (request.url === "/login") {
        path = "src/html" + request.url + ".html";
    }
    if (request.url === "/register") {
        path = "src/html" + request.url + ".html";
    }
    if (request.url === "/home") {
        path = "src/html" + request.url + ".html";
    }
    if (request.url === "/index") {
        path = "src/html" + request.url + ".html";
    }



    fs.readFile(path, (error, data) => {
        if (error) {
            console.error(error.message);
            response.writeHead(404);
            response.write("Error: Pagina no encontrada");
            response.end();
        } else {
            response.writeHead(200);
            response.write(data);
            response.end();
        }
    });

});



const PORT = 4000;
server.listen(PORT, function () {
    console.log(`Server corriendo en puerto ${PORT}`);
});
