// const functions = require("firebase-functions");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const PORT = 5000;
const jwt = require("jsonwebtoken");
const app = express();
// const stripe = require("stripe")('sk_test_51KR8R1SIj9g28rKLWw3NkPxy6e2884LkTEP6CdRZR6Pn6REfp9mZqzdZ4iyDMkJSI8o7MxQw3nPxAb0HZNc3ogOk00nzvVDW6y')

app.use(cookieParser());
app.use(express.json());
app.use(require("./router/auth"));

require("./db/conn");
dotenv.config({path : './config.env'});

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log("payment received for ", total);
    const paymentIntent = await stripe.paymentIntent.create({
        amount : total,
        currency : "usd",
    });
    res.status(201).send({
        clientSecret : paymentIntent.client_secret
    })
})

app.listen(5000, () =>{ 
    console.log(`server is running on port ${PORT}`);
});

// exports.api = functions.https.onRequest(app)