var app = angular.module('myApp', ["ngRoute"]);



app.controller("tab1-Ctrl", function($scope) {

    //Contains the filter options
    $scope.filterOptions = {
        stores: [
            { id: 1, name: 'Show All', type: "all" },
            { id: 2, name: 'Text', type: "text" },
            { id: 3, name: 'Videos', type: "videos" },
            { id: 4, name: 'Photos', type: "photos" }
        ]
    };


    //Mapped to the model to filter
    $scope.filterItem = {
        store: $scope.filterOptions.stores[0]
    }



    $scope.tab1 = function() {

            location.href = "#!tab-1";
        }
        //Custom filter - filter based on the type selected
    $scope.customFilter = function(data) {
        if (data.type === $scope.filterItem.store.type) {
            return true;
        } else if ($scope.filterItem.store.type === "all") {
            return true;
        } else {
            return false;
        }
    };


    //The data that is shown
    $scope.data = [{
            name: "photo1.jpg",

            type: "photos"
        },
        {
            name: "photo2.jpg",

            type: "photos"
        },
        {
            name: "video1.mp4",

            type: "videos"
        },
        {
            name: "video2.mp4",

            type: "videos"
        },
        {
            name: "text1.txt",
            type: "text"
        },
        {
            name: "text1.txt",
            type: "text"
        }
    ];
});


app.controller("tab2-Ctrl", function($scope) {
    $scope.name = 'Thumbnails';

    $scope.items = [
        { "src": "./images/image1.jpg", "alt": "image1" },
        { "src": "./images/image2.jpg", "alt": "image2" },
        { "src": "./images/image3.jpg", "alt": "image3" },
        { "src": "./images/image4.jpg", "alt": "image4" },
        { "src": "./images/image5.jpg", "alt": "image5" },
    ];
    $scope.tab2 = function() {

        location.href = "#!tab-2";
    }
    $scope.mythumb = function() {
        console.log(this.item.src);
        var src = (this.item.src).trim();
        $scope.imgSrc = src;
    }

});


app.controller("tab3-Ctrl", function($scope) {
    $scope.add = function() {
        var newItem = $scope.itemname;
        $scope.items.pop();
        $scope.items.unshift(newItem);
    }

    $scope.tab3 = function() {


        location.href = "#!tab-3";
    }
});


app.config(function($routeProvider) {
    $routeProvider
        .when("/tab-1", {
            templateUrl: "tab1.html",
            controller: "tab1-Ctrl"

        })
        .when("/tab-2", {
            templateUrl: "tab2.html",
            controller: "tab2-Ctrl"

        })
        .when("/tab-3", {
            templateUrl: "tab3.html",
            controller: "tab3-Ctrl"

        });
});