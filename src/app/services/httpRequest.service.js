'use strict';

class HttpRequest {
  
    constructor($http) {
    	this.$http = $http;
    	this.configReq = {
            method:'GET',
            url: '',
            params: {},
            baseUrl: '',
            timeout: null 
        };
  	}

  	get(configuration) { 
  		_.extend(this.configReq, configuration); 
        return this.$http({
        	method: this.configReq.method,
            url: this.configReq.baseUrl + this.configReq.url,
            params: this.configReq.params,
            timeout: this.configReq.timeout
        })
    }	
}

HttpRequest.$inject = ['$http'];

export default HttpRequest;
