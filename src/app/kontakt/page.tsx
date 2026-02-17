import { ContactPage, Layout } from "@/components";

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
      <ContactPage 
        companyName="Finneid Sveiseverksted AS"
        contact={{
          phone: "75 62 00 00",
          email: "post@finneidsveis.no",
          address: "Finneid, 8220 Fauske"
        }}
        openingHours="07:00 - 16:00 mandag til fredag"
        primaryColor={PRIMARY_COLOR}
      />
    </Layout>
  );
}
