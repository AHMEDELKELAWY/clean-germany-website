import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TermsPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-12 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-hero text-white mb-6">Allgemeine Geschäftsbedingungen</h1>
          <p className="text-subtitle text-white/90 max-w-3xl mx-auto">
            Diese Allgemeinen Geschäftsbedingungen regeln die Zusammenarbeit zwischen 
            ReinigungsCompany und unseren Kunden.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="card-elevated">
            <CardContent className="p-8 prose prose-gray max-w-none">
              <h2>§ 1 Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen 
                der ReinigungsCompany GmbH (nachfolgend "Auftragnehmer") und ihren Auftraggebern 
                (nachfolgend "Auftraggeber") über Reinigungsdienstleistungen.
              </p>

              <h2>§ 2 Vertragsschluss</h2>
              <p>
                Ein Vertrag kommt durch die schriftliche Auftragsbestätigung des Auftragnehmers 
                oder durch Beginn der Leistungserbringung zustande. Mündliche Nebenabreden bedürfen 
                der schriftlichen Bestätigung.
              </p>

              <h2>§ 3 Leistungsumfang</h2>
              <p>
                Der Umfang der zu erbringenden Leistungen ergibt sich aus der individuellen 
                Vereinbarung zwischen den Vertragsparteien. Zusätzliche Leistungen werden 
                nur gegen gesonderte Vergütung erbracht.
              </p>

              <h2>§ 4 Termine und Ausführung</h2>
              <ol>
                <li>
                  Vereinbarte Termine sind für beide Vertragsparteien verbindlich.
                </li>
                <li>
                  Der Auftraggeber hat dafür zu sorgen, dass die zu reinigenden Räumlichkeiten 
                  zum vereinbarten Zeitpunkt zugänglich sind.
                </li>
                <li>
                  Bei Verhinderung ist der Auftraggeber verpflichtet, den Auftragnehmer 
                  mindestens 24 Stunden vorher zu benachrichtigen.
                </li>
              </ol>

              <h2>§ 5 Preise und Zahlungsbedingungen</h2>
              <ol>
                <li>
                  Es gelten die bei Vertragsschluss vereinbarten Preise.
                </li>
                <li>
                  Die Zahlung erfolgt nach Leistungserbringung innerhalb von 14 Tagen 
                  nach Rechnungsstellung ohne Abzug.
                </li>
                <li>
                  Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten 
                  über dem Basiszinssatz berechnet.
                </li>
              </ol>

              <h2>§ 6 Haftung</h2>
              <ol>
                <li>
                  Der Auftragnehmer haftet für Schäden nur bei Vorsatz und grober Fahrlässigkeit.
                </li>
                <li>
                  Für leichte Fahrlässigkeit haftet der Auftragnehmer nur bei Verletzung 
                  wesentlicher Vertragspflichten.
                </li>
                <li>
                  Die Haftung ist auf den typischen, vorhersehbaren Schaden begrenzt.
                </li>
                <li>
                  Der Auftragnehmer ist durch eine Betriebshaftpflichtversicherung versichert.
                </li>
              </ol>

              <h2>§ 7 Kündigung</h2>
              <ol>
                <li>
                  Dauerschuldverhältnisse können von beiden Seiten mit einer Frist von 
                  4 Wochen zum Monatsende gekündigt werden.
                </li>
                <li>
                  Das Recht zur fristlosen Kündigung aus wichtigem Grund bleibt unberührt.
                </li>
                <li>
                  Kündigungen bedürfen der Schriftform.
                </li>
              </ol>

              <h2>§ 8 Gewährleistung</h2>
              <ol>
                <li>
                  Der Auftragnehmer gewährleistet eine fachgerechte Ausführung der 
                  vereinbarten Reinigungsarbeiten.
                </li>
                <li>
                  Mängel sind unverzüglich nach Feststellung anzuzeigen.
                </li>
                <li>
                  Bei berechtigten Mängelrügen wird der Auftragnehmer die Mängel 
                  kostenfrei beseitigen.
                </li>
              </ol>

              <h2>§ 9 Datenschutz</h2>
              <p>
                Der Auftragnehmer verpflichtet sich, alle im Rahmen der Geschäftsbeziehung 
                bekannt gewordenen Daten vertraulich zu behandeln und die Bestimmungen 
                der Datenschutz-Grundverordnung (DSGVO) einzuhalten.
              </p>

              <h2>§ 10 Schlussbestimmungen</h2>
              <ol>
                <li>
                  Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
                </li>
                <li>
                  Gerichtsstand ist Berlin, sofern der Auftraggeber Kaufmann ist.
                </li>
                <li>
                  Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt 
                  die Wirksamkeit der übrigen Bestimmungen unberührt.
                </li>
                <li>
                  Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform.
                </li>
              </ol>

              <h2>Kontakt</h2>
              <p>
                <strong>ReinigungsCompany GmbH</strong><br />
                Musterstraße 123<br />
                12345 Berlin, Deutschland<br />
                Telefon: +49 123 456 789<br />
                E-Mail: info@reinigungscompany.de<br />
                Geschäftsführer: Max Mustermann<br />
                Handelsregister: HRB 12345 B<br />
                USt-IdNr.: DE123456789
              </p>

              <p className="text-sm text-muted-foreground mt-8">
                Stand: November 2024
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;