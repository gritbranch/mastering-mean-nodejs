var http=require('http');

//Http module creates a webserver that listens to port 3000. Callback function is passed to the createServer and gets called whenever there's an HTTP request.
http.createServer(function (req, res) {

	//writeHead sets the Http headers
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});

	//finalizes the response
	res.end('Hello World!');

	//another way of writing to the response body
	//res.write('Hello World');
	//res.end();

}).listen(3000);