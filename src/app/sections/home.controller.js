'use strict';

class HomeCtrl {

    constructor($scope, IngredientsFctr, RecipesFctr, $translate, ingredients, posibleRecipes, recipes) {

        var vm = this;

        vm.toggleAddingIngredient = toggleAddingIngredient;
        vm.generateRecipe = generateRecipe;
        vm.resetAll = resetAll;
        vm.setAlert = setAlert;
        vm.clearAlert = clearAlert;

        vm.ingredients = ingredients;
        vm.recipes = recipes;
        vm.posiblesRecipes = posibleRecipes;
        vm.selectedIngredients = IngredientsFctr.getIngredientsSelected();
        $scope.searchText;


        function toggleAddingIngredient(item) {
            item.selected = (item.selected === true) ? false : true;
            if (item.selected === true) {
                vm.selectedIngredients.push(item);
            } else {
                var deltedItems = _.remove(vm.selectedIngredients, function(el) {
                    return el.name === item.name;
                });
            }
        };

        function generateRecipe() {
            vm.posiblesRecipes = RecipesFctr.lookForRecipe(vm.selectedIngredients);
            if (vm.posiblesRecipes.length === 0) {
                $translate('home.NO_MATCH')
                .then(function(resp){
                    vm.setAlert(resp, 'info', true)
                });  
            } else {
                for (var i = 0; i < vm.posiblesRecipes.length; i++) {
                    vm.posiblesRecipes[i].tooltipTxt = '';
                    for (var j = 0; j < vm.posiblesRecipes[i].ingredients.length; j++) {
                        let tempTxt = (j < vm.posiblesRecipes[i].ingredients.length - 1) ? vm.posiblesRecipes[i].ingredients[j].label + ', ' : vm.posiblesRecipes[i].ingredients[j].label + '.';
                        vm.posiblesRecipes[i].tooltipTxt += tempTxt;
                    };
                };
                vm.setAlert('', 'info', false)
            }
        };

        function resetAll() {
            vm.selectedIngredients = [];
            $scope.searchText = '';
            RecipesFctr.deleteMatchedRecipes();
            vm.posiblesRecipes = RecipesFctr.getMatchedRecipes();
            vm.clearAlert();

            for (var i = 0; i < vm.ingredients.length; i++) {
                vm.ingredients[i].selected = false;
            };
        }; 

        function setAlert(txt, tipo, disp) {
            vm.alertModel = {
                msg: txt,
                type: tipo,
                display: disp
            };
        };

        function clearAlert(){
            vm.alertModel = {
                msg: ''
            };
        };

        $scope.$on('$destroy', function() {
            IngredientsFctr.updateSelectedIngredientsArray(vm.selectedIngredients);
        });
    }
}

HomeCtrl.$inject = ['$scope', 'IngredientsFctr', 'RecipesFctr', '$translate', 'ingredients','posibleRecipes', 'recipes'];

export default HomeCtrl;
