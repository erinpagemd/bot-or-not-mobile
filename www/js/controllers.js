angular
.module('starter.controllers', [])
.controller('ResultsCtrl', function($scope, $rootScope, ArrayFactory, $location, $state){

  if ($rootScope.score < 30) {
    $scope.message = 'Meh'
  } else {
    $scope.message = 'You may be the next Alan Turing!'
  }


  $scope.startOver = function (){
    $state.go('tab.home')
    $rootScope.images = ArrayFactory;
  }
})
.controller('GameCtrl', function($scope, ArrayFactory, $location, $state, $rootScope, $ionicModal) {

  $scope.images = $rootScope.images;
  $scope.turn = 0;
  $scope.show = 0;
  $scope.choice = 'none';
  $scope.result = 'none';
  $rootScope.score = 0;

  $ionicModal.fromTemplateUrl('tab-game-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal){
    $scope.modal = modal;
  });

  $scope.nextImage = function (){
    $scope.modal.hide();
    $scope.show += 1;
    $scope.turn += 1;
    if ($scope.turn === 3) {
      $state.go('tab.results')
    }
  }

  $scope.human = function ($index){
    $scope.modal.show();
    $scope.choice = 'Human'
    comparisonResult($index);
  }

  $scope.robot = function ($index){
    $scope.modal.show();
    $scope.choice = 'Robot'
    comparisonResult($index);
  }

  function comparisonResult ($index) {
    if ($scope.choice === $scope.images[$index].hof) {
      $scope.result = 'Correct! You earned 10 points!'
      $rootScope.score += 10
    } else {
      $scope.result = 'Better luck next time...'
    }
  }

});
