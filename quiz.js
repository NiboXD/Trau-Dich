function createCard(questionIndex) {
  const card = document.createElement('fieldset');
  card.className = 'panel story';
  const title = document.createElement('legend');
  title.textContent = `Geschichte ${questionIndex + 1}`;
  card.append(title);
  const text = document.createElement('p');
  text.id = `story-${questionIndex}`;
  text.textContent = questions[questionIndex][0];
  card.setAttribute('aria-describedby', text.id);
  card.append(text);
  const options = document.createElement('div');
  options.className = 'options';
  labels.forEach((label, choice) => {
    const option = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `answer-${questionIndex}`;
    input.required = true;
    input.value = String(choice);
    input.checked = hasAnswers && savedAnswers[questionIndex] === input.value;
    const caption = document.createElement('span');
    caption.className = 'option-text';
    caption.textContent = label;
    option.append(input, caption);
    options.append(option);
  });
  card.append(options);
  return card;
}
const form = document.getElementById('form');
document.getElementById('cards').append(...questions.map((_, i) => createCard(i)));
const progressText = document.getElementById('progress-text');
const missing = document.getElementById('missing');

let markedCard;

function clearMissing() {
  markedCard?.classList.remove('missing-answer');
  markedCard = undefined;
  missing.hidden = true;
}

function updateProgress() {
  const answered = form.querySelectorAll('input:checked').length;
  progressText.textContent = `${answered} von ${questions.length} beantwortet`;
}
form.addEventListener('change', event => {
  if (event.target.closest('fieldset') === markedCard) clearMissing();
  updateProgress();
});
window.addEventListener('pageshow', updateProgress);
updateProgress();

form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const answers = questions.map((_, i) => data.get(`answer-${i}`));
  const firstMissing = answers.indexOf(null);
  if (firstMissing !== -1) {
    clearMissing();
    missing.hidden = false;
    missing.textContent = `Wählt noch eine Antwort bei Geschichte ${firstMissing + 1}.`;
    const input = form.querySelector(`[name="answer-${firstMissing}"]`);
    markedCard = input.closest('fieldset');
    markedCard.classList.add('missing-answer');
    markedCard.scrollIntoView({ block: 'center' });
    input.focus({ preventScroll: true });
    return;
  }
  location.href = `auswertung.html#${answers.join('')}`;
});

