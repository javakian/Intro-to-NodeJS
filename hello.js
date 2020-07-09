var http = require('http');     //want to access the file system
var fs = require('fs');
var url = require('url');


http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if(filename== './') {filename = './index'}    // enter domain only, url filename not entered and index.html loads.

                                                        // if only the page name is entered,  than .html is added automatically
    filename = filename + ".html";
    console.log(filename);
    fs.readFile(filename, function(err, data) {
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

console.log("Server listening on port 8080...");