
    // Station data
    const stations = {
        1: {
            title: "Station 0: Die ersten Jahre",
            location: "Zuhause",
            difficulty: "Einfach",
            riddle: "Vier Textausschnitte von Oma und Opa müssen in die richtige chronologische Reihenfolge gebracht werden",
            solution: "In der richtigen Reihenfolge ergeben die Buchstaben auf der Rückseite das erste Lösungswort: 'Geburt'. Das Lösungswort müsst ihr euch merken.",
            color: "pink"
        },
        2: {
            title: "Station 1: In die Geschichte eingegangen",
            location: "Autobahnauffahrt",
            difficulty: "Einfach",
            riddle: "Dieses Rätsel sollte Mama problemlos lösen können. Es gibt ein Gedicht, einen FDJ-Ausweis und eine Frage mit drei Antwortmöglichkeiten.",
            solution: "Die richtige Antwort ist c, die uns zum Lösungswort 'Osten' bringt. Das Wort nicht vergessen! ;)",
            color: "purple"
        },
        3: {
            title: "Station 2: Große Veränderungen",
            location: "Pfad",
            difficulty: "Schwer",
            riddle: "tba",
            solution: "tba",
            color: "blue"
        },
        4: {
            title: "Station 3: Neues Leben",
            location: "Wald",
            difficulty: "Mittel",
            riddle: "tba",
            solution: "tba",
            color: "green"
        },
        5: {
            title: "Station 4: ?",
            location: "Wald",
            difficulty: "Schwer",
            riddle: "tba",
            solution: "tba",
            color: "yellow"
        },
        6: {
            title: "Station 5: Eine Reise",
            location: "Garage",
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
                        <span class="text-sm font-medium"><i class="fas fa-map-marker-alt mr-1"></i> ${station.location}</span>
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
