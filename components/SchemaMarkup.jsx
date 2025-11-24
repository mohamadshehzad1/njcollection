import Head from "next/head";

export default function SchemaMarkup({ type = "Organization", data = {} }) {
  const baseSchema = {
    "@context": "https://schema.org",
    ...data,
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(baseSchema, null, 2),
        }}
      />
    </Head>
  );
}
