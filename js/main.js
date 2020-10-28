const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

// ?1 day?


const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.querySelector('#logInForm');
const loginAuth = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');

let login = localStorage.getItem('gloDevilery');



function toggleModalAuth() {
    modalAuth.classList.toggle("is-open");
    loginAuth.style.borderColor = '';
}

function checkAuth() {

  if (login) {
    authorized();
  } else {
    noAuthorized();
  }

}

function authorized() {

  function logOut() {
    
    login = '';
    localStorage.removeItem('gloDevilery');

  buttonAuth.style.display = "";
  userName.style.display = "";
  buttonOut.style.display = "";
  buttonOut.removeEventListener('click', logOut);
  checkAuth();
  }
  console.log('Авторизован');
  buttonAuth.style.display = "none";
  userName.textContent = login;
  userName.style.display = "inline";
  buttonOut.style.display = "block";


  buttonOut.addEventListener('click', logOut);

}

function noAuthorized() {
  console.log('Не авторизован');

  function logIn(event) {
    
    event.preventDefault();
    if(loginAuth.value.trim()) {

      login = loginAuth.value;
      localStorage.setItem('gloDevilery', login);
      toggleModalAuth();
      buttonAuth.removeEventListener('click', toggleModalAuth);
      closeAuth.removeEventListener('click', toggleModalAuth);
      logInForm.removeEventListener('submit', logIn); 
      logInForm.reset();
      checkAuth();
      } else {
          loginAuth.style.borderColor = '#ff0000';
      }
      
  }

  buttonAuth.addEventListener('click', toggleModalAuth);
closeAuth.addEventListener('click', toggleModalAuth);
logInForm.addEventListener('submit', logIn);
modalAuth.addEventListener('click', (event) => {
  if(event.target.classList.contains('is-open')) {
    toggleModalAuth();
  }
});



}

checkAuth();


