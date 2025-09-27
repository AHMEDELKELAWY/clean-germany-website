import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Calculator, CheckCircle, Clock } from 'lucide-react';

const QuotePage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    date: '',
    frequency: '',
    rooms: '',
    squareMeters: '',
    extraNotes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceTypes = [
    { value: 'house_cleaning', label: 'Hausreinigung' },
    { value: 'office_cleaning', label: 'Büroreinigung' },
    { value: 'deep_cleaning', label: 'Grundreinigung' },
    { value: 'carpet_cleaning', label: 'Teppichreinigung' },
    { value: 'window_cleaning', label: 'Fensterreinigung' },
    { value: 'other', label: 'Sonstiges' },
  ];

  const frequencies = [
    { value: 'once', label: 'Einmalig' },
    { value: 'weekly', label: 'Wöchentlich' },
    { value: 'biweekly', label: 'Alle 2 Wochen' },
    { value: 'monthly', label: 'Monatlich' },
    { value: 'quarterly', label: 'Vierteljährlich' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || 
        !formData.address.trim() || !formData.serviceType || !formData.date) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Fehler",
        description: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate form submission and email sending
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Anfrage gesendet!",
        description: "Vielen Dank für Ihre Anfrage. Wir erstellen Ihr individuelles Angebot und senden es Ihnen innerhalb von 24 Stunden zu.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        serviceType: '',
        date: '',
        frequency: '',
        rooms: '',
        squareMeters: '',
        extraNotes: '',
      });
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Beim Senden der Anfrage ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Kostenlos & Unverbindlich',
      description: 'Ihr Angebot ist völlig kostenlos und ohne Verpflichtungen.',
    },
    {
      icon: Clock,
      title: 'Schnelle Bearbeitung',
      description: 'Sie erhalten Ihr individuelles Angebot innerhalb von 24 Stunden.',
    },
    {
      icon: Calculator,
      title: 'Faire Preise',
      description: 'Transparente Kostenaufstellung ohne versteckte Gebühren.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-12 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-hero text-white mb-6">Angebot anfordern</h1>
          <p className="text-subtitle text-white/90 max-w-3xl mx-auto">
            Erhalten Sie Ihr kostenloses und unverbindliches Angebot für professionelle 
            Reinigungsdienstleistungen. Individuell auf Ihre Bedürfnisse zugeschnitten.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="card-elevated">
            <CardContent className="p-8">
              <h2 className="text-3xl font-semibold mb-6 text-center">Angebot anfordern</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Vollständiger Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Max Mustermann"
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">E-Mail Adresse *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="max@beispiel.de"
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Telefonnummer *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+49 123 456 789"
                      className="mt-1"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Adresse *</Label>
                    <Input
                      id="address"
                      name="address"
                      type="text"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Straße, PLZ, Ort"
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                {/* Service Details */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-4">Service Details</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="serviceType">Art der Reinigung *</Label>
                      <Select onValueChange={(value) => handleSelectChange('serviceType', value)} required>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Wählen Sie einen Service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="date">Gewünschter Termin *</Label>
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div>
                      <Label htmlFor="frequency">Häufigkeit</Label>
                      <Select onValueChange={(value) => handleSelectChange('frequency', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Wählen Sie" />
                        </SelectTrigger>
                        <SelectContent>
                          {frequencies.map((freq) => (
                            <SelectItem key={freq.value} value={freq.value}>
                              {freq.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="rooms">Anzahl Räume</Label>
                      <Input
                        id="rooms"
                        name="rooms"
                        type="number"
                        value={formData.rooms}
                        onChange={handleInputChange}
                        placeholder="z.B. 4"
                        className="mt-1"
                        min="1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="squareMeters">Quadratmeter</Label>
                      <Input
                        id="squareMeters"
                        name="squareMeters"
                        type="number"
                        value={formData.squareMeters}
                        onChange={handleInputChange}
                        placeholder="z.B. 80"
                        className="mt-1"
                        min="1"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="border-t pt-6">
                  <Label htmlFor="extraNotes">Zusätzliche Informationen</Label>
                  <Textarea
                    id="extraNotes"
                    name="extraNotes"
                    value={formData.extraNotes}
                    onChange={handleInputChange}
                    placeholder="Besondere Wünsche, spezielle Anforderungen, Haustiere, etc..."
                    rows={4}
                    className="mt-1"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-hero px-12 py-4 text-lg"
                  >
                    {isSubmitting ? 'Wird gesendet...' : 'Kostenloses Angebot anfordern'}
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4">
                    * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Was passiert nach Ihrer Anfrage?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Anfrage erhalten</h3>
              <p className="text-muted-foreground text-sm">
                Wir erhalten Ihre Anfrage und prüfen alle Details.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Angebot erstellen</h3>
              <p className="text-muted-foreground text-sm">
                Unser Team erstellt Ihr individuelles Angebot.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Angebot erhalten</h3>
              <p className="text-muted-foreground text-sm">
                Sie erhalten Ihr Angebot per E-Mail innerhalb von 24h.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotePage;