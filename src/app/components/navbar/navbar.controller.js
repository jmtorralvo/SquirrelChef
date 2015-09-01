'use strict';

class NavbarCtrl {
    constructor($scope, $state) {
    	var vm = this;
        $scope.$on('$locationChangeSuccess', function(next, current) {
            vm.sec = $state.current.name;
            console.log(vm.sec); 
        });
    }
}

NavbarCtrl.$inject = ['$scope', '$state'];

export default NavbarCtrl;
