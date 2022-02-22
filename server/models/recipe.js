const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    ingredients: {
        type: [String],
        required: true
    },
    instructions: {
        type: [String],
        required: true
    },
    tags: {
        type: [String],        
    },
    image: {
        type: String,        
    },
    time: {
        prep : {
            type: String
        },
        cook: {
            type: String
        },
        active: {
            type: String
        },
        inactive: {
            type: String
        },
        ready: {
            type: String
        },
        total: {
            type: String
        }
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
