angular
    .module('app.services')
    .service('Person', PersonService);

PersonService.$inject = ['$resource', 'appConfig'];

function PersonService($resource, appConfig) {
    var url = appConfig.baseUrl + '/person/:id';
    var params = {id: '@id'};
    var options = {
        update: {
            method: 'PUT'
        }
    };

    return $resource(url, params, options);
}