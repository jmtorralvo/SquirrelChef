'use strict';

import MainCtrl from './main/main.controller';
import NavbarCtrl from '../app/components/navbar/navbar.controller';
import TooltipSqCtrl from '../app/components/tooltip/tooltipSq.controller';
import HomeCtrl from '../app/sections/home.controller';
import RecipesCtrl from '../app/sections/recipes.controller';
import HttpRequest from '../app/services/httpRequest.service';
import IngredientsFctr from '../app/services/ingredients.factory';
import RecipesFctr from '../app/services/recipes.factory';
import ScAlert from '../app/directives/sc-alert/scAlert.directive';
import ScSearchBox from '../app/directives/sc-search-box/scSearchBox.directive';
import ConstantSrv from '../app/services/constant.service';
/*import CapitalizeFirst from '../app/filters/capitalizeFirst.filter';*/



angular.module('squirrelChef.ui', [])
    .directive('scAlert', () => new ScAlert())
    .directive('scSearchBox', () => new ScSearchBox()); //In case of directive wrote in ECMA6


//FILTROS?
/*angular.module('squirrelChef.filters',[])
    .filter('capitalizeFirst', () => new CapitalizeFirst());
*/

angular.module('squirrelChef', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'pascalprecht.translate', 'tmh.dynamicLocale', 'ui.router', 'ui.bootstrap', 'firebase', 'squirrelChef.ui'])
    .controller('MainCtrl', MainCtrl)
    .controller('NavbarCtrl', NavbarCtrl)
    .controller('HomeCtrl', HomeCtrl)
    .controller('RecipesCtrl', RecipesCtrl)
    .controller('TooltipSqCtrl', TooltipSqCtrl)
    .service('HttpRequest', HttpRequest)
    .service('IngredientsFctr', IngredientsFctr)
    .service('RecipesFctr', RecipesFctr)
    .service('ConstantSrv', ConstantSrv)


.config(function($stateProvider, $urlRouterProvider, $translateProvider, tmhDynamicLocaleProvider) {
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
        })
        .state('main.home', {
            url: '/home',
            templateUrl: 'app/sections/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'homeCtrl',
            resolve : {
                ingredients : function(IngredientsFctr){
                    return IngredientsFctr.getAllIngredients();
                },
                posibleRecipes : function(RecipesFctr){
                    return RecipesFctr.getMatchedRecipes();
                },
                recipes : function(RecipesFctr){
                    return RecipesFctr.getAllRecipes();
                }
            }
        })
        .state('main.recipes', {
            url: '/recipes/:nam',
            templateUrl: 'app/sections/recipes.html',
            controller: 'RecipesCtrl',
            controllerAs: 'recipesCtrl'
        })
    $urlRouterProvider.otherwise('/');


    $translateProvider.useStaticFilesLoader({
        prefix: 'app/languages/',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('es_ES');
    tmhDynamicLocaleProvider.localeLocationPattern('https://code.angularjs.org/1.2.8/i18n/angular-locale_{{locale}}.js');
});
