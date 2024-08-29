// M V C
// M = Model - (DB Schema)
// V = Views - Client (React App)
// C = Controllers  - (functions)
import express from 'express'
import mongoose from 'mongoose';
import bodyParse from 'express';
import productRouter from './routes/product.js'
import userRouter from './routes/user.js'
import cors from 'cors'
import { config } from 'dotenv';
const app = express();
app.use(bodyParse.json())

// .env setup
config({path:'.env'})

app.use(cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials:true
}))

// Product Router
app.use('/api/products', productRouter)

//User Router
app.use('/api/user',userRouter)

mongoose
    .connect(process.env.Mongo_url, {
        dbName: "Volcanus_Batch_4_PM"
    })
    .then(() => console.log("MongoDB Connected Succesfully"))
    .catch(() => console.log("Internal Server Error"))
const port = 1000;
app.listen(port, () => console.log(`Server is running on port ${port}`));