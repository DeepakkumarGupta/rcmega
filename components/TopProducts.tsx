"use client"

import { useEffect, useState } from "react"
import ProductCard from "@/components/ProductCard"
import Link from "next/link"
import { IProduct } from "@/types/product"
import { API_BASE_URL, getBrands } from "@/lib/api"

export default function TopProductsSection() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [brands, setBrands] = useState([])
  const layout: "grid" | "list" = "grid"

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`${API_BASE_URL}/products`)
        const json = await res.json()
        if(json.success){
          // The API response data is wrapped inside the "data" key
          setProducts(json.data)
        }
      } catch (error) {
        console.error("Error fetching products", error)
      }
    }
    fetchProducts()
    getBrands().then((data) => {
      if (data) {
        setBrands(data)
      }
    }
    )
  }, [])

  const topProducts = products.slice(0, 8)

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Top RC Products</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {topProducts.map((product) => (
            <ProductCard key={product._id} product={product} layout={layout} brands={brands}  />
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

