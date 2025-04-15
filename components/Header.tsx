"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Link as ScrollLink } from "react-scroll"
import { neuroPolitical } from "@/lib/fonts"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { FiX, FiMapPin, FiShoppingCart, FiUser, FiLogIn, FiSettings, FiHeart, FiPackage } from "react-icons/fi"
import { ChevronDown } from "lucide-react"

// Define priority levels for nav items (lower number = higher priority)
const navItems = [
  { name: "HOME", href: "home", priority: 1 },
  { name: "PRODUCTS", href: "products", priority: 1 },
  { name: "ABOUT", href: "about", priority: 2 },
  { name: "COMMUNITY", href: "community", priority: 2 },
  { name: "CONTACT", href: "contact", priority: 2 },
]

// Add this Google Maps URL (replace with your actual location)
const googleMapsUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.4198510765973!2d73.13965297520971!3d19.249388181991243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be797134d74edbb%3A0x2de39fe0b797f077!2sRC%20Mega!5e1!3m2!1sen!2sin!4v1738270700502!5m2!1sen!2sin"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showLocationPopup, setShowLocationPopup] = useState(false)
  const [showUserDropdown, setShowUserDropdown] = useState(false)
  const [cartItemCount, {}] = useState(2) // Example cart count
  const [isLoggedIn, setIsLoggedIn] = useState(false) // For demo purposes
  const [windowWidth, setWindowWidth] = useState(0)
  const [visibleNavItems, setVisibleNavItems] = useState(navItems)
  const [showLoginDropdown, setShowLoginDropdown] = useState(false)

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Adjust visible nav items based on screen width
  useEffect(() => {
    // Show only high-priority items on smaller screens
    if (windowWidth < 768) {
      setVisibleNavItems(navItems.filter((item) => item.priority === 1))
    }
    // Show all items on larger screens
    else if (windowWidth < 1024) {
      setVisibleNavItems(navItems.filter((item) => item.priority === 1))
    }else{
      setVisibleNavItems(navItems)
    }
  }, [windowWidth])

  useEffect(() => {
    setVisibleNavItems(navItems.filter((item) => item.priority === 1))
  }, [])

  // Toggle login status (for demo)
  const toggleLoginStatus = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowUserDropdown(false)
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const renderUserActions = () => (
    <div className="relative">
      <button
        className="flex items-center gap-2 hover:text-[#FF6600] transition-colors"
        onClick={() => setShowLoginDropdown(!showLoginDropdown)}
      >
        <FiUser className="w-6 h-6" />
        <span className="hidden sm:inline-block">Login</span>
        <ChevronDown className="w-4 h-4 hidden sm:block" />
      </button>

      {/* Login Dropdown */}
      {showLoginDropdown && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden z-50">
          {/* Login Section */}
          <div className="p-4">
            <button 
              onClick={toggleLoginStatus}
              className="w-full py-2 bg-[#FF6600] text-white rounded-md hover:bg-[#E55A00] transition-colors"
            >
              Login
            </button>
          </div>

          {/* New Customer Section */}
          <div className="p-4 border-t border-gray-100 bg-gray-50">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">New customer?</span>
              <button 
                className="text-[#FF6600] hover:underline font-medium"
                onClick={() => {
                  setShowLoginDropdown(false)
                  // Add your signup navigation logic here
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#F5F5F5] z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Container - Fixed size to prevent stretching */}
          <div className="flex items-center">
            <ScrollLink to="home" smooth={true} duration={500} className="relative z-10 cursor-pointer">
              <div className="relative w-[120px] h-[60px] sm:w-[150px] sm:h-[60px]">
                <Image
                  src="/rcmegalogo.png"
                  alt="RC MEGA"
                  fill
                  style={{ objectFit: "contain", objectPosition: "left center" }}
                  priority
                />
              </div>
            </ScrollLink>
          </div>

          {/* Desktop Navigation - Centered and properly spaced */}
          <nav className={`hidden md:flex items-center space-x-4 lg:space-x-8 ${neuroPolitical.className}`}>
            {visibleNavItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.href}
                smooth={true}
                duration={500}
                className={`text-[15px] tracking-wide hover:text-[#FF6600] transition-colors cursor-pointer ${
                  item.name === "PRODUCTS" ? "text-[#FF6600]" : ""
                }`}
              >
                {item.name}
              </ScrollLink>
            ))}

            {/* More dropdown for hidden items on medium screens */}
            {windowWidth < 1024 && navItems.some((item) => !visibleNavItems.includes(item)) && (
              <div className="relative group">
                <button className="text-[15px] tracking-wide hover:text-[#FF6600] transition-colors flex items-center gap-1">
                  MORE <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-md overflow-hidden hidden group-hover:block w-40 z-50">
                  {navItems
                    .filter((item) => !visibleNavItems.includes(item))
                    .map((item) => (
                      <ScrollLink
                        key={item.name}
                        to={item.href}
                        smooth={true}
                        duration={500}
                        className="block px-4 py-2 hover:bg-gray-100 text-[15px]"
                      >
                        {item.name}
                      </ScrollLink>
                    ))}
                </div>
              </div>
            )}
          </nav>

          {/* User Actions (Cart, Login/Profile) - Properly contained */}
          <div className="flex items-center gap-2 sm:gap-4 z-10">
            {/* Store Location - Desktop Only */}
            <div
              className="hidden lg:block relative"
              onMouseEnter={() => setShowLocationPopup(true)}
              onMouseLeave={() => setShowLocationPopup(false)}
            >
              <button
                className="flex items-center gap-1 text-[15px] tracking-wide hover:text-[#FF6600] transition-colors"
                aria-label="Our location"
              >
                <FiMapPin className="w-5 h-5" />
                <span className="hidden xl:inline-block">STORE LOCATION</span>
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

            {/* Cart Icon */}
            <button className="relative p-2 hover:text-[#FF6600] transition-colors">
              <FiShoppingCart className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF6600] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* User Account */}
            {isLoggedIn ? (
              <div className="relative">
                <button
                  className="flex items-center gap-1 hover:text-[#FF6600] transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowUserDropdown(!showUserDropdown)
                  }}
                >
                  <FiUser className="w-6 h-6" />
                  <span className="hidden sm:inline-block">Account</span>
                  <ChevronDown className="w-4 h-4 hidden sm:block" />
                </button>

                {/* User Dropdown */}
                {showUserDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white shadow-xl rounded-lg overflow-hidden z-50">
                    <div className="p-4 border-b">
                      <p className="font-medium">Hello, User</p>
                      <p className="text-sm text-gray-500">user@example.com</p>
                    </div>
                    <div className="py-2">
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-3">
                        <FiUser className="text-[#FF6600]" />
                        <span>My Profile</span>
                      </button>
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-3">
                        <FiPackage className="text-[#FF6600]" />
                        <span>My Orders</span>
                      </button>
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-3">
                        <FiHeart className="text-[#FF6600]" />
                        <span>Wishlist</span>
                      </button>
                      <button className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-3">
                        <FiSettings className="text-[#FF6600]" />
                        <span>Settings</span>
                      </button>
                    </div>
                    <div className="border-t py-2">
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-3 text-red-500"
                        onClick={toggleLoginStatus}
                      >
                        <FiLogIn className="transform rotate-180" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              renderUserActions()
            )}

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 z-30" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="md:hidden fixed top-0 right-0 bottom-0 w-[280px] bg-white/95 backdrop-blur-lg z-50 shadow-2xl overflow-y-auto"
              >
                <div className="flex justify-end p-4">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <FiX className="w-6 h-6 text-gray-800" />
                  </button>
                </div>

                {/* Mobile User Section */}
                {!isLoggedIn ? (
                  <div className="px-6 py-4 border-b">
                    <div className="flex gap-2">
                      <button
                        className="flex-1 px-4 py-2 border border-[#FF6600] text-[#FF6600] rounded-md hover:bg-[#FF6600] hover:text-white transition-colors"
                        onClick={toggleLoginStatus}
                      >
                        Login
                      </button>
                      <button className="flex-1 px-4 py-2 bg-[#FF6600] text-white rounded-md hover:bg-[#E55A00] transition-colors">
                        Sign Up
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="px-6 py-4 border-b">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <FiUser className="text-gray-500" />
                      </div>
                      <div>
                        <p className="font-medium">Hello, User</p>
                        <p className="text-xs text-gray-500">user@example.com</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <button className="px-3 py-2 bg-gray-100 rounded-md flex items-center justify-center gap-2">
                        <FiPackage className="text-[#FF6600]" />
                        <span>Orders</span>
                      </button>
                      <button className="px-3 py-2 bg-gray-100 rounded-md flex items-center justify-center gap-2">
                        <FiHeart className="text-[#FF6600]" />
                        <span>Wishlist</span>
                      </button>
                      <button className="px-3 py-2 bg-gray-100 rounded-md flex items-center justify-center gap-2">
                        <FiSettings className="text-[#FF6600]" />
                        <span>Settings</span>
                      </button>
                      <button
                        className="px-3 py-2 bg-gray-100 rounded-md flex items-center justify-center gap-2 text-red-500"
                        onClick={toggleLoginStatus}
                      >
                        <FiLogIn className="transform rotate-180" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Mobile Cart Section */}
                <div className="px-6 py-4 border-b">
                  <button className="w-full flex items-center justify-between px-4 py-3 bg-gray-100 rounded-md">
                    <div className="flex items-center gap-3">
                      <FiShoppingCart className="text-[#FF6600]" />
                      <span>My Cart</span>
                    </div>
                    <span className="bg-[#FF6600] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItemCount}
                    </span>
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
                      <ScrollLink
                        to={item.href}
                        smooth={true}
                        duration={500}
                        className={`px-4 py-3 text-lg font-medium ${
                          item.name === "PRODUCTS" ? "text-[#FF6600]" : "text-gray-800"
                        } hover:text-[#FF6600] transition-colors cursor-pointer rounded-lg hover:bg-gray-50 flex items-center gap-3`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="bg-[#FF6600]/10 w-8 h-8 rounded-full flex items-center justify-center">
                          <span className="w-2 h-2 bg-[#FF6600] rounded-full" />
                        </span>
                        {item.name}
                      </ScrollLink>
                    </motion.div>
                  ))}

                  {/* Mobile Map Section */}
                  <div className="p-4 border-t mt-6">
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
                <div className="px-6 py-6 border-t">
                  <div className="flex justify-center space-x-6">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-[#FF6600] transition-colors"
                    >
                      <FaFacebook size={24} />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-[#FF6600] transition-colors"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-[#FF6600] transition-colors"
                    >
                      <FaYoutube size={24} />
                    </a>
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
