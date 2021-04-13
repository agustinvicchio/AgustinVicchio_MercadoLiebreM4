const express = require ('express');
const { dirname } = require ('path');
const app = express ();
const path = require ('path');
const puerto = process.env.PORT
/* const publicPath = path.resolve(__dirname,'./public'); */

/* app.use(express.static(publicPath)); */

app.use(express.static('public'));

app.set('view engine','ejs')  /* le pasamos dos parametros, primero el motor con el que voy a trbajar "view engine" y */

app.get('/',(req, res) => {res.render('index');});
app.get('/login',(req, res) => {res.render('login');});
app.get('/register',(req, res) => {res.render('register');});

app.listenerCount( puerto || 3000, function() {
    console.log ('Example app listening on port');
});

/* app.get ('/', (req,res) => { res.sendFile (path.join(__dirname,'/views/index.html'));});
app.get ('/login', (req,res) => { res.sendFile (path.join(__dirname,'/views/login.html'));});
app.get ('/registrar', (req,res) => { res.sendFile (path.join(__dirname,'/views/registar.html'));}); */

/* app.listenerCount(process.env.PORT || 3000, function() {
    console.log ('Servidor corriendo en el puerto 3000');
}); */

/*app.listen (3000, () => { console.log('servidor corriendo')});*/

/* npm i ejs --> para instalar los modulos*/