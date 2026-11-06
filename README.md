# Trau dich! – Spiele für die Klasse

Zwei interaktive Spiele für die gemeinsame Runde am Whiteboard. Die Klasse liest die Geschichten, stimmt ab und spricht darüber, wie man eigene Grenzen wahrnimmt und wann man Hilfe holen darf.

**[Spiele im Browser öffnen](https://niboxd.github.io/Trau-Dich/)**

## Die Spiele

- **Geheimnis-Quiz** – Bei neun Geschichten entscheidet ihr gemeinsam zwischen „Geheim halten“ und „Weitersagen“. Unter jeder Geschichte seht ihr direkt eine Rückmeldung mit kurzer Erklärung. Ihr könnt eure Antwort ändern.
- **Ampeltest** – Ihr begleitet Lina im Schwimmbad und überlegt bei jedem Abschnitt, wie sie sich wohl fühlt. Grün steht für Wohlfühlen, Gelb für Unsicherheit und Rot für ein inneres Nein. Drei Fragen schließen die Runde ab und laden zum Gespräch ein.

## Lokal öffnen

Lade das Repository herunter oder entpacke die ZIP-Datei. Öffne anschließend `index.html` im Browser. Lass die HTML-, CSS- und JavaScript-Dateien zusammen im selben Ordner. Die Spiele selbst funktionieren offline.

## Vorlage

Die Spiele sind ein eigenständiger Nachbau für den Unterricht auf Grundlage des früheren Kinderportals der Initiative „Trau dich!“. [Archiviertes Geheimnis-Quiz](https://web.archive.org/web/20260114065416/https://www.trau-dich.de/deine-spiele/das-geheimnis-quiz/) · [Archivierter Ampeltest](https://web.archive.org/web/20260114083322/https://www.trau-dich.de/deine-spiele/der-ampeltest/)


## Fragen und Geschichten ändern

Bearbeite die Textdateien mit einem Editor. Die Reihenfolge in der Liste bestimmt die Reihenfolge auf der Seite. Die Nummern werden automatisch vergeben.

### Geheimnis-Quiz

Kopiere in `fragen.js` einen Block von `{` bis `},` und füge ihn vor dem schließenden `];` ein. Passe die vier Felder an.

```js
  {
    text: 'Du hast ein Geburtstagsgeschenk versteckt.',
    antwort: 'Geheim halten',
    begruendung: 'Eine schöne Überraschung darf geheim bleiben.',
    hinweis: 'Würde jemandem etwas passieren, wenn du bis zum Geburtstag wartest?',
  },
```

Bei `antwort` stehen `Geheim halten` und `Weitersagen` zur Auswahl. Die Begründung erscheint bei der passenden Antwort, der Hinweis bei der anderen.

### Ampeltest

In `ampeltexte.js` steht pro Abschnitt eine Textzeile in doppelten Anführungszeichen. Kopiere eine Zeile einschließlich Komma und füge sie an der gewünschten Stelle ein. Die drei Farben erscheinen automatisch.

Öffne nach der Änderung `index.html` zum Ausprobieren. Für GitHub Pages lade die geänderten Dateien unter denselben Namen ins Hauptverzeichnis des Repositorys hoch.


