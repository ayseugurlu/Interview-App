const data = [
  {
    id: 1,
    topic: "IT-Fundamental",
    question: "Was ist Linux?",
    answer:
      "Linux ist ein UNIX-basiertes Betriebssystem. Linus Torvalds hat es zuerst vorgestellt. Es ist ein Open-Source-Betriebssystem, das entwickelt wurde, um den Benutzern ein kostenloses und kostengünstiges Betriebssystem zur Verfügung zu stellen.",
  },
  {
    id: 2,
    topic: "IT-Fundamental",
    question:
      "Wenn Sie eine Datei in Linux gespeichert haben und diese Datei später umbenennen möchten, welcher Befehl ist dafür vorgesehen?",
    answer: "Der Befehl 'mv' wird verwendet, um eine Datei umzubenennen.",
  },
  {
    id: 3,
    topic: "IT-Fundamental",
    question: "Was ist CLI?",
    answer:
      "CLI steht für Command Line Interface. Es ist eine Schnittstelle, die es Benutzern ermöglicht, deklarative Befehle einzugeben, um den Computer anzuweisen, Operationen auszuführen.",
  },
  {
    id: 4,
    topic: "IT-Fundamental",
    question: "Erklären Sie Agile kurz.",
    answer:
      "Agile ist eine beliebte Sammlung von Methoden und Praktiken, die sich hauptsächlich auf interaktive Entwicklung konzentrieren. Dank selbstorganisierender Zusammenarbeit zwischen funktionsübergreifenden Teams werden die Anforderungen der Kunden und mögliche Lösungen ermittelt.",
  },
  {
    id: 5,
    topic: "IT-Fundamental",
    question: "Was sind einige wichtige Teile des Agile-Prozesses?",
    answer:
      "Die verschiedenen Prinzipien von Agile sind:\n1. Kundenzufriedenheit: Die Bedürfnisse des Kunden müssen durch die frühe und schnelle Lieferung des Produkts erfüllt werden.\n2. Veränderungen begrüßen: Änderungsbedarfe müssen berücksichtigt werden, auch wenn sie spät im Entwicklungsprozess eingebracht werden.\n3. Häufige Lieferung: Eine häufige Produktlieferung innerhalb eines kurzen Zeitrahmens gewährleisten, dank eines klaren Verständnisses des Produkts.\n4. Zusammenarbeit: Entwickler und andere Teammitglieder müssen während des gesamten Projekts zusammenarbeiten.\n5. Motiviertes Team: Motivierte und engagierte Einzelpersonen, denen vertraut wird, die Arbeit zu erledigen, können den Erfolg des Projekts sicherstellen.\n6. Face-to-Face-Gespräche: Face-to-Face-Gespräche haben sich als die effizienteste Methode der Kommunikation erwiesen.\n7. Funktionierende Software: Dies ist das primäre Maß für den Fortschritt.\n8. Konstantes Tempo: Mit einem konstanten Tempo ermöglicht der Agile-Prozess eine optimale nachhaltige Entwicklung.\n9. Gutes Design: Durch die Fokussierung auf technische Exzellenz und großartiges Design kann die Agilität des Projekts drastisch verbessert werden.\n10. Einfachheit: Die Zeit, die nicht mit der Arbeit verbracht wird, muss minimiert und vereinfacht werden.\n11. Selbstorganisiert: Selbstorganisierte Teams bieten die besten Architekturen, Anforderungen und Designs.\n12. Reflektieren und Anpassen: Die Effektivität des Agile-Prozesses kann durch regelmäßige Reflexion verbessert werden.",
  },
  {
    id: 6,
    topic: "IT-Fundamental",
    question: "Was ist Git?",
    answer:
      "GIT ist ein verteiltes Versionskontrollsystem und Source-Code-Management (SCM) System, das darauf ausgelegt ist, kleine und große Projekte mit Geschwindigkeit und Effizienz zu handhaben.",
  },
  {
    id: 7,
    topic: "IT-Fundamental",
    question: "Nennen Sie die verschiedenen Git-Repository-Hosting-Dienste?",
    answer: ["Github", "Gitlab", "Bitbucket", "SourceForge", "GitEnterprise"],
  },
  {
    id: 8,
    topic: "HTML",
    question: "Was ist HTML?",
    answer:
      'HTML ist ein Akronym für Hyper Text Markup Language, das zur Erstellung von Webseiten und Webanwendungen verwendet wird. Lassen Sie uns sehen, was mit Hypertext Markup Language und Webseite gemeint ist.\n\n- **Hypertext:** Hypertext bedeutet einfach "Text innerhalb von Text." Ein Text, der einen Link innerhalb hat, ist Hypertext. Immer wenn Sie auf einen Link klicken, der Sie auf eine neue Webseite bringt, haben Sie auf einen Hypertext geklickt. Hypertext ist eine Möglichkeit, zwei oder mehr Webseiten (HTML-Dokumente) miteinander zu verknüpfen.\n\n- **Markup-Sprache:** Eine Markup-Sprache ist eine Computersprache, die verwendet wird, um Layout- und Formatierungskonventionen auf ein Textdokument anzuwenden. Eine Markup-Sprache macht Text interaktiver und dynamischer. Sie kann Text in Bilder, Tabellen, Links usw. verwandeln.',
  },
  {
    id: 9,
    topic: "HTML",
    question: "Müssen alle HTML-Tags paarweise geschrieben werden?",
    answer:
      "Dies ist eine häufige Frage in HTML-Vorstellungsgesprächen. Nein, es gibt einige HTML-Tags, die als Einzel-Tags verwendet werden können.",
  },
  {
    id: 10,
    topic: "HTML",
    question: "Was ist semantisches HTML?",
    answer:
      "Semantisches HTML ist eine Art von Code, der HTML-Tags verwendet, um die Bedeutung des Inhalts auf einer Seite zu beschreiben, anstatt nur dessen Erscheinungsbild. Dies kann es Suchmaschinen und anderer Software erleichtern, die Seite zu verarbeiten und zu verstehen.",
  },
  {
    id: 11,
    topic: "HTML",
    question: "Was ist der Unterschied zwischen einer Klasse und einer ID?",
    answer:
      "Eine Klasse ist eine Möglichkeit, HTML-Elemente für das Styling zu verwenden. Sie sind nicht einzigartig und können mehreren Elementen zugewiesen werden. Eine ID hingegen ist einzigartig und kann nur einem einzelnen Element zugewiesen werden.",
  },
  {
    id: 12,
    topic: "HTML",
    question:
      "Was ist der Unterschied zwischen inline, inline-block und block?",
    answer:
      "Block-Elemente sind `<div>` und `<p>`. Sie beginnen normalerweise in einer neuen Zeile und können Platz für eine ganze Zeile oder Breite einnehmen. Inline-Elemente sind `<a>`, `<span>`, `<strong>` und `<img>`-Tags. Sie beginnen nicht in einer neuen Zeile, erscheinen jedoch in der gleichen Zeile wie der Inhalt und die Tags neben ihnen. Inline-Block-Elemente haben Padding und Margins sowie festgelegte Höhen- und Breitenwerte, sind jedoch ähnlich wie Inline-Elemente.",
  },
  {
    id: 13,
    topic: "HTML",
    question: "Erzählen Sie etwas über die Verwendung des CSS-Boxmodells.",
    answer:
      "Das CSS-Boxmodell ist ein Box-Bindungselement für HTML, das Padding, Border, Margin und den tatsächlichen Inhalt umfasst. Mit dem Boxmodell haben wir die Möglichkeit, um Elemente herum einen Rand hinzuzufügen und den Abstand zwischen den Elementen zu definieren.",
  },
  {
    id: 14,
    topic: "HTML",
    question: "Welche Listenarten sind in HTML verfügbar?",
    answer:
      "Die gängigen Listenarten, die in HTML verfügbar sind, sind wie folgt:\n- Geordnete Liste (Ordered list)\n- Ungeordnete Liste (Unordered list)\n- Definitionsliste (Definition list)\n- Menüliste (Menu list)\n- Verzeichnisliste (Directory list)",
  },
  {
    id: 15,
    topic: "IT-Fundamental",
    question: "Was ist Jira?",
    answer:
      "JIRA ist ein Software-Tool, das von der Softwarefirma Atlassian entwickelt wurde. Es wird hauptsächlich für Fehler- und Problemverfolgung sowie für Projektmanagement verwendet. Es ist die perfekte Lösung zur Organisation von Aufgaben und zur Verwaltung agiler Teams.",
  },
  {
    id: 16,
    topic: "IT-Fundamental",
    question: "Welche Issue-Typen werden in JIRA erstellt und verfolgt?",
    answer:
      "Ein Issue in JIRA kann ein Fehler, ein Feature, eine Aufgabe oder jede andere Projektarbeit sein. Jedes JIRA-Projekt enthält Standard-Issue-Typen, und diese Issue-Typen hängen von der Art des Projekts ab, das Sie verwenden.",
  },
  {
    id: 17,
    topic: "IT-Fundamental",
    question:
      "Erklären Sie die Issue-Typen in JIRA (Fehler, Epic, Aufgabe, Unteraufgabe, Story ...usw.)",
    answer:
      "- **Fehler (Bug):** Ein Fehler ist ein Problem, das in der Funktionalität eines Produkts besteht.\n- **Story:** Die Story ist die kleinste Arbeitseinheit, die abgeschlossen werden muss.\n- **Epic:** Epic ist eine große User Story, die in kleinere Stories unterteilt werden muss.\n- **Aufgabe (Task):** Eine Aufgabe ist eine Arbeit, die abgeschlossen werden muss.\n- **Unteraufgabe (Subtask):** Eine Unteraufgabe ist ein Teil der Arbeit, der erledigt werden muss, um eine Aufgabe abzuschließen.",
  },
  {
    id: 18,
    topic: "CSS",
    question: "Was sind CSS-Variablen und wie werden sie verwendet?",
    answer:
      "CSS-Variablen, auch bekannt als benutzerdefinierte Eigenschaften, ermöglichen es Ihnen, wiederverwendbare Werte in CSS zu definieren, die im gesamten Stylesheet verwendet werden können. Sie werden mit der Funktion `var()` definiert und können dynamisch mit JavaScript aktualisiert werden. CSS-Variablen helfen dabei, den Styling-Prozess zu vereinfachen, Konsistenz zu fördern und es einfacher zu machen, globale Stiländerungen vorzunehmen.",
  },
  {
    id: 19,
    topic: "CSS",
    question: "Was sind Media Queries in CSS und wie werden sie verwendet?",
    answer:
      "Media Queries in CSS ermöglichen es Ihnen, unterschiedliche Stile basierend auf verschiedenen Geräten, Bildschirmgrößen und anderen Medienbedingungen anzuwenden. Sie werden verwendet, um responsive Designs zu erstellen und das Layout sowie die Präsentation einer Webseite an verschiedene Geräte und Bildschirmauflösungen anzupassen. Media Queries verwenden die Regel `@media` und können unterschiedliche CSS-Regeln basierend auf Bedingungen wie Bildschirmbreite, Orientierung, Pixeldichte und mehr spezifizieren.",
  },
  {
    id: 20,
    topic: "CSS",
    question: "Warum würden Sie CSS Grid anstelle von Flexbox verwenden?",
    answer:
      "CSS Grid ist ein neueres Layout-System, das ein leistungsfähigeres und flexibleres gitterbasiertes Layout-System als Flexbox bietet. Während Flexbox besser für eindimensionale Layouts geeignet ist, ist CSS Grid für zweidimensionale Layouts ausgelegt, was es zu einer besseren Wahl für komplexere Webdesigns macht.",
  },
  {
    id: 21,
    topic: "CSS",
    question: "Was ist ein CSS Grid?",
    answer:
      "Ein CSS Grid ist ein Layout-System zur Erstellung von zweidimensionalen, rasterbasierten Layouts. Es ist ein leistungsstarkes Werkzeug zur Erstellung von responsiven Layouts und kann verwendet werden, um eine Vielzahl unterschiedlicher Layout-Typen zu erstellen.",
  },
  {
    id: 22,
    topic: "CSS",
    question: "Was sind die Unterschiede zwischen Flexbox und CSS Grid?",
    answer:
      "Flexbox: Entwickelt zum Erstellen von eindimensionalen Layouts, wie das Ausrichten von Elementen horizontal oder vertikal innerhalb eines Containers. Es eignet sich ideal zum Erstellen von Komponenten wie Navigationsleisten, Menüs oder flexiblen Inhaltscontainern.\nCSS Grid: Entwickelt zum Erstellen von zweidimensionalen Layouts, wobei Sie sowohl Zeilen als auch Spalten definieren und Elemente überall innerhalb des Grids platzieren können. Es ist geeignet für die Erstellung komplexer Layouts, einschließlich Grids mit variierenden Spaltenbreiten und Zeilenhöhen.",
  },
  {
    id: 23,
    topic: "Bootstrap",
    question: "Wie kann man eine Warnung in Bootstrap erstellen?",
    answer:
      "Erstellen Sie ein Wrapper-`<div>` und fügen Sie die Klasse `.alert` und eine der kontextuellen Klassen hinzu, um eine grundlegende Warnung zu erstellen (z.B. `.alert-success`, `.alert-info`, `.alert-warning`, `.alert-danger`, `.alert-primary`, `.alert-secondary`, `.alert-light` oder `.alert-dark`).",
  },
  {
    id: 24,
    topic: "Bootstrap",
    question: "Wie erstellt man Navigationselemente in Bootstrap?",
    answer:
      "Die Navigationselemente in Bootstrap können auf verschiedene Arten gestaltet werden. Das Markup und die Basis-Klasse sind bei allen gleich: `.nav`. Um tabellarische Navigation oder Tabs zu erstellen, beginnen Sie mit der Erstellung einer ungeordneten Liste unter Verwendung der Basis-Klasse `.nav`. Die Klasse `.nav-tabs` sollte hinzugefügt werden.",
  },
  {
    id: 25,
    topic: "JavaScript",
    question: "Was sind die Escape-Zeichen in JavaScript?",
    answer:
      "In JavaScript verwenden wir Escape-Zeichen, typischerweise den Rückwärtsschrägstrich (``), wenn wir mit Sonderzeichen wie Ampersands (`&`), Apostrophen (`‘`), doppelten Anführungszeichen (`“ “`) und einfachen Anführungszeichen (`‘ ‘`) arbeiten. Alles, was innerhalb der Escape-Zeichen eingeschlossen ist, wird von JavaScript angezeigt.\nZusätzlich gibt es sechs weitere Escape-Zeichen in JavaScript:\n- `\b` – Rückschritt\n- `\f` – Seitenvorschub\n- `\n` – Neue Zeile\n- `\r` – Wagenrücklauf\n- `\t` – Horizontaler Tabulator\n- `\v` – Vertikaler Tabulator\nDiese werden in HTML oder JS-Code nicht ausgeführt. Sie wurden ursprünglich zur Steuerung von Faxgeräten, Schreibmaschinen und ähnlichen Geräten entwickelt.",
  },
  {
    id: 26,
    topic: "JavaScript",
    question: "Wer hat JavaScript entwickelt?",
    answer:
      "JavaScript wurde 1995 von Brendan Eich entwickelt. Er stellte JavaScript vor, während er Mitglied von Netscape Communications war. Brendan wurde von Java, Self und Scheme inspiriert und entschied sich, JavaScript zu erstellen.",
  },
  {
    id: 27,
    topic: "JavaScript",
    question: "Was ist JavaScript Hoisting?",
    answer:
      "Beim Einsatz der Methode 'JavaScript Hoisting' werden beim Ausführen des Codes alle Variablen an den Anfang des ursprünglichen/aktuellen Scopes verschoben. Wenn Sie eine Variable irgendwo im Code deklarieren, wird sie an den Anfang verschoben.\nDiese Methode gilt nur für die Deklaration einer Variablen und nicht für die Initialisierung der Variablen. Funktionen werden ebenfalls an den Anfang verschoben, während Funktionsdefinitionen nicht an den Anfang verschoben werden.\nIm Wesentlichen spielt es keine große Rolle, wo wir die Variable im Code deklarieren.",
  },
  {
    id: 28,
    topic: "IT-Fundamental",
    question: "Wann sollte man ein Flussdiagramm zeichnen?",
    answer:
      "Die Verwendung eines Flussdiagramms hat eine Vielzahl von Vorteilen:\n- Es hilft, komplexe Prozesse zu klären.\n- Es identifiziert Schritte, die keinen Wert für den internen oder externen Kunden hinzufügen, einschließlich Verzögerungen; unnötiger Lagerung und Transport; unnötiger Arbeit, Duplikation und zusätzlichen Kosten; Kommunikationsstörungen.\n- Es hilft Teammitgliedern, ein gemeinsames Verständnis des Prozesses zu gewinnen und dieses Wissen zur Datensammlung, Problemerkennung, Fokussierung von Diskussionen und Identifizierung von Ressourcen zu nutzen.\n- Es dient als Grundlage für das Design neuer Prozesse.",
  },
  {
    id: 29,
    topic: "JavaScript",
    question: "Was sind die Methoden des Number-Objekts in JavaScript?",
    answer:
      "Das Number-Objekt enthält nur die Standardmethoden, die Teil jeder Objektdefinition sind:\n- `toExponential()`: Erzwingt, dass eine Zahl in wissenschaftlicher Notation angezeigt wird, auch wenn die Zahl im Bereich liegt, in dem JavaScript normalerweise die Standardnotation verwendet.\n- `toFixed()`: Formatiert eine Zahl mit einer bestimmten Anzahl von Dezimalstellen.\n- `toLocaleString()`: Gibt eine Zeichenfolgenversion der aktuellen Zahl in einem Format zurück, das je nach lokalen Einstellungen des Browsers variieren kann.",
  },
  {
    id: 30,
    topic: "JavaScript",
    question:
      "Was ist der Unterschied zwischen `null` und `undefined` in JavaScript?",
    answer:
      "`null` ist ein absichtlich gesetzter Wert, der anzeigt, dass eine Variable keinen Wert hat oder leer ist. `undefined` hingegen bedeutet, dass eine Variable deklariert, aber noch nicht zugewiesen wurde. `null` ist ein Wert, während `undefined` den Zustand der Nichtzuweisung beschreibt.",
  },
  {
    id: 31,
    topic: "CSS",
    question: "Wie funktioniert das `z-index` in CSS?",
    answer:
      "`z-index` ist eine CSS-Eigenschaft, die die Stapelreihenfolge von Elementen bestimmt. Elemente mit höherem `z-index` erscheinen über Elementen mit niedrigerem `z-index`. Diese Eigenschaft wirkt nur auf Elemente, die eine Positionierung (z.B. `relative`, `absolute`, `fixed` oder `sticky`) haben. Ein Element mit `z-index: 10` wird also über einem Element mit `z-index: 5` angezeigt.",
  },
  {
    id: 32,
    topic: "Bootstrap",
    question: "Wie implementiert man ein responsives Layout mit Bootstrap?",
    answer:
      "Bootstrap bietet eine Reihe von Grid-Klassen, um responsives Design zu erstellen. Sie verwenden die Klassen `.container` für das Layout und `.row` sowie `.col`-Klassen für die Spalten. Durch die Verwendung von `col-{breakpoint}-{number}`-Klassen können Sie die Spaltenbreiten für verschiedene Bildschirmgrößen anpassen. Beispielsweise ermöglicht `col-md-6` eine Spalte, die auf mittleren und größeren Bildschirmen 6 von 12 verfügbaren Spalten einnimmt.",
  },
  {
    id: 33,
    topic: "JavaScript",
    question: "Was ist der Unterschied zwischen `==` und `===` in JavaScript?",
    answer:
      "`==` ist der Vergleichsoperator für Gleichheit, der eine Typkonvertierung durchführt, bevor er die Werte vergleicht. `===` ist der strikte Vergleichsoperator, der keine Typkonvertierung durchführt und somit nur dann `true` zurückgibt, wenn beide Werte denselben Typ und denselben Wert haben. Beispielsweise ist `5 == '5'` wahr, während `5 === '5'` falsch ist.",
  },
  {
    id: 34,
    topic: "JavaScript",
    question:
      "Was ist der Unterschied zwischen `let`, `const` und `var` in JavaScript?",
    answer:
      "`let` und `const` wurden in ES6 eingeführt und haben Blockscope, was bedeutet, dass sie nur innerhalb des Blocks sichtbar sind, in dem sie deklariert wurden. `const` ist für unveränderliche Werte gedacht und muss bei der Deklaration initialisiert werden. `var` hat Funktionsscope oder globalen Scope, was bedeutet, dass es außerhalb des Blocks sichtbar ist, in dem es deklariert wurde. `var`-Variablen können auch vor ihrer Deklaration verwendet werden (Hoisting), während `let` und `const` nicht hoisted werden.",
  },
  {
    id: 35,
    topic: "JavaScript",
    question: "Was ist ein Promise in JavaScript?",
    answer:
      "Ein Promise ist ein Objekt in JavaScript, das einen zukünftigen Wert repräsentiert, der asynchron berechnet wird. Ein Promise kann sich in einem von drei Zuständen befinden: `pending` (während des Wartens auf das Ergebnis), `fulfilled` (wenn das Ergebnis erfolgreich zurückgegeben wurde) oder `rejected` (wenn ein Fehler aufgetreten ist). Promises werden verwendet, um asynchrone Operationen wie HTTP-Anfragen zu handhaben und eine sauberere, lesbare Syntax für das Arbeiten mit asynchronem Code zu bieten.",
  },
  {
    id: 36,
    topic: "CSS",
    question: "Wie setzt man den Hintergrund eines Elements mit CSS?",
    answer:
      "Der Hintergrund eines Elements kann mit der `background`-Eigenschaft in CSS gesetzt werden. Die `background`-Eigenschaft kann eine Farbe, ein Bild, eine Position, eine Größe und eine Wiederholung für den Hintergrund eines Elements festlegen. Zum Beispiel: `background: #ff0000 url('image.jpg') no-repeat center center;` setzt den Hintergrund auf eine rote Farbe, ein Bild, das nicht wiederholt wird, und zentriert wird.",
  },
  {
    id: 37,
    topic: "CSS",
    question: "Was ist der Unterschied zwischen `padding` und `margin` in CSS?",
    answer:
      "`padding` ist der Innenabstand eines Elements, also der Abstand zwischen dem Inhalt und dem Rand des Elements. `margin` ist der Außenabstand eines Elements, also der Abstand zwischen dem Rand des Elements und den benachbarten Elementen. `padding` wird innerhalb der Elementgrenzen hinzugefügt, während `margin` außerhalb der Grenzen hinzugefügt wird.",
  },
  {
    id: 38,
    topic: "HTML",
    question: "Was ist der Zweck des `alt`-Attributs in HTML?",
    answer:
      "Das `alt`-Attribut in HTML wird verwendet, um eine alternative Beschreibung für ein Bild bereitzustellen, falls das Bild nicht geladen werden kann oder für Benutzer von Bildschirmlesern. Es verbessert die Zugänglichkeit und sorgt dafür, dass der Inhalt der Webseite auch ohne Bilder verständlich bleibt.",
  },
  {
    id: 39,
    topic: "HTML",
    question: "Wie fügt man eine Tabelle in HTML ein?",
    answer:
      "Eine Tabelle in HTML wird mit dem `<table>`-Tag erstellt. Innerhalb der Tabelle werden die `<tr>`-Tags für Zeilen, `<td>`-Tags für Tabellenzellen und optional `<th>`-Tags für Tabellenüberschriften verwendet. Ein einfaches Beispiel: \n```html\n<table>\n  <tr>\n    <th>Überschrift 1</th>\n    <th>Überschrift 2</th>\n  </tr>\n  <tr>\n    <td>Wert 1</td>\n    <td>Wert 2</td>\n  </tr>\n</table>\n```",
  },
  {
    id: 40,
    topic: "JavaScript",
    question: "Wie verwendet man `fetch` für HTTP-Anfragen in JavaScript?",
    answer:
      "`fetch` ist eine moderne API in JavaScript, um HTTP-Anfragen zu machen. Um eine HTTP-Anfrage zu machen, verwenden Sie `fetch(url)` und erhalten ein Promise zurück, das die Antwort enthält. Sie können dann `.then()` verwenden, um die Antwort zu verarbeiten. Beispiel: \n```javascript\nfetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error('Fehler:', error));\n```",
  },
  {
    id: 41,
    topic: "Bootstrap",
    question: "Wie verwendet man das Grid-System von Bootstrap?",
    answer:
      'Das Grid-System von Bootstrap basiert auf einem 12-Spalten-Raster. Um es zu verwenden, umschließen Sie Ihre Inhalte in einem `.container` oder `.container-fluid` und verwenden Sie `.row` für Zeilen. Dann fügen Sie `.col-{breakpoint}-{number}`-Klassen für die Spalten hinzu. Zum Beispiel: `<div class="row"><div class="col-md-6">...</div><div class="col-md-6">...</div></div>` erstellt zwei Spalten auf mittleren und größeren Bildschirmen.',
  },
  {
    id: 42,
    topic: "IT-Fundamental",
    question:
      "Was sind die grundlegenden Prinzipien der objektorientierten Programmierung?",
    answer:
      "Die grundlegenden Prinzipien der objektorientierten Programmierung (OOP) sind:\n1. **Kapselung:** Daten und Methoden werden zusammen in einer Klasse gekapselt, um die interne Implementierung zu verbergen und die Benutzung zu vereinfachen.\n2. **Vererbung:** Klassen können Eigenschaften und Methoden von anderen Klassen erben, was die Wiederverwendbarkeit und Erweiterbarkeit des Codes fördert.\n3. **Polymorphismus:** Erlaubt es, dass unterschiedliche Klassen die gleiche Methode auf unterschiedliche Weise implementieren können, um unterschiedliche Ergebnisse zu erzielen.\n4. **Abstraktion:** Versteckt die komplexe Implementierung und zeigt nur die notwendigen Teile der Klasse nach außen, um die Nutzung zu vereinfachen.",
  },
  {
    id: 43,
    topic: "HTML",
    question: "Wie fügt man ein Formular in HTML ein?",
    answer:
      'Ein Formular in HTML wird mit dem `<form>`-Tag erstellt. Innerhalb des Formulars können verschiedene Eingabefelder wie `<input>`, `<textarea>`, `<select>` und `<button>` verwendet werden. Beispiel: \n```html\n<form action="/submit" method="post">\n  <label for="name">Name:</label>\n  <input type="text" id="name" name="name">\n  <button type="submit">Absenden</button>\n</form>\n```',
  },
  {
    id: 44,
    topic: "JavaScript",
    question: "Was sind die verschiedenen Arten von Schleifen in JavaScript?",
    answer:
      "In JavaScript gibt es mehrere Arten von Schleifen:\n- **`for`-Schleife:** Führt den Codeblock eine bestimmte Anzahl von Malen aus. Beispiel: `for (let i = 0; i < 5; i++) { console.log(i); }`\n- **`while`-Schleife:** Führt den Codeblock aus, solange die Bedingung wahr ist. Beispiel: `let i = 0; while (i < 5) { console.log(i); i++; }`\n- **`do...while`-Schleife:** Führt den Codeblock mindestens einmal aus und dann weiter, solange die Bedingung wahr ist. Beispiel: `let i = 0; do { console.log(i); i++; } while (i < 5);`\n- **`for...of`-Schleife:** Iteriert über Werte in einer Sammlung wie Arrays. Beispiel: `for (const value of [1, 2, 3]) { console.log(value); }`\n- **`for...in`-Schleife:** Iteriert über die Eigenschaften eines Objekts. Beispiel: `const obj = { a: 1, b: 2 }; for (const key in obj) { console.log(key, obj[key]); }`",
  },
  {
    id: 45,
    topic: "CSS",
    question:
      "Was ist der Unterschied zwischen `absolute` und `relative` Positionierung in CSS?",
    answer:
      "`absolute` Positionierung entfernt das Element aus dem normalen Layoutfluss und positioniert es relativ zum nächsten positionierten Vorfahren (nicht zum Seitenrand). Das Element kann dann mit den Eigenschaften `top`, `right`, `bottom` und `left` positioniert werden. `relative` Positionierung hingegen belässt das Element im normalen Layoutfluss, aber ermöglicht es Ihnen, es relativ zu seiner ursprünglichen Position mit den gleichen Eigenschaften zu verschieben. Die ursprüngliche Position wird jedoch beibehalten, wodurch der Layoutfluss nicht beeinträchtigt wird.",
  },
  {
    id: 46,
    topic: "Sass",
    question: "Explain how to define a variable in Sass?",
    answer:
      "Sass variables are simple to define. You assign a value to a variable name that begins with a dollar sign ($). Once defined, you can use this variable throughout your Sass code instead of hardcoding the value directly. This makes it easier to maintain and update styles. For example:\n\n```scss\n$primary-color: #333;\n$padding: 10px;\n\n.button {\n  color: $primary-color;\n  padding: $padding;\n}\n```",
  },

  {
    id: 47,
    topic: "Sass",
    question: "Explain what is a @extend function used for in Sass?",
    answer:
      "In Sass, the `@extend` directive allows a selector to inherit the styles of another selector. It helps reduce code duplication by enabling one selector to share the same declarations as another. When you use `@extend`, the extending selector is added to the original selector, so they both share the same styles. This results in more maintainable and efficient CSS code. For example:\n\n```scss\n%base-button {\n  padding: 10px;\n  border: 1px solid #ccc;\n}\n\n.primary-button {\n  @extend %base-button;\n  background-color: blue;\n  color: white;\n}\n```",
  },
  {
    id: 48,
    topic: "Sass",
    question: "Explain how to define a variable in Sass?",
    answer:
      "Sass variables are defined by assigning a value to a name that begins with a dollar sign (`$`). This allows you to store values such as colors, fonts, or any other CSS values that you want to reuse throughout your stylesheet. Once defined, you can use these variables in your Sass code by referencing their names. For example:\n\n```scss\n$primary-color: #3498db;\n$font-size: 16px;\n\nbody {\n  color: $primary-color;\n  font-size: $font-size;\n}\n```",
  },

  {
    id: 49,
    topic: "Sass",
    question: "Explain what is the difference between Sass and SCSS?",
    answer:
      "Sass and SCSS are two syntaxes used by the Sass pre-processor. The main differences are:\n\n- **Sass (Indented Syntax):** Uses a syntax that relies on indentation rather than braces and semicolons. It does not use curly braces `{}` or semicolons `;`. Instead, it relies on indentation to define blocks and structure. Files have a `.sass` extension.\n\n- **SCSS (Sassy CSS):** Uses a syntax that is very similar to CSS, with curly braces `{}` and semicolons `;` to separate statements and define blocks. SCSS is a superset of CSS3, meaning that any valid CSS can be converted to SCSS by simply changing the file extension from `.css` to `.scss`. Files with this syntax have a `.scss` extension.\n\nIn summary, SCSS is more CSS-like and is often preferred for its familiar syntax, while the original Sass syntax relies on indentation and is more concise.",
  },

  {
    id: 50,
    topic: "JavaScript",
    question:
      "Explain the difference between == and === in JavaScript when comparing values.",
    answer:
      "In JavaScript, `==` (loose equality) compares values after performing type coercion. This means that if the values being compared are of different types, JavaScript will attempt to convert them to a common type before making the comparison. For example, `5 == '5'` evaluates to `true` because the string `'5'` is coerced to the number `5`.\n\nOn the other hand, `===` (strict equality) compares both the value and the type without performing any type coercion. For a comparison to be true with `===`, both the value and the type must be identical. For example, `5 === '5'` evaluates to `false` because the types are different (number vs. string).",
  },
  {
    id: 51,
    topic: "JavaScript",
    question: "List some of the disadvantages of JavaScript.",
    answer:
      "Some of the disadvantages of JavaScript are:\n\n- **No support for multithreading:** JavaScript runs in a single-threaded environment, meaning it cannot execute multiple threads simultaneously. This can limit the performance of certain tasks that require concurrent processing.\n- **No support for multiprocessing:** JavaScript does not support true multiprocessing, which means it cannot execute code across multiple CPU cores. This can affect performance for computation-heavy tasks.\n- **Reading and writing of files is not allowed:** JavaScript running in the browser environment does not have direct access to the file system for security reasons. This means it cannot read from or write to files on the user's machine.\n- **No support for networking applications:** JavaScript in the browser does not natively support network operations like creating servers or handling low-level network communications. These operations require server-side environments or additional technologies.",
  },
  {
    id: 52,
    topic: "JavaScript",
    question: "Define anonymous function.",
    answer:
      "An anonymous function is a function that does not have a name. These functions are declared dynamically at runtime using the function operator (`function`) instead of a function declaration. The function operator is more flexible and can be easily used as an expression. Anonymous functions are often used as arguments to other functions, in event handlers, or in scenarios where a function is needed temporarily.",
  },
  {
    id: 33,
    topic: "JavaScript",
    question: "In JavaScript what is an argument object?",
    answer:
      "In JavaScript, the 'arguments object' refers to an array-like object that is automatically available within all functions. It contains all the arguments passed to the function, regardless of the number of parameters defined in the function declaration. Although the arguments object is not a real array, it has similar properties, such as 'length' and indexed elements, allowing you to access the arguments by their index.",
  },
  {
    id: 34,
    topic: "JavaScript",
    question: "Name the types of functions.",
    answer:
      "There are 3 primary ways to define functions in JavaScript:\n\n1. **Function Declaration:** A named function declared with the `function` keyword, followed by its name, parameters, and body. Example:\n   ```javascript\n   function myFunction(param1, param2) {\n       // Function body\n   }\n   ```\n\n2. **Function Expression:** A function defined within an expression, often using an anonymous function. This type can be assigned to a variable. Example:\n   ```javascript\n   const myFunction = function(param1, param2) {\n       // Function body\n   };\n   ```\n\n3. **Arrow Function:** A concise syntax for writing functions, using the `=>` operator. Arrow functions do not have their own `this` context. Example:\n   ```javascript\n   const myFunction = (param1, param2) => {\n       // Function body\n   };\n   ```",
  },

  {
    id: 55,
    topic: "JavaScript",
    question: "What is the difference between .map() and .forEach()?",
    answer:
      ".map() and .forEach() are both array methods used to loop through an array, but they have different purposes and returns:\n\n- **.map()**: Returns a new array with the same length as the original array, where each element is the result of applying a callback function to the corresponding element of the original array. It is used when you want to transform the elements of an array and create a new array with the transformed elements.\n  ```javascript\n  const numbers = [1, 2, 3];\n  const doubled = numbers.map(x => x * 2);\n  console.log(doubled); // Output: [2, 4, 6]\n  ```\n\n- **.forEach()**: Does not return a new array. Instead, it simply executes a callback function on each element of the array. It is used for executing side effects, such as logging to the console or modifying external variables.\n  ```javascript\n  const numbers = [1, 2, 3];\n  numbers.forEach(x => console.log(x * 2)); // Output: 2, 4, 6\n  ```",
  },
  {
    id: 56,
    topic: "JavaScript",
    question: "Was ist der Unterschied zwischen slice und splice?",
    answer:
      "Einige der wichtigsten Unterschiede in tabellarischer Form:\n\n| Slice | Splice |\n|-------|--------|\n| Ändert das ursprüngliche Array nicht (unveränderlich) | Ändert das ursprüngliche Array (veränderlich) |\n| Gibt eine Teilmenge des ursprünglichen Arrays zurück | Gibt die gelöschten Elemente als Array zurück |\n| Wird verwendet, um Elemente aus einem Array auszuwählen | Wird verwendet, um Elemente in ein Array einzufügen oder daraus zu entfernen |\n\n**Beispiel für Slice:**\n```javascript\nlet array = [1, 2, 3, 4, 5];\nlet slicedArray = array.slice(1, 3);\nconsole.log(slicedArray); // Ausgabe: [2, 3]\nconsole.log(array); // Ausgabe: [1, 2, 3, 4, 5] (das ursprüngliche Array bleibt unverändert)\n```\n\n**Beispiel für Splice:**\n```javascript\nlet array = [1, 2, 3, 4, 5];\nlet splicedArray = array.splice(1, 2);\nconsole.log(splicedArray); // Ausgabe: [2, 3]\nconsole.log(array); // Ausgabe: [1, 4, 5] (das ursprüngliche Array wird geändert)\n```",
  },
  {
    id: 57,
    topic: "JavaScript",
    question: "Erklären Sie die reduce()-Methode in JavaScript",
    answer:
      ".reduce() führt einen Rückruf für jedes Array-Element aus, ähnlich wie .map(). Der einzige Unterschied besteht darin, dass reduce() das Ergebnis dieses Akkumulators von einem Array-Element zum anderen weitergibt. Einige eingebaute reduce()-Funktionen sind: Array.prototype.reduce() und die reduceRight()-Methode, die verwendet werden, um Funktionen gegen Akkumulatoren anzuwenden, von 1. links nach rechts und 2. rechts nach links.\n\nDer Akkumulator enthält entweder den Anfangswert oder den Rückgabewert des vorherigen Aufrufs. Der Akkumulator kann eine beliebige Zeichenkette, Ganzzahl, Objekt usw. sein. Es ist das Nettoergebnis der Funktion. Der aktuelle Wert des Akkumulators ist einfach das Element, gegen das gearbeitet wird.\n\nAkkumulatoren müssen übergeben werden, wenn .reduce() aufgerufen wird.\n\n**Beispiel:**\n```javascript\nconst array = [1, 2, 3, 4];\nconst sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);\nconsole.log(sum); // Ausgabe: 10\n```\n\nIm obigen Beispiel nimmt die reduce()-Methode eine Rückruffunktion mit zwei Parametern (Akkumulator und aktueller Wert) und einen Anfangswert von 0. Sie fügt jedes Element des Arrays zum Akkumulator hinzu, was zur Summe der Array-Elemente führt.",
  },
  {
    id: 58,
    topic: "JavaScript",
    question:
      "Erklären Sie den Unterschied zwischen den Methoden querySelector und querySelectorAll zum Auswählen von Elementen im DOM.",
    answer:
      "querySelector gibt das erste Element zurück, das dem angegebenen CSS-Selektor entspricht, während querySelectorAll eine Sammlung aller Elemente zurückgibt, die dem Selektor entsprechen.\n\n**Beispiel für querySelector:**\n```javascript\nconst firstElement = document.querySelector('.example');\nconsole.log(firstElement); // Ausgabe: Das erste Element mit der Klasse 'example'\n```\n\n**Beispiel für querySelectorAll:**\n```javascript\nconst allElements = document.querySelectorAll('.example');\nconsole.log(allElements); // Ausgabe: NodeList mit allen Elementen mit der Klasse 'example'\nallElements.forEach(element => {\n  console.log(element); // Ausgabe: Jedes Element mit der Klasse 'example'\n});\n```\n\nZusammenfassend: Verwenden Sie querySelector, wenn Sie nur das erste übereinstimmende Element benötigen, und querySelectorAll, wenn Sie alle übereinstimmenden Elemente als NodeList benötigen.",
  },
  {
    id: 59,
    topic: "JavaScript",
    question:
      "Was ist der Zweck der Methoden getAttribute und setAttribute bei der DOM-Manipulation?",
    answer:
      "getAttribute wird verwendet, um den Wert eines Attributs eines Elements abzurufen, während setAttribute verwendet wird, um den Wert eines Attributs eines Elements festzulegen oder zu ändern.\n\n**Beispiel für getAttribute:**\n```javascript\nconst element = document.querySelector('#myElement');\nconst attributeValue = element.getAttribute('data-value');\nconsole.log(attributeValue); // Ausgabe: Der Wert des 'data-value'-Attributs des Elements mit der ID 'myElement'\n```\n\n**Beispiel für setAttribute:**\n```javascript\nconst element = document.querySelector('#myElement');\nelement.setAttribute('data-value', 'newValue');\nconsole.log(element.getAttribute('data-value')); // Ausgabe: 'newValue'\n```\n\nZusammenfassend: Verwenden Sie getAttribute, um den aktuellen Wert eines Attributs eines Elements zu erhalten, und setAttribute, um den Wert eines Attributs eines Elements zu ändern oder festzulegen.",
  },
  {
    id: 60,
    topic: "JavaScript",
    question:
      "Was ist Event-Bubbling und wie beeinflusst es die Reihenfolge, in der Event-Handler ausgeführt werden?",
    answer:
      "Event-Bubbling ist ein Schlüsselkonzept im Ereignisverarbeitungsmodell von JavaScript. Es beschreibt die Reihenfolge, in der Ereignisse behandelt werden, wenn ein Ereignis auf einem HTML-Element auftritt und wie das Ereignis durch die DOM-Hierarchie 'nach oben blubbert'. Event-Bubbling beeinflusst die Reihenfolge, in der Event-Handler ausgeführt werden.\n\nWenn ein Ereignis (wie ein Klick oder Mouseover) auf einem DOM-Element auftritt, löst es nicht nur einen Event-Handler auf diesem spezifischen Element aus, sondern auch Event-Handler auf allen übergeordneten (Parent-)Elementen des Elements im DOM-Baum, und zwar von dem innersten Element bis zum äußersten Element.\n\n**Beispiel:**\n```javascript\n// HTML\n// <div id='outer'><div id='inner'>Click me</div></div>\n\nconst outer = document.getElementById('outer');\nconst inner = document.getElementById('inner');\n\nouter.addEventListener('click', () => {\n  console.log('Outer div clicked');\n});\n\ninner.addEventListener('click', () => {\n  console.log('Inner div clicked');\n});\n\n// Wenn das innere div angeklickt wird, ist die Ausgabe:\n// Inner div clicked\n// Outer div clicked\n```\n\nIn diesem Beispiel wird beim Klicken auf das innere div zuerst der Event-Handler des inneren div ausgeführt und dann der des äußeren div aufgrund des Event-Bubbling.",
  },

  {
    id: 61,
    topic: "JavaScript",
    question:
      "Was ist der Zweck der Methode event.preventDefault() und wann würden Sie sie verwenden?",
    answer:
      "event.preventDefault() wird verwendet, um das Standardverhalten eines Ereignisses zu verhindern. Es wird häufig verwendet, wenn Sie eine Formularübermittlung stoppen oder verhindern möchten, dass ein Link zu einer neuen Seite navigiert.\n\n**Beispiel:**\n```javascript\n// HTML\n// <form id='myForm'><input type='submit' value='Submit'></form>\n\nconst form = document.getElementById('myForm');\n\nform.addEventListener('submit', (event) => {\n  event.preventDefault(); // Verhindert die Standardformularübermittlung\n  console.log('Form submission prevented');\n});\n\n// HTML\n// <a href='https://example.com' id='myLink'>Click me</a>\n\nconst link = document.getElementById('myLink');\n\nlink.addEventListener('click', (event) => {\n  event.preventDefault(); // Verhindert die Navigation zum Linkziel\n  console.log('Link navigation prevented');\n});\n```\n\nIn diesen Beispielen verhindert event.preventDefault(), dass das Formular gesendet wird und dass der Link zur neuen Seite navigiert.",
  },

  {
    id: 62,
    topic: "JavaScript",
    question:
      "Was ist ‚Callback Hell‘ im Kontext der Verwendung von Callbacks, und was sind seine Nachteile?",
    answer:
      "‚Callback Hell‘ tritt auf, wenn viele verschachtelte Callbacks im Code vorhanden sind. Stellen Sie sich das wie eine Schichttorte von Funktionen vor, bei der jede Schicht von der darüber liegenden abhängt. Dies lässt unseren Code wie eine Pyramide aussehen, oft als ‚Pyramid of Doom‘ bezeichnet. Der Nachteil? Es macht unseren Code schwer lesbar und noch schwerer zu debuggen. Außerdem fügt jede neue Schicht Komplexität hinzu, was zukünftige Änderungen zu einer Herausforderung macht.\n\n**Beispiel:**\n```javascript\n// Beispiel für Callback Hell\nfirstFunction(() => {\n  secondFunction(() => {\n    thirdFunction(() => {\n      fourthFunction(() => {\n        // und so weiter...\n      });\n    });\n  });\n});\n```\n\nIn diesem Beispiel wird jede Funktion innerhalb einer anderen Funktion aufgerufen, was die Lesbarkeit und Wartbarkeit des Codes erheblich erschwert.",
  },

  {
    id: 63,
    topic: "JavaScript",
    question:
      "Was ist asynchrones Programmieren und wie unterscheidet es sich von synchronem Programmieren?",
    answer:
      "Asynchrones Programmieren ist eine Programmiertechnik, bei der Aufgaben außerhalb der Reihenfolge abgeschlossen werden können. Das bedeutet, dass ein Programm eine Aufgabe starten kann und dann zu anderen Aufgaben übergehen kann, ohne auf den Abschluss der ersten Aufgabe warten zu müssen. Dies ist besonders nützlich, wenn eine Aufgabe lange dauern kann, aber das Programm nicht darauf warten muss, um weiterzumachen.\n\nIm Gegensatz dazu wird bei synchronem Programmieren jede Aufgabe nacheinander ausgeführt. Das Programm wartet, bis eine Aufgabe abgeschlossen ist, bevor es mit der nächsten fortfährt. Dies kann zu Verzögerungen führen, insbesondere wenn eine Aufgabe viel Zeit in Anspruch nimmt.\n\n**Beispiel für asynchrones Programmieren:**\n```javascript\nconsole.log('Start');\n\nsetTimeout(() => {\nconsole.log('Task abgeschlossen');\n}, 1000);\n\nconsole.log('Ende');\n```\n\nIn diesem Beispiel wird ‚Task abgeschlossen‘ nach einer Verzögerung von 1000 Millisekunden (1 Sekunde) ausgegeben, während ‚Start‘ und ‚Ende‘ sofort ausgegeben werden. Der Code zeigt, dass der Programmausführung nicht gewartet wird, bis der `setTimeout`-Aufruf abgeschlossen ist, was die Effizienz des Programms erhöht.",
  },

  {
    id: 64,
    topic: "JavaScript",
    question:
      "Wie hilft async/await bei der Leistungsfähigkeit und Skalierbarkeit?",
    answer:
      "Async/await kann die Leistung und Skalierbarkeit verbessern, indem es Ihrer Anwendung ermöglicht, andere Aufgaben zu erledigen, während sie auf den Abschluss einer Aufgabe wartet. Dies kann dazu beitragen, Engpässe zu vermeiden und Ihre Anwendung reaktionsfähig zu halten. Darüber hinaus kann die Verwendung von async/await den Gesamtcode reduzieren, der geschrieben werden muss, was Ihre Anwendung einfacher wartbar macht.\n\n**Beispiel für async/await:**\n```javascript\nasync function exampleFunction() {\nconsole.log('Start');\n await new Promise(resolve => setTimeout(resolve, 1000));\n console.log('Task abgeschlossen');\n}\n\nexampleFunction();\nconsole.log('Ende');\n```\n\nIn diesem Beispiel wartet die `exampleFunction`-Funktion asynchron auf die Fertigstellung des `Promise`, ohne dass der Rest des Programms blockiert wird. Dadurch wird die Anwendung weiterhin reaktionsfähig, während der asynchrone Task abgeschlossen wird.",
  },
  {
    id: 65,
    topic: "JavaScript",
    question: "Was ist der Zweck des Promise-Konstruktors in JavaScript?",
    answer:
      "Der Promise-Konstruktor wird verwendet, um ein neues Promise-Objekt zu erstellen. Ein Promise-Objekt repräsentiert eine asynchrone Operation und kann verwendet werden, um den Status dieser Operation zu verfolgen. Ein Promise kann sich in einem von drei Zuständen befinden: pending (ausstehend), fulfilled (erfüllt) oder rejected (abgelehnt).\n\n**Beispiel für den Promise-Konstruktor:**\n```javascript\nconst myPromise = new Promise((resolve, reject) => {\n  const success = true;\n  if (success) {\n    resolve('Operation erfolgreich');\n  } else {\n    reject('Operation fehlgeschlagen');\n  }\n});\n\nmyPromise.then(result => {\n  console.log(result); // 'Operation erfolgreich'\n}).catch(error => {\n  console.log(error);\n});\n```\n\nIn diesem Beispiel wird ein Promise erstellt, das entweder erfolgreich aufgelöst (`resolve`) oder abgelehnt (`reject`) wird. Der `then`-Block wird ausgeführt, wenn das Promise erfüllt wird, während der `catch`-Block ausgeführt wird, wenn das Promise abgelehnt wird.",
  },
  {
    id: 66,
    topic: "React",
    question: "Was sind die Komponenten in React?",
    answer:
      'Komponenten sind die Bausteine jeder React-Anwendung, und eine einzelne App besteht normalerweise aus mehreren Komponenten. Eine Komponente ist im Wesentlichen ein Teil der Benutzeroberfläche. Sie unterteilt die Benutzeroberfläche in unabhängige, wiederverwendbare Teile, die separat verarbeitet werden können.\n\nEs gibt zwei Arten von Komponenten in React:\n\n1. **Funktionale Komponenten:** Diese Komponenten haben keinen eigenen Zustand und enthalten nur Render-Methoden, weshalb sie auch als zustandslose Komponenten bezeichnet werden. Sie können Daten von anderen Komponenten als Props (Eigenschaften) erhalten.\n\n**Beispiel für eine funktionale Komponente:**\n```javascript\nfunction Welcome(props) {\n  return <h1>Hallo, {props.name}</h1>;\n}\n\n<Welcome name="Sara" />\n```\n\n2. **Klassenkomponenten:** Diese Komponenten können ihren eigenen Zustand verwalten und haben eine separate Render-Methode, um JSX auf dem Bildschirm zurückzugeben. Sie werden auch als zustandsbehaftete Komponenten bezeichnet, da sie einen Zustand haben können.\n\n**Beispiel für eine Klassenkomponente:**\n```javascript\nclass Welcome extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = { greeting: \'Hallo\' };\n  }\n  render() {\n    return <h1>{this.state.greeting}, {this.props.name}</h1>;\n  }\n}\n\n<Welcome name="Sara" />\n```\n\nIn diesem Beispiel ist `Welcome` eine Klassenkomponente, die ihren eigenen Zustand (`this.state`) verwaltet und diesen Zustand zusammen mit den Props in der Render-Methode verwendet, um eine Begrüßungsnachricht anzuzeigen.',
  },
  {
    id: 67,
    topic: "React",
    question: "Was ist ein Ereignis in React?",
    answer:
      "Ein Ereignis ist eine Aktion, die von einem Benutzer oder System ausgelöst werden kann, wie z.B. das Drücken einer Taste, ein Mausklick usw. React-Ereignisse werden in camelCase benannt, anstatt in Kleinbuchstaben wie in HTML. Mit JSX übergibt man eine Funktion als Ereignis-Handler, anstatt eine Zeichenkette wie in HTML zu verwenden.\n\n**Beispiel für ein Ereignis in React:**\n```javascript\nfunction MyButton() {\n  function handleClick() {\n    alert('Button wurde geklickt!');\n  }\n\n  return <button onClick={handleClick}>Klick mich</button>;\n}\n\n<MyButton />\n```\n\nIn diesem Beispiel wird die Funktion `handleClick` als Ereignis-Handler für das `onClick`-Ereignis des Buttons übergeben. Wenn der Button geklickt wird, wird die `handleClick`-Funktion aufgerufen, die eine Warnmeldung anzeigt.",
  },

  {
    id: 68,
    topic: "JavaScript",
    question: "Was ist eine Konstruktorfunktion in JavaScript?",
    answer:
      "Eine Konstruktorfunktion ist eine spezielle Funktion, die verwendet wird, um Objekte in JavaScript zu erstellen. Wenn ein neues Objekt mit einer Konstruktorfunktion erstellt wird, erhält es automatisch eine Reihe von Eigenschaften und Methoden, die innerhalb der Funktion definiert sind.\n\n**Beispiel für eine Konstruktorfunktion:**\n```javascript\nfunction Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\n\nconst person1 = new Person('Alice', 30);\nconsole.log(person1.name); // 'Alice'\nconsole.log(person1.age);  // 30\n```\n\nIn diesem Beispiel erstellt die Konstruktorfunktion `Person` ein neues Objekt mit den Eigenschaften `name` und `age`. Die `new`-Operator wird verwendet, um ein neues Objekt mit diesen Eigenschaften zu erstellen und die Konstruktorfunktion zu initialisieren.",
  },

  {
    id: 69,
    topic: "JavaScript",
    question: "Was ist das 'this'-Schlüsselwort in JavaScript?",
    answer:
      "'this'-Schlüsselwort bezieht sich auf das aktuelle Objekt in einer Methode oder Funktion. In JavaScript wird der Wert von 'this' durch die Art und Weise bestimmt, wie eine Funktion aufgerufen wird, nicht durch den Ort, an dem sie definiert ist.\n\n**Beispiel für die Verwendung von 'this':**\n```javascript\nconst person = {\n  name: 'Alice',\n  age: 30,\n  greet: function() {\n    console.log('Hallo, mein Name ist ' + this.name);\n  }\n};\n\nperson.greet(); // 'Hallo, mein Name ist Alice'\n```\n\nIn diesem Beispiel bezieht sich `this.name` innerhalb der Methode `greet` auf die `name`-Eigenschaft des `person`-Objekts. Der Wert von `this` wird durch den Kontext bestimmt, in dem die Methode `greet` aufgerufen wird.",
  },
  {
    id: 70,
    topic: "React",
    question: "Wie oft wird der React useState aktualisiert? Warum?",
    answer:
      "Da Entwickler useState verwenden, um die Leistung zu verbessern, indem Warteschlangen erstellt werden, aktualisiert React die Änderungen nicht sofort. Es ist wichtig zu wissen, dass useState Änderungen am Zustand nicht direkt umsetzt; stattdessen erfolgen die Aktualisierungen asynchron.\n\n**Beispiel für die asynchrone Aktualisierung von useState:**\n```javascript\nimport React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  function handleClick() {\n    setCount(count + 1);\n    console.log(count); // Kann den alten Wert anzeigen, bevor der Zustand aktualisiert wird\n  }\n\n  return <button onClick={handleClick}>Klick mich ({count})</button>;\n}\n\nexport default Counter;\n```\n\nIn diesem Beispiel wird `count` in der `handleClick`-Funktion erhöht, aber der Wert von `count` wird möglicherweise nicht sofort aktualisiert. React fasst mehrere Updates zusammen und wendet sie in einem Batch an, was die Effizienz steigert und die Anzahl der Neuberechnungen minimiert.",
  },
  {
    id: 71,
    topic: "React",
    question: "Warum ist es notwendig, Schlüssel in Listen zu verwenden?",
    answer:
      "Schlüssel sind in Listen aus folgenden Gründen sehr wichtig:\n\nEin Schlüssel ist ein eindeutiger Bezeichner und wird verwendet, um zu identifizieren, welche Elemente sich geändert, aktualisiert oder aus der Liste gelöscht wurden. Er hilft auch dabei, zu bestimmen, welche Komponenten neu gerendert werden müssen, anstatt alle Komponenten bei jeder Änderung neu zu rendern. Daher erhöht sich die Leistung, da nur die aktualisierten Komponenten neu gerendert werden.\n\n**Beispiel für die Verwendung von Schlüsseln in Listen:**\n```javascript\nimport React from 'react';\n\nfunction ItemList({ items }) {\n  return (\n    <ul>\n      {items.map(item => (\n        <li key={item.id}>{item.name}</li>\n      ))}\n    </ul>\n  );\n}\n\nexport default ItemList;\n```\n\nIn diesem Beispiel wird `item.id` als Schlüssel verwendet, um jedes Listenelement eindeutig zu identifizieren. Dies ermöglicht React, effizient zu erkennen, welche Elemente sich geändert haben, und nur diese Elemente neu zu rendern, was die Leistung optimiert.",
  },
  {
    id: 72,
    topic: "React",
    question: "Warum kann man Props in React nicht aktualisieren?",
    answer:
      "Die Philosophie von React besagt, dass Props unveränderlich und top-down sein sollten. Das bedeutet, dass ein Elternteil beliebige Prop-Werte an ein Kind weitergeben kann, aber das Kind kann die empfangenen Props nicht ändern. Dies gewährleistet eine einheitliche Datenflussrichtung und erleichtert das Verständnis und die Wartung der Komponenten, da Änderungen nur auf der höchsten Ebene der Komponentenstruktur vorgenommen werden.\n\n**Beispiel:**\n```javascript\nfunction ParentComponent() {\n  const [value, setValue] = React.useState('Initialer Wert');\n  return <ChildComponent value={value} />;\n}\n\nfunction ChildComponent(props) {\n  // props.value = 'Neuer Wert'; // Fehler: Props können nicht verändert werden\n  return <div>{props.value}</div>;\n}\n\nexport default ParentComponent;\n```\n\nIn diesem Beispiel wird `value` vom `ParentComponent` an das `ChildComponent` übergeben. Das `ChildComponent` kann die Props nicht ändern, um eine konsistente und vorhersagbare Datenstruktur zu gewährleisten.",
  },
  {
    id: 73,
    topic: "React",
    question: "Was sind Default Props?",
    answer:
      "Die `defaultProps` werden als Eigenschaft auf der Komponenten-Klasse definiert, um die Standard-Props für die Klasse festzulegen. Dies wird verwendet, um Standardwerte für nicht definierte Props zu setzen, jedoch nicht für `null`-Props.\n\n**Beispiel für `defaultProps`:**\n```javascript\nimport React from 'react';\n\nclass Greeting extends React.Component {\n  static defaultProps = {\n    name: 'Gast'\n  };\n\n  render() {\n    return <h1>Hallo, {this.props.name}</h1>;\n  }\n}\n\n// Verwendung der Komponente ohne Props\n<Greeting />\n\n// Ausgabe: 'Hallo, Gast'\n```\n\nIn diesem Beispiel hat die `Greeting`-Komponente eine `defaultProps`-Eigenschaft, die einen Standardwert für `name` festlegt. Wenn `Greeting` ohne Props verwendet wird, wird der Standardwert `'Gast'` angezeigt.",
  },
  {
    id: 74,
    topic: "React",
    question: "Was ist eine Pfeilfunktion und wie wird sie in React verwendet?",
    answer:
      "Eine Pfeilfunktion ist eine kürzere Schreibweise für Funktionen in JavaScript. Sie wird durch die Syntax `() => {}` definiert und hat einige Besonderheiten:\n\n- **Keine eigene Bindung von `this`:** Pfeilfunktionen binden `this` nicht neu, sondern übernehmen die `this`-Bindung der umgebenden Funktion. Das bedeutet, dass Sie `this` nicht innerhalb des Konstruktors einer Klasse binden müssen, wenn Sie Pfeilfunktionen verwenden. Dies hilft, Fehler zu vermeiden, die durch die Verwendung von `this` in React-Callbacks entstehen können.\n\n**Beispiel für eine Pfeilfunktion in React:**\n```javascript\nimport React from 'react';\n\nclass MyComponent extends React.Component {\n  constructor(props) {\n    super(props);\n    // Keine Notwendigkeit, `this.handleClick` zu binden\n    this.handleClick = this.handleClick.bind(this);\n  }\n  // Pfeilfunktion\n  handleClick = () => {\n    console.log('Button geklickt');\n  };\n\n  render() {\n    return <button onClick={this.handleClick}>Klick mich</button>;\n  }\n}\n\nexport default MyComponent;\n```\n\nIn diesem Beispiel wird `handleClick` als Pfeilfunktion definiert. Da Pfeilfunktionen `this` von der umgebenden Klassenkontext übernehmen, ist keine zusätzliche Bindung im Konstruktor erforderlich.",
  },
];

export default data;
