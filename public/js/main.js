const ln_1 = document.querySelector(".ln01");
const ln_2 = document.querySelector(".ln02");
const ln_3 = document.querySelector(".ln03");
let togglenavbar = document.querySelector(".togglenavbar");
let nav = document.querySelector("#mobilenav");
let logo = document.querySelector("#logo");
let closeNav = document.querySelector(".closeNav");

const closeNavBar = ()=>{
	let a =	ln_1.classList.toggle('ln1')
	let b =	ln_2.classList.toggle('ln2')
	let c = ln_3.classList.toggle('ln3')
};

const navBarOn =()=>{
	nav.classList.toggle('nav1');
};

const logoOff =()=>{
	logo.classList.toggle('hide-logo');
}
		
togglenavbar.addEventListener('click', closeNavBar);
togglenavbar.addEventListener('click', navBarOn);
togglenavbar.addEventListener('click', logoOff);

// var my_dialog = $('#mobilenav').dialog({});//options, etc
// $('#mobilenav .closeNav').click(function () {
//   my_dialog.close();
// });