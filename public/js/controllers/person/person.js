angular
	.module('app.controllers')
	.controller('PersonController', PersonController);

PersonController.$inject = ['$scope', 'Person'];

function PersonController($scope, Person) {
	//$scope.qualquercoisa = "";
	$scope.save = save;
	
	function loadMaskSelectric() {
		$('select').selectric();

		$('[data-mask=\'cep\']').mask('99999-999');
		$('[data-mask=\'cpf\']').mask('999.999.999-99');
		$('[data-mask=\'cnpj\']').mask('99999999999999');
		$('[data-mask=\'tel\']').mask('(99) 9999-9999');
	}

	function save() {
		if (!$scope.isEdit) {
			Person.save($scope.person, function(res) {
				alert('salvou');
			});
		} else {
			var param = { id:$scope.person._id };

			Person.update(param, $scope.person, function(res) {
				alert('editou');
			});
		}
	}

	loadMaskSelectric();
}