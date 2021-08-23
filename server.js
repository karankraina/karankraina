const express = require('express');

const app = express();

app.use(express.static(__dirname + '/dist/karankraina/'));

// Api route endpoints defined here






// Serve angular app here
app.get('*', (request, response) => {
    response.sendFile(__dirname + '/dist/karankraina/index.html')
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is listening on port : ${PORT}`);
});