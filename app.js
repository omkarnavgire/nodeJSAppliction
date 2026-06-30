const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Node.js App</title>
        </head>
        <body style="font-family: Arial; text-align:center; margin-top:100px;">
            <h2>Today's date: ${new Date().toLocaleDateString()}</h2>
            <h1>Welcome to Node.js App</h1>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});