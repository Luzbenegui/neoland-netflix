# README
Instalacion y configuración de la aplicacion grupal de neoland-netflix

Pasos a seguir:

 1- Crear una carpeta Netflix.
 2 - Dentro de Netflix: 
    2.1 - Carpeta public, dentro de ésta otra carpeta html.
    2.2 - Carpeta Models, dentro de ésta dos archivos js, uno 'users.js' y otro 'films.js'
    2.3 - Carpeta conf y dentro de ésta los puntos 2.3 y 2.4
    2.3 - Archivo 'appConf.js'
    2.4 - Archivo 'dbConf.js'
    2.5 - Archivo 'server.js'
    2.6 - Archivo 'api.js'


    **** Dentro de del archivo dbConf.js copiar y pegar: 
        const mongoose = require('mongoose');
        const netflix = 'mongodb://localhost/Netflix';

        const dbConnect = () => {
        mongoose.connect(`${netflix}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err,res) => {
            err ? console.log('ERROR someting is wrong!') : console.log(`bbdd conectada correctamente`);
        });
        }


        module.exports = {
            dbConnect:dbConnect 
        }

    **** Dentro de appConf.js copiar y pegar: 
        const express = require('express');
        const fs = require("fs");

        const appInitConfig = () => {
            const app = express();
            const bodyParser = require('body-parser');
            // CONFIGURACION: CORS
            app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
        
            // authorized headers for preflight requests
            // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        
            app.options('*', (req, res) => {
                // allowed XHR methods  

                res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
                res.send();
            });
            });
        
            // CONFIGURACION: traducimos el json
            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({ extended: false }));
            
            /////HASTA AQUÍ LA CONFIGURACIÓN
            return app;
        }


        module.exports = {
            appInitConfig : appInitConfig 
        }



      **** Dentro de server.js copiar y pegar: 


        const http = require("http");
        const fs = require("fs");

        const server = http.createServer((request, response) => {

            
        });


        const PORT = 4000;
        server.listen(PORT, function () {
        console.log(`Server corriendo en puerto ${PORT}`);
        });

        3- npm init
        4- npm install express
        5- npm install mongoose

            