'use strict';

class MainCtrl {
    constructor($scope, HttpRequest, $state, IngredientsFctr, RecipesFctr, $q) {

        var ingConfigHttp = {
            method: 'GET',
            url: './app/mocks/ingredientes.json'
        };
        var recConfigHttp = {
            method: 'GET',
            url: './app/mocks/recetas.json'
        };

        var promIng = HttpRequest.get(ingConfigHttp);
        var promRec = HttpRequest.get(recConfigHttp);

        $q.all([promIng, promRec])
            .then(function(resp) {
                IngredientsFctr.fillIngredients(IngredientsFctr.setIds(resp[0].data.ingredients));
                RecipesFctr.fillRecipes(RecipesFctr.setIds(resp[1].data.recipes));
                $state.go('main.home');
            });


        $scope.selectedIngredients = [];
        $scope.ingredients = [];
        $scope.recipes = [];
        

       /* $scope.toggleAddingIngredient = function(item) {
            item.selected = (item.selected === true) ? false : true;
            if (item.selected === true) {
                $scope.selectedIngredients.push(item);
            } else {
                var deltedItems = _.remove($scope.selectedIngredients, function(el) {
                    return el.id === item.id;
                });
            }
        };*/
    }
}

MainCtrl.$inject = ['$scope', 'HttpRequest', '$state', 'IngredientsFctr', 'RecipesFctr', '$q'];

export default MainCtrl;
