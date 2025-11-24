import Head from "next/head";

export default function SEO({
  title,
  description,
  url,
  image = "https://njcollection.com.pk/social-preview.jpg",
}) {
  const fullTitle = title
    ? `${title} | NJ Collection`
    : "NJ Collection — Premium Pakistani Fashion & Luxury Pret";

  return (
    <Head>
      {/* Basic */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="NJ Collection" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
