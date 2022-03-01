const express = require('express');
const mathsRouter = express.Router();
const math = require('mathjs');
const createError = require('http-errors');
const mathsSchema = require('../models/mathModel');

mathsRouter.post('/', (req, res, next) => {

    const values = new mathsSchema(req.body)

    if (!values.numbers) {
        return next(createError(422, 'Validation Error'));
    }

    const arr = values.numbers.split(',');

    let sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    const average = sum / arr.length;
    const standardDeviation = math.std(arr)
    res.status(201)
    res.json({
        numbers: values.numbers,
        sum: sum,
        average: average,
        standardDeviation: standardDeviation
    })
})

module.exports = mathsRouter;