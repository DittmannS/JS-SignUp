/* https://vegibit.com/node-js-mongodb-user-registration/ */

const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const users = require('./routes/users');
const auth = require('./routes/auth');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/mongo-games')
.then(() => console.log('Now connected to MongoDB!'))
.catch(err => console.error('Something went wrong', err));

app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);

const port = process.env.PORT || 4001;
app.listen(port, () => console.log(`Listening in port ${port}...`));