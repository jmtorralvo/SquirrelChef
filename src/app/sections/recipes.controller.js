'use strict';

class RecipesCtrl {

    constructor($stateParams, $scope, RecipesFctr) {

        var vm = this;
        let tempTxt = ($stateParams.nam !== '') ? $stateParams.nam : '';
        vm.recipes = RecipesFctr.getAllRecipes();
        vm.searchRecipe = {
        	txt : tempTxt
        };
        vm.clearSearch = clearSearch;


        function clearSearch() {
        	vm.searchRecipe.txt = '';
        }
    }
}

RecipesCtrl.$inject = ['$stateParams', '$scope', 'RecipesFctr'];

export default RecipesCtrl;
