import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Target, Heart } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Qualität',
      description: 'Höchste Standards in allen Bereichen unserer Dienstleistungen.',
    },
    {
      icon: Users,
      title: 'Vertrauen',
      description: 'Aufbau langfristiger Beziehungen durch Zuverlässigkeit und Ehrlichkeit.',
    },
    {
      icon: Award,
      title: 'Exzellenz',
      description: 'Kontinuierliche Verbesserung und Innovationen in der Reinigungsbranche.',
    },
    {
      icon: Target,
      title: 'Effizienz',
      description: 'Optimierte Prozesse für maximale Kundenzufriedenheit.',
    },
  ];

  const stats = [
    { number: '1000+', label: 'Zufriedene Kunden' },
    { number: '10+', label: 'Jahre Erfahrung' },
    { number: '50+', label: 'Qualifizierte Mitarbeiter' },
    { number: '98%', label: 'Kundenzufriedenheit' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-12 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-hero text-white mb-6">Über ReinigungsCompany</h1>
          <p className="text-subtitle text-white/90 max-w-3xl mx-auto">
            Seit über 10 Jahren setzen wir Maßstäbe in der professionellen Reinigungsbranche 
            und sorgen für hygienische Sauberkeit in ganz Deutschland.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-section-title mb-6">Unsere Geschichte</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ReinigungsCompany wurde 2014 mit der Vision gegründet, professionelle 
                  Reinigungsdienstleistungen höchster Qualität anzubieten. Was als kleines 
                  Familienunternehmen begann, ist heute zu einem der führenden Anbieter 
                  in der Region gewachsen.
                </p>
                <p>
                  Unser Erfolg basiert auf drei Grundpfeilern: qualifizierte Mitarbeiter, 
                  modernste Ausrüstung und ein unerschütterlicher Fokus auf Kundenzufriedenheit. 
                  Jeder Auftrag wird mit der gleichen Sorgfalt und Aufmerksamkeit behandelt, 
                  egal ob es sich um eine kleine Wohnung oder ein großes Bürogebäude handelt.
                </p>
                <p>
                  Heute vertrauen über 1000 zufriedene Kunden auf unsere Dienste, und wir 
                  sind stolz darauf, ihre Erwartungen nicht nur zu erfüllen, sondern zu übertreffen.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-center">Unsere Mission</h3>
                  <p className="text-muted-foreground text-center leading-relaxed mb-6">
                    "Wir schaffen saubere, gesunde und einladende Räume, in denen sich 
                    Menschen wohlfühlen und produktiv arbeiten können."
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-4">Unsere Werte</h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Diese Grundsätze leiten uns in allem was wir tun und bilden das Fundament 
              für unseren langfristigen Erfolg.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="card-service text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team & Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Team */}
            <div>
              <h2 className="text-section-title mb-6">Unser Team</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Unser erfahrenes Team besteht aus über 50 qualifizierten Mitarbeitern, 
                  die regelmäßig in den neuesten Reinigungstechniken und Sicherheitsstandards 
                  geschult werden.
                </p>
                <p>
                  Jeder Mitarbeiter durchläuft ein umfassendes Trainingsprogramm und wird 
                  kontinuierlich weitergebildet. Wir legen großen Wert auf Professionalität, 
                  Zuverlässigkeit und respektvollen Umgang mit unseren Kunden.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-section-title mb-6">Zertifizierungen</h2>
              <div className="space-y-4">
                <Card className="card-elevated">
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">ISO 9001:2015</h4>
                      <p className="text-sm text-muted-foreground">Qualitätsmanagement</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="card-elevated">
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold">ISO 14001:2015</h4>
                      <p className="text-sm text-muted-foreground">Umweltmanagement</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="card-elevated">
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Berufsgenossenschaft</h4>
                      <p className="text-sm text-muted-foreground">Vollversichert</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Unsere Vision</h2>
            <p className="text-xl leading-relaxed text-white/90">
              Wir streben danach, der vertrauenswürdigste Partner für professionelle 
              Reinigungsdienstleistungen in Deutschland zu werden. Durch kontinuierliche 
              Innovation und höchste Qualitätsstandards schaffen wir Mehrwert für unsere 
              Kunden und tragen zu einer sauberen, gesunden Umwelt bei.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;