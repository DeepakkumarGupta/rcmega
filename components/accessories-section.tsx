"use client"

import { useState } from "react"
import AccessoryCard from "@/components/accessory-card"
import { ChevronRight, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { IAccessory } from "@/types/product"

export default function AccessoriesSection({
  accessories,
  title = "Compatible Accessories",
}: {
  accessories: IAccessory[]
  title?: string
}) {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 4
  const totalPages = Math.ceil(accessories.length / itemsPerPage)

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev))
  }

  const currentAccessories = accessories.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  if (accessories.length === 0) {
    return null
  }

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">{title}</h2>

        {totalPages > 1 && (
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="p-2 rounded-full bg-white/10 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous page"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-white">
              {currentPage + 1} / {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-full bg-white/10 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next page"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentAccessories.map((accessory) => (
          <AccessoryCard key={accessory._id} accessory={accessory} />
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/accessories"
          className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
        >
          View All Accessories
        </Link>
      </div>
    </section>
  )
}

