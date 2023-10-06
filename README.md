# Lebenslauf Generator
![](https://i.imgur.com/PHUmduz.png)

## Beschreibung
React-Anwendung mit welcher man Lebensläufe erstellen und anschließend als PDF herunterladen kann.

Die in den Eingabefeldern vorgenommenen Änderungen werden auf dem Lebenslauf direkt sichtbar. Sobald der Benutzer mit dem Ergebnis zufrieden ist, ist es möglich, das Dokument über den Download-Knopf herunterzuladen.

Zudem kann der Benutzer den Demo-Knopf drücken, womit das Dokument komplett ausgefüllt wird. Dies dient zur Visualisierung und Inspiration, wie ein bereits fertiger Lebenslauf aussehen kann.

## Demo
Link zur [Live-Website](https://jonashencke.github.io/CV-application/) ▶️


https://github.com/JonasHencke/CV-application/assets/109872786/690a3f71-69fe-4cfe-a71f-54344ae6e3bb


## Features

- responsive design für PC, Tablet und Smartphone
- Lebenslauf kann als PDF-Datei heruntergeladen werden
- intuitives User-Interface
- direkte Umsetzung der gewünschten Änderungen
- Demo-Funktion

## Verwendete Technologien
- Javascript
- React
- CSS
- Webpack
- npm:
    - jsPDF
    - html2canvas
## Herangehensweise und Lernzuwachs
Bei diesem Projekt handelt es sich um das erste Projekt, welches ich mit dem Framwork React erstellt habe. In erster Linie wollte ich etwas mit der useState Hook bauen.Das erstellen eines Lebenslauf-Generators hat sich hierfür angeboten, da man den eingetragenen Text direkt über State auf der Website darstellen kann. Um das Projekt vollkommen funktionstüchtig zu machen, habe ich noch die Möglichkeit implementiert den erstellten Lebenslauf herunterladen zu können.

Die Folgende Dinge habe ich aus diesem Projekt mitgenommen:
- Verwendung der useState Hook mit strings, arrays und objects
- Hinzufügen und Entfernen von Elementen in State Arrays
- Darstellung von useState Arrays mit Hilfe der .map() Funktion
- Weitergabe von State und setState Funktion über component props
## Quellen
- das Bild, welches für die Demo-Funktion genutzt wird, stammt von dieser [Seite](https://www.pexels.com/de-de/foto/selektives-fokusfoto-der-frau-im-weissen-t-shirt-das-mit-grunen-pflanzen-im-hintergrund-aufwirft-2899744/)
- die auf der Website verwendeten SVGs stammen allesamt von [SVGRepo](https://www.svgrepo.com/). Teilweise habe ich diese per Code oder mit dem Programm "Affinity Designer" verändert.
- Als Inspiration für das Design des Lebenslaufs gilt das abgebildete Design auf dieser [Seite](https://de.postermywall.com/index.php/art/template/a2cdcd00754134f91082ece36dd4b8e2/resume-cv-template-design). Die Umsetzung des Designs in JSX und CSS code erfolgte vollständig durch meine Arbeit.
## Google Lighthouse 
Nach der Analyse von Google Lighthouse wurde die Web-Applikation wie folgt bewertet:

![](https://i.imgur.com/UEQSy72.png)
