function upload() {

	var ipt = document.getElementById('iptAttachment');
	var lbl	= ipt.nextElementSibling;

	ipt.addEventListener('change', function(el) {
		var file = '';
		var extension = '';
		var ableExtensions = ["jpg"];
		
		//file = el.target.value.split('\\').pop();
		file = el.target.value.split('\\')[2];
		extension = file.split('.');

		if (ableExtensions.indexOf(extension[1]) < 0) {
			//document.querySelector('.erro').classList.remove('hide');
		} else {
			lbl.querySelector('span').innerHTML = file; 
			lbl.classList.add('has-file');
			document.querySelector('.erro').classList.add('hide');
		}
	});

}