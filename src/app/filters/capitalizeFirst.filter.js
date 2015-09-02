/*.filter('capitalize', function() {
    return function(input, scope) {
        return input.substring(0,1).toUpperCase()+input.substring(1);
    }
});*/


/*class CapitalizeFirst {
    constructor(input) {
    	let tempTxt = input.substring(0,1).toUpperCase()+input.substring(1);
		return tempTxt;
    }
}

CapitalizeFirst.$inject = [];

export default CapitalizeFirst;*/