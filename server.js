//const express = require('express')
//const cors = require('cors');
//moze import zbog babel i index postavki
import 'dotenv/config';
import express from 'express';
import cors from 'cors'; 
import testRouter from './routers/testRouter';
import categoryRouter from './routers/categoryRouter';
import mongoose from 'mongoose';
import subCategoryRouter from './routers/subCategoryRouter';
import itemRouter from './routers/itemRouter';

const server = express();

const PORT = 8000;

const init = () => { 
    server.use(express.json());
    server.use(cors()); // sigurnost
    server.use('/test', testRouter);
    server.use('/category', categoryRouter);
    server.use('/subCategory', subCategoryRouter);
    server.use('/item', itemRouter);
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
};

const runServer = () => {
    mongoose.connect(process.env.MONGO_URL, {
        autoIndex: false, // Don't build indexes
        maxPoolSize: 10, //Maintain up to 10 socket connections (10 connections at a time)
        serverSelectionTimeoutMS: 5000, //Keep trying to send operations for 5 second
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        family: 4 // Use IPv4, skip trying IPv6
    }, async er => {
        if(er){
            console.log('Connection to DB failed');
            return;
        }
        console.log('Connected to DB');
        init();
    })
}

runServer();

