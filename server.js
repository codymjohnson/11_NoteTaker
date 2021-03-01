// dependancy from package.json
const express = require('express');

// config for express
const app = express();

// port
const PORT = process.env.PORT || 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// routes
require('./Develop/routes/apiRoutes')(app);
require('./Develop/routes/htmlRoutes')(app);

// listening
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});