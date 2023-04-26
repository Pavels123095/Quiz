document.addEventListener("DOMContentLoaded", (event) => {

  document.querySelector('.modal-quiz-open').addEventListener('click', function () {
    document.querySelector('.modal-quiz-wrapper').classList.add('modal--active');
    document.querySelector('.btn-down').setAttribute('disabled', 'disabled');
    document.querySelector('.btn-up').setAttribute('disabled', 'disabled');
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
    let n_step = parseInt(step.getAttribute('data-number')) + 1;
    document.getElementById('step-view-number').textContent = n_step;
    step.classList.remove('step--active');
    document.querySelector('[data-id="step-' + n_step + '"]').classList.add('step--active');
    step = document.querySelector('.step--active');
    stepup();
    btnnext.setAttribute('disabled', 'disabled');
  });

  btnprev.addEventListener('click', function () {
    let n_step = parseInt(step.getAttribute('data-number')) - 1;
    step.classList.remove('step--active');
    document.getElementById('step-view-number').textContent = n_step;
    document.querySelector('[data-id="step-' + n_step + '"]').classList.add('step--active');
    step = document.querySelector('.step--active');
    stepup();
  });

  let labels = document.querySelectorAll('.modal-quiz-form-step input[type="radio"]');
  for (let l = 0; l < labels.length; l++) {
    if (labels[l] != undefined) {
      labels[l].addEventListener('change', function (ev) {
        let n_step = parseInt(step.getAttribute('data-number')) + 1;
        document.getElementById('step-view-number').textContent = n_step;
        step.classList.remove('step--active');
        document.querySelector('[data-id="step-' + n_step + '"]').classList.add('step--active');
        step = document.querySelector('.step--active');
        stepup();
        btnnext.setAttribute('disabled', 'disabled');
      });
    }
  }

  let inputs = document.querySelectorAll('.modal-quiz-form-step input[type="text"]');
  for (let i = 0; i <= inputs.length; i++) {
    if (inputs[i] != undefined) {
      inputs[i].addEventListener('keyup', function (ev) {
        var elem = ev.target;
        if (elem.value != '') {
          btnnext.removeAttribute('disabled');
        } else {
          if (elem.value.length == 0) {
            btnnext.setAttribute('disabled', 'disabled');
          } else {
            btnnext.removeAttribute('disabled');
          }
        }
      });
    }
  }

  function stepup() {
    let n = parseInt(step.getAttribute('data-number'));
    if (n <= 1) {
      btnprev.setAttribute('disabled', 'disabled');
    } else if (n > 1 && n <= 4) {
      btnprev.removeAttribute('disabled');
      if (step.getAttribute('data-number') >= 1 && step.getAttribute('data-number') < 4) {
        btnnext.removeAttribute('disabled');
      } else {
        btnnext.setAttribute('disabled', 'disabled');
      }
    }
  }


});