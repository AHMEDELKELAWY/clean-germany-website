import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-12 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-hero text-white mb-6">Datenschutzerklärung</h1>
          <p className="text-subtitle text-white/90 max-w-3xl mx-auto">
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
            Diese Datenschutzerklärung informiert Sie über die Erhebung und Verwendung Ihrer Daten.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="card-elevated">
            <CardContent className="p-8 prose prose-gray max-w-none">
              <h2>1. Verantwortliche Stelle</h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p>
                <strong>ReinigungsCompany GmbH</strong><br />
                Musterstraße 123<br />
                12345 Berlin, Deutschland<br />
                Telefon: +49 123 456 789<br />
                E-Mail: info@reinigungscompany.de
              </p>

              <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
              <h3>2.1 Besuch unserer Website</h3>
              <p>
                Bei jedem Zugriff auf unsere Website werden automatisch Informationen 
                allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten 
                etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen 
                Ihres Internet-Service-Providers und ähnliches.
              </p>

              <h3>2.2 Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
                aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>

              <h2>3. Verwendung Ihrer Daten</h2>
              <p>
                Wir verwenden Ihre personenbezogenen Daten ausschließlich zu folgenden Zwecken:
              </p>
              <ul>
                <li>Bearbeitung Ihrer Anfragen</li>
                <li>Erstellung von Angeboten</li>
                <li>Durchführung unserer Dienstleistungen</li>
                <li>Kommunikation mit Ihnen</li>
                <li>Verbesserung unserer Website und Services</li>
              </ul>

              <h2>4. Weitergabe von Daten</h2>
              <p>
                Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im 
                Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen 
                Daten nur an Dritte weiter, wenn:
              </p>
              <ul>
                <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben</li>
                <li>die Weitergabe zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist</li>
                <li>die Weitergabe zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist</li>
              </ul>

              <h2>5. Speicherdauer</h2>
              <p>
                Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies für die 
                Erfüllung der Zwecke erforderlich ist, für die sie erhoben wurden, oder 
                solange gesetzliche Aufbewahrungsfristen bestehen.
              </p>

              <h2>6. Ihre Rechte</h2>
              <p>
                Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
              </p>
              <ul>
                <li>Recht auf Auskunft über die bei uns gespeicherten Daten</li>
                <li>Recht auf Berichtigung unrichtiger Daten</li>
                <li>Recht auf Löschung</li>
                <li>Recht auf Einschränkung der Verarbeitung</li>
                <li>Recht auf Datenübertragbarkeit</li>
                <li>Widerspruchsrecht gegen die Verarbeitung</li>
                <li>Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
              </ul>

              <h2>7. SSL-Verschlüsselung</h2>
              <p>
                Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung 
                vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung 
                erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" 
                wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>

              <h2>8. Änderung der Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets 
                den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer 
                Leistungen in der Datenschutzerklärung umzusetzen.
              </p>

              <h2>9. Kontakt</h2>
              <p>
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, 
                bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:
              </p>
              <p>
                <strong>ReinigungsCompany GmbH</strong><br />
                E-Mail: datenschutz@reinigungscompany.de<br />
                Telefon: +49 123 456 789
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

export default PrivacyPage;