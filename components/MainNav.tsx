"use client"

import { useState } from "react"
import Image from "next/image"
import { Link as ScrollLink } from "react-scroll"
import { neuroPolitical } from "@/lib/fonts"

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/#about" },
    { name: "PRODUCTS", href: "/#products" },
    { name: "COMMUNITY", href: "/#community" },
    { name: "CONTACT", href: "/#contact" },
  ]

  return (
       <header className="fixed top-0 left-0 right-0 bg-[#F5F5F5] z-50">
              <div className="container mx-auto px-4 lg:px-8">
                <div className="flex justify-between items-center h-20">
                  <ScrollLink to="home" smooth={true} duration={500} className="relative z-10 cursor-pointer">
                    <Image src="/rcmegalogo.png" alt="RC MEGA" width={150} height={60} priority className="w-auto h-[60px]" />
                  </ScrollLink>
      
                  {/* Desktop Navigation */}
                  <nav className={`hidden md:flex space-x-8 ${neuroPolitical.className}`}>
                    {navItems.map((item) => (
                      <ScrollLink
                        key={item.name}
                        to={item.href}
                        smooth={true}
                        duration={500}
                        className={`text-[15px] tracking-wide hover:text-[#FF6600] transition-colors cursor-pointer`}
                      >
                        {item.name}
                      </ScrollLink>
                    ))}
                  </nav>
      
                  {/* Mobile Menu Button */}
                  <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                      />
                    </svg>
                  </button>
                </div>
      
                {/* Mobile Navigation */}
                {isMenuOpen && (
                  <div className="md:hidden absolute top-20 left-0 right-0 bg-[#F5F5F5] shadow-md">
                    <nav className={`flex flex-col py-4 ${neuroPolitical.className}`}>
                      {navItems.map((item) => (
                        <ScrollLink
                          key={item.name}
                          to={item.href}
                          smooth={true}
                          duration={500}
                          className={`px-4 py-2 text-[15px] tracking-wide hover:text-[#FF6600] transition-colors cursor-pointer`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </ScrollLink>
                      ))}
                    </nav>
                  </div>
                )}
              </div>
            </header>
  )
}
