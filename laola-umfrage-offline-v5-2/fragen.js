// ============================================================
// Konfiguration für die Live-Umfrage und Präsentation
// ============================================================

// ------------------------------------------------------------
// FOLIEN VOR DER UMFRAGE (Recap des 1. Treffens)
// ------------------------------------------------------------

window.FOLIEN_VOR = [
  {
    id: "recap-1",
    type: "info",
    icon: "📉",
    titel: "Die Ausgangslage",
    untertitel: "Worüber wir beim 1. Treffen gesprochen haben",
    inhalt: [
      {
        ueberschrift: "Fachkräftemangel im Bäderbereich",
        text: "Auch wir waren in den letzten Jahren erheblich vom Fachkräftemangel betroffen. Offene Stellen konnten nur mit großem Aufwand besetzt werden – mit Auswirkungen auf Öffnungszeiten und Serviceangebot.",
      },
      {
        ueberschrift: "Mangelnde Bekanntheit des Berufsbilds",
        text: "Der Beruf des Fachangestellten für Bäderbetriebe ist bei Schulabgängern weitgehend unbekannt. Ein vielseitiger, zukunftssicherer Beruf bleibt unsichtbar.",
      },
    ],
  },
  {
    id: "recap-2",
    type: "info",
    icon: "🔄",
    titel: "Unser Change-Prozess",
    untertitel: "Was wir im LA OLA verändert haben",
    inhalt: [
      {
        ueberschrift: "Neue Impulse durch Coaching",
        text: "Mit unserem neuen Geschäftsführer haben wir Sternstunden und Brennpunkte ermittelt und uns mit den 5 Dysfunktionen eines Teams beschäftigt.",
      },
      {
        ueberschrift: "Vertrauen als Fundament",
        text: "Psychologische Sicherheit und Vertrauen wurden als Grundlage erarbeitet. Werte einzelner Mitarbeiter ermittelt, Ziele gemeinsam definiert.",
      },
      {
        ueberschrift: "Gewaltfreie Kommunikation",
        text: "Mit der Methode der GFK haben wir ein Hilfsmittel an die Hand bekommen, um Konflikte im Team und mit Gästen schneller und offener zu lösen.",
      },
    ],
  },
  {
    id: "recap-3",
    type: "info",
    icon: "🎉",
    titel: "Was sich verändert hat",
    untertitel: "Erste Ergebnisse aus unserem Prozess",
    inhalt: [
      {
        ueberschrift: "Stärkeres WIR-Gefühl",
        text: "Das Team ist enger zusammengewachsen, mit mehr Vertrauen, mehr Spaß und mehr Wertschätzung im Alltag.",
      },
      {
        ueberschrift: "Personalgewinnung nicht mehr Top-Problem",
        text: "Wir sind als TEAM LA OLA viel stärker zusammengewachsen – das hat dazu geführt, dass wir Personalfluktuation und Gewinnung nicht mehr als die größte Herausforderung sehen.",
      },
      {
        ueberschrift: "Heute: Wo stehen wir alle?",
        text: "Mit der folgenden Umfrage wollen wir hören, was sich seit dem letzten Treffen bei euch im Unternehmen getan hat.",
      },
    ],
  },
];

// ------------------------------------------------------------
// FRAGEN für die Live-Umfrage
// ------------------------------------------------------------

