'use strict';

angular.module('mean.scrap').controller('ScrapController', ['$scope','$http', 'Global', 'Scrap',
    function($scope, $http, Global, Scrap) {
        $scope.global = Global;
        $scope.package = {
            name: 'scrap'
        };
      	$scope.scrap = function() {
      		
          var data = {'url':$scope.url};
      		var codif = $scope.codif;
          $http.post('/scrap',data)

          .success(function(data){
              console.log(codif);
              $scope.isSuccess = true;

              var element = document.createElement('a');
              element.href = 'data:text/plain;charset='+ codif + ',' + encodeURI(data);
              element.target = '_blank';
              element.download = 'myFile.txt';

              element.innerHTML = 'Download';
              document.getElementById('download').innerHTML = '';
              document.getElementById('download').appendChild(element);

              
              $scope.element = element;
              $scope.text = data;
      		})
          
          .error(function(error){
            $scope.isSuccess = false;
            $scope.err = error;
          });
      	
        };
    }
]);
