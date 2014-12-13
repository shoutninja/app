/**
 * Settings.js
 * A home for the settings controller
 * (Check services for ninja.shout.local.settings)
 */
app.controller("ninja.shout.index.settings", ["$scope", "$rootScope", "ninja.shout.local.settings",
    function($scope, $rootScope, localSettings) {
        $rootScope.$watch(localSettings.watcher, function(val) {
            $scope.localSettings=localSettings;
            $scope.advertisingEnabled=localSettings.getCookieAlias("advertisingEnabled");
            $scope.filterEventsWithoutOwners=localSettings.getCookieAlias("filterEventsWithoutOwners");
        });
    }
]);