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
    "title": "Sveising - Konstruksjoner",
    "description": "Vi er ledende på store konstruksjoner som broer, industribygg, haller samt bærende konstruksjoner. Med lang erfaring og moderne utstyr leverer vi produkter av høy kvalitet."
  },
  {
    "title": "Industribygg",
    "description": "Vi leverer komplette industribygg til hele Norge. Fra planlegging til ferdig produkt."
  },
  {
    "title": "Hallbygg",
    "description": "Våre lokaler på Finneid har kapasitet til å bygge de største konstruksjonene innendørs."
  },
  {
    "title": "Broer",
    "description": "Vi har erfaring med brokonstruksjoner av alle størrelser."
  },
  {
    "title": "Overflatebehandling",
    "description": "Vi har egen lakk- og malehall for komplett overflatebehandling."
  },
  {
    "title": "Bærende konstruksjoner",
    "description": "Vi produserer og leverer bærende konstruksjoner til alle typer bygg."
  }
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
        description: "Så det holder",
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
              { label: "Tjenester", href: "/tjenester" },
              { label: "Om oss", href: "/om-oss" },
              { label: "Kontakt", href: "/kontakt" }
            ]
          }
        ]
      }}
    >
      <Hero
        title="Finneid Sveiseverksted AS"
        subtitle="Så det holder. Vi leverer sveising og konstruksjoner av høy kvalitet til avtalt tid og riktig pris."
        primaryCta="Kontakt oss"
        primaryCtaHref="/kontakt"
        secondaryCta="Se tjenester"
        secondaryCtaHref="/om-oss"
        primaryColor={PRIMARY_COLOR}
        backgroundImage=""
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold" style={{ color: PRIMARY_COLOR }}>40+</div>
              <div className="text-gray-600 mt-2">Års erfaring</div>
            </div>
            <div>
              <div className="text-4xl font-bold" style={{ color: PRIMARY_COLOR }}>Nord-Norge</div>
              <div className="text-gray-600 mt-2">Ledende aktør</div>
            </div>
            <div>
              <div className="text-4xl font-bold" style={{ color: PRIMARY_COLOR }}>1000+</div>
              <div className="text-gray-600 mt-2">Prosjekter levert</div>
            </div>
            <div>
              <div className="text-4xl font-bold" style={{ color: PRIMARY_COLOR }}>Innhuse</div>
              <div className="text-gray-600 mt-2">Lakk/malehall</div>
            </div>
          </div>
        </div>
      </section>

      <Services
        title="Våre tjenester"
        subtitle="Totalleverandør av sveising og konstruksjoner"
        services={servicesList}
        primaryColor={PRIMARY_COLOR}
      />

      <About
        title="Om Finneid Sveis"
        content="Finneid Sveiseverksted AS ligger på Finneid i Fauske kommune og er et av nordnorges største og eldste firmaer på sveising, konstruksjoner og bygg.

Vi er ledende på store konstruksjoner som broer, industribygg, haller samt bærende konstruksjoner. I våre lokaler på Finneid har vi kapasitet til å bygge de største konstruksjonene innendørs samt at vi og kan overflatebehandle i egen lakk/malehall.

Vår forretningsfilosofi er til enhver tid å levere produkter:
• AV HØY KVALITET
• TIL FASTSATT TID
• TIL RIKTIG PRIS"
        points={["Kvalitet","Pålitelighet","Kompetanse","Lokal"]}
        imageUrl=""
        primaryColor={PRIMARY_COLOR}
      />

      <Features
        title="Hvorfor velge oss?"
        features={[
  {
    "title": "Erfaring",
    "description": "Ett av Nord-Norges eldste sveiseverksted"
  },
  {
    "title": "Kapasitet",
    "description": "Stor innendørs produksjonskapasitet"
  },
  {
    "title": "Kvalitet",
    "description": "Produkter av høy kvalitet"
  },
  {
    "title": "Levering",
    "description": "Levering til fastsatt tid"
  },
  {
    "title": "Pris",
    "description": "Riktig pris - hver gang"
  },
  {
    "title": "Lokal",
    "description": "Lokal tilstedeværelse i Nord-Norge"
  }
]}
        primaryColor={PRIMARY_COLOR}
      />

      <CTASection
        title="Trenger du våre tjenester?"
        description="Ta kontakt med oss for en uforpliktende samtale om ditt prosjekt."
        ctaText="Kontakt oss"
        ctaHref="/kontakt"
        primaryColor={PRIMARY_COLOR}
      />

      <Contact
        title="Kontakt oss"
        subtitle="Ta gjerne kontakt med oss"
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
