const express=require('express');
const app=express();
const path=require('path');

//Settings
//Variable con el numero de puerto.
app.set('port',8080);
app.set('views', path.join(__dirname,'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares: funciones que se ejecutan 
//antes de que las rutas procesen algo.


//routes
app.use(require('./routes/'));

//static files
app.use(express.static(path.join(__dirname,'public')));

//listening the server 
app.listen(app.get('port'), ()=> {
    console.log('Server on port',app.get('port'));
});

