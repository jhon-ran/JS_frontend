//Fonctionnalité 1

let foot = document.querySelector('footer');

function showClick(){
  console.log('clique');
}
foot.addEventListener("click", showClick);

//Fonctionnalité 1-bis 
let footer = document.querySelector('footer');
let x = 0;

function showNClicks(){
  x += 1;
  console.log('clic numéro x ' + x);
}
footer.addEventListener("click", showNClicks);

//Fonctionnalité 2

let menuHamb = document.querySelector('button');

let navbarHeader = document.getElementById('navbarHeader');

function toggleOn() {
  navbarHeader.classList.toggle("collapse");
};

menuHamb.addEventListener("click", toggleOn); 


//Fonctionnalité 3
let btn = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[0];

function changeColor(){
  let cardChange = document.querySelector('p.card-text');
    cardChange.style.color = 'red';
}

btn.addEventListener('click', changeColor);

//Fonctionnalité 4 
let btn2 = document.querySelectorAll('div.btn-group')[1].children[1];

function changeToGreen(){
  let cardChange2 = document.querySelectorAll('p.card-text');

  if (cardChange2[1].style.color === 'green'){
    cardChange2[1].style.color = '' ;
    }else
      cardChange2[1].style.color = 'green';
}

btn2.addEventListener('click', changeToGreen);

//Fonctionnalité 5
var bootstrap = document.getElementsByTagName('link')[0];
var header = document.querySelector('header'); 
var headTag = document.querySelector('head');  
var statusHeader = false;

var removeBootstrap = function () {
  if (statusHeader == false) {
    bootstrap.parentNode.removeChild(bootstrap);
    statusHeader = true;
  } else if (statusHeader == true) {
    headTag.appendChild(bootstrap);
    statusHeader= false;
  }
};

header.addEventListener('dblclick', removeBootstrap);