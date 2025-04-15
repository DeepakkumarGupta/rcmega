"use client"

import { useState, useEffect } from "react"
import SparePartCard from "@/components/spare-part-card"
import { Grid, List, Search } from "lucide-react"
import DuHeader from "@/components/DuHeader"
import Footer from "@/components/Footer"
import Head from "next/head"
import { ISparePart } from "@/types/product"

export default function SparePartsPage() {
  const [spareParts, setSpareParts] = useState<ISparePart[]>([])
  const [sparePartCategories, setSparePartCategories] = useState<{ _id: string; name: string }[]>([])
  const [filteredSpareParts, setFilteredSpareParts] = useState<ISparePart[]>([])
  const [sortBy, setSortBy] = useState("best-selling")
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [layout, setLayout] = useState<"grid" | "list">("grid")

  useEffect(() => {
    async function fetchData() {
      try {
        const [spRes, catRes] = await Promise.all([
          fetch("http://localhost:5001/api/spare-parts"),
          fetch("http://localhost:5001/api/categoriessparepart"),
        ])
        const spJson = await spRes.json()
        const catJson = await catRes.json()
        if (spJson.success) setSpareParts(spJson.data)
        if (catJson.success) setSparePartCategories(catJson.data)
      } catch (error) {
        console.error("Error fetching spare parts or categories", error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    let filtered = [...spareParts]
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.sku.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.categories.some((category) => category.toLowerCase().includes(query)),
      )
    }
    if (categoryFilter) {
      filtered = filtered.filter((p) => p.categories.includes(categoryFilter))
    }
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
    setFilteredSpareParts(filtered)
  }, [spareParts, sortBy, categoryFilter, searchQuery])

  return (
    <>
      <Head>
        <title>RC Spare Parts - RC MEGA</title>
        <meta
          name="description"
          content="Browse our collection of high-quality RC spare parts for your remote control vehicles."
        />
        <meta property="og:title" content="RC Spare Parts - RC MEGA" />
        <meta
          property="og:description"
          content="Explore genuine spare parts for your RC vehicles. Find motors, wheels, body shells, and more."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.rcmega.com/spare-parts" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-[#1B1F3B] to-[#2A305E]">
        <DuHeader />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="flex flex-col gap-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
              <h1 className="text-3xl font-bold text-white">RC Spare Parts</h1>
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
                      Sort spare parts
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
                <div className="flex flex-wrap gap-3">
                  <div className="relative">
                    <label htmlFor="category-filter" className="sr-only">
                      Filter by category
                    </label>
                    <select
                      id="category-filter"
                      value={categoryFilter || ""}
                      onChange={(e) => setCategoryFilter(e.target.value || null)}
                      className="bg-white/10 text-white rounded-lg pl-3 pr-8 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#F26522]"
                    >
                      <option value="">All Categories</option>
                      {sparePartCategories.map((category) => (
                        <option key={category._id} value={category.name}>
                          {category.name}
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
                placeholder="Search spare parts by name, SKU, brand, or category..."
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
            {filteredSpareParts.map((sparePart) => (
              <SparePartCard key={sparePart._id} sparePart={sparePart} layout={layout} />
            ))}
          </div>

          {filteredSpareParts.length === 0 && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-white mb-4">No spare parts found</h2>
              <p className="text-white/70">
                Try changing your search query or filters, or check back later for new items.
              </p>
            </div>
          )}
        </section>

        <Footer />
      </div>
    </>
  )
}

