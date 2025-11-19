import Script from "next/script";
import Audit from "./Audit";

// ---------------------------------------------
// ✅ SEO Metadata for InstaBiz Web - Audit Page
// ---------------------------------------------
export const metadata = {
  title: "Audit | InstaBiz Web - Get in Touch with Our AI Automation Experts",
  description:
    "Have questions about AI automation or need a custom chatbot solution? Contact InstaBiz Web today — our experts are here to help your business grow using AI-powered tools.",
  keywords: [
    "InstaBiz Web audit",
    "Contact InstaBiz Web",
    "AI chatbot support",
    "business automation inquiry",
    "InstaBiz Web customer service",
    "AI solutions India",
    "InstaBiz Web Technologies Pvt. Ltd.",
  ].join(", "),
  alternates: {
    canonical: "https://www.instabizweb.com/audit",
  },
  openGraph: {
    title: "Audit | InstaBiz Web - Connect with AI Experts",
    description:
      "Reach out to InstaBiz Web — India's leading AI business automation platform. Let's build smarter workflows for your organization.",
    url: "https://www.instabizweb.com/audit",
    siteName: "InstaBiz Web",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.instabizweb.com/opengraph-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Audit InstaBiz Web - AI Automation Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit | InstaBiz Web - Get in Touch with AI Automation Experts",
    description:
      "Connect with InstaBiz Web to explore AI automation, chatbot development, and CRM integration for your business.",
    images: ["https://www.instabizweb.com/opengraph-image.png"],
    creator: "@instabizweb",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

// ---------------------------------------------
// ✅ JSON-LD Structured Data for Audit Page
// ---------------------------------------------
const auditSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "Organization",
    name: "InstaBiz Web",
    alternateName: "InstaBiz Web Technologies Pvt. Ltd.",
    url: "https://www.instabizweb.com",
    logo: "https://www.instabizweb.com/opengraph-image.png",
    description:
      "InstaBiz Web offers AI-powered automation, chatbots, CRM tools, and digital workflow solutions for global businesses.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9999999999",
      contactType: "Customer Support",
      email: "support@instabizweb.com",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "SG Highway, Ahmedabad",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "380015",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/company/instabizweb",
      "https://www.instagram.com/instabizweb",
      "https://twitter.com/instabizweb",
    ],
  },
};

// ---------------------------------------------
// ✅ Audit Page Component
// ---------------------------------------------
export default function AuditPage() {
  return (
    <>
      {/* ✅ Inject JSON-LD Schema for Google Rich Results */}
      <Script
        id="audit-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(auditSchema),
        }}
      />

      {/* ✅ Render Audit Page UI */}
      <Audit />
    </>
  );
}

