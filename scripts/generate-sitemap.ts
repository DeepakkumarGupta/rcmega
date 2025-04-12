import { writeFileSync } from "fs"
import { products } from "@/data/products"

function generateSitemap() {
  const baseUrl = "https://www.rcmega.com"
  const today = new Date().toISOString().split("T")[0]

  // Define static pages
  const staticPages = [
    { url: "/", priority: "1.0", changefreq: "daily" },
    { url: "/privacy-policy", priority: "0.5", changefreq: "monthly" },
    { url: "/termsandconditions", priority: "0.5", changefreq: "monthly" },
    { url: "/refundandreturnpolicy", priority: "0.5", changefreq: "monthly" },
  ]

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
    )
    .join("")}
  ${products
    .map(
      (product) => `
  <url>
    <loc>${baseUrl}/products/${product.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
    )
    .join("")}
</urlset>`

  // Write sitemap to public directory
  writeFileSync("public/sitemap.xml", sitemap)
  console.log("Sitemap generated successfully!")
}

generateSitemap()

