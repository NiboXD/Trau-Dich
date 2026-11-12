const vorlage = document.getElementById('ampel-vorlage');
const karten = document.getElementById('ampel-karten');
const abschluss = document.getElementById('ampel-abschluss');
abschluss.hidden = ampeltexte.length > 0;

ampeltexte.forEach((text, index) => {
  const karte = vorlage.content.firstElementChild.cloneNode(true);
  karte.hidden = index !== 0;
  const abschnitt = index + 1;
  const geschichte = karte.querySelector('p');
  geschichte.id = `ampel-story-${abschnitt}`;
  geschichte.textContent = text;
  karte.setAttribute('aria-describedby', geschichte.id);
  karte.querySelector('legend').textContent = `Abschnitt ${abschnitt}`;
  karte.querySelectorAll('input').forEach(input => {
    input.name = `ampel-${abschnitt}`;
  });
  karte.addEventListener('change', () => {
    const next = karte.nextElementSibling || abschluss;
    next.hidden = false;
  });
  karten.append(karte);
});

