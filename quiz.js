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
  const feedback = document.createElement('p');
  feedback.className = 'answer-feedback';
  feedback.setAttribute('role', 'status');
  const [, solution, reason, hint] = questions[questionIndex];
  labels.forEach((label, choice) => {
    const option = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `answer-${questionIndex}`;
    input.value = String(choice);
    const caption = document.createElement('span');
    caption.className = 'option-text';
    caption.textContent = label;
    input.addEventListener('change', () => {
      const right = choice === solution;
      feedback.className = right ? 'answer-feedback right' : 'answer-feedback wrong';
      feedback.textContent = right ? 'Finden wir auch! ' + reason : 'Überleg noch einmal. ' + hint;
    });
    option.append(input, caption);
    options.append(option);
  });
  card.append(options, feedback);
  return card;
}
document.getElementById('cards').append(...questions.map((_, i) => createCard(i)));

