"use client";

import { 
  Hero, 
  Services, 
  About, 
  Contact, 
  Footer, 
  Header,
  CTASection,
  Features,
  Process,
  Layout
} from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X } from "lucide-react";
import { useState } from "react";

// Branding from Firecrawl
const PRIMARY_COLOR = "#D71921";
const ACCENT_COLOR = "#E30613";

const NAV_LINKS = [
  { label: "Tjenester", href: "/tjenester" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      title: "Sveising - Konstruksjoner",
      description: "Vi er ledende på store konstruksjoner som broer, industribygg, haller samt bærende konstruksjoner."
    },
    {
      title: "Industribygg",
      description: "Komplette industribygg med fokus på kvalitet og holdbarhet. Vi leverer til hele Norge."
    },
    {
      title: "Hallbygg",
      description: "Store haller med kapasitet til å bygge de største konstruksjonene innendørs."
    },
    {
      title: "Broer",
      description: "Erfaring med brokonstruksjoner av alle størrelser. Fra mindre bruer til store infrastrukturprosjekter."
    },
    {
      title: "Overflatebehandling",
      description: "Egen lakk- og malehall for komplett overflatebehandling av metallkonstruksjoner."
    },
    {
      title: "Bærende konstruksjoner",
      description: "Vi produserer og leverer bærende konstruksjoner til alle typer bygg og anlegg."
    }
  ];

  const features = [
    { title: "Erfaring", description: "Ett av Nord-Norges eldste sveiseverksted" },
    { title: "Kapasitet", description: "Stor innendørs produksjonskapasitet" },
    { title: "Kvalitet", description: "Produkter av høy kvalitet" },
    { title: "Levering", description: "Levering til fastsatt tid" },
    { title: "Pris", description: "Riktig pris - hver gang" },
    { title: "Lokal", description: "Lokal tilstedeværelse i Nord-Norge" }
  ];

  const processSteps = [
    { title: "Kontakt oss", description: "Ta kontakt for en uforpliktende samtale" },
    { title: "Befaring", description: "Vi befarer prosjektet og gir tilbud" },
    { title: "Produksjon", description: "Vi produserer konstruksjonene" },
    { title: "Levering", description: "Vi leverer til avtalt tid" }
  ];

  return (
    <Layout
      headerProps={{
        companyName: "Finneid Sveis",
        navLinks: NAV_LINKS,
        ctaText: "Kontakt oss",
        ctaHref: "/kontakt",
        primaryColor: PRIMARY_COLOR,
        transparent: true,
      }}
      footerProps={{
        companyName: "Finneid Sveiseverksted AS",
        description: "Ett av Nord-Norges eldste og ledende sveiseverksted. Vi leverer kvalitet til avsatt tid.",
        contact: {
          phone: "75 62 00 00",
          email: "post@finneidsveis.no",
          address: "Finneid, 8220 Fauske"
        },
        primaryColor: PRIMARY_COLOR,
        columns: [
          {
            title: "Tjenester",
            links: [
              { label: "Sveising", href: "/tjenester" },
              { label: "Industribygg", href: "/tjenester" },
              { label: "Hallbygg", href: "/tjenester" },
              { label: "Broer", href: "/tjenester" }
            ]
          },
          {
            title: "Om oss",
            links: [
              { label: "Om Finneid Sveis", href: "/om-oss" },
              { label: "Kontakt oss", href: "/kontakt" },
              { label: "Sponsorater", href: "/om-oss" }
            ]
          }
        ]
      }}
    >
      {/* Hero Section */}
      <Hero
        title="Finneid Sveiseverksted AS"
        subtitle="Så det holder. Vi leverer sveising og konstruksjoner av høy kvalitet til avtalt tid og riktig pris."
        primaryCta="Kontakt oss"
        primaryCtaHref="/kontakt"
        secondaryCta="Se tjenester"
        secondaryCtaHref="/tjenester"
        primaryColor={PRIMARY_COLOR}
        backgroundImage=""
      />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#D71921]">40+</div>
              <div className="text-gray-600 mt-2">Års erfaring</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#D71921]">Nord-Norge</div>
              <div className="text-gray-600 mt-2">Ledende aktør</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#D71921]">1000+</div>
              <div className="text-gray-600 mt-2">Prosjekter levert</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#D71921]">Innhuse</div>
              <div className="text-gray-600 mt-2">Lakk/malehall</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services
        title="Våre tjenester"
        subtitle="Vi tilbyr et bredt spekter av sveise- og konstruksjonstjenester"
        services={services}
        primaryColor={PRIMARY_COLOR}
      />

      {/* About Section */}
      <About
        title="Om Finneid Sveis"
        content="Finneid Sveiseverksted ligger på Finneid i Fauske kommune og er et av nordnorges største og eldste firmaer på sveising, konstruksjoner og bygg. Vi er ledende på store konstruksjoner som broer, industribygg, haller samt bærende konstruksjoner."
        points={[
          "Ett av Nord-Norges eldste sveiseverksted",
          "Stor innendørs produksjonskapasitet",
          "Egen lakk- og malehall",
          "Fokus på kvalitet, tid og pris"
        ]}
        imageUrl=""
        primaryColor={PRIMARY_COLOR}
      />

      {/* Features Section */}
      <Features
        title="Hvorfor velge oss?"
        features={features}
        primaryColor={PRIMARY_COLOR}
      />

      {/* Process Section */}
      <Process
        title="Slik jobber vi"
        subtitle="Fra kontakt til ferdig levering"
        steps={processSteps}
        primaryColor={PRIMARY_COLOR}
      />

      {/* CTA Section */}
      <CTASection
        title="Trenger du sveising eller konstruksjoner?"
        description="Ta kontakt med oss for en uforpliktende samtale om ditt prosjekt."
        ctaText="Kontakt oss"
        ctaHref="/kontakt"
        primaryColor={PRIMARY_COLOR}
      />

      {/* Contact Section */}
      <Contact
        title="Kontakt oss"
        subtitle="Ta gjerne kontakt med oss for en uforpliktende samtale"
        primaryColor={PRIMARY_COLOR}
        contactInfo={{
          phone: "75 62 00 00",
          email: "post@finneidsveis.no",
          address: "Finneid, 8220 Fauske"
        }}
      />
    </Layout>
  );
}
