"use client";

import { useState, useEffect } from "react";
import AccessoryCard from "@/components/accessory-card";
import { Grid, List, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import { IAccessory, IBrand, ICategoryAccessory } from "@/types/product";
import { API_BASE_URL, getBrands } from "@/lib/api";

export default function AccessoriesPage() {
  const [accessories, setAccessories] = useState<IAccessory[]>([]);
  const [accessoryCategories, setAccessoryCategories] = useState<
    ICategoryAccessory[]
  >([]);
  const [filteredAccessories, setFilteredAccessories] = useState<IAccessory[]>(
    []
  );
  const [sortBy, setSortBy] = useState("best-selling");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const [brands, setBrands] = useState<IBrand[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [accRes, catRes] = await Promise.all([
          fetch(`${API_BASE_URL}/accessories`),
          fetch(`${API_BASE_URL}/categoriesaccessory`),
        ]);
        const accJson = await accRes.json();
        const catJson = await catRes.json();
        console.log(accJson, catJson);
        if (accJson.success) setAccessories(accJson.data);
        if (catJson.success) setAccessoryCategories(catJson.data);
      } catch (error) {
        console.error("Error fetching accessories or categories", error);
      }
    }
    getBrands().then((data) => setBrands(data || []));
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = [...accessories];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (a) =>
          a.name.toLowerCase().includes(query) ||
          a.sku.toLowerCase().includes(query) ||
          a.brand.toLowerCase().includes(query) ||
          a.categories.some((category) =>
            category.toLowerCase().includes(query)
          )
      );
    }

    // Apply category filter
    if (categoryFilter) {
      filtered = filtered.filter((a) => a.categories.includes(categoryFilter));
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "best-selling":
        default:
          return 0;
      }
    });

    setFilteredAccessories(filtered);
  }, [accessories, sortBy, categoryFilter, searchQuery]);

  return (
    <>
      <Head>
        <title>RC Accessories - RC MEGA</title>
        <meta
          name="description"
          content="Browse our collection of high-quality RC accessories for your remote control vehicles."
        />
        <meta property="og:title" content="RC Accessories - RC MEGA" />
        <meta
          property="og:description"
          content="Explore premium accessories for your RC vehicles. Find display stands, carrying cases, LED kits, and more."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.rcmega.com/accessories" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-[#1B1F3B] to-[#2A305E]">
        <Header />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="flex flex-col gap-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
              <h1 className="text-3xl font-bold text-white">RC Accessories</h1>
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
                        layout === "grid"
                          ? "bg-white text-[#1B1F3B]"
                          : "text-white hover:bg-white/20"
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
                        layout === "list"
                          ? "bg-white text-[#1B1F3B]"
                          : "text-white hover:bg-white/20"
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
                      Sort accessories
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
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
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
                      onChange={(e) =>
                        setCategoryFilter(e.target.value || null)
                      }
                      className="bg-white/10 text-white rounded-lg pl-3 pr-8 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-[#F26522]"
                    >
                      <option value="">All Categories</option>
                      {accessoryCategories.map((category) => (
                        <option key={category._id} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
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
                placeholder="Search accessories by name, SKU, brand, or category..."
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
            {filteredAccessories.map((accessory) => (
              <AccessoryCard
                key={accessory._id}
                accessory={accessory}
                brands={brands}
                layout={layout}
              />
            ))}
          </div>

          {filteredAccessories.length === 0 && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                No accessories found
              </h2>
              <p className="text-white/70">
                Try changing your search query or filters, or check back later
                for new items.
              </p>
            </div>
          )}
        </section>

        <Footer />
      </div>
    </>
  );
}
