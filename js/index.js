const container = document.querySelector('#container');
const hintMSG = `${document.location}smoke`;

window.onload = function() {
  runFirstStage();
}

function printPromise(data, timeout) {
  return new Promise(resolve => {
    let id = setTimeout(() => {
      clearTimeout(id);
      resolve(data);
    }, timeout)
  });
}

function setPause(ms) {
  return new Promise(resolve => {
    const id = setTimeout(() => {
      clearTimeout(id);
      resolve();
    }, ms)
  });
}

async function typeWords(sentence) {
  const p = document.createElement('p');
  p.classList.add('message');
  container.appendChild(p);
  for (let i = 0; i < sentence.length; i++) {
    p.innerText = await printPromise(p.innerText + sentence[i], 80);
  }
  
};

function renderForm() {
  const tpl = document.querySelector('#tpl');
  container.appendChild(tpl.content.children.form);
  const form = document.querySelector('#form');
  return form;
}

async function runFirstStage() {
  await setPause(1500);
  await typeWords('What\'s cookin, good lookin?');
  await setPause(1500);
  await typeWords('Let\'s get acquainted. What\'s U\'r name?');
  await setPause(1000);
  const form = renderForm();
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    runSecondStage();
  });
}

async function runSecondStage() {
  container.innerHTML = 'processing...';
  await setPause(2500);
  container.innerHTML = '';
  await typeWords('It was joke.');
  await setPause(1500);
  await typeWords('I don\'t interested in U\'r name.');
  await setPause(500);
  await typeWords('I already know everything about U.');
  await setPause(1500);
  await typeWords('U were hacked.');
  await setPause(1500);
  await typeWords('Do U know why? Do U want to know?');
  await setPause(1000);
  await typeWords('Because U R...');
  await setPause(1000);
  container.innerHTML = '';
  runFinalStage();
}

function runFinalStage() {
  window.location.assign('./smoke/');
}