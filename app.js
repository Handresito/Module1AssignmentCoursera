(function(){
    angular.module('LunchApp', [])
    .controller('LunchController', function($scope){
        $scope.list = "";

        $scope.check = function(){
            var list = $scope.list;
            var items = list.split(",");
            $scope.counterItems = 0;
            var arrayList = [];

            if (list == "") {
                $scope.borderStatus = "errorBorder";
                $scope.statusClass = "error";
                $scope.message = "Please enter data first";
            }
            else{
                for(var i = 0; i < items.length; i++){
                        if(items[i].toString() !== " "){
                            arrayList.push(items[i].trim());            
                        }
                        else{
                            
                            alert("You insert an empty item.")
                        }
                }

                if(arrayList.length <= 3){
                    $scope.borderStatus = "fineBorder";
                    $scope.statusClass = "fine";
                    $scope.message = "Enjoy!";
                }
                else{
                    $scope.borderStatus = "fineBorder";
                    $scope.statusClass = "fine";
                    $scope.message = "Too much!"
                }
            }
            $scope.counterItems = "Number of items:" + arrayList.length;
        };


    });
})();