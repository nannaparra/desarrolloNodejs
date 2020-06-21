const express=require('express');
const router=express.Router();

router.get('/', (req,res) => {
    res.render('index.html');
});

router.get('/productos', (req,res) => {
    res.render('productos.html');
});

router.post('/productos', (req,res) => {
    console.log(req.body.name)
});

router.get('/contacto', (req,res) => {
    res.render('contacto.html');
});

router.get('/infoProducto', (req,res) => {
    res.render('infoProd.html');
});


module.exports=router;