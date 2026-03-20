import { site } from "@/config/site";

/**
 * Organization + WebSite JSON-LD for rich results / knowledge panels.
 */
export default function SiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.legalName,
        alternateName: [site.name, site.shortName],
        url: site.url,
        logo: `${site.url}${site.logoSrc}`,
        email: site.email,
        telephone: site.phoneE164,
        foundingDate: String(site.foundedYear),
        sameAs: [site.facebookUrl],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
