let p = document.getElementById("apply"); 
p.onclick = check; 

function check(evento) {
	
	input = document.querySelectorAll('form > fieldset > input');

	for (var i = 0; i < input.length; i++) {

		console.log(i);
		

		if(input[i].value == ""){
			alert("Error, there are empty fields");		
			break;
		}



	}

}