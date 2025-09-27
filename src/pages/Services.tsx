import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Building, 
  Sparkles, 
  Scissors,
  Car,
  TreePine,
  CheckCircle,
  Clock,
  Shield
} from 'lucide-react';
import homeCleaningImage from '@/assets/home-cleaning.jpg';
import officeCleaningImage from '@/assets/office-cleaning.jpg';
import deepCleaningImage from '@/assets/deep-cleaning.jpg';

const ServicesPage = () => {
  const mainServices = [
    {
      title: 'Hausreinigung',
      description: 'Regelmäßige oder einmalige Reinigung Ihrer Wohnung oder Ihres Hauses. Wir kümmern uns um alle Räume mit höchster Sorgfalt.',
      image: homeCleaningImage,
      icon: Home,
      features: [
        'Küche und Badezimmer gründlich reinigen',
        'Staubsaugen und Wischen aller Böden',
        'Fenster putzen (innen)',
        'Staubwischen aller Oberflächen',
        'Müll entleeren',
        'Sanitäranlagen desinfizieren'
      ],
      pricing: 'Ab 25€/Stunde',
    },
    {
      title: 'Büroreinigung',
      description: 'Professionelle Reinigung von Büroräumen, Praxen und Geschäftsräumen für ein produktives Arbeitsumfeld.',
      image: officeCleaningImage,
      icon: Building,
      features: [
        'Arbeitsplätze und Büromöbel reinigen',
        'Böden staubsaugen und wischen',
        'Sanitäranlagen reinigen und desinfizieren',
        'Mülleimer leeren und neue Säcke einsetzen',
        'Küchen- und Pausenräume reinigen',
        'Flexible Zeiten nach Ihren Wünschen'
      ],
      pricing: 'Auf Anfrage',
    },
    {
      title: 'Grundreinigung',
      description: 'Intensive Tiefenreinigung für besonders gründliche Sauberkeit bei Umzug, Renovierung oder besonderen Anlässen.',
      image: deepCleaningImage,
      icon: Sparkles,
      features: [
        'Komplette Grundreinigung aller Räume',
        'Fenster innen und außen',
        'Schränke innen und außen',
        'Heizkörper und schwer zugängliche Stellen',
        'Elektrogeräte innen und außen',
        'Fugenschrubbung und Kalkreinigung'
      ],
      pricing: 'Ab 35€/Stunde',
    },
  ];

  const additionalServices = [
    {
      icon: Scissors,
      title: 'Teppichreinigung',
      description: 'Professionelle Reinigung und Auffrischung Ihrer Teppiche.',
    },
    {
      icon: Car,
      title: 'Fahrzeugreinigung',
      description: 'Innen- und Außenreinigung von PKW und Nutzfahrzeugen.',
    },
    {
      icon: TreePine,
      title: 'Gartenpflege',
      description: 'Grundlegende Gartenpflege und Außenbereichsreinigung.',
    },
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Qualitätsgarantie',
      description: '100% Zufriedenheitsgarantie oder kostenlose Nachbearbeitung.',
    },
    {
      icon: Clock,
      title: 'Flexible Termine',
      description: 'Terminvereinbarung nach Ihren Wünschen, auch am Wochenende.',
    },
    {
      icon: Shield,
      title: 'Vollversichert',
      description: 'Haftpflicht- und Unfallversicherung für Ihre Sicherheit.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-12 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-hero text-white mb-6">Unsere Leistungen</h1>
          <p className="text-subtitle text-white/90 max-w-3xl mx-auto">
            Professionelle Reinigungsdienstleistungen für Privat- und Geschäftskunden. 
            Maßgeschneiderte Lösungen für jeden Bedarf.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              const isReversed = index % 2 === 1;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:grid-flow-row-dense' : ''}`}>
                  <div className={isReversed ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-3xl font-semibold">{service.title}</h2>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-4">Leistungsumfang:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-primary">{service.pricing}</div>
                      <Link to="/quote">
                        <Button className="btn-hero">Angebot anfordern</Button>
                      </Link>
                    </div>
                  </div>
                  
                  <div className={isReversed ? 'lg:col-start-1' : ''}>
                    <Card className="card-elevated overflow-hidden">
                      <CardContent className="p-0">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-80 object-cover"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-4">Zusätzliche Leistungen</h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Neben unseren Hauptleistungen bieten wir weitere spezialisierte 
              Reinigungsdienstleistungen an.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="card-service text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section-title mb-4">Ihre Vorteile</h2>
            <p className="text-subtitle max-w-2xl mx-auto">
              Bei allen unseren Dienstleistungen profitieren Sie von diesen Vorteilen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bereit für professionelle Reinigung?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Kontaktieren Sie uns für ein individuelles Angebot. 
              Wir beraten Sie gerne und finden die beste Lösung für Ihre Bedürfnisse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Kostenloses Angebot
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Beratung vereinbaren
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;