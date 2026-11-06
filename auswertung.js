function renderResults() {
  let correct = 0;
  const rows = questions.map(([story, solution, reason], i) => {
    const right = Number(savedAnswers[i]) === solution;
    correct += Number(right);
    const row = document.createElement('details');
    const heading = document.createElement('summary');
    heading.className = right ? 'right' : 'wrong';
    row.dataset.correct = String(right);
    const label = document.createElement('span');
    label.className = 'review-heading';
    label.textContent = `${i + 1}. ${story}`;
    const icon = document.createElement('span');
    icon.className = 'result-icon';
    icon.setAttribute('role', 'img');
    icon.setAttribute('aria-label', right ? 'Richtig' : 'Falsch');
    icon.textContent = right ? '✓' : '✕';
    label.append(icon);
    heading.append(label);
    const response = document.createElement('p');
    response.textContent = `Eure Antwort: ${labels[Number(savedAnswers[i])]}. Richtige Antwort: ${labels[solution]}.`;
    const explanation = document.createElement('p');
    explanation.textContent = reason;
    row.append(heading, response, explanation);
    return row;
  });
  review.replaceChildren(...rows);
  const discuss = document.getElementById('discuss');
  discuss.hidden = correct === questions.length;
  discuss.addEventListener('click', () => {
    const onlyWrong = discuss.getAttribute('aria-pressed') === 'false';
    discuss.setAttribute('aria-pressed', String(onlyWrong));
    discuss.textContent = onlyWrong ? 'Alle Geschichten zeigen' : 'Noch mal besprechen';
    rows.forEach(row => { row.hidden = onlyWrong && row.dataset.correct === 'true'; });
  });
  correctCount.textContent = `✓ ${correct} richtig`;
  wrongCount.textContent = `${questions.length - correct} falsch`;
  document.getElementById('empty').hidden = true;
  document.getElementById('results').hidden = false;
  document.getElementById('edit').href = `quiz.html#${savedAnswers}`;

}
const review = document.getElementById('review');
const correctCount = document.getElementById('correctCount');
const wrongCount = document.getElementById('wrongCount');
if (hasAnswers) renderResults();

