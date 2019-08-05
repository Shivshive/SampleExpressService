const express = require('express');
const hbs = require('express-handlebars');
const user = require('./routes/user');


const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Handle Bars -- 
app.engine('hbs',hbs({extname:'hbs',layoutsDir:__dirname+'/views/layout/',defaultLayout:'layout',partialsDir:__dirname+'/views/partials'}));
app.set('view engine','hbs');
app.set('views',__dirname+'/views');

app.use(express.static(__dirname+'/public'));

// Routes
app.use('/user', user);

app.get('/ask',(req,res)=>{
    console.log('GET > '+req.body.msg);
    res.send({
        msg: 'hello get'
    });
});
app.post('/ask',(req,res)=>{
    var obj = JSON.parse(req.body.msg);
    console.log(obj.msg);
    res.send({
        msg: 'hello post'
    });
});

app.listen(3000,()=>{
    console.log('Server listening on 3000');
});