"use client"

import { useState, useEffect } from "react"
import ProductCard from "@/components/ProductCard"
import { Grid, List, Search } from "lucide-react"
import DuHeader from "@/components/DuHeader"
import Footer from "@/components/Footer"
import Head from "next/head"
import Link from "next/link"

interface Dimensions {
  length: number
  width: number
  height: number
  unit: "mm" | "cm" | "in"
}

export interface Product {
  _id: string
  id: string
  name: string
  sku: string
  description: string
  categories: string[]
  brand: string
  color: string
  modelCode: string
  scale: string
  stock: number
  OutOfStock: boolean
  price: number
  slug: string
  media: {
    type: "image" | "video" | "instagram"
    url: string
    mediaId?: string
  }[]
  technicalSpecs: string[]
  weight: number
  dimensions: Dimensions
  discountPercentage?: number
  finalPrice?: number
}

export default function ProductsPage() {
  // New state to hold products fetched from the API
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [sortBy, setSortBy] = useState("best-selling")
  const [colorFilter, setColorFilter] = useState<string | null>(null)
  const [scaleFilter, setScaleFilter] = useState<string | null>(null)
  const [brandFilter, setBrandFilter] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [layout, setLayout] = useState<"grid" | "list">("grid")

  // Fetch products dynamically from the API on mount
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("http://localhost:5001/api/products")
        const json = await res.json()
        if (json.success) {
          // Map each product to add an "id" field (using the _id) for consistency
          const productsWithId = json.data.map((p: Product) => ({ ...p, id: p._id }))
          setAllProducts(productsWithId)
          setFilteredProducts(productsWithId)
        }
      } catch (error) {
        console.error("Error fetching products", error)
      }
    }
    fetchProducts()
  }, [])

  // Compute unique filter options from the fetched products
  const uniqueColors = Array.from(new Set(allProducts.map((p) => p.color)))
  const uniqueScales = Array.from(new Set(allProducts.map((p) => p.scale))).sort((a, b) => {
    const aNum = Number.parseFloat(a.split(":")[1] || "0")
    const bNum = Number.parseFloat(b.split(":")[1] || "0")
    return bNum - aNum
  })
  const uniqueBrands = Array.from(new Set(allProducts.map((p) => p.brand)))

  // Apply filtering and sorting whenever filters change or new products are fetched
  useEffect(() => {
    let filtered = [...allProducts]

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.modelCode.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.scale.toLowerCase().includes(query) ||
          p.color.toLowerCase().includes(query)
      )
    }

    // Apply color filter
    if (colorFilter) {
      filtered = filtered.filter((p) => p.color === colorFilter)
    }

    // Apply scale filter
    if (scaleFilter) {
      filtered = filtered.filter((p) => p.scale === scaleFilter)
    }

    // Apply brand filter
    if (brandFilter) {
      filtered = filtered.filter((p) => p.brand === brandFilter)
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "best-selling":
        default:
          return 0
      }
    })

    setFilteredProducts(filtered)
  }, [sortBy, colorFilter, scaleFilter, brandFilter, searchQuery, allProducts])

  return (
    <>
      <Head>
        <title>RC Products - RC MEGA Market</title>
        <meta name="description" content="Browse our collection of high-quality RC vehicles and models." />
        <meta property="og:title" content="RC Products - RC MEGA" />
        <meta
          property="og:description"
          content="Explore premium remote control vehicles. Find cars, trucks, crawlers, and more."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.rcmega.com/products" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-[#1B1F3B] to-[#2A305E]">
        <DuHeader />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="flex flex-col gap-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
              <h1 className="text-3xl font-bold text-white">RC Products</h1>
              <div className="flex flex-wrap items-center gap-4 z-10">
                <div className="flex items-center gap-4">
                  <div
                    role="radiogroup"
                    aria-label="View layout options"
                    className="flex items-center gap-2 bg-white/10 p-1 rounded-full"
                  >
                    <button
                      onClick={() => setLayout("grid")}
                      className={`p-2 rounded-full transition-colors ${
                        layout === "grid" ? "bg-white text-[#1B1F3B]" : "text-white hover:bg-white/20"
                      }`}
                      role="radio"
                      aria-checked={layout === "grid"}
                      aria-label="Grid view"
                    >
                      <Grid size={20} />
                      <span className="sr-only">Grid view</span>
                    </button>
                    <button
                      onClick={() => setLayout("list")}
                      className={`p-2 rounded-full transition-colors ${
                        layout === "list" ? "bg-white text-[#1B1F3B]" : "text-white hover:bg-white/20"
                      }`}
                      role="radio"
                      aria-checked={layout === "list"}
                      aria-label="List view"
                    >
                      <List size={20} />
                      <span className="sr-only">List view</span>
                    </button>
                  </div>

                  <div className="relative">
                    <label htmlFor="sort-by" className="sr-only">
                      Sort products
                    </label>
                    <select
                      id="sort-by"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-white/10 text-white rounded-lg pl-3 pr-8 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#F26522]"
                    >
                      <option value="best-selling">Best Selling</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                    </select>
                    <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Filters Row */}
            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <label htmlFor="brand-filter" className="sr-only">
                  Filter by brand
                </label>
                <select
                  id="brand-filter"
                  value={brandFilter || ""}
                  onChange={(e) => setBrandFilter(e.target.value || null)}
                  className="bg-white/10 text-white rounded-lg pl-3 pr-8 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#F26522]"
                >
                  <option value="">All Brands</option>
                  {uniqueBrands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <label htmlFor="scale-filter" className="sr-only">
                  Filter by scale
                </label>
                <select
                  id="scale-filter"
                  value={scaleFilter || ""}
                  onChange={(e) => setScaleFilter(e.target.value || null)}
                  className="bg-white/10 text-white rounded-lg pl-3 pr-8 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#F26522]"
                >
                  <option value="">All Scales</option>
                  {uniqueScales.map((scale) => (
                    <option key={scale} value={scale}>
                      {scale}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <label htmlFor="color-filter" className="sr-only">
                  Filter by color
                </label>
                <select
                  id="color-filter"
                  value={colorFilter || ""}
                  onChange={(e) => setColorFilter(e.target.value || null)}
                  className="bg-white/10 text-white rounded-lg pl-3 pr-8 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#F26522]"
                >
                  <option value="">All Colors</option>
                  {uniqueColors.map((color) => (
                    <option key={color} value={color}>
                      {color}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative w-full max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by name, model, brand, scale, or color..."
                className="block w-full pl-10 pr-3 py-2 border border-white/20 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F26522] focus:border-transparent"
              />
            </div>
          </header>

          <div
            className={
              layout === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "grid grid-cols-1 gap-6"
            }
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} layout={layout} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-white mb-4">No products found</h2>
              <p className="text-white/70">
                Try changing your search query or filters, or check back later for new items.
              </p>
            </div>
          )}
        </section>

        {/* Top Products Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Top RC Products</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} layout={layout} />
              ))}
            </div>
            <div className="text-center py-8">
              <Link 
                href="/products" 
                className="inline-block px-8 py-4 bg-[#FF6600] text-white rounded-full font-semibold hover:bg-[#E65C00] transition-colors shadow-lg"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