window.FRAGEN = [
  {
    id: "f1",
    type: "text",
    titel: "Was hat sich bei euch im Unternehmen zum Thema Nachwuchsgewinnung getan?",
    untertitel: "Schreibt in Stichworten, was sich seit dem letzten Treffen entwickelt hat",
    placeholder: "z.B. neue Stellenanzeigen, Schulkooperationen, Social Media...",
    maxAntworten: 3,
  },
  {
    id: "f2",
    type: "choice",
    titel: "Welche Maßnahmen habt ihr bereits umgesetzt?",
    untertitel: "Mehrfachauswahl möglich",
    multi: true,
    optionen: [
      "Schulkooperationen / Praktika",
      "Social Media (Instagram, TikTok, ...)",
      "Eigene Karriere-Website",
      "Berufsmessen / Infoveranstaltungen",
      "Mitarbeiter werben Mitarbeiter",
      "Verbesserte Stellenanzeigen",
      "Imagefilm / Videos",
      "Kooperation mit Arbeitsagentur",
      "Noch keine Maßnahmen",
    ],
  },
  {
    id: "f3",
    type: "scale",
    titel: "Wie erfolgreich war eure Nachwuchsgewinnung im letzten Jahr?",
    untertitel: "1 = gar nicht erfolgreich, 10 = sehr erfolgreich",
    min: 1,
    max: 10,
    minLabel: "gar nicht",
    maxLabel: "sehr",
  },
  {
    id: "f4",
    type: "choice",
    titel: "Wo seht ihr aktuell die größte Herausforderung?",
    untertitel: "Eine Antwort",
    multi: false,
    optionen: [
      "Bekanntheit des Berufsbilds",
      "Bewerberqualität",
      "Konkurrenz zu anderen Branchen",
      "Bezahlung / Tarifstruktur",
      "Schichtarbeit / Wochenenden",
      "Demografischer Wandel",
      "Image des Berufs",
    ],
  },
  {
    id: "f5",
    type: "text",
    titel: "Welches Thema sollten wir heute gemeinsam vertiefen?",
    untertitel: "Was würdet ihr von den anderen Bädern gerne hören oder lernen?",
    placeholder: "z.B. Erfahrungen mit Social Media, Onboarding-Konzepte...",
    maxAntworten: 2,
  },
];

// ------------------------------------------------------------
// FOLIEN NACH DER UMFRAGE
// ------------------------------------------------------------

