bulkApp.controller('BulkCtrl', function BulkCtrl($scope) {
  $scope.bulk = [];
  $scope.basePrice = 3;
  $scope.calculatePrice = function(weight, freerange) {

    var freerangeAddon = 0.1;
    weight = parseInt(weight);
    freerange = parseInt(freerange);

    var adjustedBasePrice = $scope.findBasePrice(weight);

      return adjustedBasePrice * (1 + freerange * freerangeAddon) * (weight);
  };

  $scope.findBasePrice = function(weight) {

    var discount = Math.floor(weight / 100);

    if(discount > 25) {
      discount = 25;
    }

    return $scope.basePrice * (1 - discount / 100);
  };

  $scope.addOrder = function() {
    $scope.bulk.push({ weight: $scope.weight, freerange: $scope.free_range, price: $scope.calculatePrice($scope.weight, $scope.free_range) })
  };

});
