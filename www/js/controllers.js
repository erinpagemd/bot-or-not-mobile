angular
.module('starter.controllers', [])
.controller('HomeCtrl', function($scope, $state, GameService){
  $scope.newGame = function(){
    GameService.newGame();
    $state.go('tab.game');
  }
})
.controller('ResultsCtrl', function($scope, $rootScope, $state, GameService){
  $scope.game = GameService;

  if ($scope.game.score < 30) {
    $scope.message = 'Meh'
  } else {
    $scope.message = 'You may be the next Alan Turing!'
  }

  $scope.startOver = function (){
    $state.go('tab.home')
  }
})
.controller('GameCtrl', function($scope, $state, GameService, $rootScope, $ionicModal, $sce) {
  $scope.game = GameService;

  $ionicModal.fromTemplateUrl('tab-game-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal){
    $scope.modal = modal;
  });

  $scope.nextImage = function (){
    $scope.modal.hide();
    $scope.game.show += 1;
    $scope.game.turn += 1;
    if ($scope.game.turn === 5) {
      $state.go('tab.results')
    }
  }

  $scope.human = function ($index){
    $scope.modal.show();
    $scope.game.choice = 'Human'
    comparisonResult($index);
  }

  $scope.robot = function ($index){
    $scope.modal.show();
    $scope.game.choice = 'Robot'
    comparisonResult($index);
  }

  function comparisonResult ($index) {
    if ($scope.game.choice === $scope.game.images[$index].hof) {
      $scope.game.result = 'Correct! You earned 10 points!'
      $scope.game.score += 10
    } else {
      $scope.game.result = 'Better luck next time...'
    }
  }

});
