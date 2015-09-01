'use strict';

class HomeCtrl {

    constructor($scope, IngredientsFctr, RecipesFctr, ConstantSrv) {

        var vm = this;

        vm.toggleAddingIngredient = toggleAddingIngredient;
        vm.generateRecipe = generateRecipe;
        vm.resetAll = resetAll;
        vm.setAlert = setAlert;

        vm.ingredients = IngredientsFctr.getAllIngredients();
        vm.recipes = RecipesFctr.getAllRecipes();
        vm.posiblesRecipes = RecipesFctr.getMatchedRecipes();
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
                vm.setAlert(ConstantSrv.getConst('msg', 'noRecipes'), 'info', true)
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

        $scope.$on('$destroy', function() {
            //vm.resetAll();
            IngredientsFctr.updateSelectedIngredientsArray(vm.selectedIngredients);
        });
    }
}

HomeCtrl.$inject = ['$scope', 'IngredientsFctr', 'RecipesFctr', 'ConstantSrv'];

export default HomeCtrl;
