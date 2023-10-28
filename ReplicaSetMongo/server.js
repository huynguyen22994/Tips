'use strict'

const express = require('express')
const app     = express()
const mongoose = require('mongoose')
let MyModel = null

mongoose.connect('mongodb://192.168.0.145:27001,192.168.0.145:27002/test?replicaSet=mongoRepSet')
.then(async () => {
    console.log('Connected!!')
    const testSchema = new mongoose.Schema({
        name: { type: String, default: 'hahaha' },
      });
    MyModel = mongoose.model('test', testSchema);
    MyModel.create({name: "test"})
});


app.get('/getData', async function(req, res) {
    // retrieve my model
    const Test = await mongoose.model('test');
    const result = await Test.find()
    res.json({
        result
    })
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})