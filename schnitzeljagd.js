
    // Station data
    const stations = {
        1: {
            title: "Station 0: Die ersten Jahre",
            location: "https://maps.app.goo.gl/rEcL2qJJPPsbs9Gx8",
            difficulty: "Einfach",
            riddle: "Vier Textausschnitte von Oma und Opa müssen in die richtige chronologische Reihenfolge gebracht werden",
            solution: "In der richtigen Reihenfolge ergeben die Buchstaben auf der Rückseite das erste Lösungswort: 'Geburt'. <br> Das erste Textausschnitt ist von 1965 und hat auf der Rückseite ein G. <br> Der nächste ist von 1969 und versteckt den Buchstaben E. <br> Als nächstes kommt ein Text zum Jahr 1972. Auf der Rückseite steht ´BUR´. <br> Zuletzt das T hinter dem Text zu 1974. <br> Das Lösungswort müsst ihr euch merken.",
            color: "pink"
        },
        2: {
            title: "Station 1: In die Geschichte eingegangen",
            location: "https://maps.app.goo.gl/fbrFzFh8fkMJZ2Rd6",
            difficulty: "Einfach",
            riddle: "Dieses Rätsel sollte Mama problemlos lösen können. Es gibt ein Gedicht, einen FDJ-Ausweis und eine Frage mit drei Antwortmöglichkeiten.",
            solution: "Die richtige Antwort ist c, die uns zum Lösungswort 'Osten' bringt. Das Wort nicht vergessen! ;)",
            color: "purple"
        },
        3: {
            title: "Station 2: Große Veränderungen",
            location: "https://maps.app.goo.gl/c6LUeSxBeh1YvBkt7",
            difficulty: "Schwer",
            riddle: "Ein Bilderrätsel mit versteckten Buchstaben. Jeder Reim führt zu einem Bildausschnitt, in dem ein Buchstabe versteckt ist. Aus den richtigen gefundenen Buchstaben ergibt sich das Lösungswort",
            solution: "Der Kirchturm zeigt ein M. <br> Mamas Auto zu dieser Zeit war rot, versteckt ist der Buchstabe A. <br> Unter dem Hammer mit dem die Berliner Mauer zerschlagen wird, sieht man den Buchstaben U. <br> Gorbatschow zeigt auf seiner Hand den Buchstaben E. <br> Und zuletzt trägt die Krankenschwester den Buchstaben R. <br> Das Lösungswort lautet Mauer.",
            color: "blue"
        },
        4: {
            title: "Station 3: Ein Lied im Kopf",
            location: "https://maps.app.goo.gl/U88fTKUWJiZX5sjGA",
            difficulty: "Mittel",
            riddle: "Ein Lied im Kopf, Ein Code gesucht. Vier Ziffern soll er haben, eine davon ist gerade",
            solution: "1. Rätsel: ´...und drei macht neune´, also die 9 <br> 2. Rätsel: ´drei mal drei macht sechs´ - ganz klar, also die 3 <br> 3. Rätsel: Die Unendlichkeit endet nie, also eine umgekippte 8. <br> 4. Rätsel: Der letzte wird bekanntlich der erste sein, was uns zur Zahl 1 bringt. <br> Es ergibt sich der Zahlencode 9381. Daraus ergibt sich das Lösungswort ´Team´.",
            color: "green"
        },
        5: {
            title: "Station 4: Reisen",
            location: "https://maps.app.goo.gl/v99AvW5eibxxmeFQ6",
            difficulty: "Einfach",
            riddle: "Bringe die vier Urlaubsfotos in die chronologisch richtige Reihenfolge und nenne zu jedem Bild den Ort, an dem wir waren. Hast du das geschafft, schau auf die Rückseiten der Bilder. Dort findest du den Schlüssel zum Weiterkommen.",
            solution: "1. Bild: Thüringer Wald, 2005 | Mit Oma und Opa auf der Bank. <br> 2. Bild: Neukirchen Österreich, 2008 | Mama mit uns vier <br> 3. Bild: Großglockner, 2012 | Im Hintergrund der Gletscher <br> 4. Bild: Bretagne, 2013 | Mit dem Meer im Hintergrund. <br> Das Lösungswort lautet `Familie´.",
            color: "yellow"
        },
        6: {
            title: "Station 5: Eine Reise",
            location: "https://maps.app.goo.gl/qYQdCFBDnztfWtZr5",
            difficulty: "Einfach",
            riddle: "Zu Mamas 50. Geburtstag waren wir in London. Deshalb gibt es hier ein Puzzle aus Bildern aus dem Urlaub.",
            solution: "Wenn das Bild richtig zusammengeklebt wurde, findet ihr auf der Rückseite ein Kreuzworträtsel. Hier müssen alle Lösungswörter von den vorherigen Stationen eingetragen werden. Daraus ergibt sich dann ein neues Lösungswort ('Mutti'). Ihr findet hier auch einen QR-Code, den muss Mama scannen. Sie landet auf einer Website, auf die sie nur mit dem Lösungswort kommt. Dann findet ihr dort den nächsten Standort.",
            color: "red"
        },
        7: {
            title: "Station 6: Das große Finale",
            location: "Forsthaus Neuhaus",
            difficulty: "Überraschung",
            riddle: "Hier musst du dich selbst überraschen lassen.",
            solution: "Bringt Hunger und gute Laune mit.",
            color: "indigo"
        }
    };

    // Show station details
    function showStation(stationNumber) {
        const station = stations[stationNumber];
        const stationContent = document.getElementById('station-content');

        // Create HTML for station details
        stationContent.innerHTML = `
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="bg-${station.color}-500 text-white p-4">
                    <h2 class="text-2xl font-bold">${station.title}</h2>
                    <div class="mt-2 flex justify-between items-center">
                        <span class="text-sm font-medium"><i class="fas fa-map-marker-alt mr-1"></i> <a href="${station.location}" target="_blank"
                                                                                                                                    class="inline-flex items-center hover:text-pink-800">
                                                                                                                               Hier geht´s zur nächsten Station
                                                                                                                                 </a></span>
                        <span class="px-3 py-1 bg-${station.color}-100 text-${station.color}-800 rounded-full text-sm">${station.difficulty}</span>
                    </div>
                </div>
                <div class="p-6">
                    <div class="mb-8">
                        <h3 class="text-xl font-bold text-${station.color}-700 mb-3"><i class="fas fa-question-circle mr-2"></i> Das Rätsel</h3>
                        <p class="text-gray-700 text-lg">${station.riddle}</p>
                    </div>
                    <div class="bg-${station.color}-50 p-4 rounded-lg border-l-4 border-${station.color}-500">
                        <h3 class="text-xl font-bold text-${station.color}-700 mb-3"><i class="fas fa-lightbulb mr-2"></i> Die Lösung</h3>
                        <p class="text-gray-700 text-lg">${station.solution}</p>
                    </div>
                    <div class="mt-8 text-center">
                        <button onclick="backToHome()" class="px-6 py-3 bg-${station.color}-500 hover:bg-${station.color}-600 text-white rounded-lg font-medium transition">
                            <i class="fas fa-arrow-left mr-2"></i> Zurück zur Übersicht
                        </button>
                    </div>
                </div>

        `;

        // Switch views
        document.getElementById('homepage').classList.add('hidden');
        document.getElementById('station-pages').classList.remove('hidden');

        // Scroll to top
        window.scrollTo(0, 0);
    }

    // Go back to homepage
    function backToHome() {
        document.getElementById('homepage').classList.remove('hidden');
        document.getElementById('station-pages').classList.add('hidden');
        window.scrollTo(0, 0);
    }
