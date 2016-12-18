(function(){
    angular.module('LunchApp', [])
    .controller('LunchController', function($scope){
        $scope.list = "";

        $scope.check = function(){
            var list = $scope.list;
            var items = list.split(",");
            var arrayList = [];

            if (list == "") {
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
                    $scope.message = "Enjoy!";
                }
                else{
                    $scope.message = "Too much!"
                }
            }
        };


    });
})();