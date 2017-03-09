angular
    .module('app.services')
    .service('Company', CompanyService);

CompanyService.$inject = ['$resource', 'appConfig'];

function CompanyService($resource, appConfig) {
    var url = appConfig.baseUrl + '/companies/:id';
    var params = {id: '@id'};
    var options = {
        update: {
            method: 'PUT'
        }
    };

    return $resource(url, params, options);
}