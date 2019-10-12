const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
	
app.use(cors());

app.use(morgan('dev'));


app.use(routes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Server id running in http://localhost:${PORT}`);
});
