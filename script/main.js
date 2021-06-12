var elsToggleButton = document.querySelectorAll('.about-feature__btn');


elsToggleButton.forEach(function (button){
  button.addEventListener('click', function () {
    button.closest('.about-feature__card').classList.toggle('about-feature__card-active')
  });
});