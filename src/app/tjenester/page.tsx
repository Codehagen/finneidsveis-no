import { ServicesPage, Layout } from "@/components";

const PRIMARY_COLOR = "#D71921";
const ACCENT_COLOR = "#E30613";

const NAV_LINKS = [
  { label: "Tjenester", href: "/tjenester" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Page() {
  return (
    <Layout
      headerProps={{
        companyName: "Finneid Sveis",
        navLinks: NAV_LINKS,
        ctaText: "Kontakt oss",
        ctaHref: "/kontakt",
        primaryColor: PRIMARY_COLOR,
      }}
      footerProps={{
        companyName: "Finneid Sveiseverksted AS",
        description: "Ett av Nord-Norges eldste og ledende sveiseverksted.",
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
              { label: "Kontakt oss", href: "/kontakt" }
            ]
          }
        ]
      }}
    >
      <ServicesPage 
        title="Våre tjenester"
        subtitle="Totalleverandør av sveising og konstruksjoner"
        intro="Vi tilbyr et bredt spekter av tjenester innen sveising og metallkonstruksjoner. Våre erfarne fagfolk sørger for at ditt prosjekt leveres med høy kvalitet til avtalt tid."
        services={[
          {
            title: "Sveising - Konstruksjoner",
            description: "Vi er ledende på store konstruksjoner som broer, industribygg, haller samt bærende konstruksjoner. Med lang erfaring og moderne utstyr leverer vi produkter av høy kvalitet.",
            features: [
              "MAG-sveising",
              "TIG-sveising",
              "Plasmaskjæring",
              "Montering og installasjon"
            ]
          },
          {
            title: "Industribygg",
            description: "Vi leverer komplette industribygg til hele Norge. Fra planlegging til ferdig produkt - vi har kompetansen som trengs.",
            features: [
              "Stålkonstruksjoner",
              "Tak og fasader",
              "Portaler og rammer",
              "Tilpassede løsninger"
            ]
          },
          {
            title: "Hallbygg",
            description: "Våre lokaler på Finneid har kapasitet til å bygge de største konstruksjonene innendørs. Vi leverer haller til industri, lager og produksjon.",
            features: [
              "Store spennvidder",
              "Kort byggetid",
              "Fleksibel innredning",
              "Isolerte løsninger"
            ]
          },
          {
            title: "Broer",
            description: "Vi har erfaring med brokonstruksjoner av alle størrelser. Fra mindre bruer til store infrastrukturprosjekter.",
            features: [
              "Veibruer",
              "Gangbruer",
              "Jernbanebruer",
              "Modulære løsninger"
            ]
          },
          {
            title: "Overflatebehandling",
            description: "Vi har egen lakk- og malehall for komplett overflatebehandling av metallkonstruksjoner. Alt fra grunning til ferdig behandling.",
            features: [
              "Sandblåsing",
              "Grunning",
              "Lakkering",
              "Pulverlakkering"
            ]
          },
          {
            title: "Bærende konstruksjoner",
            description: "Vi produserer og leverer bærende konstruksjoner til alle typer bygg og anlegg. Moderne produksjonsutstyr sikrer presisjon og kvalitet.",
            features: [
              "Søyler og bjelker",
              "Dragere",
              "Fagverk",
              "Kontroll og dokumentasjon"
            ]
          }
        ]}
        primaryColor={PRIMARY_COLOR}
      />
    </Layout>
  );
}
