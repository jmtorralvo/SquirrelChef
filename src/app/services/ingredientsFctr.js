'use strict';

class IngredientsFctr {

    constructor() {
        this.ingredients = [];
        this.recipes = [];
        this.ingredientsSelected = [];
    };

    fillIngredients(array) {
        this.ingredients = array;
    };

    fillRecipes(array) {
        this.recipes = array;
    };

    addIngredient(ing) {
        this.ingredients.push(ing);
    };

    addRecipe(rec) {
        this.recipes.push(ing);
    };

    getAllIngredients() {
        return this.ingredients
    };

    getAllRecipes() {
        return this.recipes;
    };

    deleteIngredientsFromSelectedArray(){
        this.ingredientsSelected = [];
    };

    addIngredientToSelectedArray(ingredient){
        this.ingredientsSelected.push(ingredient);
    };

    updateSelectedIngredientsArray(array){
        this.ingredientsSelected = array;
    };

    getIngredientsSelected(){
        return this.ingredientsSelected;
    };

    getIngredient(name) {
        _.findIndex(this.ingredients, function(ing) {
            return ing.name == name;
        });
    };

    getrecipe(name) {
        _.findIndex(this.recipes, function(rec) {
            return rec.name == name;
        });
    };

    setIds(array) {
        for (var i = 0; i < array.length; i++) {
            array[i].id = i;
        }
        return array;
    };
};

IngredientsFctr.$inject = [];

export default IngredientsFctr;
