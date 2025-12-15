# 📖 Benutzerhandbuch: Phils PF2e AI Translator

Willkommen beim ultimativen Übersetzungs-Tool für **Foundry VTT (Pathfinder 2e)**. Dieses Modul hilft dir, Journal-Einträge schnell, konsistent und mithilfe moderner KI (Gemini, ChatGPT, Claude etc.) zu übersetzen.

---

## 1. ⚙️ Erste Schritte & Einrichtung

Bevor es losgeht, müssen wir sicherstellen, dass alles korrekt eingestellt ist.

1.  **Aktivierung**: Stelle sicher, dass das Modul in deiner Welt aktiviert ist.
2.  **Konfiguration**: Navigiere zu `Einstellungen` > `Modul-Einstellungen` > `Phils PF2e AI Translator`.
    * **AI Provider**: Wähle deinen KI-Anbieter (empfohlen: *Google Gemini* oder *OpenAI*).
    * **Game System**: Wähle zwingend **"Pathfinder 2e"** (wichtig für das korrekte Regel-Wording).
    * **Max Prompt-Länge**: Standard ist `100.000`.
        > *Hinweis: Erhöhe diesen Wert nur, wenn du ein kostenpflichtiges Abo oder ein Modell mit großem Kontext-Fenster (z. B. Gemini 1.5) nutzt.*

---

## 2. 🚀 Der Übersetzungs-Workflow

Folge diesen Schritten, um deine Inhalte zu übersetzen.

### Schritt 1: Journal auswählen
Öffne den **"AI Translation Assistant"** (Button im Journal-Browser) und ziehe ein Journal oder eine einzelne Seite per Drag-and-Drop in das Fenster.

### Schritt 2: Konfiguration & Prompt erstellen
Im nun offenen Konfigurationsfenster:
1.  **Seiten wählen**: Markiere die Checkboxen der Seiten, die übersetzt werden sollen.
    * *Tipp:* Starte mit kleinen Mengen (Batch-Größe beachten), um die KI nicht zu überfordern.
2.  **Starten**: Klicke auf den Button `Übersetzung starten`.
3.  **Zwischenablage**: Das Modul generiert nun den Prompt und kopiert ihn **automatisch** in deine Zwischenablage.
    * *Info:* Der Text beginnt mit `[ANFANG_DER_ANFRAGE]` und endet mit `[ENDE_DER_ANFRAGE]`.

### Schritt 3: KI füttern
1.  Öffne deinen KI-Chat (der Browser-Tab öffnet sich meist automatisch).
2.  Klicke in das Eingabefeld und drücke `STRG+V` (Einfügen).
3.  Sende die Nachricht ab.

### Schritt 4: Antwort verarbeiten (Wichtig!)
Die KI wird mit **zwei separaten JSON-Code-Blöcken** antworten. Gehe exakt so vor:

#### 🅰️ Phase 1: Die Übersetzung
1.  Kopiere aus der KI-Antwort nur den **ersten Code-Block** (unter der Überschrift "BLOCK 1").
2.  Gehe zurück zu Foundry in das Fenster **"Result"**.
3.  Füge den Code in das Textfeld ein.
4.  Klicke auf **"Aktualisieren"**.
    * *Das Journal wird nun im Hintergrund aktualisiert.*

#### 🅱️ Phase 2: Das Glossar (Optional)
*Falls die KI neue Begriffe gelernt hat (also eigentlich immer), öffnet sich jetzt automatisch ein zweites Fenster ("Glossar aktualisieren").*
1.  Kopiere aus der KI-Antwort den **zweiten Code-Block** (unter der Überschrift "BLOCK 2").
2.  Füge ihn in dieses neue Fenster ein.
3.  Bestätige mit **"Hinzufügen"**.
    * *Dein 'AI Glossary' ist nun schlauer für die nächste Runde!*

---

## 3. 🖥️ Die Fenster im Detail

### 📋 Das Resultat-Fenster ("Result")
Hier landest du immer zuerst, nachdem du den Prompt kopiert hast.
* **Eingabefeld**: Hierhin gehört der **BLOCK 1** der KI-Antwort.
* **Button "Journal aktualisieren"**: Wendet die Übersetzung an.
* **Button "Überspringen"**: Ignoriert die aktuelle Seite, falls die KI einen Fehler gemacht hat.

