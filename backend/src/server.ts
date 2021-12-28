import 'reflect-metadata';
import './database'
import express from 'express';
import cors from 'cors';
import {routes} from './Routes';

const app = express();


app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use(routes)


app.listen(3333, () => {console.log('Server is Running....')});


