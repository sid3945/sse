const express = require('express');
const app = express();

app.get('/events', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    res.write(`data: Connected to server\n\n`);

    let counter = 0;
    const intervalId = setInterval(() => {
        counter++;
        // event stream format
        res.write(`data: Message ${counter}\n\n`);
    }, 2000);

    // stop sending events on connection close
    req.on('close', () => {
        clearInterval(intervalId);
        res.end();
    });
});

app.listen(3000, () => {
    console.log('SSE server started on port 3000');
});