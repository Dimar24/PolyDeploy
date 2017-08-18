﻿(function () {

    // Get module.
    var module = angular.module('cantarus.poly-deploy');

    // Create service.
    module.factory('APIUserDataService', ['$http', 'apiUrl',
        function ($http, apiUrl) {

            var controllerUrl = apiUrl + 'APIUser/';

            // GET
            // Get all API users.
            function getUsers() {

                // Make request.
                return $http.get(controllerUrl + 'GetAll').then(
                    function (response) {

                        // Return unpacked data.
                        return response.data;
                    });
            }

            // POST
            // Create a new API user.
            function createUser(name) {

                // Make request.
                return $http.post(controllerUrl + 'Create?name=' + name).then(
                    function (response) {

                        // Return unpacked data.
                        return response.data;
                    });
            }

            // PUT
            // Update API user.
            function updateUser(apiUser) {

                // Make request.
                return $http.put(controllerUrl + 'Update', apiUser).then(
                    function (response) {

                        // Return unpacked data.
                        return response.data;
                    });
            }

            // DELETE
            // Delete API user;
            function deleteUser(apiUser) {

                // Make request.
                return $http.delete(controllerUrl + 'Delete', apiUser).then(
                    function (response) {

                        // Return unpacked data.
                        return response.data;
                    });
            }

            return {
                getUsers: getUsers,
                createUser: createUser,
                updateUser: updateUser,
                deleteUser: deleteUser
            };

        }]);

})();
