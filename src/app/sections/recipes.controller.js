'use strict';

class RecipesCtrl {

    constructor($stateParams, $scope, RecipesFctr) {

        var vm = this;

        vm.recipes = RecipesFctr.getAllRecipes();
        vm.searchRecipe = ($stateParams.id !== '') ? $stateParams.id : '';
    }
}

RecipesCtrl.$inject = ['$stateParams', '$scope', 'RecipesFctr'];

export default RecipesCtrl;
