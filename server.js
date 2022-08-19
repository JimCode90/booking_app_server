// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const morgan = require('morgan');

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {readdirSync} from 'fs';
const morgan = require('morgan');

require('dotenv').config();
const app = express();

//DB
mongoose
    .connect(process.env.DATABASE, {})
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB Error => ", err));

//Middlewares
app.use(cors());
app.use(morgan('dev'));

//Routes
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)))

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));