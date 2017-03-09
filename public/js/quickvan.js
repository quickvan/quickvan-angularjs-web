var app = angular.module('app', [
  'ngRoute', 'app.controllers', 'app.services'
]);

angular.module('app.controllers', []);
angular.module('app.services', ['ngResource']);

app.provider('appConfig', function() {
  var config = {
    baseUrl: 'http://localhost:3000/api'
  }

  return {
    config: config,
    $get: function() {
      return config;
    }
  };
});

app.config([
    '$routeProvider', '$httpProvider',
    function($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'js/views/home.html',
                //controller: 'CompanyNewController'
                controller: function($location) { 
                    console.log("/");
                    $('[data-mask=\'cep\']').mask('99999-999');
                }
            })
            .when('/home', {
                templateUrl: 'js/views/home.html',
                //controller: 'CompanyNewController'
                controller: function($location) { console.log("/home"); }
            })
            .when('/busca', {
                templateUrl: 'js/views/busca.html',
                //controller: 'CompanyNewController'
                controller: function($location) { console.log("/busca"); }
            })
            .when('/contato', {
                templateUrl: 'js/views/contato.html',
                controller: function($location) { console.log("/contato"); }
            })
            .when('/cadastro-confirmacao', {
                templateUrl: 'js/views/cadastro-confirmacao.html',
                controller: function($location) { console.log("/cadastro-confirmacao"); }
            })
            .when('/cadastro-empresa', {
                templateUrl: 'js/views/cadastro-empresa.html',
                controller: 'CompanyNewController'
            })
            .when('/cadastro-pessoa', {
                templateUrl: 'js/views/cadastro-pessoa.html',
                controller: 'PersonController'
            })
            .when('/empresa', {
                templateUrl: 'js/views/empresa.html',
                controller: function($location) { console.log("/empresa"); }
            })
            .when('/login', {
                templateUrl: 'js/views/login.html',
                controller: function($location) { console.log("/login"); }
            })
            .when('/meus-dados', {
                templateUrl: 'js/views/meus-dados.html',
                controller: 'CompanyNewController'
            })
            .when('/meus-veiculos', {
                templateUrl: 'js/views/meus-veiculos.html',
                controller: function($location) { console.log("/meus-veiculos"); }
            })
            .when('/minhas-viagens', {
                templateUrl: 'js/views/minhas-viagens.html',
                controller: function($location) { 
                    console.log("/minhas-viagens"); 
                }
            })
            .when('/politicas', {
                templateUrl: 'js/views/politicas.html',
                controller: function($location) { 
                    console.log("/politicas"); 
                }
            })
            .when('/termos', {
                templateUrl: 'js/views/termos.html',
                controller: function($location) { 
                    console.log("/termos"); 
                }
            })
            .when('/veiculo', {
                templateUrl: 'js/views/veiculo.html',
                controller: function($location) { 
                    console.log("/veiculo"); 
                    $('select').selectric();
                }
            })
            .when('/veiculo-detalhe', {
                templateUrl: 'js/views/veiculo-detalhe.html',
                controller: function($location) { 
                    console.log("/veiculo-detalhe"); 
                }
            })
            .when('/como-funciona', {
                templateUrl: 'js/views/como-funciona.html',
                controller: function($location) { 
                    console.log("/como-funciona"); 
                }
            })
            .when('/viagem', {
                templateUrl: 'js/views/viagem.html',
                controller: function($location) { 
                    console.log("/viagem"); 
                }
            })
    }
]);

app.run();