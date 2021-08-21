var nav = document.getElementById("nav");
var navHeight = nav.offsetHeight;
var cabecera = document.getElementById("cabecera");
var cabeceraHeight = nav.offsetTop;
var espacio = document.getElementById("espacio");
var isotipoCabecera = document.getElementById("isotipo-cabecera");
var logotipoCabecera = document.getElementById("logotipo-cabecera");
var isotipoMenu = document.getElementById("isotipo-menu");
var isotipoImgMenu = document.getElementById("isotipo-img-menu");
var video = document.getElementById("video");
var active = true;

var spanNosotros = document.getElementById("spanNosotros");
var spanPortafolio = document.getElementById("spanPortafolio");
var spanServicios = document.getElementById("spanServicios");

///////////////// INICIO HAMBURGUESA //////////////////////

window.addEventListener("resize", () => {
  if (window.innerWidth >= 781) {
    if (nav.className == "nav-vertical") {
      nav.classList.add("nav");
      nav.classList.remove("nav-vertical");
    }
    spanNosotros.innerHTML = "";
    spanNosotros.innerHTML = `<i class="fas fa-chevron-down"/>`;
    spanServicios.innerHTML = "";
    spanServicios.innerHTML = `<i class="fas fa-chevron-down" />`;
    spanPortafolio.innerHTML = "";
    spanPortafolio.innerHTML = `<i class="fas fa-chevron-down" />`;
  } else if (window.innerWidth <= 780) {
    spanNosotros.innerHTML = "";
    spanNosotros.innerHTML = `
				  <button onclick="nosotros()">
					  <i class="fas fa-chevron-down"/>
			  `;
    spanServicios.innerHTML = "";
    spanServicios.innerHTML = `
				  <button onclick="servicios()">
					  <i class="fas fa-chevron-down" />
			  `;
    spanPortafolio.innerHTML = "";
    spanPortafolio.innerHTML = `
				  <button onclick="portafolio()">
					  <i class="fas fa-chevron-down" />
			  `;
  }
});

var x = window.matchMedia("(max-width: 780px)");
myFunction(x);
function myFunction(x) {
  window.onscroll = function () {
    if (x.matches) {
      efectoNavegacionMobile();
    } else {
      efectoNavegacionDesktop();
    }
  };
  if (x.matches) {
    if (window.location.href.includes("equipo.html")) {
      cambiarAreas();
    }
    // if (window.location.href.includes('index.html')) {
    // 	video.setAttribute('src', '../img/video/Móvil final.mp4');
    // }
    espacio.style.height = String(cabecera.offsetHeight) + "px";
    spanNosotros.innerHTML = "";
    spanNosotros.innerHTML = `
				  <button onclick="nosotros()">
					  <i class="fas fa-chevron-down"/>
			  `;
    spanServicios.innerHTML = "";
    spanServicios.innerHTML = `
				  <button onclick="servicios()">
					  <i class="fas fa-chevron-down" />
			  `;
    spanPortafolio.innerHTML = "";
    spanPortafolio.innerHTML = `
				  <button onclick="portafolio()">
					  <i class="fas fa-chevron-down" />
			  `;
  }
}

const hamburger = document.getElementById("cabeceraHamburger");
window.onload = function () {
  var ul = document.getElementById("menu");
  var nosotros = document.getElementById("nosotros");
  var servicios = document.getElementById("servicios");
  var portafolio = document.getElementById("portafolio");

  document.onmousedown = function (e) {
    if (
      e.clientY <= ul.getBoundingClientRect().top ||
      e.clientY >=
        ul.getBoundingClientRect().top + ul.getBoundingClientRect().height
    ) {
      if (nav.className == "nav-vertical" && !(e.target == hamburger)) {
        nav.classList.toggle("nav");
        nav.classList.toggle("nav-vertical");
        nosotros.classList.add("submenu-hide");
        servicios.classList.remove("servicios");
        portafolio.classList.add("submenu-hide");
        console.log(cambio);
        if (cambio == true) {
          cambio = false;
        } else {
          cambio = true;
        }
        console.log(cambio);
      }
      if (nav.classList == "nav-vertical" && e.target == hamburger) {
        console.log(e.target);
        nosotros.classList.add("submenu-hide");
        servicios.classList.remove("servicios");
        portafolio.classList.add("submenu-hide");
      }
    }
  };
};

