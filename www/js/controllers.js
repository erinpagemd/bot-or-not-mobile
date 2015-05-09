angular
.module('starter.controllers', [])
.controller('GameCtrl', function($scope, ArrayFactory, $location, $rootScope, $ionicModal) {

  $scope.images = ArrayFactory;
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
    // if ($scope.turn === 5) {
    //   $location.path('/results')
    //   $('.modal-backdrop').hide();
    // }
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

  $scope.openModal = function(){
    $scope.modal.show();
  };

  $scope.closeModal = function(){
    $scope.modal.hide();
  }

  $scope.$on('$destroy', function(){
    $scope.modal.remove();
  });

  $scope.$on('modal.hidden', function(){
    // execute action
  });

  $scope.$on('modal.removed', function(){
    // execute action
  });
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
