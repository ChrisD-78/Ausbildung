#!/usr/bin/env python3
"""
Skript zum Erstellen einer PDF-Datei von der Dashboard-Seite
"""

import sys
import os
from pathlib import Path

def create_pdf_with_playwright():
    """Erstellt PDF mit Playwright (empfohlen)"""
    try:
        from playwright.sync_api import sync_playwright
        
        # Pfad zur HTML-Datei
        html_file = Path(__file__).parent / 'dashboard.html'
        pdf_file = Path(__file__).parent / 'dashboard.pdf'
        
        if not html_file.exists():
            print(f"Fehler: {html_file} nicht gefunden!")
            return False
        
        print(f"Erstelle PDF von {html_file}...")
        
        with sync_playwright() as p:
            browser = p.chromium.launch()
            page = browser.new_page()
            
            # Lade die HTML-Datei
            file_url = f"file://{html_file.absolute()}"
            page.goto(file_url, wait_until='networkidle')
            
            # Warte kurz, damit alles geladen ist
            page.wait_for_timeout(2000)
            
            # Erstelle PDF
            page.pdf(
                path=str(pdf_file.absolute()),
                format='A4',
                print_background=True,
                margin={
                    'top': '20mm',
                    'right': '15mm',
                    'bottom': '20mm',
                    'left': '15mm'
                }
            )
            
            browser.close()
        
        print(f"✅ PDF erfolgreich erstellt: {pdf_file}")
        return True
        
    except ImportError:
        print("Playwright nicht installiert. Installiere es jetzt...")
        os.system("pip3 install playwright")
        os.system("playwright install chromium")
        return create_pdf_with_playwright()
    except Exception as e:
        print(f"Fehler beim Erstellen der PDF: {e}")
        return False

def create_pdf_with_weasyprint():
    """Erstellt PDF mit WeasyPrint"""
    try:
        from weasyprint import HTML
        
        html_file = Path(__file__).parent / 'dashboard.html'
        pdf_file = Path(__file__).parent / 'dashboard.pdf'
        
        if not html_file.exists():
            print(f"Fehler: {html_file} nicht gefunden!")
            return False
        
        print(f"Erstelle PDF von {html_file}...")
        
        HTML(filename=str(html_file.absolute())).write_pdf(str(pdf_file.absolute()))
        
        print(f"✅ PDF erfolgreich erstellt: {pdf_file}")
        return True
        
    except ImportError:
        print("WeasyPrint nicht installiert. Versuche Installation...")
        os.system("pip3 install weasyprint")
        return create_pdf_with_weasyprint()
    except Exception as e:
        print(f"Fehler beim Erstellen der PDF: {e}")
        return False

def create_pdf_simple():
    """Einfache Methode: Öffnet Browser und druckt zu PDF"""
    import subprocess
    import platform
    
    html_file = Path(__file__).parent / 'dashboard.html'
    pdf_file = Path(__file__).parent / 'dashboard.pdf'
    
    if not html_file.exists():
        print(f"Fehler: {html_file} nicht gefunden!")
        return False
    
    print("Öffne Browser zum Drucken...")
    print(f"Bitte drucken Sie die Seite als PDF und speichern Sie sie als: {pdf_file.name}")
    
    # Öffne die HTML-Datei im Browser
    system = platform.system()
    if system == 'Darwin':  # macOS
        subprocess.run(['open', str(html_file.absolute())])
    elif system == 'Windows':
        subprocess.run(['start', str(html_file.absolute())], shell=True)
    else:  # Linux
        subprocess.run(['xdg-open', str(html_file.absolute())])
    
    return True

if __name__ == '__main__':
    print("=" * 60)
    print("PDF-Erstellung für Dashboard-Seite")
    print("=" * 60)
    print()
    
    # Versuche verschiedene Methoden
    success = False
    
    # Methode 1: Playwright (beste Qualität)
    print("Versuche Methode 1: Playwright...")
    try:
        success = create_pdf_with_playwright()
    except:
        pass
    
    # Methode 2: WeasyPrint (falls Playwright nicht funktioniert)
    if not success:
        print("\nVersuche Methode 2: WeasyPrint...")
        try:
            success = create_pdf_with_weasyprint()
        except:
            pass
    
    # Methode 3: Manueller Druck (Fallback)
    if not success:
        print("\nVerwende Methode 3: Manueller Druck...")
        create_pdf_simple()
        print("\n📝 Anleitung:")
        print("1. Die Seite wurde im Browser geöffnet")
        print("2. Drücken Sie Cmd+P (Mac) oder Ctrl+P (Windows/Linux)")
        print("3. Wählen Sie 'Als PDF speichern'")
        print("4. Speichern Sie als 'dashboard.pdf'")
    
    print("\n" + "=" * 60)

