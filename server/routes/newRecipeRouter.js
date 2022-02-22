const express = require('express');
const Recipe = require('../models/recipe');
const recipeScraper = require('recipe-scraper');

const newRecipeRouter = express.Router();

newRecipeRouter.route('/')
.post((req, res, next) => {
    recipeScraper(req.body.url)
    .then(recipe => {
        Recipe.create(recipe)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(recipe);
    })
    .catch(err => next(err));
})

module.exports = newRecipeRouter;