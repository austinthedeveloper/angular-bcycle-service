# angular-bcycle-service
A service for pulling in Bcycle API information

##Requirements
* AngularJS
* Bcycle API key

##Demo (Not functioning yet)

http://plnkr.co/edit/gKz9jXXsxqgIrr1OEjTh?p=preview

##Use
* Include `bcycle` in your module.
* Inject `bcycle` into your controllers or services:

```
app
  .controller("DemoController", function($scope, bcycle) {
    bcycle.getCities().then(function(data) {
      $scope.items = data;
    });
  });
```

###Services
* `getCities`: Pulls all the cities. Does not take options.
* `getKiosks`: Pulls all kiosks in a city. Takes a number based on the city.