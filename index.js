const express = require('express');
const app = express();
const { userRouter } = require('./routes/user');

app.use('/api/v1/user', userRouter);
app.use('/api/v1/train', trainRoute);

app.listen(3000);
