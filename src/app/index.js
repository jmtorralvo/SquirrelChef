'use strict';

import MainCtrl from './main/main.controller';
import NavbarCtrl from '../app/components/navbar/navbar.controller';
import HomeCtrl from '../app/sections/home.controller';
import RecipesCtrl from '../app/sections/recipes.controller';
import HttpRequest from '../app/services/httpRequest.service';
import IngredientsFctr from '../app/services/ingredients.factory';
import RecipesFctr from '../app/services/recipes.factory';
import ScAlert from '../app/directives/sc-alert/scAlert.directive';
import ConstantSrv from '../app/services/constant.service';



angular.module('squirrelChef.ui',[])
   .directive('scAlert', () => new ScAlert());   //In case of directive wrote in ECMA6


angular.module('squirrelChef', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'firebase', 'i18n', 'squirrelChef.ui'])
    .controller('MainCtrl', MainCtrl) 
    .controller('NavbarCtrl', NavbarCtrl)
    .controller('HomeCtrl', HomeCtrl)
    .controller('RecipesCtrl', RecipesCtrl)
    .service('HttpRequest', HttpRequest)
    .service('IngredientsFctr', IngredientsFctr)
    .service('RecipesFctr', RecipesFctr)
    .service('ConstantSrv', ConstantSrv)



.config(function($stateProvider, $urlRouterProvider) {
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
            controllerAs: 'homeCtrl'
        })
        .state('main.recipes', {
            url: '/recipes',
            templateUrl: 'app/sections/recipes.html',
            controller: 'RecipesCtrl',
            controllerAs: 'recipesCtrl'
        });

    $urlRouterProvider.otherwise('/');
});
