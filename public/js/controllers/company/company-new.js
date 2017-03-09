angular
	.module('app.controllers')
	.controller('CompanyNewController', CompanyNewController);

CompanyNewController.$inject = ['$scope', 'Company'];

function CompanyNewController($scope, Company) {
	$scope.save = save;
	$scope.remove = remove;
	$scope.edit = edit;
	$scope.cancelar = cancelar;

	function loadMaskSelectric() {
		$('select').selectric();

		$('[data-mask=\'cep\']').mask('99999-999');
		$('[data-mask=\'cpf\']').mask('999.999.999-99');
		$('[data-mask=\'cnpj\']').mask('99999999999999');
		$('[data-mask=\'tel\']').mask('(99) 9999-9999');
	}

	function loadCompanies() {
		Company.query(function(res) {
			$scope.companies = res;
		});
	}

	function save() {
		if (!$scope.isEdit) {
			Company.save($scope.company, function(res) {
				alert('salvou');
				// redirect cadastro-confirmacao.html
				loadCompanies();
			});
		} else {
			var param = { id:$scope.company._id };

			Company.update(param, $scope.company, function(res) {
				alert('editou');
				loadCompanies();
			});
		}
	}

	function remove(id) {
		var param = { id:id };

		Company.delete(param, function(res) {
			alert('deletou');
			loadCompanies();
		});
	}

	function edit(company) {
		$scope.company = company;
		$scope.isEdit = true;
	}

	function cancelar() {
		$scope.company = {};
		$scope.isEdit = false;
	}

	loadCompanies();
	loadMaskSelectric();
}