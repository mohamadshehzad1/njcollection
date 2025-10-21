import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
return ( <Html lang="en"> <Head>
{/* ===== BASIC META ===== */} <meta charSet="utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1" /> <meta name="theme-color" content="#f7f1f0" /> <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" /> <meta name="author" content="NJ Collection" /> <meta name="copyright" content="NJ Collection © 2025" /> <meta name="title" content="NJ Collection - Premium Pakistani Fashion & Luxury Pret" /> <meta
       name="description"
       content="Discover NJ Collection — premium Pakistani fashion featuring luxury pret, bridal wear, and unstitched collections. Exquisite craftsmanship for the modern woman."
     /> <meta
       name="keywords"
       content="Pakistani fashion, luxury pret, bridal wear, formal dresses, unstitched suits, designer wear, NJ Collection, Pakistani clothing, women's fashion Pakistan"
     />

    {/* ===== CANONICAL & GEO ===== */}
    <link rel="canonical" href="https://njcollection.com.pk/" />
    <meta name="geo.region" content="PK" />
    <meta name="geo.placename" content="Karachi" />
    <meta name="geo.position" content="24.8607;67.0011" />
    <meta name="ICBM" content="24.8607, 67.0011" />

    {/* ===== FAVICON & MANIFEST ===== */}
    <link rel="icon" href="/nj-favicon.png" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />

    {/* ===== PERFORMANCE ===== */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
    <link rel="dns-prefetch" href="https://www.google-analytics.com" />

    {/* ===== OPEN GRAPH ===== */}
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_PK" />
    <meta property="og:url" content="https://njcollection.com.pk/" />
    <meta property="og:site_name" content="NJ Collection" />
    <meta property="og:title" content="NJ Collection - Premium Pakistani Fashion & Luxury Pret" />
    <meta
      property="og:description"
      content="Explore NJ Collection: luxury pret, bridal wear, and formal fashion from Pakistan. Handcrafted elegance meets timeless style."
    />
    <meta property="og:image" content="https://njcollection.com.pk/social-preview.jpg" />
    <meta property="og:image:alt" content="NJ Collection - Pakistani Luxury Pret" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    {/* ===== TWITTER CARD ===== */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@njcollection" />
    <meta name="twitter:title" content="NJ Collection - Premium Pakistani Fashion & Luxury Pret" />
    <meta
      name="twitter:description"
      content="Luxury pret, bridal & formal fashion from NJ Collection. Timeless Pakistani designs with modern elegance."
    />
    <meta name="twitter:image" content="https://njcollection.com.pk/social-preview.jpg" />

    {/* ===== SEARCH CONSOLE & ANALYTICS ===== */}
    <meta name="google-site-verification" content="YOUR_GOOGLE_SITE_VERIFICATION_CODE" />
    {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
    <script dangerouslySetInnerHTML={{
      __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
      `,
    }} /> */}

    {/* ===== STRUCTURED DATA (SCHEMA.ORG JSON-LD) ===== */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ClothingStore",
          "name": "NJ Collection",
          "image": "https://njcollection.com.pk/logo.png",
          "description": "Premium Pakistani fashion brand offering luxury pret, bridal wear, and formal dresses",
          "url": "https://njcollection.com.pk",
          "telephone": "+92-XXX-XXXXXXX",
          "email": "info@njcollection.com.pk",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "PK",
          },
          "priceRange": "$$$",
          "openingHours": "Mo-Su 10:00-22:00",
          "sameAs": [
            "https://www.facebook.com/njcollectionpk",
            "https://www.instagram.com/njcollectionpk",
            "https://www.pinterest.com/njcollectionpk"
          ],
        }),
      }}
    />

    {/* ===== TITLE ===== */}
    <title>NJ Collection | Premium Pakistani Fashion - Luxury Pret, Bridal & Formal Wear</title>
  </Head>
  <body>
    <Main />
    <NextScript />
  </body>
</Html>
);
}
