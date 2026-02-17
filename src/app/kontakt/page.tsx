import { ContactPage, Layout } from "@/components";

const PRIMARY_COLOR = "#D71921";
const ACCENT_COLOR = "#E30613";

const NAV_LINKS = [
  { label: "Tjenester", href: "/tjenester" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
];

const CONTACTS = [
  { name: "Heidi Anita Johansen", role: "Kontormedarbeider" },
  { name: "Øyvind Wangberg", role: "Prosjektleder" },
  { name: "Tor-Arne Berg", role: "Produksjonsleder" },
  { name: "Stig Olsen", role: "Prosjektleder" },
  { name: "Erik Hugås", role: "Konstruktør/Tegner" },
  { name: "Tor-Einar Vatnan", role: "Ingeniør/Prosjektleder" }
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
      <ContactPage 
        title="Kontakt oss"
        subtitle="Ta gjerne kontakt med oss for en uforpliktende samtale om ditt prosjekt"
        contactInfo={{
          phone: "75 62 00 00",
          email: "post@finneidsveis.no",
          address: "Finneid, 8220 Fauske"
        }}
        contacts={CONTACTS}
        primaryColor={PRIMARY_COLOR}
      />
    </Layout>
  );
}
