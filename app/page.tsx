"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import TopProducts from "@/components/TopProducts"
import { Suspense } from 'react'
import Loading from '@/components/Loading'
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import AccessoryCard from "@/components/accessory-card"
import SparePartCard from "@/components/spare-part-card"
import { IAccessory, IBrand, ISparePart } from "@/types/product"
import { API_BASE_URL, getBrands } from "@/lib/api"

export default function Home() {
  const [accessories, setAccessories] = useState<IAccessory[]>([])
  const [spareParts, setSpareParts] = useState<ISparePart[]>([])
  const [brands, setBrands] = useState<IBrand[]>([])
    
  useEffect(() => {
    async function fetchData() {
      try {
        const [accRes, spRes] = await Promise.all([
          fetch(`${API_BASE_URL}/accessories`),
          fetch(`${API_BASE_URL}/spare-parts`),
        ])
        const accJson = await accRes.json()
        const spJson = await spRes.json()
        
        if (accJson.success) setAccessories(accJson.data)
        if (spJson.success) setSpareParts(spJson.data)
          
      } catch (error) {
        console.error("Error fetching accessories or spare parts", error)
      }
    }
    getBrands().then((data) => setBrands(data || []))
    fetchData()
  }, [])

  // Get featured accessories and spare parts (first 4 of each)
  const featuredAccessories = accessories.slice(0, 4)
  const featuredSpareParts = spareParts.slice(0, 4)


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const sections = document.querySelectorAll("section")
      const navLinks = document.querySelectorAll("nav a")

      sections.forEach((section, index) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100
        const sectionHeight = (section as HTMLElement).clientHeight
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach((link) => link.classList.remove("text-[#FF6600]"))
          if (navLinks[index]) {
            navLinks[index].classList.add("text-[#FF6600]")
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main>
      {/* Header Section */}
      <Header />
       
      {/* Top Products Section */}
      <section id="products" className="relative bg-[#1B1F3B] pt-8">
        <Suspense fallback={<Loading />}>
          <TopProducts />
        </Suspense>

      </section>


      {/* Accessories Section */}
      <section id="accessories" className="bg-[#1B1F3B]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl -translate-x-5 md:text-5xl font-bold text-[#1B1F3B] mb-4">
              RC <span className="text-[#FFFFFF]">Accessories</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredAccessories.map((accessory) => (
              <AccessoryCard key={accessory._id} accessory={accessory} brands={brands} />
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href="/accessories" 
              className="inline-block px-8 py-4 bg-[#FF6600] text-white rounded-full font-semibold hover:bg-[#E65C00] transition-colors shadow-lg"
            >
              View All Accessories
            </Link>
          </div>
        </div>
      </section>

      {/* Spare Parts Section */}
      <section id="spare-parts" className="bg-[#1B1F3B] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              RC <span className="text-[#FF6600]">Spare Parts</span>
            </h2>
         
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredSpareParts.map((sparePart) => (
              <SparePartCard key={sparePart._id} sparePart={sparePart} brands={brands} />
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              href="/spare-parts" 
              className="inline-block px-8 py-4 bg-[#FF6600] text-white rounded-full font-semibold hover:bg-[#E65C00] transition-colors shadow-lg"
            >
              View All Spare Parts
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  )
}
