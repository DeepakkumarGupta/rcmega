"use client"

import { useState } from "react"
import { products } from "@/data/products"
import ProductCard from "@/components/ProductCard"
import Link from "next/link"

export default function TopProductsSection() {
  const topProducts = products.slice(0, 8)
  const [layout] = useState<"grid" | "list">("grid")

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Top RC Products</h2>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {topProducts.map((product) => (
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
  )
}

