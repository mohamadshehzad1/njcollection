import Head from "next/head";
import Home from "./Home";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>NJ Collection | Premium Pakistani Fashion – Luxury Pret & Bridal Wear</title>
        <meta
          name="description"
          content="Discover luxury pret, bridal wear, and unstitched Pakistani fashion at NJ Collection. Elegant, handcrafted designs for the modern woman."
        />
        <meta
          name="keywords"
          content="pakistani fashion, luxury pret, bridal wear, formal dresses, unstitched suits, pakistani clothing, designer wear, nj collection"
        />
        <meta name="author" content="NJ Collection" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://njcollection.com.pk/" />
        <meta property="og:title" content="NJ Collection | Premium Pakistani Fashion – Luxury Pret & Bridal Wear" />
        <meta
          property="og:description"
          content="Explore exquisite Pakistani fashion at NJ Collection – luxury pret, bridal, and formal wear."
        />
        <meta property="og:image" content="https://njcollection.com.pk/social-preview.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NJ Collection | Premium Pakistani Fashion – Luxury Pret & Bridal Wear" />
        <meta
          name="twitter:description"
          content="Luxury Pakistani fashion, pret, and bridal wear by NJ Collection."
        />
        <meta name="twitter:image" content="https://njcollection.com.pk/social-preview.jpg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://njcollection.com.pk/" />

        {/* Structured Data (Brand) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              name: "NJ Collection",
              url: "https://njcollection.com.pk",
              logo: "https://njcollection.com.pk/logo.png",
              description:
                "Premium Pakistani fashion brand offering luxury pret, bridal wear, and formal dresses.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "Pakistan",
              },
              priceRange: "$$$",
            }),
          }}
        />
      </Head>

      <Home />
    </>
  );
}
