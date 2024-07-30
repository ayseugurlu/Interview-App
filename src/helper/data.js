const data=[
    {
      "id": 1,
      "topic": "IT-Fundamental",
      "question": "Was ist Linux?",
      "answer": "Linux ist ein UNIX-basiertes Betriebssystem. Linus Torvalds hat es zuerst vorgestellt. Es ist ein Open-Source-Betriebssystem, das entwickelt wurde, um den Benutzern ein kostenloses und kostengünstiges Betriebssystem zur Verfügung zu stellen."
    },
    {
      "id": 2,
      "topic": "IT-Fundamental",
      "question": "Wenn Sie eine Datei in Linux gespeichert haben und diese Datei später umbenennen möchten, welcher Befehl ist dafür vorgesehen?",
      "answer": "Der Befehl 'mv' wird verwendet, um eine Datei umzubenennen."
    },
    {
      "id": 3,
      "topic": "IT-Fundamental",
      "question": "Was ist CLI?",
      "answer": "CLI steht für Command Line Interface. Es ist eine Schnittstelle, die es Benutzern ermöglicht, deklarative Befehle einzugeben, um den Computer anzuweisen, Operationen auszuführen."
    },
    {
      "id": 4,
      "topic": "IT-Fundamental",
      "question": "Erklären Sie Agile kurz.",
      "answer": "Agile ist eine beliebte Sammlung von Methoden und Praktiken, die sich hauptsächlich auf interaktive Entwicklung konzentrieren. Dank selbstorganisierender Zusammenarbeit zwischen funktionsübergreifenden Teams werden die Anforderungen der Kunden und mögliche Lösungen ermittelt."
    },
    {
      "id": 5,
      "topic": "IT-Fundamental",
      "question": "Was sind einige wichtige Teile des Agile-Prozesses?",
      "answer": "Die verschiedenen Prinzipien von Agile sind:\n1. Kundenzufriedenheit: Die Bedürfnisse des Kunden müssen durch die frühe und schnelle Lieferung des Produkts erfüllt werden.\n2. Veränderungen begrüßen: Änderungsbedarfe müssen berücksichtigt werden, auch wenn sie spät im Entwicklungsprozess eingebracht werden.\n3. Häufige Lieferung: Eine häufige Produktlieferung innerhalb eines kurzen Zeitrahmens gewährleisten, dank eines klaren Verständnisses des Produkts.\n4. Zusammenarbeit: Entwickler und andere Teammitglieder müssen während des gesamten Projekts zusammenarbeiten.\n5. Motiviertes Team: Motivierte und engagierte Einzelpersonen, denen vertraut wird, die Arbeit zu erledigen, können den Erfolg des Projekts sicherstellen.\n6. Face-to-Face-Gespräche: Face-to-Face-Gespräche haben sich als die effizienteste Methode der Kommunikation erwiesen.\n7. Funktionierende Software: Dies ist das primäre Maß für den Fortschritt.\n8. Konstantes Tempo: Mit einem konstanten Tempo ermöglicht der Agile-Prozess eine optimale nachhaltige Entwicklung.\n9. Gutes Design: Durch die Fokussierung auf technische Exzellenz und großartiges Design kann die Agilität des Projekts drastisch verbessert werden.\n10. Einfachheit: Die Zeit, die nicht mit der Arbeit verbracht wird, muss minimiert und vereinfacht werden.\n11. Selbstorganisiert: Selbstorganisierte Teams bieten die besten Architekturen, Anforderungen und Designs.\n12. Reflektieren und Anpassen: Die Effektivität des Agile-Prozesses kann durch regelmäßige Reflexion verbessert werden."
    },
    {
      "id": 6,
      "topic": "IT-Fundamental",
      "question": "Was ist Git?",
      "answer": "GIT ist ein verteiltes Versionskontrollsystem und Source-Code-Management (SCM) System, das darauf ausgelegt ist, kleine und große Projekte mit Geschwindigkeit und Effizienz zu handhaben."
    },
    {
      "id": 7,
      "topic": "IT-Fundamental",
      "question": "Nennen Sie die verschiedenen Git-Repository-Hosting-Dienste?",
      "answer": [
        "Github",
        "Gitlab",
        "Bitbucket",
        "SourceForge",
        "GitEnterprise"
      ]
    },
    {
      "id": 8,
      "topic": "HTML",
      "question": "Was ist HTML?",
      "answer": "HTML ist ein Akronym für Hyper Text Markup Language, das zur Erstellung von Webseiten und Webanwendungen verwendet wird. Lassen Sie uns sehen, was mit Hypertext Markup Language und Webseite gemeint ist.\n\n- **Hypertext:** Hypertext bedeutet einfach \"Text innerhalb von Text.\" Ein Text, der einen Link innerhalb hat, ist Hypertext. Immer wenn Sie auf einen Link klicken, der Sie auf eine neue Webseite bringt, haben Sie auf einen Hypertext geklickt. Hypertext ist eine Möglichkeit, zwei oder mehr Webseiten (HTML-Dokumente) miteinander zu verknüpfen.\n\n- **Markup-Sprache:** Eine Markup-Sprache ist eine Computersprache, die verwendet wird, um Layout- und Formatierungskonventionen auf ein Textdokument anzuwenden. Eine Markup-Sprache macht Text interaktiver und dynamischer. Sie kann Text in Bilder, Tabellen, Links usw. verwandeln."
    },
    {
      "id": 9,
      "topic": "HTML",
      "question": "Müssen alle HTML-Tags paarweise geschrieben werden?",
      "answer": "Dies ist eine häufige Frage in HTML-Vorstellungsgesprächen. Nein, es gibt einige HTML-Tags, die als Einzel-Tags verwendet werden können."
    },
    {
      "id": 10,
      "topic": "HTML",
      "question": "Was ist semantisches HTML?",
      "answer": "Semantisches HTML ist eine Art von Code, der HTML-Tags verwendet, um die Bedeutung des Inhalts auf einer Seite zu beschreiben, anstatt nur dessen Erscheinungsbild. Dies kann es Suchmaschinen und anderer Software erleichtern, die Seite zu verarbeiten und zu verstehen."
    },
    {
      "id": 11,
      "topic": "HTML",
      "question": "Was ist der Unterschied zwischen einer Klasse und einer ID?",
      "answer": "Eine Klasse ist eine Möglichkeit, HTML-Elemente für das Styling zu verwenden. Sie sind nicht einzigartig und können mehreren Elementen zugewiesen werden. Eine ID hingegen ist einzigartig und kann nur einem einzelnen Element zugewiesen werden."
    },
    {
      "id": 12,
      "topic": "HTML",
      "question": "Was ist der Unterschied zwischen inline, inline-block und block?",
      "answer": "Block-Elemente sind `<div>` und `<p>`. Sie beginnen normalerweise in einer neuen Zeile und können Platz für eine ganze Zeile oder Breite einnehmen. Inline-Elemente sind `<a>`, `<span>`, `<strong>` und `<img>`-Tags. Sie beginnen nicht in einer neuen Zeile, erscheinen jedoch in der gleichen Zeile wie der Inhalt und die Tags neben ihnen. Inline-Block-Elemente haben Padding und Margins sowie festgelegte Höhen- und Breitenwerte, sind jedoch ähnlich wie Inline-Elemente."
    },
    {
      "id": 13,
      "topic": "HTML",
      "question": "Erzählen Sie etwas über die Verwendung des CSS-Boxmodells.",
      "answer": "Das CSS-Boxmodell ist ein Box-Bindungselement für HTML, das Padding, Border, Margin und den tatsächlichen Inhalt umfasst. Mit dem Boxmodell haben wir die Möglichkeit, um Elemente herum einen Rand hinzuzufügen und den Abstand zwischen den Elementen zu definieren."
    },
    {
      "id": 14,
      "topic": "HTML",
      "question": "Welche Listenarten sind in HTML verfügbar?",
      "answer": "Die gängigen Listenarten, die in HTML verfügbar sind, sind wie folgt:\n- Geordnete Liste (Ordered list)\n- Ungeordnete Liste (Unordered list)\n- Definitionsliste (Definition list)\n- Menüliste (Menu list)\n- Verzeichnisliste (Directory list)"
    },
    {
      "id": 15,
      "topic": "IT-Fundamental",
      "question": "Was ist Jira?",
      "answer": "JIRA ist ein Software-Tool, das von der Softwarefirma Atlassian entwickelt wurde. Es wird hauptsächlich für Fehler- und Problemverfolgung sowie für Projektmanagement verwendet. Es ist die perfekte Lösung zur Organisation von Aufgaben und zur Verwaltung agiler Teams."
    },
    {
      "id": 16,
      "topic": "IT-Fundamental",
      "question": "Welche Issue-Typen werden in JIRA erstellt und verfolgt?",
      "answer": "Ein Issue in JIRA kann ein Fehler, ein Feature, eine Aufgabe oder jede andere Projektarbeit sein. Jedes JIRA-Projekt enthält Standard-Issue-Typen, und diese Issue-Typen hängen von der Art des Projekts ab, das Sie verwenden."
    },
    {
      "id": 17,
      "topic": "IT-Fundamental",
      "question": "Erklären Sie die Issue-Typen in JIRA (Fehler, Epic, Aufgabe, Unteraufgabe, Story ...usw.)",
      "answer": "- **Fehler (Bug):** Ein Fehler ist ein Problem, das in der Funktionalität eines Produkts besteht.\n- **Story:** Die Story ist die kleinste Arbeitseinheit, die abgeschlossen werden muss.\n- **Epic:** Epic ist eine große User Story, die in kleinere Stories unterteilt werden muss.\n- **Aufgabe (Task):** Eine Aufgabe ist eine Arbeit, die abgeschlossen werden muss.\n- **Unteraufgabe (Subtask):** Eine Unteraufgabe ist ein Teil der Arbeit, der erledigt werden muss, um eine Aufgabe abzuschließen."
    },
    {
      "id": 18,
      "topic": "CSS",
      "question": "Was sind CSS-Variablen und wie werden sie verwendet?",
      "answer": "CSS-Variablen, auch bekannt als benutzerdefinierte Eigenschaften, ermöglichen es Ihnen, wiederverwendbare Werte in CSS zu definieren, die im gesamten Stylesheet verwendet werden können. Sie werden mit der Funktion `var()` definiert und können dynamisch mit JavaScript aktualisiert werden. CSS-Variablen helfen dabei, den Styling-Prozess zu vereinfachen, Konsistenz zu fördern und es einfacher zu machen, globale Stiländerungen vorzunehmen."
    },
    {
      "id": 19,
      "topic": "CSS",
      "question": "Was sind Media Queries in CSS und wie werden sie verwendet?",
      "answer": "Media Queries in CSS ermöglichen es Ihnen, unterschiedliche Stile basierend auf verschiedenen Geräten, Bildschirmgrößen und anderen Medienbedingungen anzuwenden. Sie werden verwendet, um responsive Designs zu erstellen und das Layout sowie die Präsentation einer Webseite an verschiedene Geräte und Bildschirmauflösungen anzupassen. Media Queries verwenden die Regel `@media` und können unterschiedliche CSS-Regeln basierend auf Bedingungen wie Bildschirmbreite, Orientierung, Pixeldichte und mehr spezifizieren."
    },
    {
      "id": 20,
      "topic": "CSS",
      "question": "Warum würden Sie CSS Grid anstelle von Flexbox verwenden?",
      "answer": "CSS Grid ist ein neueres Layout-System, das ein leistungsfähigeres und flexibleres gitterbasiertes Layout-System als Flexbox bietet. Während Flexbox besser für eindimensionale Layouts geeignet ist, ist CSS Grid für zweidimensionale Layouts ausgelegt, was es zu einer besseren Wahl für komplexere Webdesigns macht."
    },
    {
      "id": 21,
      "topic": "CSS",
      "question": "Was ist ein CSS Grid?",
      "answer": "Ein CSS Grid ist ein Layout-System zur Erstellung von zweidimensionalen, rasterbasierten Layouts. Es ist ein leistungsstarkes Werkzeug zur Erstellung von responsiven Layouts und kann verwendet werden, um eine Vielzahl unterschiedlicher Layout-Typen zu erstellen."
    },
    {
      "id": 22,
      "topic": "CSS",
      "question": "Was sind die Unterschiede zwischen Flexbox und CSS Grid?",
      "answer": "Flexbox: Entwickelt zum Erstellen von eindimensionalen Layouts, wie das Ausrichten von Elementen horizontal oder vertikal innerhalb eines Containers. Es eignet sich ideal zum Erstellen von Komponenten wie Navigationsleisten, Menüs oder flexiblen Inhaltscontainern.\nCSS Grid: Entwickelt zum Erstellen von zweidimensionalen Layouts, wobei Sie sowohl Zeilen als auch Spalten definieren und Elemente überall innerhalb des Grids platzieren können. Es ist geeignet für die Erstellung komplexer Layouts, einschließlich Grids mit variierenden Spaltenbreiten und Zeilenhöhen."
    },
    {
      "id": 23,
      "topic": "Bootstrap",
      "question": "Wie kann man eine Warnung in Bootstrap erstellen?",
      "answer": "Erstellen Sie ein Wrapper-`<div>` und fügen Sie die Klasse `.alert` und eine der kontextuellen Klassen hinzu, um eine grundlegende Warnung zu erstellen (z.B. `.alert-success`, `.alert-info`, `.alert-warning`, `.alert-danger`, `.alert-primary`, `.alert-secondary`, `.alert-light` oder `.alert-dark`)."
    },
    {
      "id": 24,
      "topic": "Bootstrap",
      "question": "Wie erstellt man Navigationselemente in Bootstrap?",
      "answer": "Die Navigationselemente in Bootstrap können auf verschiedene Arten gestaltet werden. Das Markup und die Basis-Klasse sind bei allen gleich: `.nav`. Um tabellarische Navigation oder Tabs zu erstellen, beginnen Sie mit der Erstellung einer ungeordneten Liste unter Verwendung der Basis-Klasse `.nav`. Die Klasse `.nav-tabs` sollte hinzugefügt werden."
    },
    {
      "id": 25,
      "topic": "JavaScript",
      "question": "Was sind die Escape-Zeichen in JavaScript?",
      "answer": "In JavaScript verwenden wir Escape-Zeichen, typischerweise den Rückwärtsschrägstrich (`\`), wenn wir mit Sonderzeichen wie Ampersands (`&`), Apostrophen (`‘`), doppelten Anführungszeichen (`“ “`) und einfachen Anführungszeichen (`‘ ‘`) arbeiten. Alles, was innerhalb der Escape-Zeichen eingeschlossen ist, wird von JavaScript angezeigt.\nZusätzlich gibt es sechs weitere Escape-Zeichen in JavaScript:\n- `\b` – Rückschritt\n- `\f` – Seitenvorschub\n- `\n` – Neue Zeile\n- `\r` – Wagenrücklauf\n- `\t` – Horizontaler Tabulator\n- `\v` – Vertikaler Tabulator\nDiese werden in HTML oder JS-Code nicht ausgeführt. Sie wurden ursprünglich zur Steuerung von Faxgeräten, Schreibmaschinen und ähnlichen Geräten entwickelt."
    },
    {
      "id": 26,
      "topic": "JavaScript",
      "question": "Wer hat JavaScript entwickelt?",
      "answer": "JavaScript wurde 1995 von Brendan Eich entwickelt. Er stellte JavaScript vor, während er Mitglied von Netscape Communications war. Brendan wurde von Java, Self und Scheme inspiriert und entschied sich, JavaScript zu erstellen."
    },
    {
      "id": 27,
      "topic": "JavaScript",
      "question": "Was ist JavaScript Hoisting?",
      "answer": "Beim Einsatz der Methode 'JavaScript Hoisting' werden beim Ausführen des Codes alle Variablen an den Anfang des ursprünglichen/aktuellen Scopes verschoben. Wenn Sie eine Variable irgendwo im Code deklarieren, wird sie an den Anfang verschoben.\nDiese Methode gilt nur für die Deklaration einer Variablen und nicht für die Initialisierung der Variablen. Funktionen werden ebenfalls an den Anfang verschoben, während Funktionsdefinitionen nicht an den Anfang verschoben werden.\nIm Wesentlichen spielt es keine große Rolle, wo wir die Variable im Code deklarieren."
    },
    {
      "id": 28,
      "topic": "IT-Fundamental",
      "question": "Wann sollte man ein Flussdiagramm zeichnen?",
      "answer": "Die Verwendung eines Flussdiagramms hat eine Vielzahl von Vorteilen:\n- Es hilft, komplexe Prozesse zu klären.\n- Es identifiziert Schritte, die keinen Wert für den internen oder externen Kunden hinzufügen, einschließlich Verzögerungen; unnötiger Lagerung und Transport; unnötiger Arbeit, Duplikation und zusätzlichen Kosten; Kommunikationsstörungen.\n- Es hilft Teammitgliedern, ein gemeinsames Verständnis des Prozesses zu gewinnen und dieses Wissen zur Datensammlung, Problemerkennung, Fokussierung von Diskussionen und Identifizierung von Ressourcen zu nutzen.\n- Es dient als Grundlage für das Design neuer Prozesse."
    },
    {
      "id": 29,
      "topic": "JavaScript",
      "question": "Was sind die Methoden des Number-Objekts in JavaScript?",
      "answer": "Das Number-Objekt enthält nur die Standardmethoden, die Teil jeder Objektdefinition sind:\n- `toExponential()`: Erzwingt, dass eine Zahl in wissenschaftlicher Notation angezeigt wird, auch wenn die Zahl im Bereich liegt, in dem JavaScript normalerweise die Standardnotation verwendet.\n- `toFixed()`: Formatiert eine Zahl mit einer bestimmten Anzahl von Dezimalstellen.\n- `toLocaleString()`: Gibt eine Zeichenfolgenversion der aktuellen Zahl in einem Format zurück, das je nach lokalen Einstellungen des Browsers variieren kann."
    },
    {
      "id": 30,
      "topic": "JavaScript",
      "question": "Was ist der Unterschied zwischen `null` und `undefined` in JavaScript?",
      "answer": "`null` ist ein absichtlich gesetzter Wert, der anzeigt, dass eine Variable keinen Wert hat oder leer ist. `undefined` hingegen bedeutet, dass eine Variable deklariert, aber noch nicht zugewiesen wurde. `null` ist ein Wert, während `undefined` den Zustand der Nichtzuweisung beschreibt."
    },
    {
      "id": 31,
      "topic": "CSS",
      "question": "Wie funktioniert das `z-index` in CSS?",
      "answer": "`z-index` ist eine CSS-Eigenschaft, die die Stapelreihenfolge von Elementen bestimmt. Elemente mit höherem `z-index` erscheinen über Elementen mit niedrigerem `z-index`. Diese Eigenschaft wirkt nur auf Elemente, die eine Positionierung (z.B. `relative`, `absolute`, `fixed` oder `sticky`) haben. Ein Element mit `z-index: 10` wird also über einem Element mit `z-index: 5` angezeigt."
    },
    {
      "id": 32,
      "topic": "Bootstrap",
      "question": "Wie implementiert man ein responsives Layout mit Bootstrap?",
      "answer": "Bootstrap bietet eine Reihe von Grid-Klassen, um responsives Design zu erstellen. Sie verwenden die Klassen `.container` für das Layout und `.row` sowie `.col`-Klassen für die Spalten. Durch die Verwendung von `col-{breakpoint}-{number}`-Klassen können Sie die Spaltenbreiten für verschiedene Bildschirmgrößen anpassen. Beispielsweise ermöglicht `col-md-6` eine Spalte, die auf mittleren und größeren Bildschirmen 6 von 12 verfügbaren Spalten einnimmt."
    },
    {
      "id": 33,
      "topic": "JavaScript",
      "question": "Was ist der Unterschied zwischen `==` und `===` in JavaScript?",
      "answer": "`==` ist der Vergleichsoperator für Gleichheit, der eine Typkonvertierung durchführt, bevor er die Werte vergleicht. `===` ist der strikte Vergleichsoperator, der keine Typkonvertierung durchführt und somit nur dann `true` zurückgibt, wenn beide Werte denselben Typ und denselben Wert haben. Beispielsweise ist `5 == '5'` wahr, während `5 === '5'` falsch ist."
    },
    {
      "id": 34,
      "topic": "JavaScript",
      "question": "Was ist der Unterschied zwischen `let`, `const` und `var` in JavaScript?",
      "answer": "`let` und `const` wurden in ES6 eingeführt und haben Blockscope, was bedeutet, dass sie nur innerhalb des Blocks sichtbar sind, in dem sie deklariert wurden. `const` ist für unveränderliche Werte gedacht und muss bei der Deklaration initialisiert werden. `var` hat Funktionsscope oder globalen Scope, was bedeutet, dass es außerhalb des Blocks sichtbar ist, in dem es deklariert wurde. `var`-Variablen können auch vor ihrer Deklaration verwendet werden (Hoisting), während `let` und `const` nicht hoisted werden."
    },
    {
      "id": 35,
      "topic": "JavaScript",
      "question": "Was ist ein Promise in JavaScript?",
      "answer": "Ein Promise ist ein Objekt in JavaScript, das einen zukünftigen Wert repräsentiert, der asynchron berechnet wird. Ein Promise kann sich in einem von drei Zuständen befinden: `pending` (während des Wartens auf das Ergebnis), `fulfilled` (wenn das Ergebnis erfolgreich zurückgegeben wurde) oder `rejected` (wenn ein Fehler aufgetreten ist). Promises werden verwendet, um asynchrone Operationen wie HTTP-Anfragen zu handhaben und eine sauberere, lesbare Syntax für das Arbeiten mit asynchronem Code zu bieten."
    },
    {
      "id": 36,
      "topic": "CSS",
      "question": "Wie setzt man den Hintergrund eines Elements mit CSS?",
      "answer": "Der Hintergrund eines Elements kann mit der `background`-Eigenschaft in CSS gesetzt werden. Die `background`-Eigenschaft kann eine Farbe, ein Bild, eine Position, eine Größe und eine Wiederholung für den Hintergrund eines Elements festlegen. Zum Beispiel: `background: #ff0000 url('image.jpg') no-repeat center center;` setzt den Hintergrund auf eine rote Farbe, ein Bild, das nicht wiederholt wird, und zentriert wird."
    },
    {
      "id": 37,
      "topic": "CSS",
      "question": "Was ist der Unterschied zwischen `padding` und `margin` in CSS?",
      "answer": "`padding` ist der Innenabstand eines Elements, also der Abstand zwischen dem Inhalt und dem Rand des Elements. `margin` ist der Außenabstand eines Elements, also der Abstand zwischen dem Rand des Elements und den benachbarten Elementen. `padding` wird innerhalb der Elementgrenzen hinzugefügt, während `margin` außerhalb der Grenzen hinzugefügt wird."
    },
    {
      "id": 38,
      "topic": "HTML",
      "question": "Was ist der Zweck des `alt`-Attributs in HTML?",
      "answer": "Das `alt`-Attribut in HTML wird verwendet, um eine alternative Beschreibung für ein Bild bereitzustellen, falls das Bild nicht geladen werden kann oder für Benutzer von Bildschirmlesern. Es verbessert die Zugänglichkeit und sorgt dafür, dass der Inhalt der Webseite auch ohne Bilder verständlich bleibt."
    },
    {
      "id": 39,
      "topic": "HTML",
      "question": "Wie fügt man eine Tabelle in HTML ein?",
      "answer": "Eine Tabelle in HTML wird mit dem `<table>`-Tag erstellt. Innerhalb der Tabelle werden die `<tr>`-Tags für Zeilen, `<td>`-Tags für Tabellenzellen und optional `<th>`-Tags für Tabellenüberschriften verwendet. Ein einfaches Beispiel: \n```html\n<table>\n  <tr>\n    <th>Überschrift 1</th>\n    <th>Überschrift 2</th>\n  </tr>\n  <tr>\n    <td>Wert 1</td>\n    <td>Wert 2</td>\n  </tr>\n</table>\n```"
    },
    {
      "id": 40,
      "topic": "JavaScript",
      "question": "Wie verwendet man `fetch` für HTTP-Anfragen in JavaScript?",
      "answer": "`fetch` ist eine moderne API in JavaScript, um HTTP-Anfragen zu machen. Um eine HTTP-Anfrage zu machen, verwenden Sie `fetch(url)` und erhalten ein Promise zurück, das die Antwort enthält. Sie können dann `.then()` verwenden, um die Antwort zu verarbeiten. Beispiel: \n```javascript\nfetch('https://api.example.com/data')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error('Fehler:', error));\n```"
    },
    {
      "id": 41,
      "topic": "Bootstrap",
      "question": "Wie verwendet man das Grid-System von Bootstrap?",
      "answer": "Das Grid-System von Bootstrap basiert auf einem 12-Spalten-Raster. Um es zu verwenden, umschließen Sie Ihre Inhalte in einem `.container` oder `.container-fluid` und verwenden Sie `.row` für Zeilen. Dann fügen Sie `.col-{breakpoint}-{number}`-Klassen für die Spalten hinzu. Zum Beispiel: `<div class=\"row\"><div class=\"col-md-6\">...</div><div class=\"col-md-6\">...</div></div>` erstellt zwei Spalten auf mittleren und größeren Bildschirmen."
    },
    {
      "id": 42,
      "topic": "IT-Fundamental",
      "question": "Was sind die grundlegenden Prinzipien der objektorientierten Programmierung?",
      "answer": "Die grundlegenden Prinzipien der objektorientierten Programmierung (OOP) sind:\n1. **Kapselung:** Daten und Methoden werden zusammen in einer Klasse gekapselt, um die interne Implementierung zu verbergen und die Benutzung zu vereinfachen.\n2. **Vererbung:** Klassen können Eigenschaften und Methoden von anderen Klassen erben, was die Wiederverwendbarkeit und Erweiterbarkeit des Codes fördert.\n3. **Polymorphismus:** Erlaubt es, dass unterschiedliche Klassen die gleiche Methode auf unterschiedliche Weise implementieren können, um unterschiedliche Ergebnisse zu erzielen.\n4. **Abstraktion:** Versteckt die komplexe Implementierung und zeigt nur die notwendigen Teile der Klasse nach außen, um die Nutzung zu vereinfachen."
    },
    {
      "id": 43,
      "topic": "HTML",
      "question": "Wie fügt man ein Formular in HTML ein?",
      "answer": "Ein Formular in HTML wird mit dem `<form>`-Tag erstellt. Innerhalb des Formulars können verschiedene Eingabefelder wie `<input>`, `<textarea>`, `<select>` und `<button>` verwendet werden. Beispiel: \n```html\n<form action=\"/submit\" method=\"post\">\n  <label for=\"name\">Name:</label>\n  <input type=\"text\" id=\"name\" name=\"name\">\n  <button type=\"submit\">Absenden</button>\n</form>\n```"
    },
    {
      "id": 44,
      "topic": "JavaScript",
      "question": "Was sind die verschiedenen Arten von Schleifen in JavaScript?",
      "answer": "In JavaScript gibt es mehrere Arten von Schleifen:\n- **`for`-Schleife:** Führt den Codeblock eine bestimmte Anzahl von Malen aus. Beispiel: `for (let i = 0; i < 5; i++) { console.log(i); }`\n- **`while`-Schleife:** Führt den Codeblock aus, solange die Bedingung wahr ist. Beispiel: `let i = 0; while (i < 5) { console.log(i); i++; }`\n- **`do...while`-Schleife:** Führt den Codeblock mindestens einmal aus und dann weiter, solange die Bedingung wahr ist. Beispiel: `let i = 0; do { console.log(i); i++; } while (i < 5);`\n- **`for...of`-Schleife:** Iteriert über Werte in einer Sammlung wie Arrays. Beispiel: `for (const value of [1, 2, 3]) { console.log(value); }`\n- **`for...in`-Schleife:** Iteriert über die Eigenschaften eines Objekts. Beispiel: `const obj = { a: 1, b: 2 }; for (const key in obj) { console.log(key, obj[key]); }`"
    },
    {
      "id": 45,
      "topic": "CSS",
      "question": "Was ist der Unterschied zwischen `absolute` und `relative` Positionierung in CSS?",
      "answer": "`absolute` Positionierung entfernt das Element aus dem normalen Layoutfluss und positioniert es relativ zum nächsten positionierten Vorfahren (nicht zum Seitenrand). Das Element kann dann mit den Eigenschaften `top`, `right`, `bottom` und `left` positioniert werden. `relative` Positionierung hingegen belässt das Element im normalen Layoutfluss, aber ermöglicht es Ihnen, es relativ zu seiner ursprünglichen Position mit den gleichen Eigenschaften zu verschieben. Die ursprüngliche Position wird jedoch beibehalten, wodurch der Layoutfluss nicht beeinträchtigt wird."
    },
    {
        "id": 46,
        "topic": "Sass",
        "question": "Explain how to define a variable in Sass?",
        "answer": "Sass variables are simple to define. You assign a value to a variable name that begins with a dollar sign ($). Once defined, you can use this variable throughout your Sass code instead of hardcoding the value directly. This makes it easier to maintain and update styles. For example:\n\n```scss\n$primary-color: #333;\n$padding: 10px;\n\n.button {\n  color: $primary-color;\n  padding: $padding;\n}\n```"
      },

      {
        "id": 47,
        "topic": "Sass",
        "question": "Explain what is a @extend function used for in Sass?",
        "answer": "In Sass, the `@extend` directive allows a selector to inherit the styles of another selector. It helps reduce code duplication by enabling one selector to share the same declarations as another. When you use `@extend`, the extending selector is added to the original selector, so they both share the same styles. This results in more maintainable and efficient CSS code. For example:\n\n```scss\n%base-button {\n  padding: 10px;\n  border: 1px solid #ccc;\n}\n\n.primary-button {\n  @extend %base-button;\n  background-color: blue;\n  color: white;\n}\n```"
      },
      {
        "id": 48,
        "topic": "Sass",
        "question": "Explain how to define a variable in Sass?",
        "answer": "Sass variables are defined by assigning a value to a name that begins with a dollar sign (`$`). This allows you to store values such as colors, fonts, or any other CSS values that you want to reuse throughout your stylesheet. Once defined, you can use these variables in your Sass code by referencing their names. For example:\n\n```scss\n$primary-color: #3498db;\n$font-size: 16px;\n\nbody {\n  color: $primary-color;\n  font-size: $font-size;\n}\n```"
      },

      {
        "id": 49,
        "topic": "Sass",
        "question": "Explain what is the difference between Sass and SCSS?",
        "answer": "Sass and SCSS are two syntaxes used by the Sass pre-processor. The main differences are:\n\n- **Sass (Indented Syntax):** Uses a syntax that relies on indentation rather than braces and semicolons. It does not use curly braces `{}` or semicolons `;`. Instead, it relies on indentation to define blocks and structure. Files have a `.sass` extension.\n\n- **SCSS (Sassy CSS):** Uses a syntax that is very similar to CSS, with curly braces `{}` and semicolons `;` to separate statements and define blocks. SCSS is a superset of CSS3, meaning that any valid CSS can be converted to SCSS by simply changing the file extension from `.css` to `.scss`. Files with this syntax have a `.scss` extension.\n\nIn summary, SCSS is more CSS-like and is often preferred for its familiar syntax, while the original Sass syntax relies on indentation and is more concise."
      },

      {
        "id": 50,
        "topic": "JavaScript",
        "question": "Explain the difference between == and === in JavaScript when comparing values.",
        "answer": "In JavaScript, `==` (loose equality) compares values after performing type coercion. This means that if the values being compared are of different types, JavaScript will attempt to convert them to a common type before making the comparison. For example, `5 == '5'` evaluates to `true` because the string `'5'` is coerced to the number `5`.\n\nOn the other hand, `===` (strict equality) compares both the value and the type without performing any type coercion. For a comparison to be true with `===`, both the value and the type must be identical. For example, `5 === '5'` evaluates to `false` because the types are different (number vs. string)."
      },
      {
        "id": 51,
        "topic": "JavaScript",
        "question": "List some of the disadvantages of JavaScript.",
        "answer": "Some of the disadvantages of JavaScript are:\n\n- **No support for multithreading:** JavaScript runs in a single-threaded environment, meaning it cannot execute multiple threads simultaneously. This can limit the performance of certain tasks that require concurrent processing.\n- **No support for multiprocessing:** JavaScript does not support true multiprocessing, which means it cannot execute code across multiple CPU cores. This can affect performance for computation-heavy tasks.\n- **Reading and writing of files is not allowed:** JavaScript running in the browser environment does not have direct access to the file system for security reasons. This means it cannot read from or write to files on the user's machine.\n- **No support for networking applications:** JavaScript in the browser does not natively support network operations like creating servers or handling low-level network communications. These operations require server-side environments or additional technologies."
      },
      {
        "id": 52,
        "topic": "JavaScript",
        "question": "Define anonymous function.",
        "answer": "An anonymous function is a function that does not have a name. These functions are declared dynamically at runtime using the function operator (`function`) instead of a function declaration. The function operator is more flexible and can be easily used as an expression. Anonymous functions are often used as arguments to other functions, in event handlers, or in scenarios where a function is needed temporarily."
      },
      {
        "id": 33,
        "topic": "JavaScript",
        "question": "In JavaScript what is an argument object?",
        "answer": "In JavaScript, the 'arguments object' refers to an array-like object that is automatically available within all functions. It contains all the arguments passed to the function, regardless of the number of parameters defined in the function declaration. Although the arguments object is not a real array, it has similar properties, such as 'length' and indexed elements, allowing you to access the arguments by their index."
      },
      {
        "id": 34,
        "topic": "JavaScript",
        "question": "Name the types of functions.",
        "answer": "There are 3 primary ways to define functions in JavaScript:\n\n1. **Function Declaration:** A named function declared with the `function` keyword, followed by its name, parameters, and body. Example:\n   ```javascript\n   function myFunction(param1, param2) {\n       // Function body\n   }\n   ```\n\n2. **Function Expression:** A function defined within an expression, often using an anonymous function. This type can be assigned to a variable. Example:\n   ```javascript\n   const myFunction = function(param1, param2) {\n       // Function body\n   };\n   ```\n\n3. **Arrow Function:** A concise syntax for writing functions, using the `=>` operator. Arrow functions do not have their own `this` context. Example:\n   ```javascript\n   const myFunction = (param1, param2) => {\n       // Function body\n   };\n   ```"
      },

      {
        "id": 55,
        "topic": "JavaScript",
        "question": "What is the difference between .map() and .forEach()?",
        "answer": ".map() and .forEach() are both array methods used to loop through an array, but they have different purposes and returns:\n\n- **.map()**: Returns a new array with the same length as the original array, where each element is the result of applying a callback function to the corresponding element of the original array. It is used when you want to transform the elements of an array and create a new array with the transformed elements.\n  ```javascript\n  const numbers = [1, 2, 3];\n  const doubled = numbers.map(x => x * 2);\n  console.log(doubled); // Output: [2, 4, 6]\n  ```\n\n- **.forEach()**: Does not return a new array. Instead, it simply executes a callback function on each element of the array. It is used for executing side effects, such as logging to the console or modifying external variables.\n  ```javascript\n  const numbers = [1, 2, 3];\n  numbers.forEach(x => console.log(x * 2)); // Output: 2, 4, 6\n  ```"
      }
      
      
  ]
  


  export default data;