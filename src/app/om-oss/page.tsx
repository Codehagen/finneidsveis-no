import { AboutPage, Layout } from "@/components";

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
      <AboutPage 
        title="Om Finneid Sveis"
        subtitle="Ett av Nord-Norges eldste sveiseverksted"
        content={`Finneid Sveiseverksted AS ligger på Finneid i Fauske kommune og er et av nordnorges største og eldste firmaer på sveising, konstruksjoner og bygg.

Vi er ledende på store konstruksjoner som broer, industribygg, haller samt bærende konstruksjoner. I våre lokaler på Finneid har vi kapasitet til å bygge de største konstruksjonene innendørs samt at vi og kan overflatebehandle i egen lakk/malehall.

Finneid Sveiseverksted AS vil alltid bestrebe seg på å være et naturlig førstevalg for industrien i regionen, basert på produktene, tekniske/mekanisk kapasitet, menneskelige ressurser og kompetanse.

Vår forretningsfilosofi er til enhver tid å levere produkter:
• AV HØY KVALITET
• TIL FASTSATT TID
• TIL RIKTIG PRIS

Dette er forankret i hele organisasjonen og vi har med dette oppnådd et godt og nært forhold til våre kunder.

Finneid sveiseverksted er opptatt av samfunnet og menneskene som lever der - vi er derfor med og støtter idrett og kultur slik at vi kan beholde et mangfold.`}
        values={[
          {
            title: "Kvalitet",
            description: "Vi leverer alltid produkter av høy kvalitet"
          },
          {
            title: "Pålitelighet",
            description: "Vi leverer til avtalt tid - hver gang"
          },
          {
            title: "Kompetanse",
            description: "Bred erfaring og faglig kompetanse"
          },
          {
            title: "Lokal tilstedeværelse",
            description: "Vi er en lokal aktør i Nord-Norge"
          }
        ]}
        primaryColor={PRIMARY_COLOR}
      />
    </Layout>
  );
}
