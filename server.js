//const express = require('express')
//const cors = require('cors');
import express from 'express';
import cors from 'cors'; //moze import zbog babel i index postavki

const server = express();

const PORT = 8000;

const init = () => {
    //Konektuj se na bazu
    server.use(express.json());
    server.use(cors());

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
        //console.log('Listening on port 8000')
    })
};

init();
