import { Helmet } from "react-helmet";

interface OrganizationSchemaProps {
  name: string;
  description: string;
  url: string;
  logo?: string;
  socialLinks?: string[];
  contactEmail?: string;
}

export const OrganizationSchema = ({
  name,
  description,
  url,
  logo,
  socialLinks = [],
  contactEmail,
}: OrganizationSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    description,
    url,
    ...(logo && { logo }),
    ...(socialLinks.length > 0 && { sameAs: socialLinks }),
    ...(contactEmail && {
      contactPoint: {
        "@type": "ContactPoint",
        email: contactEmail,
        contactType: "customer service",
      },
    }),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  price: string;
  currency: string;
  availability: boolean;
  url: string;
  brand?: string;
}

export const ProductSchema = ({
  name,
  description,
  image,
  price,
  currency,
  availability,
  url,
  brand = "Tumāninah Veritas Store",
}: ProductSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: currency,
      availability: availability
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url,
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbSchema = ({ items }: BreadcrumbSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

interface WebSiteSchemaProps {
  name: string;
  url: string;
  description: string;
}

export const WebSiteSchema = ({
  name,
  url,
  description,
}: WebSiteSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/shop?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
