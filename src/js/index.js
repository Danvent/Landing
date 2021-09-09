$(document).ready(function () {
  "use strict";
  var email = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
  var phone = /^[0-9]{8,13}$/;
  var name = /^[a-zA-Z\s]{8,25}$/;
  var usernameError = true,
    emailError = true,
    passwordError = true,
    passConfirm = true;

  // Detect browser for css purpose
  if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
    $(".form form label").addClass("fontSwitch");
  }

  // Label effect
  $("input").focus(function () {
    $(this).siblings("label").addClass("active");
  });

  // Form validation
  $("input").blur(function () {
    // User Name
    if ($(this).hasClass("name")) {
      if ($(this).val().length === 0) {
        $(this)
          .siblings("span.error")
          .text("Campo obligatorio")
          .fadeIn()
          .parent(".form-group")
          .addClass("hasError");
        usernameError = true;
      } else if ($(this).val().length > 1 && $(this).val().length <= 6) {
        $(this)
          .siblings("span.error")
          .text("Escriba al menos 6 caracteres")
          .fadeIn()
          .parent(".form-group")
          .addClass("hasError");
        usernameError = true;
      } else if (!name.test($(this).val())) {
        $(this)
          .siblings("span.error")
          .text("El nombre no puede contener caracteres especiales")
          .fadeIn()
          .parent(".form-group")
          .addClass("hasError");
        usernameError = true;
      } else {
        $(this)
          .siblings(".error")
          .text("")
          .fadeOut()
          .parent(".form-group")
          .removeClass("hasError");
        usernameError = false;
      }
    }
    // Email
    if ($(this).hasClass("email")) {
      if ($(this).val().length == "") {
        $(this)
          .siblings("span.error")
          .text("Campo obligatorio")
          .fadeIn()
          .parent(".form-group")
          .addClass("hasError");
        emailError = true;
      } else if (!email.test($(this).val())) {
        $(this)
          .siblings("span.error")
          .text("Correo invalido")
          .fadeIn()
          .parent(".form-group")
          .addClass("hasError");
        emailError = true;
      } else {
        $(this)
          .siblings(".error")
          .text("")
          .fadeOut()
          .parent(".form-group")
          .removeClass("hasError");
        emailError = false;
      }
    }

    //Phone
    if ($(this).hasClass("phone")) {
      if ($(this).val().length === 0) {
        $(this)
          .siblings("span.error")
          .text("Campo obligatorio")
          .fadeIn()
          .parent(".form-group")
          .addClass("hasError");
        usernameError = true;
      } else if ($(this).val().length > 1 && $(this).val().length <= 8) {
        $(this)
          .siblings("span.error")
          .text("Escriba al menos 9 digitos")
          .fadeIn()
          .parent(".form-group")
          .addClass("hasError");
        usernameError = true;
      } else if (!phone.test($(this).val())) {
        $(this)
          .siblings("span.error")
          .text("Solo se permiten números")
          .fadeIn()
          .parent(".form-group")
          .addClass("hasError");
        usernameError = true;
      } else {
        $(this)
          .siblings(".error")
          .text("")
          .fadeOut()
          .parent(".form-group")
          .removeClass("hasError");
        usernameError = false;
      }
    }

    // User enterprise
    if ($(this).hasClass("enterprise")) {
      if ($(this).val().length === 0) {
        $(this)
          .siblings("span.error")
          .text("Campo obligatorio")
          .fadeIn()
          .parent(".form-group")
          .addClass("hasError");
        usernameError = true;
      } else {
        $(this)
          .siblings(".error")
          .text("")
          .fadeOut()
          .parent(".form-group")
          .removeClass("hasError");
        usernameError = false;
      }
    }

    // label effect
    if ($(this).val().length > 0) {
      $(this).siblings("label").addClass("active");
    } else {
      $(this).siblings("label").removeClass("active");
    }
  });

  // form switch
  $("a.switch").click(function (e) {
    $(this).toggleClass("active");
    e.preventDefault();

    if ($("a.switch").hasClass("active")) {
      $(this)
        .parents(".form-peice")
        .addClass("switched")
        .siblings(".form-peice")
        .removeClass("switched");
    } else {
      $(this)
        .parents(".form-peice")
        .removeClass("switched")
        .siblings(".form-peice")
        .addClass("switched");
    }
  });

  // Form submit
  $("form.signup-form").submit(function (event) {
    event.preventDefault();

    if (
      usernameError == true ||
      emailError == true ||
      passwordError == true ||
      passConfirm == true
    ) {
      $(".name, .email, .phone, .service").blur();
    } else {
      $(".signup, .login").addClass("switched");

      setTimeout(function () {
        $(".signup, .login").hide();
      }, 700);
      setTimeout(function () {
        $(".brand").addClass("active");
      }, 300);
      setTimeout(function () {
        $(".heading").addClass("active");
      }, 600);
      setTimeout(function () {
        $(".success-msg p").addClass("active");
      }, 900);
      setTimeout(function () {
        $(".success-msg a").addClass("active");
      }, 1050);
      setTimeout(function () {
        $(".form").hide();
      }, 700);
    }
  });

  // Reload page
  $("a.profile").on("click", function () {
    location.reload(true);
  });
});
