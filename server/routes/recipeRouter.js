const express = require('express');
const Recipe = require('../models/recipe');
const recipeScraper = require('recipe-scraper');

const recipeRouter = express.Router();

recipeRouter.route('/')
    .get((req, res, next) => {
        Recipe.find()
            .then(recipes => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(recipes);
            })
            .catch(err => next(err));
    })
    .post((req, res, next) => {
        Recipe.create(req.body)
            .then(recipe => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(recipe);
            })
            .catch(err => next(err));
    })

recipeRouter.route('/:recipeId')
    .get((req, res, next) => {
        Recipe.findById(req.params.recipeId)
            .then(recipe => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(recipe);
            })
            .catch(err => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 500;
        res.end('Not Supported');
    })
    .put((req, res, next) => {
        Recipe.findByIdAndUpdate(req.params.recipeId, {
            $set: req.body
        }, { new: true })
        .then(recipe => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(recipe)
        })
        .catch(err => next(err));
    })



module.exports = recipeRouter;