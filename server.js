const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

// para heroku in the cloud
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public')); // reemplaza al app.get / 

// PATHS
// http://localhost:3000/index-old.html

// Express HBS engine - Handlebars
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

/*// Helpers HBS
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});*/

// reemplazado por el app.use
/*app.get('/', function(req, res) {
    // res.send('Hola Mundo');

    let salida = {
        nombre: 'fernando',
        edad: 32,
        url: req.url
    }

    res.send(salida);
});*/

// HBS
app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'sajacu'
    }); //views/about.hbs

    /*res.render('home', {
        nombre: 'Sajacu',
        anio: new Date().getFullYear()
    }); //views/about.hbs*/
});
app.get('/about', function(req, res) {
    res.render('about');

    /*res.render('about', {
        anio: new Date().getFullYear()
    }); //views/home.hbs*/
});

app.get('/data', function(req, res) {
    res.send('Hola Mundo data');
});

app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto ' + port);
});