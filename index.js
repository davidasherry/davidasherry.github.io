

function codeAddress() {
	var hey = document.querySelector("#hey");
	hey.classList.toggle('fade');
}

window.onload = codeAddress;


function copyText(){
	var copy = document.querySelector("#copy");

	var address = document.querySelector("#address");

  	address.select();

  	document.execCommand("copy");
}

copy.addEventListener("click", copyText);