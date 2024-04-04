const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
        'X-Content-Type-Options': 'nosniff'
    });
    res.write('Beginning\n');
    let count = 10;
    const io = setInterval(function () {
        res.write('Doing ' + count.toString() + '\n');
        count--;
        if (count === 0) {
            res.end('Finished\n');
            clearInterval(io);
        }
    }, 1000);
}).listen(80);
