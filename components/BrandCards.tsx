import Image from 'next/image'
import Link from 'next/link'
import { brands ,brandLogos } from '@/data/products'

export default function BrandCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {brands.map((brand) => (
        <Link key={brand} href={`/products?brand=${encodeURIComponent(brand)}`} className="group">
          <div className="relative overflow-hidden bg-white rounded-lg shadow-lg transition-all duration-300 transform group-hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6600] to-[#FF9900] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="relative p-6 flex flex-col items-center">
              <div className="w-32 h-32 mb-4 relative">
                <Image
                  src={brandLogos[brand] || "/placeholder.svg"}
                  alt={brand}
                  layout="fill"
                  objectFit="contain"
                  className="transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-center text-[#1B1F3B] group-hover:text-[#FF6600] transition-colors duration-300">{brand}</h3>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF6600] to-[#FF9900] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </div>
        </Link>
      ))}
    </div>
  )
}
