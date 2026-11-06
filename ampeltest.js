const vorlage = document.getElementById('ampel-vorlage');
const karten = document.getElementById('ampel-karten');

ampeltexte.forEach((text, index) => {
  const karte = vorlage.content.firstElementChild.cloneNode(true);
  const abschnitt = index + 1;
  const geschichte = karte.querySelector('p');
  geschichte.id = `ampel-story-${abschnitt}`;
  geschichte.textContent = text;
  karte.setAttribute('aria-describedby', geschichte.id);
  karte.querySelector('legend').textContent = `Abschnitt ${abschnitt}`;
  karte.querySelectorAll('input').forEach(input => {
    input.name = `ampel-${abschnitt}`;
  });
  karten.append(karte);
});
