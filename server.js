const express = require('express');
const app = express();
const port = 8000;

var path = require('path')
app.use(express.static(__dirname+'/shinto-app/dist'));

app.all('*', (req, res, next)=>{
	res.sendFile(path.resolve("./shinto-app/dist/index.html"))
})
app.listen(port, function(){
	console.log("Listening on port: ", port)
})