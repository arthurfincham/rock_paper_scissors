if (document.querySelector('input[type="radio"]')) {
  document.querySelectorAll('input[type="radio"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {

      $('input[type="radio"]+label').addClass('no_animation');

      $('input[type="radio"]:checked+label').addClass('background_change');
      $('input[type="submit"]').addClass('shoot_shake');
    });
  });
}