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
        vm.posiblesRecipes = [];
        vm.selectedIngredients = IngredientsFctr.getIngredientsSelected();
        vm.alertModel = {
            msg : '',
            type : ''
        };
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
            if (vm.posiblesRecipes.length === 0){
                vm.setAlert(ConstantSrv.getConst('msg', 'noRecipes'), 'info')
            } 
        };

        function resetAll() {
            vm.posiblesRecipes = [];
            vm.selectedIngredients = [];
            $scope.searchText = '';

            for (var i = 0; i < vm.ingredients.length; i++) {
                vm.ingredients[i].selected = false;
            };
        };

        function setAlert(txt, tipo){
            vm.alertModel = {
                msg : txt,
                type : tipo
            };
        };

        $scope.$on('$destroy', function() {
            IngredientsFctr.updateSelectedIngredientsArray(vm.selectedIngredients);
        });
    }
}

HomeCtrl.$inject = ['$scope', 'IngredientsFctr', 'RecipesFctr', 'ConstantSrv'];

export default HomeCtrl;