let cambio = false;
hamburger.addEventListener("click", () => {
  console.log("estas haciendo click en el eeventpo");
  if (cambio == true) {
    cambio = false;
    nav.classList.toggle("nav");
    nav.classList.toggle("nav-vertical");
  } else {
    nav.classList.toggle("nav");
    nav.classList.toggle("nav-vertical");
    cambio = true;
  }
});

/////////////// FIN HAMBURGURESA /////////////////////

var botonEnableNosotros = false;
function nosotros() {
  // console.log('Nosotros');
  var nosotros = document.getElementById("nosotros");
  var servicios = document.getElementById("servicios");
  var portafolio = document.getElementById("portafolio");
  servicios.classList.remove("servicios");
  botonEnableServicios = false;
  portafolio.classList.add("submenu-hide");
  botonEnablePortafolio = false;
  if (botonEnableNosotros == false) {
    botonEnableNosotros = true;
    nosotros.classList.remove("submenu-hide");
  } else {
    botonEnableNosotros = false;
    nosotros.classList.add("submenu-hide");
  }
}
var botonEnableServicios = false;
function servicios() {
  // console.log('Servicios');
  var nosotros = document.getElementById("nosotros");
  var servicios = document.getElementById("servicios");
  var portafolio = document.getElementById("portafolio");
  nosotros.classList.add("submenu-hide");
  botonEnableNosotros = false;
  portafolio.classList.add("submenu-hide");
  botonEnablePortafolio = false;
  if (botonEnableServicios == false) {
    botonEnableServicios = true;
    servicios.classList.add("servicios");
  } else {
    botonEnableServicios = false;
    servicios.classList.remove("servicios");
  }
}
var botonEnablePortafolio = false;
function portafolio() {
  // console.log('Portafolio');
  var nosotros = document.getElementById("nosotros");
  var servicios = document.getElementById("servicios");
  var portafolio = document.getElementById("portafolio");
  nosotros.classList.add("submenu-hide");
  botonEnableNosotros = false;
  servicios.classList.remove("servicios");
  botonEnableServicios = false;
  if (botonEnablePortafolio == false) {
    botonEnablePortafolio = true;
    portafolio.classList.remove("submenu-hide");
  } else {
    botonEnablePortafolio = false;
    portafolio.classList.add("submenu-hide");
  }
}

function cambiarAreas() {
  var divAreas = document.getElementById("equipoAreas");
  if (divAreas != null) {
    divAreas.innerHTML = `
			<select name="areas" id="areas" onchange=cambiarMiembros()>
				<option value="1">CEO</option>
				<option value="2">Diseño Gráfico</option>
				<option value="3">Desarrollo Web</option>
				<option value="4">Recursos Humanos</option>
				<option value="5">Community Manager</option>
				<option value="6">Ventas</option>
				<option value="7">Analítica</option>
				<option value="8">AudioVisual</option>
				<option value="9">Contable</option>
				<option value="10">Cuentas</option>
				<option value="11">Legal</option>
				<option value="12">Marketing</option>
				<option value="13">Redacción</option>
			</select>
		`;
  }
}
function cambiarMiembros() {
  var areas = document.getElementById("areas");
  var seleccionado = areas.value;
  createCards(seleccionado);
}

// cabeceraHamburger;

function efectoNavegacionMobile() {
  if (window.scrollY >= cabecera.offsetHeight / 2) {
    isotipoCabecera.classList.remove("isotipo-cabecera_move_left");
    logotipoCabecera.classList.remove("logotipo-cabecera-show");
    logotipoCabecera.classList.add("logotipo-cabecera-hide");
    isotipoCabecera.classList.add("isotipo-cabecera_move_right");
  } else {
    isotipoCabecera.classList.add("isotipo-cabecera_move_left");
    logotipoCabecera.classList.add("logotipo-cabecera-show");
  }
}

