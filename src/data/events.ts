export type Side = "west" | "east";

export type EventItem = {
  id: string;
  year: 1946 | 1947 | 1948 | 1949;
  dateLabel: string;
  side: Side;
  title: string;
  overview: string;
  details: string[];
  createdBy: string;
  sources?: string[];
  category?: string;
  image?: {
    src: string;
    link: string;
    alt: string;
  };
  images?: Array<{
    src: string;
    link: string;
    alt: string;
  }>;
  positionPx: number;
};

export const timelineHeightPx = 2050;
const imagePath = (filename: string) => `${import.meta.env.BASE_URL}images/${filename}`;

export const events: EventItem[] = [
  {
    id: "zwangsvereinigung-spd-kpd-sed-1946",
    year: 1946,
    dateLabel: "1946",
    side: "east",
    title: "Zwangsvereinigung von SPD und KPD zur SED (1946)",
    category: "Kalter Krieg",
    createdBy: "Elmar, Lennox, Alex",
    positionPx: 40,
    overview:
      "Mit der erzwungenen Vereinigung von SPD und KPD zur SED wird in der Sowjetischen\nBesatzungszone die Grundlage für eine zentral gelenkte Einparteienherrschaft\ngeschaffen. Unter sowjetischem Einfluss beginnt der systematische Umbau von Politik\nund Gesellschaft im Sinne eines sozialistischen Systems nach sowjetischem Vorbild.",
    details: [
      "● 1946 werden SPD und KPD in der SBZ zur SED (Sozialistische Einheitspartei Deutschlands) zwangsvereinigt.\n● Die Sowjetunion unterstützt die SED politisch und organisatorisch.\n● Die SED übernimmt zunehmend die Kontrolle über:\n● Verwaltung\n● Polizei\n● Justiz\n● Medien\n● Ziel ist der Aufbau eines sozialistischen Staates nach sowjetischem Vorbild.\nEinordnung:\nDiese Entwicklung ist Teil der beginnenden Systemkonfrontation zwischen Ost und West und ein frühes Zeichen der Blockbildung im Kalten Krieg."
    ]
  },
  {
    id: "truman-doktrin-1947-03-12-ost",
    year: 1947,
    dateLabel: "12. März 1947",
    side: "east",
    title: "Truman-Doktrin (12. März 1947)",
    category: "Kalter Krieg",
    createdBy: "Elmar, Lennox, Alex",
    positionPx: 280,
    overview:
      "Mit der Truman-Doktrin formulieren die USA offiziell ihre Containment-Politik und\npositionieren sich als Schutzmacht gegen die Ausbreitung des Kommunismus. Damit\nwird die weltpolitische Systemkonfrontation zwischen liberaler Demokratie und\nSozialismus offen ausgesprochen und verschärft.",
    details: [
      "● Präsident Truman verspricht wirtschaftliche und militärische Hilfe für gefährdete Staaten.\n● Ziel: Eindämmung des Kommunismus („Containment-Politik“).\n● Die Sowjetunion wertet dies als Angriff auf ihren Einflussbereich.\nFolge für die Ostzone:\n● stärkere politische Abgrenzung vom Westen\n● beschleunigter Aufbau eines sozialistischen Staates"
    ]
  },
  {
    id: "marshall-plan-ankuendigung-juni-1947-beginn-1948-ost",
    year: 1947,
    dateLabel: "Ankündigung Juni 1947, Beginn 1948",
    side: "east",
    title: "Marshall-Plan (Ankündigung Juni 1947, Beginn 1948)",
    category: "Kalter Krieg",
    createdBy: "Elmar, Lennox, Alex",
    positionPx: 320,
    overview:
      "Der Marshall-Plan dient nicht nur dem wirtschaftlichen Wiederaufbau Westeuropas,\nsondern stärkt zugleich die politische Bindung der westlichen Staaten an die USA.\nDadurch vertieft sich die wirtschaftliche und ideologische Spaltung Europas.",
    details: [
      "● Wirtschaftliche Hilfe zum Wiederaufbau nach dem Zweiten Weltkrieg.\n● Die Sowjetunion lehnt die Teilnahme ab.\n● Der Ostzone wird die Teilnahme ausdrücklich verboten.\nFolgen für die spätere DDR:\n● wirtschaftliche Trennung von Ost und West\n● Beginn einer eigenständigen sozialistischen Planwirtschaft"
    ]
  },
  {
    id: "waehrungsreformen-juni-1948-ost",
    year: 1948,
    dateLabel: "Juni 1948",
    side: "east",
    title: "Währungsreformen (Juni 1948)",
    category: "Kalter Krieg",
    createdBy: "Elmar, Lennox, Alex",
    positionPx: 1455,
    overview:
      "Die Einführung unterschiedlicher Währungen in Ost- und Westdeutschland markiert\neinen entscheidenden Schritt zur wirtschaftlichen und politischen Teilung\nDeutschlands. Sie verstärkt die Integration der Westzonen in das westliche\nWirtschaftssystem und zwingt die SBZ zu einer klaren Abgrenzung.",
    details: [
      "● In den Westzonen wird die Deutsche Mark (DM) eingeführt.\n● Die Sowjetische Besatzungszone reagiert mit der Einführung der Ostmark.\n● Ziel im Westen: wirtschaftliche Stabilisierung.\n● Reaktion im Osten: Schutz des eigenen Wirtschaftsraumes.\nBedeutung:\n● wirtschaftliche Spaltung Deutschlands wird unumkehrbar\n● klare Trennung zwischen kapitalistischem Westen und sozialistischem Osten"
    ]
  },
  {
    id: "berlin-blockade-1948-06-24-1949-05-12-ost",
    year: 1948,
    dateLabel: "24. Juni 1948 – 12. Mai 1949",
    side: "east",
    title: "Berlin-Blockade (24. Juni 1948 – 12. Mai 1949)",
    category: "Kalter Krieg",
    createdBy: "Elmar, Lennox, Alex",
    positionPx: 1515,
    overview:
      "Die Berlin-Blockade stellt die erste offene Konfrontation der Supermächte im Kalten\nKrieg dar. Sie verdeutlicht die strategische Bedeutung Berlins und führt zu einer weiteren\nVerhärtung der Fronten zwischen Ost und West.",
    details: [
      "● Blockade aller Land- und Wasserwege nach West-Berlin.\n● Ziel: Aufgabe der Währungsreform rückgängig machen und Druck auf die Westmächte ausüben.\n● Die Westmächte organisieren die Berliner Luftbrücke zur Versorgung der Stadt.\n● Die Blockade wird 1949 beendet.\nErgebnis:\n● Die Blockade scheitert.\n● Die Fronten im Kalten Krieg verhärten sich weiter."
    ]
  },
  {
    id: "volkskongressbewegung-1947-1949-ost",
    year: 1947,
    dateLabel: "1947–1949",
    side: "east",
    title: "Volkskongressbewegung (1947–1949)",
    category: "Kalter Krieg",
    createdBy: "Elmar, Lennox, Alex",
    positionPx: 520,
    overview:
      "Mit der Volkskongressbewegung schafft die SED den politischen Rahmen für eine\nscheinbar demokratische Legitimation der Staatsgründung. Tatsächlich dient sie der\ninstitutionellen Vorbereitung eines sozialistischen Staates unter alleiniger Führung der\nSED.",
    details: [
      "● Die Bewegung soll demokratisch wirken.\n● In Wirklichkeit wird die politische Macht der SED abgesichert.\n● Vorbereitung einer eigenen Verfassung und Staatsstruktur."
    ]
  },
  {
    id: "sokolowski-beendet-demontagen-1947-01-15",
    year: 1947,
    dateLabel: "15. Januar 1947",
    side: "east",
    title: "Sokolowski beendet Demontagen offiziell",
    createdBy: "Jules,Johannes F. und Marlon",
    positionPx: 340,
    overview: "Sokolowski beendet Demontagen offiziell. Reparationen laufen weiter, Fokus auf Wiederaufbau.",
    details: []
  },
  {
    id: "versorgungskrise-schlechte-ernte-1947-fruehjahr",
    year: 1947,
    dateLabel: "Frühjahr 1947",
    side: "east",
    title: "Versorgungskrise durch schlechte Ernte",
    createdBy: "Jules,Johannes F. und Marlon",
    positionPx: 370,
    overview: "Versorgungskrise durch schlechte Ernte 1946/47. Lebensmittelknappheit, Schwarzmarkt boomt.",
    details: []
  },
  {
    id: "deutsche-treuhandstelle-gegruendet-1947-04-01",
    year: 1947,
    dateLabel: "1. April 1947",
    side: "east",
    title: "Deutsche Treuhandstelle gegründet",
    createdBy: "Jules,Johannes F. und Marlon",
    positionPx: 400,
    overview: "Deutsche Treuhandstelle gegründet. Verwaltung enteigneten NS-Vermögens, Vorstufe Verstaatlichungen.",
    details: []
  },
  {
    id: "smad-befehl-234-leistungslohn-praemien-1947-05-06",
    year: 1947,
    dateLabel: "Mai bis Juni 1947",
    side: "east",
    title: "SMAD-Befehl 234 führt Leistungslohn/Prämien ein",
    createdBy: "Jules,Johannes F. und Marlon",
    positionPx: 430,
    overview: "Gestaffelt. SMAD-Befehl 234 führt Leistungslohn/Prämien ein. Produktivität in Industrie steigern.",
    details: []
  },
  {
    id: "dwk-gegruendet-smad-befehl-138-47-1947-06-04-11",
    year: 1947,
    dateLabel: "4./11. Juni 1947",
    side: "east",
    title: "DWK gegründet (SMAD-Befehl 138/47)",
    createdBy: "Jules,Johannes F. und Marlon",
    positionPx: 460,
    overview: "DWK gegründet (SMAD-Befehl 138/47). Zentrale Planung von Industrie, Energie, Handel.",
    details: []
  },
  {
    id: "umwandlung-sag-veb-mitte-1947",
    year: 1947,
    dateLabel: "Mitte 1947",
    side: "east",
    title: "Umwandlung in SAG/VEB",
    createdBy: "Jules,Johannes F. und Marlon",
    positionPx: 490,
    overview: "Umwandlung in SAG/VEB. Staat übernimmt Schlüsselbetriebe (z. B. Chemie, Maschinenbau).",
    details: []
  },
  {
    id: "reparationsleistungen-udssr-1947-07-12",
    year: 1947,
    dateLabel: "Juli bis Dezember 1947",
    side: "east",
    title: "Hohe Reparationsleistungen an UdSSR",
    createdBy: "Jules,Johannes F. und Marlon",
    positionPx: 550,
    overview: "Hohe Reparationsleistungen an UdSSR (Produkte, SAG-Gewinne). Mangelwirtschaft, Schwerindustrie priorisiert.",
    details: []
  },
  {
    id: "extreme-kaeltewelle-1947-01-27",
    year: 1947,
    dateLabel: "27. Januar 1947",
    side: "east",
    title: "Extreme Kältewelle verschärft Alltagskrise",
    createdBy: "Marlon, Johannes F. und Jules",
    positionPx: 580,
    overview: "Extreme Kältewelle verschärft Alltagskrise. Tausende Betroffene in Berlin.",
    details: []
  },
  {
    id: "aufloesung-preussens-1947-02-25",
    year: 1947,
    dateLabel: "25. Februar 1947",
    side: "east",
    title: "Auflösung Preußens",
    createdBy: "Marlon, Johannes F. und Jules",
    positionPx: 610,
    overview: "Auflösung Preußens. Neue Länder (z. B. Brandenburg) gebildet.",
    details: []
  },
  {
    id: "fdj-gegruendet-1947-03-07",
    year: 1947,
    dateLabel: "7. März 1947",
    side: "east",
    title: "FDJ gegründet",
    createdBy: "Marlon, Johannes F. und Jules",
    positionPx: 640,
    overview: "FDJ gegründet. Jugendorganisation der SED, Indoktrination startet.",
    details: []
  },
  {
    id: "zwangsvereinigung-kpd-spd-sed-1947-04-21-22",
    year: 1947,
    dateLabel: "21./22. April 1947",
    side: "east",
    title: "Zwangsvereinigung KPD/SPD zur SED",
    createdBy: "Marlon, Johannes F. und Jules",
    positionPx: 670,
    overview: "Zwangsvereinigung KPD/SPD zur SED. Druck auf SPD, Grotewohl Co-Vorsitzender.",
    details: []
  },
  {
    id: "neues-deutschland-sed-zentralorgan-1947-04-23",
    year: 1947,
    dateLabel: "23. April 1947",
    side: "east",
    title: "„Neues Deutschland\" als SED-Zentralorgan",
    createdBy: "Marlon, Johannes F. und Jules",
    positionPx: 700,
    overview: "„Neues Deutschland\" als SED-Zentralorgan. Presse unter Kontrolle.",
    details: []
  },
  {
    id: "dvdi-gegruendet-mielke-vizepraesident-1947-07-30",
    year: 1947,
    dateLabel: "30. Juli 1947",
    side: "east",
    title: "DVdI gegründet, Mielke Vizepräsident",
    createdBy: "Marlon, Johannes F. und Jules",
    positionPx: 730,
    overview: "DVdI gegründet, Mielke Vizepräsident. Sicherheitsapparat ausgebaut.",
    details: []
  },
  {
    id: "smad-befehl-201-entnazifizierung-1947-08-16",
    year: 1947,
    dateLabel: "16. August 1947",
    side: "east",
    title: "SMAD-Befehl 201: Vollständige Entnazifizierung",
    createdBy: "Marlon, Johannes F. und Jules",
    positionPx: 760,
    overview: "SMAD-Befehl 201: Vollständige Entnazifizierung. 520.000 Entlassene, Kaderwechsel.",
    details: []
  },
  {
    id: "ii-sed-parteitag-1947-09-20-24",
    year: 1947,
    dateLabel: "20. bis 24. September 1947",
    side: "east",
    title: "II. SED-Parteitag",
    createdBy: "Marlon, Johannes F. und Jules",
    positionPx: 790,
    overview: "II. SED-Parteitag. Ulbricht orientiert an Sowjetmodell, Planwirtschaft gefordert.",
    details: []
  },
  {
    id: "aktion-ossawakim-1947-10",
    year: 1947,
    dateLabel: "Oktober 1947",
    side: "east",
    title: "„Aktion Ossawakim\"",
    createdBy: "Marlon, Johannes F. und Jules",
    positionPx: 820,
    overview: "„Aktion Ossawakim\". Deportation von 2.200 bis 4.000 Wissenschaftlern nach UdSSR (Raketen, Kernphysik).",
    details: []
  },
  {
    id: "erster-deutscher-bauerntag-vdgb-1947-11-22-23",
    year: 1947,
    dateLabel: "22./23. November 1947",
    side: "east",
    title: "1. Deutscher Bauerntag",
    createdBy: "Marlon, Johannes F. und Jules",
    positionPx: 850,
    overview: "1. Deutscher Bauerntag. VdgB gegründet, Kollektivierung vorbereitet.",
    details: []
  },
  {
    id: "erster-deutscher-volkskongress-einheit-1947-12-06-07",
    year: 1947,
    dateLabel: "6./7. Dezember 1947",
    side: "east",
    title: "1. Deutscher Volkskongress",
    createdBy: "Marlon, Johannes F. und Jules",
    positionPx: 880,
    overview: "1. Deutscher Volkskongress. SED-Propaganda für „Einheit\".",
    details: []
  },
  {
    id: "smad-entfernt-cdu-vorstand-kaiser-1947-12-20",
    year: 1947,
    dateLabel: "20. Dezember 1947",
    side: "east",
    title: "SMAD entfernt CDU-Vorstand (Kaiser)",
    createdBy: "Marlon, Johannes F. und Jules",
    positionPx: 910,
    overview: "SMAD entfernt CDU-Vorstand (Kaiser). Blockparteien unterworfen.",
    details: []
  },
  {
    id: "wirtschaftliche-lage-sbz-1948-01-01",
    year: 1948,
    dateLabel: "1. Januar 1948",
    side: "east",
    title: "Wirtschaftliche Lage in der SBZ",
    createdBy: "Jules, Johannes F. und Marlon",
    positionPx: 940,
    overview: "Die SBZ startet wirtschaftlich geschwächt ins Jahr 1948.",
    details: [
      "Industrieanlagen sind durch Kriegsschäden und sowjetische Demontagen stark beeinträchtigt. Viele Betriebe wurden als Reparationsleistung abgebaut. Die Versorgungslage ist angespannt, Lebensmittel bleiben rationiert. Die Wirtschaft ist stark staatlich kontrolliert."
    ]
  },
  {
    id: "zweiter-deutscher-volkskongress-1948-03-12",
    year: 1948,
    dateLabel: "12. März 1948",
    side: "east",
    title: "Zweiter Deutscher Volkskongress",
    createdBy: "Jules, Johannes F. und Marlon",
    positionPx: 970,
    overview: "In Ost-Berlin tagt der Volkskongress zur Vorbereitung eines eigenen deutschen Staates.",
    details: [
      "Die SED treibt den Aufbau einer eigenständigen politischen Ordnung in der SBZ voran. Ziel ist eine sozialistische Staatsstruktur. Damit wird die politische Trennung von den Westzonen weiter vorbereitet."
    ]
  },
  {
    id: "waehrungsreform-sbz-1948-06-23",
    year: 1948,
    dateLabel: "23. Juni 1948",
    side: "east",
    title: "Währungsreform in der SBZ",
    createdBy: "Jules, Johannes F. und Marlon",
    positionPx: 1000,
    overview: "Einführung einer eigenen Währung in der Sowjetischen Besatzungszone.",
    details: [
      "Zunächst werden alte Reichsmarkscheine mit Aufklebern versehen („Klebemark“). Ziel ist die Stabilisierung der Wirtschaft und Abgrenzung vom Westen. Anders als in den Westzonen bleibt das Wirtschaftssystem planwirtschaftlich organisiert."
    ]
  },
  {
    id: "beginn-berliner-blockade-sbz-1948-06-24",
    year: 1948,
    dateLabel: "24. Juni 1948",
    side: "east",
    title: "Beginn der Berliner Blockade",
    createdBy: "Jules, Johannes F. und Marlon",
    positionPx: 1030,
    overview: "Die Sowjetunion sperrt die Land- und Wasserwege nach West-Berlin.",
    details: [
      "Die Blockade ist eine Reaktion auf die westliche Währungsreform. Politisch verschärft sie den Konflikt zwischen Ost und West massiv. Für die Menschen in der SBZ wird deutlich, dass sich zwei getrennte Machtblöcke entwickeln."
    ]
  },
  {
    id: "verstaatlichung-weiterer-betriebe-1948-06-30",
    year: 1948,
    dateLabel: "30. Juni 1948",
    side: "east",
    title: "Verstaatlichung weiterer Betriebe",
    createdBy: "Jules, Johannes F. und Marlon",
    positionPx: 1060,
    overview: "Weitere private Betriebe werden in Volkseigene Betriebe (VEB) umgewandelt.",
    details: [
      "Die SED stärkt die staatliche Kontrolle über die Wirtschaft. Private Unternehmer verlieren an Bedeutung. Ziel ist eine sozialistische Planwirtschaft, in der der Staat Produktionsziele festlegt."
    ]
  },
  {
    id: "vorbereitung-staatlicher-strukturen-1948-10-07",
    year: 1948,
    dateLabel: "7. Oktober 1948",
    side: "east",
    title: "Vorbereitung staatlicher Strukturen",
    createdBy: "Jules, Johannes F. und Marlon",
    positionPx: 1090,
    overview: "Weitere politische Gremien werden aufgebaut, um eine eigenständige Regierung vorzubereiten.",
    details: [
      "Die politische Entwicklung steuert klar auf eine Staatsgründung hin (die 1949 erfolgt). 1948 ist damit ein entscheidendes Vorbereitungsjahr für die spätere DDR."
    ]
  },
  {
    id: "zweiter-deutscher-volkskongress-1948-03-17-18-lukas",
    year: 1948,
    dateLabel: "17.–18. März 1948",
    side: "east",
    title: "Zweiter Deutscher Volkskongress",
    createdBy: "Lukas",
    positionPx: 985,
    overview:
      "Bedeutung: Beschluss zur Ausarbeitung einer gesamtdeutschen Verfassung durch einen Deutschen Volksrat. Beginn der konkreten institutionellen Vorbereitung eines eigenständigen ostdeutschen Staates unter Führung der SED.",
    details: [
      "Erläuterung:\nDer Zweite Deutsche Volkskongress trat in Ost-Berlin zusammen und stand faktisch unter der Kontrolle der SED. Offiziell sollte er Vertreter aus ganz Deutschland vereinen, tatsächlich stammte die Mehrheit der Delegierten aus der Sowjetischen Besatzungszone oder war politisch der SED eng verbunden.\nDadurch war das Ergebnis politisch weitgehend vorgegeben.\nDer Kongress beschloss die Einsetzung eines Deutschen Volksrates, der eine Verfassung ausarbeiten sollte. Nach außen wurde dies als gesamtdeutsches Projekt dargestellt, tatsächlich entstand hier jedoch ein Instrument zur Vorbereitung eines eigenständigen Staates in der SBZ. Damit begann die gezielte institutionelle Staatsbildung im Osten"
    ]
  },
  {
    id: "austritt-sowjetunion-alliierter-kontrollrat-1948-03-20-lukas",
    year: 1948,
    dateLabel: "20. März 1948",
    side: "east",
    title: "Austritt der Sowjetunion aus dem Alliierten Kontrollrat",
    createdBy: "Lukas",
    positionPx: 995,
    overview:
      "Bedeutung: Ende der gemeinsamen Viermächteverwaltung Deutschlands. Die politische Spaltung des Landes wird faktisch vollzogen.",
    details: [
      "Erläuterung:\nAm 20. März 1948 verließen die sowjetischen Vertreter den Alliierten Kontrollrat. Die Sowjetische Militäradministration in Deutschland (SMAD) reagierte damit auf westliche Entscheidungen zur wirtschaftlichen Neuordnung der Westzonen.\nMit diesem Schritt zerbrach die institutionelle Grundlage einer einheitlichen Deutschlandpolitik. Von nun an entwickelten sich Ost und West getrennt weiter. Der Austritt war daher nicht nur ein diplomatisches Signal, sondern ein bewusster Schritt hin zur politischen Teilung."
    ]
  },
  {
    id: "verfassungsentwurf-deutscher-volksrat-1948-06-lukas",
    year: 1948,
    dateLabel: "Juni 1948",
    side: "east",
    title: "Verfassungsentwurf durch den Deutschen Volksrat",
    createdBy: "Lukas",
    positionPx: 1015,
    overview:
      "Bedeutung: Konkrete juristische Vorbereitung der späteren DDR-Staatsgründung.",
    details: [
      "Erläuterung:\nIm Juni 1948 legte der Deutsche Volksrat einen Verfassungsentwurf für eine Deutsche Demokratische Republik vor. Formal enthielt er demokratische Elemente wie Grundrechte und ein Parlament. Damit sollte sowohl innenpolitische Zustimmung als auch internationale Legitimität erzeugt werden.\nIn der politischen Realität war die Macht jedoch bereits stark bei der SED konzentriert. Entscheidende Richtungsentscheidungen wurden nicht durch freien Parteienwettbewerb getroffen, sondern durch die Parteiführung bestimmt. Der Entwurf diente somit als rechtlicher Rahmen für einen sozialistischen Staat nach sowjetischem Vorbild."
    ]
  },
  {
    id: "einfuehrung-ostmark-sbz-1948-06-23-lukas",
    year: 1948,
    dateLabel: "23. Juni 1948",
    side: "east",
    title: "Einführung der Ostmark in der SBZ",
    createdBy: "Lukas",
    positionPx: 1025,
    overview: "Bedeutung: Endgültige wirtschaftliche Abgrenzung von den Westzonen und weitere Vertiefung der deutschen Teilung.",
    details: [
      "Erläuterung:\nAls Reaktion auf die westdeutsche Währungsreform führte die SBZ eine eigene Währung ein. Damit wurde die wirtschaftliche Einheit Deutschlands faktisch beendet. Finanz- und Wirtschaftssysteme entwickelten sich nun dauerhaft getrennt.\nGleichzeitig stärkte dieser Schritt die wirtschaftspolitische Kontrolle der SED. Die Einführung der Ostmark erleichterte den weiteren Ausbau einer zentral gelenkten Planwirtschaft und band die SBZ enger an den sowjetischen Einflussbereich."
    ]
  },
  {
    id: "beginn-berlin-blockade-1948-06-24-lukas",
    year: 1948,
    dateLabel: "24. Juni 1948",
    side: "east",
    title: "Beginn der Berlin-Blockade",
    createdBy: "Lukas",
    positionPx: 1040,
    overview: "Bedeutung: Erste große Krise des Kalten Krieges, Berlin wird zum zentralen Schauplatz der Systemkonfrontation.",
    details: [
      "Erläuterung:\nAm 24. Juni 1948 sperrte die Sowjetunion sämtliche Land- und Wasserwege nach West-Berlin. Ziel war es, Druck auf die westlichen Alliierten auszuüben und ihre Position in Berlin zu schwächen.\nDie Blockade machte deutlich, dass die Auseinandersetzung zwischen Ost und West offen ausgetragen wurde. Für die SBZ wurde die Krise propagandistisch genutzt, um den sozialistischen Kurs zu legitimieren und die Abgrenzung vom Westen weiter zu verschärfen. Berlin wurde damit zum Symbol der deutschen und globalen Teilung."
    ]
  },
  {
    id: "umwandlung-volksrat-provisorische-volkskammer-1948-10-07-lukas",
    year: 1948,
    dateLabel: "7. Oktober 1948",
    side: "east",
    title: "Umwandlung des Volksrates in eine provisorische Volkskammer",
    createdBy: "Lukas",
    positionPx: 1080,
    overview: "Bedeutung: Weitere institutionelle Verdichtung ostdeutscher Staatlichkeit und direkte Vorbereitung der DDR-Gründung.",
    details: [
      "Erläuterung:\nAm 7. Oktober 1948 erklärte sich der Deutsche Volksrat zur provisorischen Volksvertretung. Obwohl keine freien gesamtdeutschen Wahlen stattgefunden hatten, übernahm das Gremium parlamentarische Funktionen.\nDamit verfügte die SBZ faktisch über ein eigenes staatliches Organ mit gesetzgeberischem Anspruch. Der Schritt zeigte deutlich, dass sich die politische Entwicklung nicht mehr auf ein gemeinsames Deutschland richtete, sondern auf einen eigenständigen sozialistischen Staat."
    ]
  },
  {
    id: "gruendung-nationale-front-1948-12-lukas",
    year: 1948,
    dateLabel: "Dezember 1948",
    side: "east",
    title: "Gründung der Nationalen Front",
    createdBy: "Lukas",
    positionPx: 1120,
    overview: "Bedeutung: Festigung des Führungsanspruchs der SED und Grundlage des späteren Blockparteiensystems.",
    details: [
      "Erläuterung:\nIm Dezember 1948 wurde die Nationale Front als Zusammenschluss von Parteien und Massenorganisationen unter Führung der SED gegründet. Nach außen wurde sie als Bündnis aller antifaschistisch-demokratischen Kräfte dargestellt.\nIn der politischen Praxis diente sie jedoch dazu, die Kontrolle der SED dauerhaft zu sichern. Andere Parteien bestanden formal weiter, waren aber politisch untergeordnet. Damit wurde ein System geschaffen, das demokratische Konkurrenz ausschloss und die Entwicklung zur SED-Diktatur weiter festigte."
    ]
  },
  {
    id: "gruendung-bundesrepublik-deutschland-1949-05-23-ost",
    year: 1949,
    dateLabel: "23. Mai 1949",
    side: "east",
    title: "Gründung der Bundesrepublik Deutschland (23. Mai 1949)",
    category: "Kalter Krieg",
    createdBy: "Elmar, Lennox, Alex",
    positionPx: 1905,
    overview:
      "Mit dem Inkrafttreten des Grundgesetzes entsteht in den Westzonen ein demokratischer\nund föderaler Staat, der sich politisch und wirtschaftlich am Westen orientiert. Damit\nwird die staatliche Teilung Deutschlands faktisch vollzogen.",
    details: [
      "● Inkrafttreten des Grundgesetzes.\n● Parlamentarische Demokratie mit föderalem Aufbau.\nFolge für den Osten:\n● verstärkter Druck zur eigenen Staatsgründung"
    ]
  },
  {
    id: "wahlen-dritter-deutscher-volkskongress-1949-05-15-16-robert",
    year: 1949,
    dateLabel: "15.–16. Mai 1949",
    side: "east",
    title: "Wahlen zum 3. Deutschen Volkskongress",
    createdBy: "Robert",
    positionPx: 1870,
    overview:
      "Bedeutung:\nScheinwahl zur Legitimation eines sozialistischen Staates in der Sowjetischen Besatzungszone (SBZ).",
    details: [
      "Erläuterung:\nDie Wahl erfolgte über eine sogenannte Einheitsliste der von der Sozialistische Einheitspartei Deutschlands dominierten Parteien und Massenorganisationen. Die Wähler konnten nur „Ja“ oder „Nein“ zur gesamten Liste sagen. Offiziell stimmten über 66 % zu.\nDer Volkskongress bereitete die Gründung eines eigenen ostdeutschen Staates vor und arbeitete eine Verfassung aus. Damit wurde die politische Teilung Deutschlands weiter gefestigt.",
      "Quellen:\n● https://www.bpb.de/themen/zeit-kulturgeschichte/deutschland-chronik/131301/7-oktober-1949/\n● https://www.ddr-museum.de/de/objects/1011195\n● https://www.bpb.de/themen/nachkriegszeit/grundgesetz-und-parlamentarischer-rat/39040/vom-deutschenvolkskongress-zur-ddr/\n● https://www.bpb.de/themen/deutsche-teilung/ddr-kompakt/521482/die-doppelte-staatsgruendung"
    ]
  },
  {
    id: "verabschiedung-verfassung-ddr-1949-05-30-robert",
    year: 1949,
    dateLabel: "30. Mai 1949",
    side: "east",
    title: "Verabschiedung der Verfassung der DDR",
    createdBy: "Robert",
    positionPx: 1930,
    overview:
      "Bedeutung:\nRechtliche Grundlage für die spätere Deutsche Demokratische Republik.",
    details: [
      "Erläuterung:\nDer 3. Deutsche Volkskongress verabschiedete eine Verfassung, die formal demokratische Rechte enthielt (z. B. Gewaltenteilung, Grundrechte), in der Praxis jedoch der Führungsrolle der SED untergeordnet war.\nDiese Verfassung trat mit der Staatsgründung am 7. Oktober 1949 in Kraft.",
      "Quellen:\n● https://www.bpb.de/themen/zeit-kulturgeschichte/deutschland-chronik/131301/7-oktober-1949/\n● https://www.ddr-museum.de/de/objects/1011195\n● https://www.bpb.de/themen/nachkriegszeit/grundgesetz-und-parlamentarischer-rat/39040/vom-deutschenvolkskongress-zur-ddr/\n● https://www.bpb.de/themen/deutsche-teilung/ddr-kompakt/521482/die-doppelte-staatsgruendung"
    ]
  },
  {
    id: "gruendung-ddr-1949-10-07-robert",
    year: 1949,
    dateLabel: "7. Oktober 1949",
    side: "east",
    title: "Gründung der Deutschen Demokratischen Republik (DDR)",
    createdBy: "Robert",
    positionPx: 2100,
    overview:
      "Bedeutung:\nOffizielle Staatsgründung Ostdeutschlands.",
    details: [
      "Erläuterung:\nAls Reaktion auf die Gründung der Bundesrepublik Deutschland am 23. Mai 1949 wurde in der SBZ ein eigener Staat ausgerufen.\nDer Deutsche Volksrat erklärte sich zur „Provisorischen Volkskammer“.\nDamit war die deutsche Teilung politisch vollzogen. Die DDR verstand sich offiziell als sozialistischer Staat nach sowjetischem Vorbild.",
      "Quellen:\n● https://www.bpb.de/themen/zeit-kulturgeschichte/deutschland-chronik/131301/7-oktober-1949/\n● https://www.ddr-museum.de/de/objects/1011195\n● https://www.bpb.de/themen/nachkriegszeit/grundgesetz-und-parlamentarischer-rat/39040/vom-deutschenvolkskongress-zur-ddr/\n● https://www.bpb.de/themen/deutsche-teilung/ddr-kompakt/521482/die-doppelte-staatsgruendung"
    ]
  },
  {
    id: "uebergabe-verwaltungsbefugnisse-sowjetunion-1949-10-10-robert",
    year: 1949,
    dateLabel: "10. Oktober 1949",
    side: "east",
    title: "Übergabe der Verwaltungsbefugnisse durch die Sowjetunion",
    createdBy: "Robert",
    positionPx: 2110,
    overview:
      "Bedeutung:\nFormelle Beendigung der direkten sowjetischen Militärverwaltung.",
    details: [
      "Erläuterung:\nDie Sowjetische Militäradministration in Deutschland (SMAD) übergab die Regierungsgewalt an die neue DDR-Regierung.\nGleichzeitig wurde eine Sowjetische Kontrollkommission eingerichtet, wodurch der Einfluss der Sowjetunion weiterhin gesichert blieb.",
      "Quellen:\n● https://www.bpb.de/themen/zeit-kulturgeschichte/deutschland-chronik/131301/7-oktober-1949/\n● https://www.ddr-museum.de/de/objects/1011195\n● https://www.bpb.de/themen/nachkriegszeit/grundgesetz-und-parlamentarischer-rat/39040/vom-deutschenvolkskongress-zur-ddr/\n● https://www.bpb.de/themen/deutsche-teilung/ddr-kompakt/521482/die-doppelte-staatsgruendung"
    ]
  },
  {
    id: "wahl-wilhelm-pieck-ddr-praesident-1949-10-11-robert",
    year: 1949,
    dateLabel: "11. Oktober 1949",
    side: "east",
    title: "Wahl von Wilhelm Pieck zum Präsidenten der DDR",
    createdBy: "Robert",
    positionPx: 2120,
    overview:
      "Bedeutung:\nErstes Staatsoberhaupt der DDR.",
    details: [
      "Erläuterung:\nWilhelm Pieck wurde von der Provisorischen Volkskammer zum Präsidenten gewählt.\nEr war Mitglied der SED und langjähriger Kommunist. Seine Wahl symbolisierte die enge politische Bindung der DDR an die Sowjetunion",
      "Quellen:\n● https://www.bpb.de/themen/zeit-kulturgeschichte/deutschland-chronik/131301/7-oktober-1949/\n● https://www.ddr-museum.de/de/objects/1011195\n● https://www.bpb.de/themen/nachkriegszeit/grundgesetz-und-parlamentarischer-rat/39040/vom-deutschenvolkskongress-zur-ddr/\n● https://www.bpb.de/themen/deutsche-teilung/ddr-kompakt/521482/die-doppelte-staatsgruendung"
    ]
  },
  {
    id: "ernennung-otto-grotewohl-ministerpraesident-1949-10-12-robert",
    year: 1949,
    dateLabel: "12. Oktober 1949",
    side: "east",
    title: "Ernennung von Otto Grotewohl zum Ministerpräsidenten",
    createdBy: "Robert",
    positionPx: 2130,
    overview:
      "Bedeutung:\nBildung der ersten DDR-Regierung.",
    details: [
      "Erläuterung:\nOtto Grotewohl wurde Ministerpräsident.\nDie Regierung bestand offiziell aus mehreren Parteien (Blockparteien), doch die tatsächliche Macht lag bei der SED unter Führung von Walter Ulbricht.\nHier begann faktisch der Aufbau einer sozialistischen Einparteienherrschaft.",
      "Quellen:\n● https://www.bpb.de/themen/zeit-kulturgeschichte/deutschland-chronik/131301/7-oktober-1949/\n● https://www.ddr-museum.de/de/objects/1011195\n● https://www.bpb.de/themen/nachkriegszeit/grundgesetz-und-parlamentarischer-rat/39040/vom-deutschenvolkskongress-zur-ddr/\n● https://www.bpb.de/themen/deutsche-teilung/ddr-kompakt/521482/die-doppelte-staatsgruendung"
    ]
  },
  {
    id: "gruendung-ddr-1949-10-07-ost",
    year: 1949,
    dateLabel: "7. Oktober 1949",
    side: "east",
    title: "Gründung der Deutschen Demokratischen Republik (7. Oktober 1949)",
    category: "Kalter Krieg",
    createdBy: "Elmar, Lennox, Alex",
    positionPx: 2095,
    overview:
      "Als Reaktion auf die westdeutsche Staatsgründung wird in der Sowjetischen\nBesatzungszone die DDR etabliert. Sie versteht sich als sozialistischer Gegenentwurf zur\nBundesrepublik und ist fest in das sowjetische Bündnissystem eingebunden.",
    details: [
      "● Offizielle Staatsgründung der DDR.\n● Einführung einer sozialistischen Planwirtschaft.\n● Führungsrolle der SED wird politisch festgeschrieben.\n● Enge politische und militärische Bindung an die Sowjetunion.\nEinordnung:\nDie DDR ist ein direktes Ergebnis der zunehmenden Blockbildung und ein zentraler Bestandteil der bipolaren Weltordnung des Kalten Krieges."
    ],
    sources: [
      "https://www.britannica.com/event/Cold-War?",
      "https://www.bpb.de/shop/zeitschriften/izpb/",
      "https://www.dhm.de/archiv/ausstellungen/",
      "https://www.bundesarchiv.de/themen-entdecken/online-entdecken/geschichtsgalerien/doppelte-staatsgruendung-1949/?utm_source"
    ]
  },
  {
    id: "bildung-der-bizone-1947-01-01",
    year: 1947,
    dateLabel: "1. Januar 1947",
    side: "west",
    title: "Bildung der Bizone",
    createdBy: "Leonie",
    positionPx: 80,
    overview:
      "An diesem Tag trat die wirtschaftliche Vereinigung der amerikanischen und britischen Besatzungszone offiziell in\nKraft. Die Bizone erhielt gemeinsame Verwaltungsstrukturen, unter anderem für Ernährung, Verkehr und Wirtschaft.\nPolitisch war dies ein entscheidender Schritt zur westdeutschen Staatsbildung und ein deutliches Signal gegen eine\ngesamtdeutsche Lösung mit der Sowjetunion.",
    details: [
      "In den ersten Wochen nach der Bizonengründung begannen die Westmächte mit dem Aufbau zentraler\nVerwaltungsstellen. Besonders wichtig war die Vorbereitung des späteren Wirtschaftsrates, der ab 1947 schrittweise\nKompetenzen erhielt. Zwar lag die oberste Entscheidungsgewalt weiterhin bei den Militärregierungen, doch\ndeutsche Politiker wurden zunehmend eingebunden"
    ]
  },
  {
    id: "konsolidierung-parteienlandschaft-1947-fruehjahr",
    year: 1947,
    dateLabel: "Frühjahr 1947",
    side: "west",
    title: "Konsolidierung der Parteienlandschaft",
    createdBy: "Leonie",
    positionPx: 140,
    overview: "Konsolidierung der Parteienlandschaft",
    details: [
      "SPD, CDU/CSU, FDP und KPD bauten ihre Landesverbände weiter aus. In den Westzonen fanden Parteitage,\nProgrammdebatten und innerparteiliche Neuordnungen statt. Die Alliierten förderten demokratische Strukturen,\nverboten jedoch extremistische Tendenzen. Diese Phase war entscheidend für die spätere politische Stabilität der\nBundesrepublik"
    ]
  },
  {
    id: "hungerwinter-1946-47-1947-01-03",
    year: 1947,
    dateLabel: "Januar–März 1947 (Höhepunkt im Februar 1947)",
    side: "west",
    title: "Hungerwinter 1946/47",
    createdBy: "Leonie",
    positionPx: 200,
    overview: "Hungerwinter 1946/47",
    details: [
      "Der Winter erreichte im Februar 1947 seinen schlimmsten Punkt. Temperaturen bis zu −20 °C, eingefrorene\nVerkehrswege und fehlende Kohle führten zu Produktionsstillständen und massiver Unterversorgung. Die\ndurchschnittlichen Lebensmittelrationen lagen teilweise bei 800–1.000 Kalorien pro Tag. Tausende Menschen\nstarben an den Folgen von Unterernährung und Kälte."
    ]
  },
  {
    id: "dominanz-schwarzmarkt-1947-01-06",
    year: 1947,
    dateLabel: "Januar–Juni 1947",
    side: "west",
    title: "Dominanz des Schwarzmarktes",
    createdBy: "Leonie",
    positionPx: 230,
    overview: "Dominanz des Schwarzmarktes",
    details: [
      "Während des gesamten ersten Halbjahres 1947 funktionierte die offizielle Wirtschaft kaum. Die Reichsmark verlor\nweiter an Wert, Zigaretten galten als stabile Tauschwährung. Besonders verbreitet waren sogenannte\nHamsterfahrten, bei denen Stadtbewohner aufs Land fuhren, um Lebensmittel gegen Sachgüter zu tauschen."
    ]
  },
  {
    id: "wirtschaftliche-stabilisierung-bizone-1947-03-06",
    year: 1947,
    dateLabel: "März–Juni 1947",
    side: "west",
    title: "Beginnende wirtschaftliche Stabilisierung in der Bizone",
    createdBy: "Leonie",
    positionPx: 260,
    overview: "Beginnende wirtschaftliche Stabilisierung in der Bizone",
    details: [
      "Ab dem Frühjahr versuchten die westlichen Militärregierungen, die Industrieproduktion vorsichtig zu steigern. Ziel\nwar die Sicherstellung der Grundversorgung. Gleichzeitig liefen weiterhin alliierte Demontagen, vor allem in der\nSchwerindustrie, was die wirtschaftliche Erholung bremste und in der Bevölkerung für Unzufriedenheit sorgte"
    ]
  },
  {
    id: "verschaerfung-ost-west-konflikt-1947-01-06",
    year: 1947,
    dateLabel: "Januar–Juni 1947 (fortlaufender Prozess)",
    side: "west",
    title: "Verschärfung des Ost-West-Konflikts in Deutschland",
    createdBy: "Leonie",
    positionPx: 300,
    overview: "Verschärfung des Ost-West-Konflikts in Deutschland",
    details: [
      "Im Laufe des ersten Halbjahres 1947 wurde immer deutlicher, dass die Zusammenarbeit der Alliierten gescheitert\nwar. Gemeinsame Verwaltungsorgane für ganz Deutschland existierten faktisch nicht mehr. Deutschland entwickelte\nsich zunehmend zum politischen und wirtschaftlichen Konfliktfeld zwischen USA und UdSSR."
    ]
  },
  {
    id: "truman-doktrin-1947-03-12",
    year: 1947,
    dateLabel: "12. März 1947",
    side: "west",
    title: "Truman-Doktrin",
    createdBy: "Leonie",
    positionPx: 330,
    overview: "Truman-Doktrin",
    details: [
      "US-Präsident Harry S. Truman verkündete vor dem Kongress die nach ihm benannte Doktrin. Die USA erklärten,\nStaaten zu unterstützen, die vom Kommunismus bedroht seien. Obwohl Deutschland nicht namentlich genannt\nwurde, war klar, dass die westlichen Besatzungszonen Teil dieser Eindämmungspolitik waren. Die Doktrin markiert\neinen offiziellen Wendepunkt hin zum Kalten Krieg."
    ]
  },
  {
    id: "marshallplan-ankuendigung-1947-06-05",
    year: 1947,
    dateLabel: "5. Juni 1947",
    side: "west",
    title: "Marshallplan – Ankündigung",
    createdBy: "Leonie",
    positionPx: 360,
    overview: "Marshallplan – Ankündigung",
    details: [
      "US-Außenminister George C. Marshall stellte an der Harvard-Universität das europäische Wiederaufbauprogramm\noffiziell vor. Der Plan sah umfangreiche wirtschaftliche Hilfen für Europa vor. Die Westzonen Deutschlands sollten\neinbezogen werden, während die Sowjetunion und ihre Satellitenstaaten den Plan ablehnten. Damit wurde die\nwirtschaftliche Teilung Europas weiter gefestigt"
    ]
  },
  {
    id: "ceec-konferenz-paris-1947-07-09",
    year: 1947,
    dateLabel: "12. Juli – 22. September 1947",
    side: "west",
    title: "CEEC‑Konferenz in Paris",
    createdBy: "Jakob",
    positionPx: 390,
    overview: "CEEC = Committee of European Economic Co‑operation",
    details: [
      "Ziel: Koordination des Wiederaufbaus Europas → Grundlage für Marshallplan\nWestdeutsche Wirtschaftszonen werden indirekt einbezogen\nThemen: Produktionssteigerung, Nahrungsmittelversorgung, Industrieplanung\nBedeutung: Vorbereitung wirtschaftlicher Eigenständigkeit Westdeutschlands"
    ]
  },
  {
    id: "abschluss-ceec-konferenz-1947-09-22",
    year: 1947,
    dateLabel: "22. September 1947",
    side: "west",
    title: "Abschluss CEEC‑Konferenz",
    createdBy: "Jakob",
    positionPx: 420,
    overview:
      "Ergebnis: Bericht über wirtschaftliche Hilfsbedarfe Europas\nWestdeutsche Zonen profitieren später von Hilfen (Marshallplan)\nStärkung der Bizone → Zusammenlegung der britischen und amerikanischen Zonen in wirtschaftlicher Verwaltung",
    details: [
      "Politik: Deutsche Politiker fordern mehr Mitbestimmung\nKalter Krieg: Spannungen zwischen Westmächten und Sowjetunion nehmen zu"
    ]
  },
  {
    id: "londoner-aussenministerkonferenz-1947-11-25",
    year: 1947,
    dateLabel: "25. November – 15. Dezember 1947",
    side: "west",
    title: "Londoner Außenministerkonferenz",
    createdBy: "Jakob",
    positionPx: 450,
    overview:
      "Teilnehmer: USA, Großbritannien, Frankreich, Sowjetunion\nThema: Deutschlandpolitik, Reparationen, politische Einheit\nErgebnis: Keine Einigung → West/Ost-Spaltung wird praktisch unumkehrbar",
    details: [
      "Politik: Westzonen müssen eigene Verwaltungsstrukturen aufbauen\nWirtschaft/Gesellschaft: Lebensmittelsituation und Inflation bleiben problematisch\nKalter Krieg: Beginn der festen Blockbildung; Westintegration Europas geplant"
    ]
  },
  {
    id: "erster-deutscher-volkskongress-1947-12-06",
    year: 1947,
    dateLabel: "6.–7. Dezember 1947",
    side: "west",
    title: "1. Deutscher Volkskongress in Berlin",
    createdBy: "Jakob",
    positionPx: 480,
    overview:
      "Organisiert von SED und Unterstützern in allen Zonen\nForderung: Bildung einer zentralen deutschen Regierung\nReaktion auf gescheiterte Londoner Konferenz",
    details: [
      "Politik: Erste gesamtdeutsche politische Initiative nach dem Krieg\nKalter Krieg: Zeigt politische Frontstellung Ost/West deutlich\nGesellschaft: Steigende politische Mobilisierung, besonders im Osten"
    ]
  },
  {
    id: "vorbereitung-wirtschafts-waehrungsreform-1947-12",
    year: 1947,
    dateLabel: "Dezember 1947",
    side: "west",
    title: "Vorbereitung der Wirtschafts- und Währungsreform",
    createdBy: "Jakob",
    positionPx: 510,
    overview:
      "Westmächte planen Einführung stabiler Währung in Westzonen (D-Mark 1948)\nZiel: Inflation bekämpfen, Schwarzmarkt eindämmen, Wirtschaft auf marktwirtschaftliche Basis stellen",
    details: [
      "Politik: Westdeutsche Strukturen wachsen → Vorstufe Bundesrepublik\nKalter Krieg: Unterschiedliche wirtschaftliche Konzepte zwischen West und Ost werden klar"
    ]
  },
  {
    id: "marshall-plan-1948-04-03",
    year: 1948,
    dateLabel: "3. April 1948",
    side: "west",
    title: "Harry S. Truman unterzeichnet den Marshall-Plan",
    category: "Wirtschaft/Gesellschaft",
    createdBy: "Laura",
    positionPx: 930,
    overview:
      "Der Marshall-Plan war ein von den USA initiiertes Hilfsprogramm zum wirtschaftlichen Wiederaufbau Europas nach dem Zweiten Weltkrieg. Von 1948 bis 1952 stellten die USA rund 12,4 Milliarden US-Dollar bereit, um Wirtschaft und Infrastruktur zu stabilisieren, Armut zu verringern und den Einfluss des Kommunismus einzudaemmen. Der Plan trug wesentlich zur Erholung Westeuropas und zur engeren Zusammenarbeit mit den USA bei.",
    details: [
      "Ablauf:\n● 5. Juni 1947: amerikanischer Außenminister George C. Marshall präsentierte das European Recovery Program (ERP)\n● 27. Juni 1947: Außenminister der Alliierten trafen sich für die Planung des ERP in Paris, sowjetischer Außenminister\nMolotow zunächst anwesend, verließ die Verhandlungen jedoch bald mit der Begründung, dass die USA sich mit dem\nHilfsprogramm in die inneren Angelegenheiten der Staaten einmischen würden\n● 12. Juli 1947: 16 europäische Staaten einigten sich auf der Marshall-Plan-Konferenz in Paris auf Teilnahme am Marshall\nPlan, osteuropäische Länder nahmen unter dem Druck der UdSSR nicht teil\n● 22. September 1947: alle beteiligten Staaten einigten sich auf einen Vertrag\n● 3. April 1948: ERP wurde durch den US-Kongress gebracht, US-Präsident Truman setzte Gesetz in Kraft\n● 1948: Marshall-Plan lief an, USA stellten Kredite bereit und lieferten Waren, Rohstoffe und Lebensmittel\n● 1948 - 1952: insgesamt wurden rund 12,4 Milliarden Dollar bereitgestellt, davon 1,5 Milliarden Dollar für Westdeutschland\n● Ausgangslage: nach Ende des Zweiten Weltkrieges waren weite Teile Europas zerstört, europäische Länder finanziell\nstark belastet, Deutschland hatte hohe Kriegsschulden, Versorgung mit Lebensmitteln und Energie konnte nicht\nsichergestellt werden\n● Ziel: Hilfe zum Wiederaufbau der Wirtschaft in Europa, Hilfe für die Not leidenden Bürger und Bürgerinnen Europas,\nDeutschland als wichtigen Handelspartner und großer Absatzmarkt wiederherstellen, Ausbreitung des Kommunismus\nverhindern\n● Voraussetzung: europäische Länder einigten sich auf eine gemeinsame wettbewerbsorientierte Wirtschaftsordnung (->\nGründung der Organisation for Economic European Co-operation)\n● Folgen: europäische Wirtschaft wurde angekurbelt, westeuropäische Wirtschaft wurde kapitalistisch, langfristige Bindung\nder westeuropäischen Staaten an die USA, Vorantreibung der Gründung der NATO, Trennung Deutschlands in zwei\nWirtschaftsräume\n● Kritik: laut manchen Berechnungen nur ca. 3 % des damaligen Wirtschaftswachstums in Europa durch den Marshall-Plan"
    ],
    sources: [
      "https://www.hdg.de/lemo/kapitel/nachkriegsjahre/doppelte-staatsgruendung/marshall-plan-und-waehrungsreform.html",
      "https://www.studysmarter.de/schule/geschichte/nachkriegszeit/marshall-plan/",
      "https://catalog.archives.gov/id/299857"
    ],
    image: {
      src: imagePath("marshall-plan.jpg.png"),
      link: "https://www.hdg.de/lemo/bestand/objekt/plakat-erp-marshall-plan.html",
      alt: "Marshall-Plan-Plakat mit Segel aus europaeischen Flaggen"
    }
  },
  {
    id: "einsatzgruppen-prozess-1948-04-10",
    year: 1948,
    dateLabel: "10. April 1948",
    side: "west",
    title: "Ende des Einsatzgruppen-Prozesses",
    category: "Wirtschaft/Gesellschaft",
    createdBy: "Laura",
    positionPx: 1090,
    overview:
      "Der Einsatzgruppen-Prozess fand von 1947 bis 1948 in Nuernberg statt und richtete sich gegen fuehrende Mitglieder der SS-Einsatzgruppen. Diese Einheiten waren fuer Massenerschiessungen und den Mord an Hunderttausenden von Juden, Sinti und Roma sowie weiteren Zivilisten in Osteuropa verantwortlich. Die Angeklagten wurden wegen Kriegsverbrechen, Verbrechen gegen die Menschlichkeit und Mitgliedschaft in einer verbrecherischen Organisation verurteilt.",
    details: [
      "Einsatzgruppenprozess: neunter von zwölf Nürnberger Nachfolgeprozessen\n● Dauer: 15. September 1947 - 10. April 1948\n● Ort: Schwurgerichtssaal 600 des Nürnberger Justizpalastes, vor einem amerikanischen Militärgericht (Nuremberg Military\nTribunal)\n● Angeklagte und Hintergrund:\n● angeklagt wurden 24 ehemalige SS-Führer, Kommandeure der Einsatzgruppen der Sicherheitspolizei und des SD\n● drei Anklagepunkte bezogen auf alle Angeklagten: Verbrechen gegen die Menschlichkeit, Kriegsverbrechen,\nMitgliedschaft in einer verbrecherischen Organisation\n● Angeklagte verantwortlich für die Verbrechen der Einsatzgruppen in der besetzten Sowjetunion\n● Einsatzgruppen hatten den Auftrag, sowjetische Funktionäre und die „jüdische Intelligenz“ zu ermorden\n● bis Oktober 1941 wurden jüdische Männer, Frauen und Kinder sowie weitere Bevölkerungsgruppen (u. a.\nKriegsgefangene, Sinti und Roma, Psychiatriepatienten, Zivilgeiseln) erschossen\n● Anklage stützte sich auf mehr als eine Million dokumentierter Opfer\n● Strafen: Todesurteile und Haftstrafen, keine Freisprüche\n● Nachwirkungen und Strafvollstreckung:\n● im Rahmen der Westintegration wandelte Hochkommissar John McCloy 1951 viele Todesurteile in Haftstrafen um\n● von den ursprünglich 14 Todesurteilen wurden 4 Todesurteile vollstreckt, mehrere Haftstrafen wurden verkürz"
    ],
    sources: ["https://de.wikipedia.org/wiki/Einsatzgruppen-Prozess"],
    image: {
      src: imagePath("einsatzgruppenprozess-otto-ohlendorf.png"),
      link: "https://museen.nuernberg.de/memorium-nuernberger-prozesse/kalender-details/einsatzgruppenprozess-1058",
      alt: "Otto Ohlendorf im Gerichtssaal waehrend des Einsatzgruppen-Prozesses"
    }
  },
  {
    id: "aerzteprozess-vollstreckung-1948-06-02",
    year: 1948,
    dateLabel: "2. Juni 1948",
    side: "west",
    title: "Vollstreckung der Todesurteile des Nuernberger Aerzteprozesses",
    category: "Wirtschaft/Gesellschaft",
    createdBy: "Laura",
    positionPx: 1180,
    overview:
      "Der Nuernberger Aerzteprozess fand von 1946 bis 1947 statt und richtete sich gegen 23 NS-Aerzte und Funktionaere. Angeklagt wurden unter anderem grausame Menschenversuche, Krankenmorde und weitere Verbrechen gegen die Menschlichkeit. Der Prozess markierte einen Wendepunkt fuer die medizinische Ethik, weil daraus grundlegende Prinzipien fuer Forschung am Menschen abgeleitet wurden.",
    details: [
      "Nürnberger Ärzteprozess: erster der zwölf Nürnberger Nachfolgeprozesse gegen Verantwortliche des Deutschen Reichs\nzur Zeit des Nationalsozialismus\n● Videos des Prozesses: https://www.youtube.com/watch?v=o9Moe5mIRyM, https://www.youtube.com/watch?\nv=jk9OViQx0WQ\n● Dauer: 9. Dezember 1946 - 20. August 1947\n● Ort: vor einem amerikanischen Militärgericht\n● im Prozess behandelt: unfreiwillige Menschenversuche, Krankenmorde, Morde im Zusammenhang mit der Straßburger\nSchädelsammlung\n● angeklagt: 20 KZ-Ärzte, ein Jurist, zwei Organisatoren von Medizinverbrechen\nUrteilsvollstreckung:\n● nach Urteilsverkündung wurden Verurteilte in das Kriegsverbrechergefängnis Landsberg überführt\n● dort sieben ausgesprochene Todesurteile am 2. Juni 1948 vollstreckt\n● restliche Urteile ab 1950 im Strafmaß erheblich abgemildert (aufgrund einer Änderung der politischen\nRahmenbedingungen)\n● Folgen: Gericht formulierte den Nürnberger Kodex, der bis heute als ethische Grundlage für medizinische Experimente\ngilt (betont freiwillige Einwilligung, das Prinzip der Verhältnismäßigkeit und den Schutz vulnerabler Gruppen), Prozess\nleistete nachhaltigen Beitrag zur Etablierung des Völkerstrafrechts und zur Förderung der medizinischen Ethik"
    ],
    sources: [
      "https://flexikon.doccheck.com/de/N%C3%BCrnberger_%C3%84rzteprozess",
      "https://de.wikipedia.org/wiki/N%C3%BCrnberger_%C3%84rzteprozess"
    ],
    image: {
      src: imagePath("aerzteprozess-angeklagte-saal-600.png"),
      link: "https://museen.nuernberg.de/memorium-nuernberger-prozesse/kalender-details/aerzteprozess-1051",
      alt: "Die Angeklagten im Aerzteprozess auf der Anklagebank im Saal 600"
    }
  },
  {
    id: "londoner-sechsmaechtekonferenz-ende-1948-06-02",
    year: 1948,
    dateLabel: "2. Juni 1948",
    side: "west",
    title: "Ende der Londoner Sechsmaechtekonferenz",
    category: "deutsche Politik",
    createdBy: "Laura",
    positionPx: 1440,
    overview:
      "Die Londoner Sechsmaechtekonferenz war eine Aussenministerkonferenz der drei westlichen Besatzungsmaechte (USA, Grossbritannien, Frankreich) und der Benelux-Staaten. Ziel war die politische und wirtschaftliche Stabilisierung Westdeutschlands sowie die Klaerung der deutschen Frage unter den Bedingungen des beginnenden Kalten Kriegs. Die westlichen Maechte einigten sich auf Schritte zur Bildung eines westdeutschen Staates, was die Sowjetunion ablehnte und die Teilung Deutschlands weiter verstaerkte.",
    details: [
      "Dauer: 23. Februar - 2. Juni 1948\n● Ort: London\n● Hintergrund: auf dem vorangegangenen fünften Treffen des Rats der Außenminister der vier Hauptsiegermächte in\nLondon 1947 war dessen letzter Versuch gescheitert, Einigkeit der westlichen und der sowjetischen Vorstellungen zur\nDeutschlandpolitik herzustellen\n● Teilnehmer: Außenminister der drei westlichen Besatzungsmächte und Benelux-Vertreter, Sowjetunion wurde nicht\neingeladen\n● Ziele: Verhindern der Radikalisierung der politischen Kräfte in Deutschland, Schaffung der Grundlage für einen\ndemokratischen, föderalen deutschen Staat in den drei westlichen Besatzungszonen, zusammen mit der Währungsreform\nund der Beteiligung Westdeutschlands am Marshall-Plan sollte die Gründung eines westdeutschen Staates dazu\nbeitragen, die politischen und wirtschaftlichen Verhältnisse im Nachkriegsdeutschland zu stabilisieren\nKritik & Reaktionen:\n● Sowjetunion protestierte gegen die Konferenz (durch Note vom 13. Februar 1948)\n● Staaten wie Polen, Tschechoslowakei und Jugoslawien forderten Beteiligung, verwiesen auf einen Widerspruch zum\nPotsdamer Abkommen\n● Westmächte hielten entgegen, dass Beratungen unter mehreren Besatzungsmächten laut Potsdamer Abkommen zulässig\nseien\nErgebnisse:\n● Frankreich schloss sich der Bizone an -> Trizone\n● drei Westzonen traten dem ERP-Programm bei\n● Frankfurter Dokumente an Ministerpräsidenten der Westzonen: Ministerpräsidenten sollten über Grenzen der Länder\nberaten, Beziehungen zwischen einer künftigen deutschen Regierung und den Drei Mächten sollten geregelt werden,\nLondoner Empfehlungen sollten umgesetzt werden (die Regierungschefs der westdeutschen Länder sollten ermächtigt\nwerden, eine Verfassungsgebende Versammlung einzuberufen, um die Gründung eines demokratischen Staats auf ihrem\nTerritorium vorzubereiten)\n● späteres Vier-Mächte-Abkommen über eine gesamtdeutsche Einigung wurde nicht grundsätzlich ausgeschlossen, der\nErrichtung eines Weststaates wurde jedoch Vorrang gegeben\n● Frankfurter Dokumente - Originalquelle: http://www.documentarchiv.de/brd/frftdok.html\nFolgen:\n● August 1948: Parlamentarischer Rat wurde gewählt (statt Verfassungsgebender Versammlung)\n● 8. Mai 1949: Parlamentarischer Rat beschloss das Grundgesetz für die Bundesrepublik Deutschland\n● 23. Mai 1949: Grundgesetz wurde verkündet -> Bundesrepublik Deutschland gegründet (dabei Betonung, dass die\nBundesrepublik nur ein Provisorum darstellte"
    ],
    sources: [
      "https://www.bpb.de/themen/nachkriegszeit/grundgesetz-und-parlamentarischer-rat/38975/von-den-londoner-empfehlungen-zum-grundgesetz/",
      "https://webarchiv.bundestag.de/archive/2005/1017/parlament/geschichte/parlhist/streifzug/g1945/g1945_21.html",
      "https://hlz.hessen.de/themen/detailansicht/1-juli-1948-75-jahrestag-der-uebergabe-der-frankfurter-dokumente-der-geburtsurkunde-der-bundesrepublik-an-die-regierungschefs-der-westdeutschen-laender/",
      "https://de.wikipedia.org/wiki/Londoner_Sechsm%C3%A4chtekonferenz"
    ]
  },
  {
    id: "waehrungsreform-1948-06-21",
    year: 1948,
    dateLabel: "21. Juni 1948",
    side: "west",
    title: "Waehrungsreform",
    category: "Wirtschaft/Gesellschaft",
    createdBy: "Laura",
    positionPx: 1470,
    overview:
      "Die Waehrungsreform fuehrte in den westlichen Besatzungszonen Deutschlands die Deutsche Mark (DM) als gesetzliches Zahlungsmittel ein und ersetzte die Reichsmark. Ziel war es, die inflationaere Geldschwaemme zu beenden, den Schwarzmarkt zurueckzudraengen und den wirtschaftlichen Wiederaufbau zu beschleunigen. Die Reform staerkte das Vertrauen in die westdeutsche Wirtschaft, verschaerfte aber zugleich die Spannungen mit der Sowjetunion.",
    details: [
      "Datum: Währungsreform trat am 20. Juni in Kraft, ab 21. Juni lag allein die Deutsche Mark (DM) als gesetzliches\nZahlungsmittel vor\n● Ausgangslage vor der Reform: hoher Geldbestand und geringe Güterproduktion führten zu einem starken Überhang an\nReichsmark und ausgeprägtem Schwarzmarkt, nach dem Scheitern der Vier-Mächte-Regierung bereiteten die\nWestmächte für ihre Zonen eine Währungsreform vor\n● Ziel: Währungskonvertibilität erreichen (freie und unbegrenzte Umtauschbarkeit der Inlandswährung in andere\nFremdwährungen), Ermöglichen des wirtschaftlichen Wiederaufbaus Deutschlands, Beseitigung des übermäßigen\nGeldüberhangs, Schaffung der Grundlage für eine funktionsfähige Marktwirtschaft\n● Planung: hauptsächlich von US-amerikanischen und anderen westlichen Besatzungsmächten durchgesetzt\n● Umtausch: jeder erhielt am 20. Juni 40 DM im Tausch gegen 40 RM, später weitere 20 DM\n● Sparguthaben: Sparguthaben und Schulden wurden stark reduziert (z. B. 10 RM -> 1 DM)\n● Preis- und Lohnregelung: Löhne, Gehälter und Mieten wurden im Verhältnis 1:1 umgewertet, Preisbindung (gesetzliche\nVerpflichtung, Produkte zu einem festgelegten Preis zu verkaufen) entfällt\nAuswirkungen:\n● wirtschaftliche Folgen: innerhalb kurzer Zeit waren knappe Waren wieder in großen Mengen verfügbar, Schwarzmarkt\nverschwand, freie Marktwirtschaft wurde durchgesetzt, Preise stiegen zunächst stark, Lebenshaltungskosten stiegen,\nArbeitslosigkeit stieg, Sparer litten, während Sachwertbesitzer weniger betroffen waren\n● politische Folgen: unterschiedliche Währungsbestimmungen in Berlin führten zur Berlin-Blockade und Luftbrücke,\nTrennung Deutschlands in zwei Wirtschaftsräume, Beschleunigung der ideologischen Trennung während des Kalten\nKrieges"
    ],
    sources: [
      "https://www.hdg.de/lemo/kapitel/nachkriegsjahre/doppelte-staatsgruendung/marshall-plan-und-waehrungsreform.html",
      "https://de.wikipedia.org/wiki/W%C3%A4hrungsreform_1948_(Westdeutschland)",
      "https://www.bpb.de/shop/zeitschriften/apuz/271679/kleine-ereignisgeschichte-der-waehrungsreform-1948/",
      "https://www.studysmarter.de/schule/geschichte/geteiltes-deutschland/waehrungsreform-1948/"
    ],
    images: [
      {
        src: imagePath("waehrungsreform-1948-d-mark.png"),
        link: "https://www.nn.de/region/erlangen-hoechstadt/wahrungsreform-1948-eine-herzogenauracher-familie-zwischen-not-und-hoffnung-1.13348016",
        alt: "D-Mark Banknote von 1948"
      },
      {
        src: imagePath("waehrungsreform-1948-bankformular.png"),
        link: "https://de.wikipedia.org/wiki/W%C3%A4hrungsreform_1948_(Westdeutschland)",
        alt: "Bankformular zur Waehrungsreform 1948"
      }
    ]
  },
  {
    id: "berlin-blockade-beginn-1948-06-24",
    year: 1948,
    dateLabel: "24. Juni 1948",
    side: "west",
    title: "Beginn der Berlin-Blockade",
    category: "Kalter Krieg",
    createdBy: "Laura",
    positionPx: 1490,
    overview:
      "Die Berlin-Blockade dauerte von 1948 bis 1949 und war eine Reaktion der Sowjetunion auf die Einfuehrung der D-Mark in den westlichen Besatzungszonen. Die Sowjetunion sperrte Land- und Wasserwege nach Westberlin, um die Westmaechte zum Aufgeben der Stadt zu zwingen. Die USA und ihre Verbuendeten reagierten mit der Luftbruecke und versorgten Westberlin fast ein Jahr lang aus der Luft. Am 12. Mai 1949 wurde die Blockade beendet, ohne dass die Sowjetunion ihr Ziel erreichte.",
    details: [
      "Berlin-Blockade: Blockade der drei Westsektoren Berlins durch die Sowjetunion\n● Dauer: 24. Juni 1948 - 12. Mai 1949\n● Ausgangslage: Westteil Berlins war teils von der sowjetischen Besatzungszone und teils vom sowjetischen Sektor Berlins\numgeben\n● Beginn: in der Nacht zum 24. Juni 1948 sperrten sowjetische Truppen alle Zufahrtswege nach West-Berlin, Gas- und\nStromversorgung der Westsektoren wurde drastisch eingeschränkt\n● Begründung: drei Tage zuvor leiteten die Westalliierten die Währungsreform in der Trizone ein, neue Währung sollte auch\nauf Westberlin ausgedehnt werden\n● Ziel: Mittel im Kalten Krieg, Versuch der UdSSR, West-Berlin und ganz Deutschland in ihren Machtbereich einzuordnen,\nganz Berlin unter die Kontrolle der UdSSR bringen, westliche Siegermächte dazu zwingen, auf die Gründung eines\ndemokratischen Staates in ihren Besatzungszonen zu verzichten\n● Auswirkung: Westalliierten konnten des Westteil Berlins nicht mehr über die Wasser- und Landverbindungen versorgen ->\nStadt war vom Nachschub an Lebensmitteln und vielen wichtigen Gütern abgeschnitten\nReaktion:\n● Berliner Luftbrücke -> auf Initiative von US-Militärgouverneur Lucius D. Clay errichteten die Westalliierten am 26. Juni\neine Luftbrücke, insgesamt wurden in mehr als 270.000 Flügen rund 2,1 Millionen Tonnen lebenswichtiger Güter nach\nWestberlin transportiert (Lebensmittel, Baumaterialien, Brennstoffe)\n● Gegenblockade -> seit September 1948 untersagten die Westmächte, bestimmte Güter in die SBZ zu liefern, und\nmachten den Export anderer Güter von Lizenzen abhängig\n● Ende: UdSSR hob Berlin-Blockade auf, ohne ihre Ziele erreicht zu haben\n● Folgen: erster Höhepunkt des Kalten Krieges, trug zur Gründung der NATO und der BRD bei, Annäherung von\nSiegermächten und Westdeutschen, USA als \"Schutzmacht\" Berlins angesehen, UdSSR als Bedrohung wahrgenommen"
    ],
    sources: [
      "https://www.bpb.de/kurz-knapp/lexika/das-junge-politik-lexikon/319929/berliner-blockade-luftbruecke/",
      "https://de.wikipedia.org/wiki/Berlin-Blockade",
      "https://www.hdg.de/lemo/kapitel/nachkriegsjahre/doppelte-staatsgruendung/berlinblockade-1948.html"
    ],
    image: {
      src: imagePath("berlin-blockade-rosinenbomber-tempelhof.png"),
      link: "https://en.wikipedia.org/wiki/Berlin_Blockade",
      alt: "Berliner beobachten die Landung eines Rosinenbombers auf dem Flughafen Tempelhof"
    }
  },
  {
    id: "berliner-luftbruecke-operation-vittles-1948-06-26",
    year: 1948,
    dateLabel: "26.Juni 1948 (ab 26. Juni)",
    side: "west",
    title: "Berliner Luftbrücke (Operation Vittles / brit. Operation Plainfare)",
    createdBy: "Benjamin",
    positionPx: 1520,
    overview: "Berliner Luftbrücke (Operation Vittles / brit. Operation Plainfare)",
    details: [
      "Beginn der alliierte Versorgung West-Berlins aus der Luft -> schnelle Organisation von Flugversorgungen (Lebensmittel, Kohle, Medikamente)",
      "symbolische und praktische Unterstützung West-Berlins -> Verstärkung des Vertrauens der Westberliner in die Westmächte; erste direkte Konfrontation des Kalten Krieges in Deutschland."
    ]
  },
  {
    id: "uebergabe-frankfurter-dokumente-1948-07-01",
    year: 1948,
    dateLabel: "1.Juli 1948",
    side: "west",
    title: "Übergabe der Frankfurter Dokumente (auf Grundlage der Londoner Empfehlungen)",
    createdBy: "Benjamin",
    positionPx: 1550,
    overview: "Übergabe der Frankfurter Dokumente (auf Grundlage der Londoner Empfehlungen)",
    details: [
      "an die Ministerpräsidenten der westdeutschen Länder -> Auftrag der Westalliierten: Einberufung einer verfassungsgebenden Versammlung / Vorbereitung eines westdeutschen Staates",
      "Beginn formaler Schritte zur politischen Neuordnung (erste Grundlage für späteren Parlamentarischen Rat / Grundgesetz)."
    ]
  },
  {
    id: "besprechungen-laenderchefs-frankfurter-dokumente-1948-07",
    year: 1948,
    dateLabel: "8.–10.Juli 1948",
    side: "west",
    title: "Besprechungen der Länderchefs (z. B. Koblenz / Rittersturz) über die Frankfurter Dokumente",
    createdBy: "Benjamin",
    positionPx: 1580,
    overview: "Besprechungen der Länderchefs (z. B. Koblenz / Rittersturz) über die Frankfurter Dokumente",
    details: [
      "Widerstände bei Länderchefs (Angst vor dauerhafter Spaltung), aber Druck der Alliierten erzwingt Vorbereitungen zur Staatsgründung."
    ]
  },
  {
    id: "verfassungskonvent-herrenchiemsee-1948-08",
    year: 1948,
    dateLabel: "10.–23.August 1948",
    side: "west",
    title: "Verfassungskonvent auf Herrenchiemsee (Verfassungsentwurf als Arbeitsgrundlage)",
    createdBy: "Benjamin",
    positionPx: 1610,
    overview: "Verfassungskonvent auf Herrenchiemsee (Verfassungsentwurf als Arbeitsgrundlage)",
    details: [
      "Expertengremium der Länder erarbeitet einen umfassenden Verfassungsentwurf (Herrenchiemsee-Bericht) — wichtige Grundlage fürs spätere Grundgesetz."
    ]
  },
  {
    id: "bildung-konstituierung-parlamentarischer-rat-1948-09-01",
    year: 1948,
    dateLabel: "26.Juli–16.August 1948 (Vorbereitungen) / 1.September 1948",
    side: "west",
    title: "Bildung und Konstituierung des Parlamentarischen Rats (Konstituierung: 1. Sept. 1948)",
    createdBy: "Benjamin",
    positionPx: 1640,
    overview: "Bildung und Konstituierung des Parlamentarischen Rats (Konstituierung: 1. Sept. 1948)",
    details: [
      "65 von den Länderparlamenten gewählte Abgeordnete treffen sich in Bonn, Auftrag: Ausarbeitung des Grundgesetzes (provisorische Verfassung für Westdeutschland)",
      "politischer Schritt zur Staatsgründung auf dem Gebiet der drei Westzonen."
    ]
  },
  {
    id: "gruendung-oeec-1948-04-16",
    year: 1948,
    dateLabel: "16.April 1948",
    side: "west",
    title: "Gründung der OEEC (Organisation for European Economic Co-operation)",
    createdBy: "Johannes",
    positionPx: 1135,
    overview: "Gründung der OEEC (Organisation for European Economic Co-operation)",
    details: [
      "Organisationsforum zur Verteilung der Marshall-Plan-Hilfen an westeuropäische Staaten",
      "Ziel: wirtschaftliche Zusammenarbeit, Wiederaufbau und Koordination der Hilfen."
    ]
  },
  {
    id: "waehrungsreform-westzonen-1948-06-20-21",
    year: 1948,
    dateLabel: "20./21.Juni 1948",
    side: "west",
    title: "Währungsreform in den Westzonen — Einführung der Deutschen Mark (DM)",
    createdBy: "Johannes",
    positionPx: 1465,
    overview: "Währungsreform in den Westzonen — Einführung der Deutschen Mark (DM)",
    details: [
      "\"Kopfgeld\" am 20. Juni, ab 21. Juni alleiniges Zahlungsmittel in den Westzonen",
      "Ziel: Beseitigung der Hyperinflation/Schwarzmarkt-Strukturen, Stabilisierung der Wirtschaft (wichtiger Schritt zur wirtschaftlichen Erholung).",
      "Ludwig Erhard / Wirtschaftsverwaltung der Westzonen maßgeblich beteiligt; Grundlage für spätere wirtschaftliche Erholung."
    ]
  },
  {
    id: "beginn-berliner-blockade-sowjetische-massnahme-1948-06-24",
    year: 1948,
    dateLabel: "24.Juni 1948",
    side: "west",
    title: "Beginn der Berliner Blockade (Sowjetische Maßnahme: Sperrung der Land-, Schienen- und Wasserwege nach West-Berlin)",
    createdBy: "Johannes",
    positionPx: 1485,
    overview: "Beginn der Berliner Blockade (Sowjetische Maßnahme: Sperrung der Land-, Schienen- und Wasserwege nach West-Berlin)",
    details: [
      "Reaktion auf die Währungsreform und politische Eskalation im Ost-West-Konflikt",
      "Westsektoren Berlins von der Versorgung abgeschnitten — harte politische Zuspitzung."
    ]
  },
  {
    id: "westintegration-festigung-1948-09-12",
    year: 1948,
    dateLabel: "September–Dezember 1948",
    side: "west",
    title: "Gesellschaftliche und politische Festigung der Westintegration",
    createdBy: "Johannes",
    positionPx: 1650,
    overview: "Gesellschaftliche und politische Festigung der Westintegration",
    details: [
      "Westdeutsche Bevölkerung orientiert sich zunehmend an den Westmächten (USA, Großbritannien, Frankreich) -> Luftbrücke stärkt Vertrauen in den Westen und demokratische Strukturen",
      "Abgrenzung zur Sowjetunion wird im Alltag spürbar (Medien, Politik, Wirtschaft) -> Kalter Krieg prägt nun dauerhaft Denken und Handeln in den Westzonen -> Deutsche Teilung wird gesellschaftlich immer mehr akzeptiert (wenn auch widerwillig)",
      "Wirtschaftlich-gesellschaftliche Folge (Mitte–Ende 1948): -> kurzfristig: Versorgungsengpässe, Unsicherheit durch Blockade; aber Währungsreform reduziert Schwarzmarkt, stimuliert Produktion und Handel. -> mittelfristig: Grundlagen für wirtschaftliche Erholung (Wegbereiter für spätere Soziale Marktwirtschaft / Wirtschaftswunder)."
    ]
  },
  {
    id: "nato-gruendung-1949-04-04",
    year: 1949,
    dateLabel: "4. April 1949",
    side: "west",
    title: "Gruendung der NATO",
    category: "Kalter Krieg",
    createdBy: "Theresa und Jolien",
    positionPx: 1660,
    overview:
      "● Washington D.C.\n● Unterzeichnung des Nordatlantikvertrags durch 12 westliche Staaten\n● Einführung des Bündnisprinzips (Artikel 5):-> „Ein Angriff auf ein Mitglied ist ein Angriff auf alle.“\n● Reaktion auf die Berlin-Blockade (1948–1949)\n● Beginn eines festen westlichen Militärbündnisses gegen die Sowjetunion",
    details: [
      "Westdeutschland wird strategisch Teil des westlichen Sicherheitsraums",
      "Militärische Blockbildung wird unumkehrbar",
      "Verschärfung des Kalten Krieges",
      "Deutschland liegt als „Frontstaat“ zwischen Ost und West"
    ],
    sources: ["https://www.dhm.de/archiv/ausstellungen/kalter_krieg/zeit/z1949.htm"],
    image: {
      src: imagePath("nato-gruendung-unterzeichnung-1949.png"),
      link: "https://www1.wdr.de/stichtag/stichtag-nato-gruendung-100.html",
      alt: "Unterzeichnung des Nordatlantikvertrags 1949"
    }
  },
  {
    id: "trizone-vollstaendig-1949-04-08",
    year: 1949,
    dateLabel: "8. April 1949",
    side: "west",
    title: "Vollstaendige Entstehung der Trizone",
    category: "deutsche Politik",
    createdBy: "Theresa und Jolien",
    positionPx: 1700,
    overview:
      "● Westliche Besatzungszonen\n● Französische Besatzungszone schließt sich der Bizone (USA + Großbritannien) an\n● Wirtschaftliche und politische Zusammenarbeit wird vereinheitlicht\n● Grundlage für die Bildung eines westdeutschen Staates entsteht",
    details: [
      "Klare Abgrenzung zur Sowjetischen Besatzungszone",
      "Dementsprechend Teilung Deutschlands verstärkt sich",
      "Vorbereitung auf Staatsgründung läuft"
    ],
    sources: ["https://www.dhm.de/archiv/ausstellungen/kalter_krieg/zeit/z1949.htm"],
    image: {
      src: imagePath("trizone-vollstaendige-entstehung-1949.png"),
      link: "https://www.spiegel.de/geschichte/kalenderblatt-8-4-1949-a-948240.html",
      alt: "Vertreter der westlichen Besatzungszonen im Kontext der Entstehung der Trizone"
    }
  },
  {
    id: "alliierte-zustimmung-staatsgruendung-1949-04-10",
    year: 1949,
    dateLabel: "10. April 1949",
    side: "west",
    title: "Zustimmung der Alliierten zur Staatsgruendung",
    category: "deutsche Politik",
    createdBy: "Theresa und Jolien",
    positionPx: 1730,
    overview:
      "● Westliche Militärgouverneure genehmigen den Entwurf des Grundgesetzes\n● Umsetzung der „Frankfurter Dokumente“\n● Offizielle Erlaubnis zur Gründung eines westdeutschen Staates",
    details: [
      "Politische Besonderheit:\n? Der Begriff „Grundgesetz“ statt „Verfassung“ -> Provisorium bis zur Wiedervereinigung",
      "Folge:\n? Klare Provokation für die Sowjetunion\n? Die Teilung wird politisch konkret"
    ],
    sources: ["https://de.wikipedia.org/wiki/Besatzungsstatut"],
    image: {
      src: imagePath("alliierte-zustimmung-staatsgruendung-1949.png"),
      link: "https://www.bpb.de/shop/zeitschriften/izpb/deutschland-1945-1949-259/10085/zwei-staatsgruendungen-auf-deutschem-boden/",
      alt: "Alliierte Zustimmung im Kontext der Staatsgruendung in Westdeutschland"
    }
  },
  {
    id: "grundgesetz-verabschiedung-1949-05-08",
    year: 1949,
    dateLabel: "8. Mai 1949",
    side: "west",
    title: "Verabschiedung des Grundgesetzes",
    category: "deutsche Politik",
    createdBy: "Theresa und Jolien",
    positionPx: 1790,
    overview:
      "● Bonn (Parlamentarischer Rat)\n● Nach monatelangen Beratungen wird das Grundgesetz beschlossen\n● Artikel 1: „Die Würde des Menschen ist unantastbar.“\n● Einführung eines föderalen, parlamentarischen Systems\n● Starke Stellung des Bundeskanzlers (Lehre aus Weimar)",
    details: [
      "Gesellschaftliche Bedeutung:\n? Hoffnung auf Stabilität nach NS-Diktatur\n? Wiederherstellung demokratischer Grundrechte",
      "Wirtschaftliche Grundlage:\n? Schutz des Eigentums\n? Basis für die Soziale Marktwirtschaft"
    ],
    sources: ["https://de.wikipedia.org/wiki/Parlamentarischer_Rat"]
  },
  {
    id: "berlin-blockade-ende-1949-05-12",
    year: 1949,
    dateLabel: "12. Mai 1949",
    side: "west",
    title: "Ende der Berliner Blockade",
    category: "Kalter Krieg",
    createdBy: "Theresa und Jolien",
    positionPx: 1850,
    overview:
      "● Sowjetunion hebt die Blockade West-Berlins auf\n● Westmächte hatten Berlin fast ein Jahr durch die Luftbrücke versorgt\n● UdSSR erreicht ihr Ziel (Verhinderung eines Weststaates) nicht",
    details: [
      "Folgen:\n? Westen geht politisch gestärkt hervor\n? Blockbildung vertieft sich\n? Vertrauen zwischen Ost und West praktisch beendet"
    ],
    sources: ["https://de.wikipedia.org/wiki/Berlin-Blockade"]
  },
  {
    id: "gruendung-brd-1949-05-23",
    year: 1949,
    dateLabel: "23. Mai 1949",
    side: "west",
    title: "Gründung der Bundesrepublik Deutschland",
    category: "deutsche Politik",
    createdBy: "Theresa und Jolien",
    positionPx: 1910,
    overview:
      "● Bonn\n● Verkündung und Inkrafttreten des Grundgesetzes\n● Westzonen werden zur Bundesrepublik Deutschland\n● Bonn wird provisorische Hauptstadt",
    details: [
      "Politisch:\n? Parlamentarische Demokratie entsteht\n? Gewaltenteilung wird eingeführt",
      "Gesellschaftlich:\n? Wiedererlangung der Grundrechte\n? Neubeginn – aber auch Schmerz über die Teilung",
      "Wirtschaftlich:\n? Grundlage für wirtschaftlichen Wiederaufbau\n? Marshallplan-Hilfen können gezielt eingesetzt werden"
    ],
    sources: ["https://www.dw.com/en/germanys-constitution-and-its-75-year-history/a-69138700"],
    image: {
      src: imagePath("gruendung-brd-grundgesetz-1949.png"),
      link: "https://www.br.de/radio/bayern2/sendungen/radiowissen/geschichte/grundgesetz-entstehung-verkuendung-100.html",
      alt: "Textpassage aus dem Grundgesetz im Kontext der Gruendung der Bundesrepublik Deutschland"
    }
  },
  {
    id: "erste-bundestagswahl-1949-08-14",
    year: 1949,
    dateLabel: "14. August 1949",
    side: "west",
    title: "Erste Bundestagswahl",
    category: "deutsche Politik",
    createdBy: "Theresa und Jolien",
    positionPx: 1970,
    overview:
      "● Erste freie gesamtwestdeutsche Parlamentswahl\n● Wahlbeteiligung ca. 78 %\n● CDU/CSU wird stärkste Kraft vor SPD",
    details: [
      "Bedeutung:\n● Demokratie wird praktisch umgesetzt\n● Bevölkerung entscheidet über politische Zukunft\n● Stabilität für den Wiederaufbau"
    ],
    sources: ["https://www.bundestag.de/dokumente/textarchiv/1949-08-14-erste-bundestagswahl-1014340"]
  },
  {
    id: "wahl-erster-bundespraesident-1949-09-12",
    year: 1949,
    dateLabel: "12. September 1949",
    side: "west",
    title: "Wahl des ersten Bundespräsidenten",
    category: "deutsche Politik",
    createdBy: "Theresa und Jolien",
    positionPx: 2000,
    overview:
      "● Theodor Heuss wird von der Bundesversammlung gewählt\n● Liberaler Demokrat\n● Symbol für demokratischen Neubeginn",
    details: [
      "● Theodor Heuss wird von der Bundesversammlung gewählt\n● Liberaler Demokrat\n● Symbol für demokratischen Neubeginn"
    ],
    sources: ["https://www.bundestag.de/parlament/aufgaben/bundesversammlung/1bundesversammlung-485168"]
  },
  {
    id: "wahl-adenauer-1949-09-15",
    year: 1949,
    dateLabel: "15. September 1949",
    side: "west",
    title: "Wahl Konrad Adenauers",
    category: "deutsche Politik",
    createdBy: "Theresa und Jolien",
    positionPx: 2030,
    overview:
      "● Bundestag wählt Adenauer zum ersten Bundeskanzler\n● Sehr knappe Mehrheit",
    details: [
      "Politische Leitlinie:\n● Westbindung\n● Antikommunistische Ausrichtung\n● Stabilität vor schneller Wiedervereinigung"
    ],
    sources: ["https://en.wikipedia.org/wiki/First_German_Bundestag"]
  },
  {
    id: "erste-regierungserklaerung-1949-09-20",
    year: 1949,
    dateLabel: "20. September 1949",
    side: "west",
    title: "Erste Regierungserklärung",
    category: "deutsche Politik",
    createdBy: "Theresa und Jolien",
    positionPx: 2060,
    overview:
      "● Adenauer stellt sein Kabinett vor",
    details: [
      "Schwerpunkt:\nWiederaufbau, Integration der Flüchtlinge, wirtschaftliche Stabilisierung, klare\nWestorientierung"
    ]
  },
  {
    id: "gruendung-ddr-1949-10-07",
    year: 1949,
    dateLabel: "7. Oktober 1949",
    side: "west",
    title: "Gründung der DDR",
    category: "Kalter Krieg",
    createdBy: "Theresa und Jolien",
    positionPx: 2090,
    overview:
      "📍 Ost-Berlin\n● Deutsche Demokratische Republik wird gegründet\n● SED dominiert das politische System\n● Wilhelm Pieck wird Präsident",
    details: [
      "Folgen:\n● Deutschland endgültig geteilt\n● Zwei politische Systeme:\nDemokratie im Westen\nSozialistischer Einparteienstaat im Osten\n● Deutschland wird zentrales Konfliktgebiet im Kalten Krieg"
    ],
    sources: ["https://www.dw.com/en/germanys-constitution-and-its-75-year-history/a-69138700"]
  },
  {
    id: "bildung-dwk-1947-01-titus",
    year: 1947,
    dateLabel: "Januar 1947",
    side: "east",
    title: "Bildung der Deutschen Wirtschaftskommission (DWK)",
    createdBy: "Titus",
    positionPx: 300,
    overview:
      "Bedeutung:\nErster zentraler Verwaltungsapparat der SBZ und entscheidender Schritt zur Herausbildung eigenständiger ostdeutscher Staatlichkeit.",
    details: [
      "Erläuterung:\nIm Januar 1947 wurde die Deutsche Wirtschaftskommission als zentrales Wirtschaftsorgan der SBZ geschaffen. Sie unterstand der sowjetischen Militäradministration und war personell stark von der SED geprägt.\nUrsprünglich sollte die DWK lediglich wirtschaftliche Koordinationsaufgaben übernehmen, entwickelte sich jedoch rasch zu einer übergeordneten Verwaltungsinstanz mit quasi-regierungsähnlichen Funktionen. Damit entstand erstmals eine zentrale politische Struktur, die über die Länder der SBZ hinaus wirkte und die spätere Staatsgründung vorbereitete."
    ]
  },
  {
    id: "ausbau-machtstellung-sed-verwaltung-justiz-1947-fruehjahr-titus",
    year: 1947,
    dateLabel: "Frühjahr 1947",
    side: "east",
    title: "Ausbau der Machtstellung der SED in Verwaltung und Justiz",
    createdBy: "Titus",
    positionPx: 330,
    overview:
      "Bedeutung:\nFestigung der politischen Kontrolle durch die SED und Zurückdrängung pluralistischer Strukturen.",
    details: [
      "Erläuterung:\nIm Verlauf des Jahres 1947 besetzte die SED systematisch Schlüsselpositionen in Verwaltungen, Gerichten und Polizeiapparaten der SBZ. Formell existierten weiterhin mehrere Parteien, faktisch wurden Entscheidungsprozesse jedoch zunehmend von der SED bestimmt.\nDieser Machtzuwachs erfolgte mit Unterstützung der Sowjetische Militäradministration in Deutschland, die oppositionelle Kräfte marginalisierte. Der politische Wettbewerb wurde damit schrittweise ausgeschaltet, ohne dass dies offen als Diktatur gekennzeichnet wurde."
    ]
  },
  {
    id: "verstaerkte-zentralisierung-laender-sbz-1947-06-titus",
    year: 1947,
    dateLabel: "Juni 1947",
    side: "east",
    title: "Verstärkte Zentralisierung der Länder in der SBZ",
    createdBy: "Titus",
    positionPx: 360,
    overview:
      "Bedeutung:\nSchwächung des Föderalismus und Annäherung an ein zentralistisch organisiertes Staatssystem.",
    details: [
      "Erläuterung:\nObwohl die SBZ formal aus fünf Ländern bestand, verloren diese im Jahr 1947 zunehmend ihre politischen Kompetenzen. Entscheidende wirtschaftliche und politische Befugnisse gingen auf zentrale Organe wie die DWK über.\nDiese Entwicklung widersprach bewusst föderalen Traditionen und folgte dem sowjetischen Modell eines stark zentralisierten Staates. Damit wurde die Grundlage für die spätere Abschaffung der Länder in der DDR gelegt."
    ]
  },
  {
    id: "ablehnung-marshallplan-sowjetunion-sbz-1947-07-titus",
    year: 1947,
    dateLabel: "Juli 1947",
    side: "east",
    title: "Ablehnung des Marshallplans durch die Sowjetunion und die SBZ",
    createdBy: "Titus",
    positionPx: 390,
    overview:
      "Bedeutung:\nEndgültige wirtschaftspolitische Abgrenzung vom Westen und Einbindung der SBZ in den sowjetischen Machtbereich.",
    details: [
      "Erläuterung:\nNachdem die USA den Marshallplan zum Wiederaufbau Europas vorgestellt hatten, untersagte die Sowjetunion dessen Teilnahme für die SBZ. Die Entscheidung wurde offiziell mit ideologischen und sicherheitspolitischen Argumenten begründet.\nTatsächlich verstärkte sie jedoch die wirtschaftliche Spaltung Deutschlands erheblich. Während sich die Westzonen wirtschaftlich stabilisierten, blieb die SBZ auf Reparationsleistungen und zentral gelenkte Wirtschaftsmodelle ausgerichtet. Dies vertiefte die strukturelle Trennung zwischen Ost und West."
    ]
  },
  {
    id: "zweiter-volkskongress-vorbereitung-1947-10-titus",
    year: 1947,
    dateLabel: "Oktober 1947",
    side: "east",
    title: "Zweiter Deutscher Volkskongress wird vorbereitet",
    createdBy: "Titus",
    positionPx: 420,
    overview:
      "Bedeutung:\nPolitische Mobilisierung zur Legitimierung eines eigenständigen ostdeutschen Weges.",
    details: [
      "Erläuterung:\nIm Herbst 1947 begann die gezielte Vorbereitung des Zweiten Deutschen Volkskongresses, der offiziell gesamtdeutsch ausgerichtet sein sollte. In der Praxis wurde die Zusammensetzung der Delegierten jedoch stark von der SED beeinflusst.\nDer Volkskongress diente dazu, den Anspruch auf eine gesamtdeutsche Vertretung zu erheben, während parallel konkrete Schritte zur Staatsbildung in der SBZ vorbereitet wurden. Damit entstand eine politische Kulisse, die demokratische Mitwirkung suggerierte, ohne echte Entscheidungsfreiheit zuzulassen."
    ]
  },
  {
    id: "scheitern-londoner-aussenministerkonferenz-1947-12-titus",
    year: 1947,
    dateLabel: "Dezember 1947",
    side: "east",
    title: "Scheitern der Londoner Außenministerkonferenz",
    createdBy: "Titus",
    positionPx: 450,
    overview:
      "Bedeutung:\nEnde realistischer Perspektiven auf eine einheitliche Deutschlandpolitik der Siegermächte.",
    details: [
      "Erläuterung:\nAuf der Londoner Außenministerkonferenz konnten sich die vier Siegermächte nicht auf eine gemeinsame Zukunft Deutschlands einigen. Zentrale Streitpunkte waren Wirtschaftsordnung, politische Struktur und internationale Einbindung.\nFür die SBZ bedeutete das Scheitern der Gespräche ein Signal, den eigenständigen politischen Kurs weiter zu beschleunigen. Die Hoffnung auf einen gesamtdeutschen Staat trat zunehmend in den Hintergrund, während die institutionelle Trennung weiter vorangetrieben wurde."
    ]
  }
];

function validateEvents(list: EventItem[]) {
  for (const event of list) {
    if (event.side !== "west" && event.side !== "east") {
      throw new Error(`Invalid side in event '${event.id}': ${String(event.side)}`);
    }

    if (!Array.isArray(event.details)) {
      throw new Error(`Invalid details in event '${event.id}': details must be an array`);
    }

    if (typeof event.overview !== "string" || event.overview.trim().length === 0) {
      throw new Error(`Invalid overview in event '${event.id}': overview must be non-empty`);
    }

    if (typeof event.createdBy !== "string" || event.createdBy.trim().length === 0) {
      throw new Error(`Invalid createdBy in event '${event.id}': createdBy must be non-empty`);
    }
  }
}

if (import.meta.env.DEV) {
  validateEvents(events);
}





