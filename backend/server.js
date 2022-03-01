const express = require('express');
const mathsRouter = require('./routes/mathRoute');

const app = express();

app.use(express.json());

app.use('/api/math', mathsRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
module.exports = app;
