import React from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import products from "../../data/products"; // ← Centralized product data file
import ProductCard from "../../components/ProductCard"; // ← Create this if not existing (for single product view)

/**

* AllProducts Page
* ---
* ✅ Displays all available products.
* ✅ Includes hyper-optimized SEO meta tags and JSON-LD schema.
* ✅ Future-ready: category filtering, pagination, and dynamic meta updates can be added.
  */

const AllProducts = () => {
const siteUrl = "[https://njcollection.com.pk](https://njcollection.com.pk)";

// Schema.org JSON-LD structured data (helps Google show product rich results)
const productListSchema = {
"@context": "[https://schema.org](https://schema.org)",
"@type": "ItemList",
"name": "NJ Collection Products",
"description":
"Explore the latest Pakistani luxury pret, bridal, and formal wear by NJ Collection.",
"url": `${siteUrl}/products/AllProducts`,
"numberOfItems": products.length,
"itemListElement": products.map((product, index) => ({
"@type": "ListItem",
"position": index + 1,
"url": `${siteUrl}/products/${product.id}`,
"name": product.name,
})),
};

return (
<>
{/* Page Metadata for SEO */} <Head> <title>
Luxury Pret, Bridal & Formal Wear | All Products | NJ Collection </title> <meta
       name="description"
       content="Browse all collections by NJ Collection — Pakistani luxury pret, bridal, and formal wear designed with elegance and quality."
     /> <meta
       name="keywords"
       content="pakistani fashion, luxury pret, bridal wear, formal dresses, nj collection, designer clothing"
     /> <meta name="author" content="NJ Collection" />

    {/* Canonical URL */}
    <link rel="canonical" href={`${siteUrl}/products/AllProducts`} />

    {/* Open Graph (Facebook / Instagram) */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="NJ Collection - All Products" />
    <meta
      property="og:description"
      content="Discover luxury pret, bridal, and formal collections from NJ Collection."
    />
    <meta property="og:url" content={`${siteUrl}/products/AllProducts`} />
    <meta
      property="og:image"
      content={`${siteUrl}/social-preview.jpg`}
    />

    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="NJ Collection - All Products" />
    <meta
      name="twitter:description"
      content="Explore luxury pret and bridal wear by NJ Collection."
    />
    <meta
      name="twitter:image"
      content={`${siteUrl}/social-preview.jpg`}
    />

    {/* JSON-LD Structured Data */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
    />
  </Head>

  {/* Page Layout */}
  <div className="bg-[#fafafa] min-h-screen flex flex-col">
    {/* Sticky Header */}
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <Header />
    </div>

    {/* Main Product Grid */}
    <main className="flex-grow max-w-[1200px] mx-auto px-4 md:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-gray-900">
        All Products
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>

    <Footer />
  </div>
</>
);
};

export default AllProducts;
