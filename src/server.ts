import express from 'express';
import { routes } from './routes/index.routes';
import "./database";
import "reflect-metadata";
import cors from 'cors';

const app = express()

app.use(express.json())
app.use(cors())

app.use(routes)

app.listen(3333, () => console.log("Server is running..."))