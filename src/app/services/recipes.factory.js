'use strict';

class RecipesFctr {

    constructor() {
        this.recipes = [];
        this.matchedRecipes = [];
        // Percent of ingredients must have to match a recipe;
        this.limitPercentToMatch = 65;
    };

    lookForRecipe(ingSelected) {
        let count = 0,
            tempArray = [], 
            limitPercentToMatch = this.limitPercentToMatch;

        _.forEach(this.recipes, function(obj, j) {
            let limitScore = 0,
                count = 0,
                notMainIng = false,
                per = (c, lim) => Math.round((c * 100) / lim),
                clase = x => {
                    if (x<65){
                        return 'low';
                    }if(x>85){
                        return 'medium';
                    }if(x<99){
                        return 'hight';
                    }else if(x === 100){
                        return 'total';
                    }
                };

            for (var i = 0; i < obj.ingredients.length; i++) {
                limitScore += obj.ingredients[i].importance;
            };

            for (var i = 0; i < obj.ingredients.length; i++) {
                _.findIndex(ingSelected, function(ing) {
                    (ing.name === obj.ingredients[i].label) ? (count += obj.ingredients[i].importance) : '';
                })
            };

            if (per(count, limitScore) >= limitPercentToMatch) {
                obj.clase = clase(per(count, limitScore));
                obj.score = per(count, limitScore);
                tempArray.push(obj);
            }
            count = 0;
        });
        this.fillMatchedRecipes(tempArray);
        return (tempArray);
    };


    fillRecipes(array) {
        this.recipes = array;
    };


    addRecipe(rec) {
        this.recipes.push(ing);
    };


    getAllRecipes() {
        return this.recipes;
    };


    getRecipe(name) {
        _.findIndex(this.recipes, function(rec) {
            return rec.name == name;
        });
    };

    fillMatchedRecipes(array){
        this.matchedRecipes = array;
    };

    getMatchedRecipes(){
        return this.matchedRecipes;
    };

    deleteMatchedRecipes(){
        this.matchedRecipes = [];
    };

    getPercentToMatch(){
        return this.limitPercentToMatch;
    };

    changePercentToMatch(num) {
        if (num > 0 && num < 100) {
            this.limitPercentToMatch = num;
        } else {
            //show Error
        }
    };


    setIds(array) {
        for (var i = 0; i < array.length; i++) {
            array[i].id = i;
        }
        return array;
    };
};

RecipesFctr.$inject = [];

export default RecipesFctr;
