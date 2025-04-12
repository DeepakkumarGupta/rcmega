"use client"

import { useState } from "react"
import type { SparePart } from "@/data/products"
import SparePartCard from "@/components/spare-part-card"
import { ChevronRight, ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function SparePartsSection({
  spareParts,
  title = "Compatible Spare Parts",
}: {
  spareParts: SparePart[]
  title?: string
}) {
  const [currentPage, setCurrentPage] = useState(0)
  const itemsPerPage = 4
  const totalPages = Math.ceil(spareParts.length / itemsPerPage)

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev))
  }

  const currentSpareParts = spareParts.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  if (spareParts.length === 0) {
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
        {currentSpareParts.map((sparePart) => (
          <SparePartCard key={sparePart.id} sparePart={sparePart} />
        ))}
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/spare-parts"
          className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
        >
          View All Spare Parts
        </Link>
      </div>
    </section>
  )
}

