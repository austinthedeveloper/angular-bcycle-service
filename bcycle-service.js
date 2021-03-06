angular.module('bcycle', []);
angular.module('bcycle')
 .factory('bcycle', function ($http, $q) {
    var bCycleApi = YOURKEYHERE;

    if(bCycleApi.length >= 32) {
      bCycleUrl = 'https://publicapi.bcycle.com/api/1.0/ListPrograms/';
      bCycleKiosks = 'https://publicapi.bcycle.com/api/1.0/ListProgramKiosks/';
    }
     
    var headerOptions = {};
    headerOptions.headers = {
      'ApiKey': bCycleApi
    }; 

    return {
			getCities: function() {
        var delay = $q.defer();
        $http.get(bCycleUrl, headerOptions)
          .success(function(data) {
            delay.resolve(data);
          })
          .error(function(data) {
            delay.resolve(data);
          });

        return delay.promise;
      },
      getKiosks: function(city) {
        var delay = $q.defer();
        $http.get(bCycleKiosks + city, headerOptions)
          .success(function(data) {
            delay.resolve(data);
          })
          .error(function(data) {
            delay.resolve(data);
          });

        return delay.promise;
      }
    };
  });