### 📚 Das Glossar-Fenster ("Update Glossary")
Erscheint nur, wenn neue Fachbegriffe (z. B. "Fireball" -> "Feuerball") erkannt wurden.
* **Liste**: Zeigt eine Vorschau der neuen Begriffe.
* **Button "Zum Glossar hinzufügen"**: Speichert die Begriffe dauerhaft im Journal `AI Glossary`. Ab jetzt nutzt die KI diese Übersetzung konsistent.

### ⚖️ Das Konflikt-Fenster ("Glossar Konflikte")
*Erscheint oft beim Grammatik-Check oder Re-Übersetzungen.*
Dies ist deine Sicherheits-Zentrale. Sie warnt dich, wenn die KI einen Begriff ändern will, der eigentlich durch dein Glossar geschützt ist.
* **Original**: Der geschützte Begriff aus deinem Glossar (z. B. "Langschwert").
* **Neu (KI)**: Der Vorschlag der KI (z. B. "Langes Schwert").
* **Deine Entscheidung**:
    * 🔘 **Wiederherstellen**: Der Begriff aus dem Glossar wird erzwungen. *(Empfohlen für Konsistenz)*.
    * 🔘 **Neu behalten**: Die Änderung der KI wird akzeptiert (z. B. bei nötigen Grammatik-Anpassungen wie Genitiv).

---

## 4. ✨ Features & Funktionen

### 📚 Das KI-Glossar (Konsistenz ist King)
Das Modul sucht nach einem Journal namens **"AI Glossary"**. Existiert es, wird dessen Inhalt jeder Anfrage beigefügt. So weiß die KI, dass "Mage Hand" immer "Magische Hand" heißt.
* **Erstellung**: Wähle ein Journal mit vielen Namen/Orten, setze den Modus auf **"Nur Glossar (Namen) generieren"** und lass die KI eine Basis-Liste erstellen.

### 📝 Grammatik-Check
Wähle im Menü `Grammatik-Check` statt `Übersetzung`.
* Die KI prüft den deutschen Text auf Fehler und Logik.
* *Sicherheit:* Begriffe aus dem Glossar werden dabei "gelocked", damit die KI sie nicht verschlimmbessert.

### 🔄 Auto-Batch (Automatisierung)
* **Automatische Weiterschaltung**: Nach einem Batch (Standard: 10 Seiten) öffnet sich automatisch das Fenster für die nächsten Seiten.
* **Intelligente Auswahl**: Das Modul erkennt automatisch, welche Seiten noch unübersetzt (oder ungeprüft) sind und wählt diese vorrangig aus.

### ✅ Status-Symbole
* ✅ **Grüner Haken**: Seite ist fertig übersetzt.
* 📘 **Blaues "AB"**: Seite wurde grammatikalisch geprüft.

---

## 5. 🛠️ Fehlerbehebung (Troubleshooting)

### 😵‍💫 Die KI "halluziniert" (Häufigster Fehler)
Die KI schreibt Unsinn oder verliert den Kontext.
* **Lösung**: Versuche nicht, die KI im Chat zu korrigieren. Das verschwendet Tokens. Starte einen **neuen Chat** und füge den Prompt erneut ein.

### ✂️ Fehler: "Incomplete AI Response"
Die KI hört mitten im Code-Block auf (Text zu lang).
* **Lösung A**: Schreibe "Weiter" oder "Continue". Kopiere beide Teile manuell zusammen.
* **Lösung B**: Reduziere die "Batch Size" in den Modul-Einstellungen (z. B. auf 5 Seiten).

### 🚫 Fehler: "JSON invalid"
Du hast Text mitkopiert, der nicht zum Code gehört.
* **Lösung**: Achte darauf, **nur** den Teil zwischen den Klammern `{` und `}` (bzw. den Code-Block-Markierungen) zu kopieren.

### 🔒 Fehler: "ID Verification Failed"
Die KI hat versucht, interne System-IDs zu ändern. Das Modul blockiert dies zum Schutz deiner Daten.
* **Lösung**: Klicke auf "Regenerate" bei der KI. Falls das nicht hilft: Prompt neu generieren mit weniger Seiten.

---

## 6. 💡 Profi-Tipps

* **Custom Instructions**: Nutze das Feld für eigene Anweisungen im Übersetzungs-Fenster.
    * *Beispiel:* "Nutze das informelle 'Du' statt 'Sie'" oder "Schreibe im Stil eines alten Zwerges".
* **Konflikt-Management**: Sei vorsichtig, wenn du im Konflikt-Fenster auf "Alle neuen übernehmen" klickst. Manchmal will die KI etablierte Namen "eindeutschen", die du eigentlich englisch lassen wolltest.
