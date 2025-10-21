"use client";
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductGallery from "../../components/ProductGallery";
import ProductDetails from "../../components/ProductDetails";
import RelatedProducts from "../../components/RelatedProducts";
import products from "../../data/products";

/**

* ProductPage
* ---
* ✅ SEO-optimized dynamic product page
* ✅ Includes Product schema for Google
* ✅ Adds Open Graph & Twitter meta for sharing
* ✅ Clean structure ready for future SEO automation
  */

const ProductPage = () => {
const router = useRouter();
const { id } = router.query;
const siteUrl = "[https://njcollection.com.pk](https://njcollection.com.pk)";

// Convert ID to number (if applicable) and find the product
const productId = id ? parseInt(id) : null;
const product = products.find((p) => p.id === productId);

// Show loading while router query is still resolving
if (!router.isReady) {
return ( <div className="text-center py-20 text-gray-500"> <p>Loading product details...</p> </div>
);
}

// If product not found
if (!product) {
return ( <div className="text-center py-20 text-gray-500"> <h2>Product not found!</h2>
<button
onClick={() => router.push("/products/AllProducts")}
className="mt-4 px-6 py-2 bg-black text-white hover:bg-gray-800 transition-colors"
>
Back to Products </button> </div>
);
}

// SEO Meta Tags (Dynamic)
const title = `${product.name} | NJ Collection`;
const description =
product.description ||
"Discover luxury pret, bridal, and formal wear from NJ Collection.";
const canonicalUrl = `${siteUrl}/products/${product.id}`;

// JSON-LD Structured Data for Product
const productSchema = {
"@context": "[https://schema.org/](https://schema.org/)",
"@type": "Product",
name: product.name,
image: product.images?.map((img) => `${siteUrl}${img}`),
description: description,
sku: product.sku || `NJ-${product.id}`,
brand: {
"@type": "Brand",
name: "NJ Collection",
},
offers: {
"@type": "Offer",
url: canonicalUrl,
priceCurrency: "PKR",
price: product.price || "0",
availability: "[https://schema.org/InStock](https://schema.org/InStock)",
itemCondition: "[https://schema.org/NewCondition](https://schema.org/NewCondition)",
},
};

return (
<>
{/* SEO Meta Tags */} <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content="pakistani fashion, luxury pret, bridal wear, formal dresses, designer clothing, nj collection" /> <meta name="author" content="NJ Collection" /> <link rel="canonical" href={canonicalUrl} />

```
    {/* Open Graph (Facebook / Instagram) */}
    <meta property="og:type" content="product" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={canonicalUrl} />
    <meta property="og:image" content={`${siteUrl}${product.images?.[0]}`} />

    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={`${siteUrl}${product.images?.[0]}`} />

    {/* JSON-LD Product Schema */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />
  </Head>

  {/* Sticky Header */}
  <div className="sticky top-0 z-50 bg-white shadow-sm">
    <Header />
  </div>

  {/* Main Layout */}
  <main className="max-w-[1200px] mx-auto px-4 md:px-8">
    {/* MOBILE VIEW */}
    <div className="block md:hidden -mt-1">
      <ProductGallery images={product.images} />
      <div className="mt-6">
        <ProductDetails product={product} />
      </div>
    </div>

    {/* DESKTOP VIEW */}
    <div className="hidden md:grid md:grid-cols-2 md:gap-12 md:py-16">
      <ProductGallery images={product.images} />
      <ProductDetails product={product} />
    </div>

    {/* Related Products Section */}
    <div className="mt-20">
      <RelatedProducts currentProductId={product.id} />
    </div>
  </main>

  <Footer />
</>

);
};

export default ProductPage;
