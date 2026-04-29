# Offline-Vorschau – Live-Umfrage (v4)

Diese Version läuft **komplett im Browser ohne Server**.

## Was ist neu in v4?

🆕 **Folien NACH der Umfrage**
- 🔗 **Karriereseiten-Empfehlung** (Link auf https://ausbildung.intraworld.eu/) mit QR-Code
- 👥 **Übersicht: 4 Besuchergruppen** (visuelle 2×2-Darstellung mit Farbcodes)
- 📋 **4 Detail-Folien** zu jeder Besuchergruppe (Reguläre Besucher, Schulen, Vereine, Sonderveranstaltungen)
- Jede Detail-Folie hat **eigene Akzentfarbe** (blau/grün/orange/lila)
- Rechtlicher **Disclaimer** auf jeder Detail-Folie

## Kompletter Ablauf

**Vor der Umfrage:** 3 Rückblick-Folien zum 1. Treffen
**Umfrage:** 5 Fragen
**Nach der Umfrage:**
1. Empfehlung Karriereseite
2. Übersicht 4 Besuchergruppen
3. Reguläre Besucher (blau)
4. Schulen (grün)
5. Vereine (orange)
6. Sonderveranstaltungen (lila)

**Total: 14 Schritte** – alles mit dem "Weiter"-Button durchschaltbar.

## So testest du

1. Entpacke `laola-umfrage-offline-v4`
2. Doppelklick auf **`start.html`**
3. Öffne in separaten Tabs:
   - 📺 Präsentation (Beamer)
   - 📱 Teilnehmer (Handy)
   - Optional: 🎛️ Moderation

4. **Im Präsentations-Tab**: "▶️ Starten" oder Leertaste – durchklicken wie PowerPoint

## Tastatur in der Präsentation

- `→` / Leertaste / Bild ab → Weiter
- `←` / Bild auf → Zurück
- Funktioniert auch mit Presenter-Klicker

## Inhalte anpassen

Datei `fragen.js` bearbeiten:
- **`FOLIEN_VOR`** – Folien vor der Umfrage (Rückblick)
- **`FRAGEN`** – die 5 Umfrage-Fragen
- **`FOLIEN_NACH`** – Folien nach der Umfrage (Empfehlungen, Themen)

Folien-Typen:
- `info` – Standard-Folie mit Überschrift + Inhalts-Blöcken (+ optional Disclaimer)
- `link` – große Folie mit Link und QR-Code (z.B. Empfehlungen)
- `uebersicht` – 2×2 Grid mit 4 farbigen Karten (z.B. Besuchergruppen)

## Rechtlicher Hinweis

Die Inhalte zu den Besuchergruppen wurden auf Basis der Diskussion erstellt
und enthalten praxisnahe Empfehlungen. Sie ersetzen **keine Rechtsberatung**.
Für konkrete Fälle bitte einen Anwalt oder den zuständigen Verband (z.B. DGfdB)
konsultieren. Der Disclaimer ist auf jeder Detail-Folie zu sehen.

## Wenn alles passt

Sag Bescheid – dann übertrage ich das in die Online-Version (Netlify) zur Veröffentlichung.
