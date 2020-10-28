'use sctict';


// ?1 day?

const cartButton = document.querySelector("#cart-button"),
       modal = document.querySelector(".modal"),
       close = document.querySelector(".close"),
       buttonAuth = document.querySelector('.button-auth'),
       modalAuth = document.querySelector('.modal-auth'),
       closeAuth = document.querySelector('.close-auth'),
       logInForm = document.querySelector('#logInForm'),
       loginAuth = document.querySelector('#login'),
       userName = document.querySelector('.user-name'),
       buttonOut = document.querySelector('.button-out'),
       cardsRestaurants = document.querySelector('.cards-restaurants'),
       containerPromo = document.querySelector('.container-promo'),
       restaurants = document.querySelector('.restaurants'),
       menu = document.querySelector('.menu'),
       logo = document.querySelector('.logo'),
       cardsMenu = document.querySelector('.cards-menu');

let login = localStorage.getItem('gloDevilery');


function toggleModal() {
  modal.classList.toggle("is-open");
}

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

function createCardsRestaurants() {
  const card = `
  <a class="card card-restaurant">
						<img src="img/pizza-plus/preview.jpg" alt="image" class="card-image"/>
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title">Пицца плюс</h3>
								<span class="card-tag tag">50 мин</span>
							</div>
							<div class="card-info">
								<div class="rating">
									4.5
								</div>
								<div class="price">От 900 ₽</div>
								<div class="category">Пицца</div>
							</div>
						</div>
					</a>
  `;

  cardsRestaurants.insertAdjacentHTML('beforeend', card);
}
function createCardGood() {
  const card = document.createElement('div');
  card.className = 'card';
  card.insertAdjacentHTML('beforeend', `
						<img src="img/pizza-plus/pizza-classic.jpg" alt="image" class="card-image"/>
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title card-title-reg">Пицца Классика</h3>
							</div>
							<div class="card-info">
								<div class="ingredients">Соус томатный, сыр «Моцарелла», сыр «Пармезан», ветчина, салями,
									грибы.
								</div>
							</div>
							<div class="card-buttons">
								<button class="button button-primary button-add-cart">
									<span class="button-card-text">В корзину</span>
									<span class="button-cart-svg"></span>
								</button>
								<strong class="card-price-bold">510 ₽</strong>
							</div>
						</div>
  `);
  cardsMenu.insertAdjacentElement('beforeend',card);
}


createCardsRestaurants();
function openGoods(event) {
  const target = event.target;
  const restaurant = target.closest('.cards-restaurants');
  console.log(restaurant);
  if (restaurant) {
    containerPromo.classList.add('hide');
    restaurants.classList.add('hide');
    menu.classList.remove('hide');
    cardsMenu.textContent = '';
    createCardGood();
  }
  
}



cardsRestaurants.addEventListener('click', openGoods);
logo.addEventListener('click', () => {
  containerPromo.classList.remove('hide');
    restaurants.classList.remove('hide');
    menu.classList.add('hide');
});

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);
