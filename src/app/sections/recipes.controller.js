'use strict';

class RecipesCtrl {

    constructor($stateParams, $scope, RecipesFctr) {

        var vm = this;
        let tempTxt = ($stateParams.nam !== '') ? $stateParams.nam : '';
        vm.maxRating = 10;
        vm.ratingReadOnly = false;
        vm.recipes = RecipesFctr.getAllRecipes();
        vm.searchRecipe = {
            txt: tempTxt
        };
        vm.clearSearch = clearSearch;
        vm.hoveringOver = hoveringOver;
        vm.changeRating = changeRating;


        function clearSearch() {
            vm.searchRecipe.txt = '';
        };

        function hoveringOver(value) {
            vm.overStar = value;
            vm.percent = 100 * (value / vm.maxRating);
        };

        function changeRating(ev, item, value){
            vm.ratingReadOnly = true;
        };
    }
}

RecipesCtrl.$inject = ['$stateParams', '$scope', 'RecipesFctr'];

export default RecipesCtrl;
