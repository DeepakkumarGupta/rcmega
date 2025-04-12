import React, { useState } from 'react'
import Image from "next/image"

import { neuroPolitical } from "@/lib/fonts"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { FiX } from "react-icons/fi"
import { FiMapPin } from "react-icons/fi"
import Link from 'next/link'


const DuHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navItems = [
        { name: "HOME", href: "/" },
        { name: "ABOUT", href: "/#about" },
        { name: "PRODUCTS", href: "/#products" },
        { name: "COMMUNITY", href: "/#community" },
        { name: "CONTACT", href: "/#contact" },
    ]
    const [showLocationPopup, setShowLocationPopup] = useState(false)

    // Add this Google Maps URL (replace with your actual location)
    const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.4198510765973!2d73.13965297520971!3d19.249388181991243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be797134d74edbb%3A0x2de39fe0b797f077!2sRC%20Mega!5e1!3m2!1sen!2sin!4v1738270700502!5m2!1sen!2sin"

    return (
        <header className="fixed top-0 left-0 right-0 bg-[#F5F5F5] z-50">
          {/* Slopped Edge */}
      <div
        className="absolute bottom-0 w-full h-full  transform translate-y-12"
        style={{ lineHeight: 0 }}
      >
        <div
          className="w-[709px] 2xl:w-[50vw] h-[69px] bg-[#F5F5F5] relative transform -translate-x-[50%] sm:-translate-x-[45%] md:-translate-x-[50%] lg:-translate-x-[40%] xl:-translate-x-[37%] 2xl:-translate-x-[23%] border-black box-border"
          style={{
            clipPath:
              "polygon(99.85% 0.72%, 99.85% 6.75%, 76.15% 99.28%, 0.07% 99.28%, 0.07% 0.72%)",
          }}
        ></div>
      </div>
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="relative z-10 left-3 cursor-pointer top-2.5 sm:left-0 sm:top-2.5 translate-y-2 lg:-translate-x-8 md:absolute lg:relative md:left-3">
                        <Image src="/rcmegalogo.png" alt="RC MEGA" width={150} height={60} priority className="w-auto h-[90px]" />
                    </Link>
                    {/* Desktop Navigation */}
                    <nav className={`hidden md:flex space-x-8 ${neuroPolitical.className}`}>
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-[15px] tracking-wide hover:text-[#FF6600] transition-colors cursor-pointer`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        {/* Desktop Location Link */}
                        <div
                            className="relative"
                            onMouseEnter={() => setShowLocationPopup(true)}
                            onMouseLeave={() => setShowLocationPopup(false)}
                            onFocus={() => setShowLocationPopup(true)}
                            onBlur={() => setShowLocationPopup(false)}
                        >
                            <button
                                className="flex items-center gap-2 text-[15px] tracking-wide hover:text-[#FF6600] transition-colors"
                                aria-label="Our location"
                            >
                                <FiMapPin className="w-5 h-5" />
                                STORE LOCATION
                            </button>

                            {/* Desktop Map Popup */}
                            {showLocationPopup && (
                                <div className="absolute top-full right-0 mt-2 w-80 h-60 bg-white shadow-xl rounded-lg overflow-hidden">
                                    <iframe
                                        title="Store Location"
                                        className="w-full h-full"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        allowFullScreen
                                        src={googleMapsUrl}
                                    />
                                </div>
                            )}
                        </div>
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
                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/50 z-40"
                                onClick={() => setIsMenuOpen(false)}
                            />

                            {/* Mobile Menu */}
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                className="md:hidden fixed top-0 right-0 bottom-0 w-80 bg-white/95 backdrop-blur-lg z-50 shadow-2xl"
                            >
                                <div className="flex justify-end p-4">
                                    <button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <FiX className="w-6 h-6 text-gray-800" />
                                    </button>
                                </div>

                                <nav className={`flex flex-col p-6 ${neuroPolitical.className}`}>
                                    {navItems.map((item, index) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: index * 0.1 + 0.2 }}
                                        >
                                            <Link
                                                href={item.href}
                                                className={`px-4 py-3 text-lg font-medium text-gray-800 hover:text-[#FF6600] transition-colors cursor-pointer rounded-lg hover:bg-gray-50 flex items-center gap-3`}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <span className="bg-[#FF6600]/10 w-8 h-8 rounded-full flex items-center justify-center">
                                                    <span className="w-2 h-2 bg-[#FF6600] rounded-full" />
                                                </span>
                                                {item.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                    {/* Mobile Map Section */}
                                    <div className="p-4 border-t mt-auto">
                                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                                            <FiMapPin className="text-[#FF6600]" />
                                            Our Location
                                        </h3>
                                        <div className="w-full h-48 rounded-lg overflow-hidden">
                                            <iframe
                                                title="Store Location"
                                                className="w-full h-full"
                                                loading="lazy"
                                                allowFullScreen
                                                referrerPolicy="no-referrer-when-downgrade"
                                                src={googleMapsUrl}
                                            />
                                        </div>
                                    </div>
                                </nav>
                                
                                {/* Social Links */}
                                <div className="absolute bottom-8 left-0 right-0 px-6">
                                    <div className="border-t pt-6">
                                        <div className="flex justify-center space-x-6">
                                            <a
                                                href="https://facebook.com/rcmegaofficial"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-800 hover:text-[#FF6600] transition-colors"
                                            >
                                                <FaFacebook size={24} />
                                            </a>
                                            <a
                                                href="https://instagram.com/rcmegaofficial"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-800 hover:text-[#FF6600] transition-colors"
                                            >
                                                <FaInstagram size={24} />
                                            </a>
                                            <a
                                                href="https://youtube.com/@rcmegaofficial"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-800 hover:text-[#FF6600] transition-colors"
                                            >
                                                <FaYoutube size={24} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}

export default DuHeader