function efectoNavegacionDesktop() {
  if (window.scrollY >= cabecera.offsetHeight / 2) {
    isotipoMenu.classList.add("nav__isotipo-show");
    isotipoImgMenu.style.opacity = "1";
    isotipoImgMenu.style.transitionDelay = "1s";
    isotipoCabecera.classList.add("isotipo-cabecera-move-down");
    isotipoCabecera.classList.remove("isotipo-cabecera-move-up");
    // isotipoImgMenu.style.transitionDelay = '1s';
  } else {
    isotipoImgMenu.style.opacity = "0";
    isotipoImgMenu.style.transitionDelay = "-2s";
    isotipoMenu.classList.remove("nav__isotipo-show");
    isotipoCabecera.classList.remove("isotipo-cabecera-move-down");
    isotipoCabecera.classList.add("isotipo-cabecera-move-up");
    // isotipoImgMenu.style.transitionDelay = '0s';
  }
  if (window.pageYOffset >= cabeceraHeight) {
    nav.classList.add("nav-sticky");
    espacio.style.height = navHeight + "px";
  } else {
    nav.classList.remove("nav-sticky");
    espacio.style.height = "0px";
  }
}

$(".close, .nope").on('click', function () {
  $('.modal').addClass('hidden');
  $('.open').addClass('active');
})

$(".open").on('click', function () {
  $(this).removeClass('active');
  $('.modal').removeClass('hidden');
})


$(document).ready(function () {

  'use strict';

  var usernameError = true,
      emailError    = true,
      passwordError = true,
      passConfirm   = true;

  // Detect browser for css purpose
  if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
      $('.form form label').addClass('fontSwitch');
  }

  // Label effect
  $('input').focus(function () {

      $(this).siblings('label').addClass('active');
  });

  // Form validation
  $('input').blur(function () {

      // User Name
      if ($(this).hasClass('name')) {
          if ($(this).val().length === 0) {
              $(this).siblings('span.error').text('Please type your full name').fadeIn().parent('.form-group').addClass('hasError');
              usernameError = true;
          } else if ($(this).val().length > 1 && $(this).val().length <= 6) {
              $(this).siblings('span.error').text('Please type at least 6 characters').fadeIn().parent('.form-group').addClass('hasError');
              usernameError = true;
          } else {
              $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
              usernameError = false;
          }
      }
      // Email
      if ($(this).hasClass('email')) {
          if ($(this).val().length == '') {
              $(this).siblings('span.error').text('Please type your email address').fadeIn().parent('.form-group').addClass('hasError');
              emailError = true;
          } else {
              $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
              emailError = false;
          }
      }

      // PassWord
      if ($(this).hasClass('pass')) {
          if ($(this).val().length < 8) {
              $(this).siblings('span.error').text('Please type at least 8 charcters').fadeIn().parent('.form-group').addClass('hasError');
              passwordError = true;
          } else {
              $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
              passwordError = false;
          }
      }

      // PassWord confirmation
      if ($('.pass').val() !== $('.passConfirm').val()) {
          $('.passConfirm').siblings('.error').text('Passwords don\'t match').fadeIn().parent('.form-group').addClass('hasError');
          passConfirm = false;
      } else {
          $('.passConfirm').siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
          passConfirm = false;
      }

      // label effect
      if ($(this).val().length > 0) {
          $(this).siblings('label').addClass('active');
      } else {
          $(this).siblings('label').removeClass('active');
      }
  });


  // form switch
  $('a.switch').click(function (e) {
      $(this).toggleClass('active');
      e.preventDefault();

      if ($('a.switch').hasClass('active')) {
          $(this).parents('.form-peice').addClass('switched').siblings('.form-peice').removeClass('switched');
      } else {
          $(this).parents('.form-peice').removeClass('switched').siblings('.form-peice').addClass('switched');
      }
  });


  // Form submit
  $('form.signup-form').submit(function (event) {
      event.preventDefault();

      if (usernameError == true || emailError == true || passwordError == true || passConfirm == true) {
          $('.name, .email, .pass, .passConfirm').blur();
      } else {
          $('.signup, .login').addClass('switched');

          setTimeout(function () { $('.signup, .login').hide(); }, 700);
          setTimeout(function () { $('.brand').addClass('active'); }, 300);
          setTimeout(function () { $('.heading').addClass('active'); }, 600);
          setTimeout(function () { $('.success-msg p').addClass('active'); }, 900);
          setTimeout(function () { $('.success-msg a').addClass('active'); }, 1050);
          setTimeout(function () { $('.form').hide(); }, 700);
      }
  });

  // Reload page
  $('a.profile').on('click', function () {
      location.reload(true);
  });


});
