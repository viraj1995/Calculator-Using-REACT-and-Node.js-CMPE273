var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/', function (req, res, ) {
    res.send()
});

app.post('/calculate', function (req, res, ) {
    var op1 = req.body.operator;
    var first1 = req.body.fnum;
    var second1 = req.body.snum;
    var first = parseInt(first1, 10);
    var second = parseInt(second1, 10);

if(op1 === 'Add'){
    result = first + second
}

else if (op1 === 'Subtract'){
    result = first - second
}

else if (op1 === 'Multiply'){
    result = first * second
}

else {
result = first / second
}
    
    res.send({
 result
    }

        );
})





app.listen(3004);
