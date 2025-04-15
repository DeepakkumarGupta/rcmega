"use client"

import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa6"
import { ISparePart } from "@/types/product"

export default function SparePartCard({
  sparePart,
  layout = "grid",
}: {
  sparePart: ISparePart
  layout?: "grid" | "list"
}) {
  const whatsappMessage = `Hi! I'm interested in the spare part: ${sparePart.name} (${sparePart.sku}). Price: ₹${sparePart.price.toLocaleString()}. Can you provide more details?`

  return (
    <div
      className={`z-10 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${
        layout === "list" ? "flex flex-col md:flex-row gap-4 p-4" : "p-3"
      }`}
    >
      {/* Image Section */}
      <Link
        href={`/spare-parts/${sparePart.slug}`}
        className={`block relative ${layout === "list" ? "md:w-1/3" : "w-full"}`}
      >
        <div className="relative aspect-square rounded-xl overflow-hidden">
          <Image
            src={sparePart.media[0]?.url || "/placeholder.svg"}
            alt={sparePart.name}
            fill
            className="object-cover"
          />

          {/* Out of Stock badge */}
          {sparePart.outOfStock && (
            <div className="absolute top-2 right-2 z-20 flex flex-col items-start gap-1">
              <div className="bg-[#FF4500] text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-md">
                <span className="block">Sold Out</span>
              </div>
            </div>
          )}

          {/* Brand Badge */}
          <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded-full flex items-center gap-1 text-xs">
            {sparePart.brand}
          </div>
        </div>
      </Link>

      {/* Info Section */}
      <div className={`flex-1 ${layout === "list" ? "md:py-2" : "pt-3"}`}>
        <Link href={`/spare-parts/${sparePart.slug}`}>
          <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 hover:text-blue-600">{sparePart.name}</h3>
        </Link>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-gray-500 text-sm">SKU: {sparePart.sku}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {sparePart.categories.slice(0, 2).map((category, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 rounded-md text-xs">
              {category}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-gray-900">₹{sparePart.price.toLocaleString()}</p>

          <div className="flex gap-2">
            {sparePart.outOfStock ? (
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`Hi! I'm interested in the spare part: ${sparePart.name}. Please notify me when it's back in stock.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
              >
                <FaWhatsapp size={16} />
                <span className="sm:inline">Notify Me</span>
              </a>
            ) : (
              <a
                href={`https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700"
              >
                <FaWhatsapp size={16} />
                <span className="sm:inline">Buy Now</span>
              </a>
            )}
            <button
              onClick={() => {
                const url = `${window.location.origin}/spare-parts/${sparePart.slug}`
                if (navigator.share) {
                  navigator
                    .share({
                      title: sparePart.name,
                      text: `Check out this ${sparePart.name} from RC MEGA!`,
                      url: url,
                    })
                    .catch(() => {
                      navigator.clipboard.writeText(url)
                      alert("Link copied to clipboard!")
                    })
                } else {
                  navigator.clipboard.writeText(url)
                  alert("Link copied to clipboard!")
                }
              }}
              className="flex items-center justify-center bg-gray-200 text-gray-700 p-2 rounded-lg hover:bg-gray-300"
              aria-label="Share spare part"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

