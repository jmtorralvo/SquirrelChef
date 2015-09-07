'use strict';

class RecipesCtrl {

    constructor($stateParams, $scope, RecipesFctr) {
        const vm = this;
        let tempTxt = ($stateParams.nam !== '') ? $stateParams.nam : '';
        vm.maxRating = 10;
        vm.ratingReadOnly = false;
        vm.anyIngSelected = $stateParams.selected;
        vm.recipes = RecipesFctr.getAllRecipes();
        vm.searchRecipe = {
            txt: tempTxt
        };
        vm.clearSearch = clearSearch;
        vm.hoveringOver = hoveringOver;
        vm.changeRating = changeRating;
        vm.getIngStyle = getIngStyle;


        function getIngStyle(ing){
            var match = false;
            for (var i = 0; i < vm.anyIngSelected.length; i++) {
                if(vm.anyIngSelected[i].name === ing.label){
                    match = true;
                }
            };
            return match;
        };

        function clearSearch() {
            vm.searchRecipe.txt = '';
            //vm.anyIngSelected = [];
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
