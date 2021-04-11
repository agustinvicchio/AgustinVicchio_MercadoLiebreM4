const express = require ('express');
const app = express ();
const path = require ('path');
const publicPath = path.resolve(__dirname,'./public');

app.use(express.static(publicPath));

app.get ('/', (req,res) => { res.sendFile (path.join(__dirname,'/views/index.html'));});

app.get ('/', (req,res) => { res.sendFile (path.join(__dirname,'/views/login.html'));});

app.get ('/', (req,res) => { res.sendFile (path.join(__dirname,'/views/registar.html'));});

app.listenerCount(process.env.PORT || 3000, function() {
    console.log ('Servidor corriendo en el puerto 3000');
});

/*app.listen (3000, () => { console.log('servidor corriendo')});*/