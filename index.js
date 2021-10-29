import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import accounts from './routers/account.js';
import login from './routers/login.js';
import post from './routers/post.js';
import user from './routers/user.js';
import transaction from './routers/transaction.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const URI = process.env.DATABASE_URL;

app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());
app.use(morgan('combined'));

app.use('/api/login', login);
app.use('/api/register', accounts);
app.use('/api/get_all_users', accounts);
app.use('/', post);
app.use('/', user);
app.use('/', transaction);

mongoose.connect(URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to db");
        app.listen(PORT, () => {
            console.log("Server is running!", PORT)
        });
    }).catch((err) => {
        console.log("error: ", err);
    });

