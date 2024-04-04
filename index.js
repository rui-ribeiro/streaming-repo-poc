const express = require('express');
const app = express();

app.get('/stream', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    let count = 0;

    // Send a "hello world" message every second
    const intervalId = setInterval(() => {
        res.write(`data: Hello, world! ${count++}\n\n`);
    }, 1000);

    // Close the connection after 10 seconds
    setTimeout(() => {
        clearInterval(intervalId);
        res.end();
    }, 10000);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});