angular.Module('weatherApp',[])
.controller('weatherController', ['$scope', function($scope){
    var wc = this;
    
    wc.cities =
    [
        {
            name: "Amarillo",
            url_name: "Amarillo",
            state: "TX"
        },
        ];
    
    
    
}]);