window.FOLIEN_NACH = [
  // Karriereseiten-Empfehlung
  {
    id: "nach-karriere",
    type: "link",
    icon: "🚀",
    titel: "Eine Empfehlung an euch",
    untertitel: "Karriereseite für den Ausbildungsberuf – frei zur Inspiration",
    text: "Wir haben für unsere Nachwuchsgewinnung eine eigene Karriereseite aufgebaut, die sich speziell an junge Menschen richtet. Vielleicht hilft sie auch euch dabei, den Ausbildungsberuf in eurer Region bekannter zu machen.",
    linkUrl: "https://ausbildung.intraworld.eu/",
    linkLabel: "ausbildung.intraworld.eu",
    linkBeschreibung: "Karriereseite zum Ausbildungsberuf Fachangestellter für Bäderbetriebe",
  },

  // Übersicht Besuchergruppen
  {
    id: "nach-besucher-uebersicht",
    type: "uebersicht",
    icon: "👥",
    titel: "4 Besuchergruppen im Bad",
    untertitel: "Wer kommt zu uns – und welche Regelungen greifen jeweils?",
    gruppen: [
      {
        icon: "🏊",
        name: "Reguläre Besucher",
        kurz: "Tagesgast, Stammkunde",
        regelung: "Haus- & Badeordnung, AGB",
        farbe: "blau",
      },
      {
        icon: "🎒",
        name: "Schulen",
        kurz: "Schulschwimmen, Schulausflug",
        regelung: "Aufsicht teilt sich + schriftliche Vereinbarung",
        farbe: "gruen",
      },
      {
        icon: "🏆",
        name: "Vereine",
        kurz: "Schwimmverein, DLRG, etc.",
        regelung: "Vertragliche Regelung zwingend erforderlich",
        farbe: "orange",
      },
      {
        icon: "🎉",
        name: "Sonderveranstaltungen",
        kurz: "Kurse, Feiern, externe Anbieter",
        regelung: "Vertragliche Regelung zwingend empfohlen",
        farbe: "lila",
      },
    ],
    hinweis: "Jede Gruppe bringt eigene rechtliche und organisatorische Anforderungen mit. Die folgenden Folien zeigen die wichtigsten Punkte für jede Gruppe.",
  },

  // Detail: Reguläre Besucher
  {
    id: "nach-besucher-regulaer",
    type: "info",
    icon: "🏊",
    titel: "Reguläre Besucher",
    untertitel: "Tagesgäste, Stammkunden, Familien",
    farbe: "blau",
    inhalt: [
      {
        ueberschrift: "Rechtliche Grundlage",
        text: "Es gilt die Haus- und Badeordnung sowie die AGB des Bades. Mit dem Lösen der Eintrittskarte kommt ein Vertrag zustande – die Badeordnung wird Bestandteil dieses Vertrags.",
      },
      {
        ueberschrift: "Aufsichtspflicht",
        text: "Erwachsene Besucher sind grundsätzlich eigenverantwortlich. Bei Kindern und Jugendlichen liegt die Aufsichtspflicht bei den Erziehungsberechtigten – das Bad sorgt für die Verkehrssicherungspflicht (Wasseraufsicht durch Fachpersonal).",
      },
      {
        ueberschrift: "Wichtige Punkte",
        text: "Aushang der Badeordnung im Eingangsbereich, Sichtbarkeit der Beckentiefen, klare Beschilderung, Wasseraufsicht durch geschultes Personal entsprechend der DGfdB-Richtlinien.",
      },
    ],
    disclaimer: "Diese Empfehlungen ersetzen keine Rechtsberatung. Im Zweifel Anwalt oder Verband konsultieren.",
  },

  // Detail: Schulen
  {
    id: "nach-besucher-schulen",
    type: "info",
    icon: "🎒",
    titel: "Schulen",
    untertitel: "Schulschwimmen und Schulausflüge",
    farbe: "gruen",
    inhalt: [
      {
        ueberschrift: "Geteilte Aufsichtspflicht",
        text: "Die Aufsichtspflicht teilt sich auf: Während des Schwimmunterrichts und in organisierten Phasen liegt sie beim Lehrer (pädagogische Aufsicht). In Pausen oder beim freien Schwimmen kann das Bad in die Verantwortung kommen – das sollte aber NICHT stillschweigend angenommen werden.",
      },
      {
        ueberschrift: "Betriebsaufsicht durch das Bad",
        text: "Das Bad stellt unabhängig davon immer die Betriebsaufsicht (Wasseraufsicht, technische Sicherheit). Das ist eine eigenständige Pflicht und ersetzt nicht die pädagogische Aufsicht der Schule.",
      },
      {
        ueberschrift: "Schriftliche Regelung empfohlen",
        text: "Dringend empfohlen: schriftliche Vereinbarung mit der Schule, in der die Aufsichtsverantwortung klar getrennt wird. Wer beaufsichtigt wann? Was passiert bei Pausen? Wie viele Lehrer pro Schülergruppe? Ohne klare Regelung drohen im Schadensfall Haftungsstreitigkeiten.",
      },
      {
        ueberschrift: "Praxis-Tipp",
        text: "Vorlage für eine Schulvereinbarung (z.B. von der DGfdB oder dem kommunalen Schulträger) nutzen und einmal jährlich mit allen kooperierenden Schulen unterzeichnen lassen.",
      },
    ],
    disclaimer: "Diese Empfehlungen ersetzen keine Rechtsberatung. Im Zweifel Anwalt oder Verband konsultieren.",
  },

  // Detail: Vereine
  {
    id: "nach-besucher-vereine",
    type: "info",
    icon: "🏆",
    titel: "Vereine",
    untertitel: "Schwimmvereine, DLRG, Triathleten u.a.",
    farbe: "orange",
    inhalt: [
      {
        ueberschrift: "Geteilte Verantwortung",
        text: "Der Verein verantwortet seine Mitglieder und das Training (Trainer/Übungsleiter mit entsprechender Qualifikation). Das Bad verantwortet die Betriebssicherheit – also Wasserqualität, Anlagensicherheit und ggf. Wasseraufsicht außerhalb der Vereinsfläche.",
      },
      {
        ueberschrift: "Vertragliche Regelung zwingend",
        text: "Eine schriftliche Nutzungsvereinbarung ist unverzichtbar: Welche Bahnen / Bereiche / Zeiten? Welche Qualifikation muss der Trainer haben (Rettungsfähigkeit!)? Wer hat Zutritt? Wie viele Personen? Versicherungsfragen, Haftungsausschluss für übliche Sportrisiken.",
      },
      {
        ueberschrift: "Qualifikation der Trainer",
        text: "Wichtig: Vom Verein eine Bestätigung einholen, dass die eingesetzten Trainer und Übungsleiter eine gültige Rettungsfähigkeit nachweisen können (mind. DRSA Silber, regelmäßig aufgefrischt). Im Schadensfall ist das ein zentraler Punkt.",
      },
      {
        ueberschrift: "Praxis-Tipp",
        text: "Mustervertrag der DGfdB als Grundlage verwenden. Nutzungsvertrag jährlich erneuern, Versicherungsnachweis abfragen, klare Ansprechpartner auf beiden Seiten benennen.",
      },
    ],
    disclaimer: "Diese Empfehlungen ersetzen keine Rechtsberatung. Im Zweifel Anwalt oder Verband konsultieren.",
  },

  // Detail: Sonderveranstaltungen
  {
    id: "nach-besucher-sonder",
    type: "info",
    icon: "🎉",
    titel: "Sonderveranstaltungen",
    untertitel: "Kurse, Feiern, externe Anbieter, Events",
    farbe: "lila",
    inhalt: [
      {
        ueberschrift: "Was fällt darunter?",
        text: "Sehr breit: Kindergeburtstage, Firmenfeiern, exklusive Buchungen außerhalb des Regulärbetriebs – aber auch Veranstaltungen während des Regulärbetriebs wie AquaFitness-Kurse mit externen Trainern, Yoga am Beckenrand, Schwimmkurse von Drittanbietern, Foto-Shootings, Filmaufnahmen.",
      },
      {
        ueberschrift: "Vertragliche Regelung zwingend empfohlen",
        text: "Egal wie klein die Veranstaltung wirkt – immer eine schriftliche Vereinbarung. Inhalt: Art und Umfang der Veranstaltung, Personenzahl, Zeit, genutzte Bereiche, Verantwortlicher, Versicherung, Haftung, Reinigung/Wiederherstellung.",
      },
      {
        ueberschrift: "Externe Kursanbieter – häufig übersehen",
        text: "Wenn z.B. ein externer AquaFitness-Trainer während des Regulärbetriebs arbeitet, läuft das oft auf Zuruf. Riskant: Wer haftet, wenn ein Kursteilnehmer verletzt wird? Hat der Trainer eine eigene Berufshaftpflicht? Klare Vereinbarung mit jedem externen Anbieter ist Pflicht.",
      },
      {
        ueberschrift: "Praxis-Tipp",
        text: "Standardisierten Veranstaltungsvertrag entwickeln (verschiedene Vorlagen für Privat / Firma / Kursanbieter). Versicherungsnachweis vom Anbieter abfragen. Bei Veranstaltungen außerhalb der Öffnungszeiten zusätzlich an separate Personalplanung und Sicherheitskonzept denken.",
      },
    ],
    disclaimer: "Diese Empfehlungen ersetzen keine Rechtsberatung. Im Zweifel Anwalt oder Verband konsultieren.",
  },

  // Bäderbook-Hinweis (letzte Folie)
  {
    id: "nach-baederbook",
    type: "link",
    icon: "💡",
    titel: "Bäderbook",
    untertitel: "Digitale Tools für die Bäderbranche",
    text: "Aus der Praxis für die Praxis: Bäderbook bietet digitale Lösungen, die speziell für die Anforderungen von Schwimmbädern und Freizeitanlagen entwickelt wurden. Schaut gerne vorbei.",
    linkUrl: "https://www.baederbook.de",
    linkLabel: "www.baederbook.de",
    linkBeschreibung: "Software & digitale Tools für Schwimmbäder",
    buttonLabel: "Jetzt entdecken",
  },
];

// ------------------------------------------------------------
// VERANSTALTUNG (Header-Anzeige)
// ------------------------------------------------------------

window.VERANSTALTUNG = {
  titel: "2. Treffen Arbeitskreis",
  untertitel: "Nachwuchsgewinnung in den Bädern",
  // Einheitliche Event-ID für Beamer-Handy-Synchronisation (Netlify Functions)
  eventId: "laola-umfrage-v5-2",
  teilnehmerUrl: "https://laola-ausbildung.netlify.app/laola-umfrage-offline-v5-2/umfrage.html",
};

// Abwärtskompatibilität: alte Variable RECAP_FOLIEN bleibt verfügbar
window.RECAP_FOLIEN = window.FOLIEN_VOR;
