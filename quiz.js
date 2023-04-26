document.addEventListener("DOMContentLoaded", (event) => {

  document.querySelector('.modal-quiz-open').addEventListener('click', function () {
    document.querySelector('.modal-quiz-wrapper').classList.add('modal--active');
    document.querySelector('.btn-down').setAttribute('disabled', 'disabled');
  });
  document.querySelector('.modal-quiz-close').addEventListener('click', function () {
    document.querySelector('.modal-quiz-wrapper').classList.remove('modal--active');
  });

  let step = document.querySelector('.step--active');
  let btnprev = document.querySelector('.btn-down');
  let btnnext = document.querySelector('.btn-up');

  document.addEventListener('keydown', function (e) {
    if (e.keyCode == 27) { // код клавиши Escape, но можно использовать e.key
      document.querySelector('.modal-quiz-wrapper').classList.remove('modal--active');
    }
  });

  btnnext.addEventListener('click', function (elem) {
    inputsrequired(elem);
    let n_step = parseInt(step.getAttribute('data-number')) + 1;
    console.log(n_step);
    console.log(step);
    document.getElementById('step-view-number').textContent = n_step;
    step.classList.remove('step--active');
    document.querySelector('[data-id="step-' + n_step + '"]').classList.add('step--active');
    step = document.querySelector('.step--active');
    stepup();
  });

  btnprev.addEventListener('click', function (elem) {
    inputsrequired(elem);
    let n_step = parseInt(step.getAttribute('data-number')) - 1;
    step.classList.remove('step--active');
    document.getElementById('step-view-number').textContent = n_step;
    document.querySelector('[data-id="step-' + n_step + '"]').classList.add('step--active');
    step = document.querySelector('.step--active');
    stepup();
  });

  function stepup() {
    if (step.getAttribute('data-number') <= 1) {
      btnprev.setAttribute('disabled', 'disabled');
    } else if (step.getAttribute('data-number') > 1 && step.getAttribute('data-number') <= 4) {
      btnprev.removeAttribute('disabled');
      if (step.getAttribute('data-number') >= 1 && step.getAttribute('data-number') < 4) {
        btnnext.removeAttribute('disabled');
      } else {
        btnnext.setAttribute('disabled', 'disabled');
      }
    }
  }

  function inputsrequired() {
    //let inputradio = step.querySelectorAll('input[type="radio"]');
    let inputtext = step.querySelectorAll('input[type="text"]');
    for (var i; i <= inputtext.length; i++) {
      if (inputtext[i] == '') {
        btnnext.setAttribute('disabled');
        break;
      } else {
        btnnext.removeAttribute('disabled');
      }
    }
  }

});