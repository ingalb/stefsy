angular.module('app.controllers', [])
  
.controller('stefsyHumorCtrl', ['$scope', '$state', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $state, $stateParams) {
    
  $scope.azioniList = azioniLists;
  $scope.somma = 0;
  $scope.risultati = function() {
    $scope.somma = 0;
    angular.forEach($scope.azioniList, function(element,index) {
      //console.log(element);
 
      if(element.checked)
        {
          $scope.somma +=element.value;
          console.log($scope.somma);
        }
    });
    $state.go('results', {sum: $scope.somma} );
   // console.log('Push Notification Change', $scope.somma);
  };

}])
   
.controller('risultatiCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    $scope.percent = $stateParams.sum;
console.log($scope.percent);

}])
 