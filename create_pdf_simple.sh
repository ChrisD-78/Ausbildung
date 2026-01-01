#!/bin/bash
# Einfaches Skript zum Erstellen einer PDF von dashboard.html

echo "📄 PDF-Erstellung für Dashboard-Seite"
echo "======================================"
echo ""
echo "Die Dashboard-Seite wird im Browser geöffnet."
echo ""
echo "📝 Anleitung zum Erstellen der PDF:"
echo "1. Warten Sie, bis die Seite vollständig geladen ist"
echo "2. Drücken Sie Cmd+P (⌘+P) zum Drucken"
echo "3. Wählen Sie 'Als PDF speichern'"
echo "4. Speichern Sie als 'dashboard.pdf' im Ordner:"
echo "   $(pwd)"
echo ""
echo "Die Seite wird jetzt geöffnet..."

# Öffne die HTML-Datei im Standard-Browser
open dashboard.html

echo ""
echo "✅ Browser geöffnet. Bitte folgen Sie den Anweisungen oben."

