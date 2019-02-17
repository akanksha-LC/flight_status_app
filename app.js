var express = require('express');
const PORT = process.env.PORT || 5000

var app = express();

app.set('view engine','ejs');



app.get('/', function(req, res) {
	res.render('home');
	//res.send("THAT BITCH");
});

app.get('/graph1',function(req, res){
	res.render('graph1');
});

app.listen(3000, function(){
	console.log("listening bishes");
});



app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
