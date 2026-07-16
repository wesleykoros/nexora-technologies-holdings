const siteUrl = "https://nexoratechholdings.com";

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nexora Technologies Holdings LLC",
  url: siteUrl,
  logo: `${siteUrl}/brand/nexora-mark-gradient.svg`,
  description:
    "A Delaware technology holding company developing, owning and commercialising intelligent enterprise platforms.",
  foundingLocation: {
    "@type": "Place",
    name: "Delaware, United States",
  },
  sameAs: [],
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nexora Technologies Holdings LLC",
  url: siteUrl,
  description: "Technology infrastructure for industries that matter.",
  publisher: {
    "@type": "Organization",
    name: "Nexora Technologies Holdings LLC",
    url: siteUrl,
  },
};

export function softwareApplicationStructuredData({
  name,
  description,
  path,
  applicationCategory = "BusinessApplication",
}: {
  name: string;
  description: string;
  path: string;
  applicationCategory?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: `${siteUrl}${path}`,
    applicationCategory,
    operatingSystem: "Web",
    publisher: {
      "@type": "Organization",
      name: "Nexora Technologies Holdings LLC",
      url: siteUrl,
    },
  };
}
