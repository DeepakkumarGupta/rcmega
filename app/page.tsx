"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaTools, FaWrench } from "react-icons/fa"
import TopProducts from "@/components/TopProducts"
import { Suspense } from 'react'
import Loading from '@/components/Loading'
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { accessories, products, spareParts } from "@/data/products"
import AccessoryCard from "@/components/accessory-card"
import SparePartCard from "@/components/spare-part-card"
import ProductCard from "@/components/ProductCard"

export default function Home() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  // Get featured accessories and spare parts (first 4 of each)
  const featuredAccessories = accessories.slice(0, 4)
  const featuredSpareParts = spareParts.slice(0, 4)
  const featuredProducts = products.slice(0,8)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage("")

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setEmail("")
        setMessage("Thank you for signing up! Check your email for a welcome message.")
      } else {
        setMessage(data.message || "An error occurred. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }


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
      
      {/* Hero Section */}
      <section id="home" className="relative bg-[#ccc] pt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center py-12">
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-[#1B1F3B] leading-tight">
                Lets Get Ready
                <br />
                To Throttle Your Hobbies
              </h1>
              <p className="text-2xl text-[#1B1F3B]">Explore Ultimate RC Mega Experience</p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/rcmegaofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1B1F3B] hover:text-[#0087FF]"
                >
                  <FaFacebook size={40} />
                </a>
                <a
                  href="https://instagram.com/rcmegaofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1B1F3B] hover:text-[#FF008B]"
                >
                  <FaInstagram size={40} />
                </a>
                <a
                  href="https://youtube.com/@rcmegaofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1B1F3B] hover:text-[#FF0000]"
                >
                  <FaYoutube size={40} />
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <Image src="/bmim.png" alt="RC Truck" width={800} height={800} className="object-fit w-300 h-200" priority />
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="absolute left-1/3 top-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 w-full h-30">
          <Image
            src="/arrow.png"
            alt="RC Truck Strip"
            width={1000}
            height={150}
            className="object-contain h-30 w-150"
            priority
          />
        </div>
      </div>
      
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
            <p className="text-lg max-w-3xl mx-auto text-[#bbb7bc] ">
              Enhance your RC experience with our premium accessories. From display stands to LED lighting kits, we have everything you need to take your RC hobby to the next level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredAccessories.map((accessory) => (
              <AccessoryCard key={accessory.id} accessory={accessory} />
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
            <p className="text-lg text-[#bbb7bc] max-w-3xl mx-auto">
              Keep your RC vehicles in top condition with our genuine spare parts. We offer a wide range of components for various models to ensure your RC adventure never stops.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredSpareParts.map((sparePart) => (
              <SparePartCard key={sparePart.id} sparePart={sparePart} />
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

      {/* RC Maintenance Hub Section */}
      <section id="maintenance-hub" className="bg-[#1B1F3B] py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  RC <span className="text-[#FF6600]">Maintenance Hub</span>
                </h2>
                <p className="text-[#bbb7bc] mb-6 text-lg">
                  Keep your RC vehicles running at peak performance with our comprehensive selection of spare parts and accessories. Whether you need replacement wheels, motors, or body shells, we have got you covered.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="bg-[#FF6600] p-3 rounded-full">
                      <FaTools className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Genuine Parts</h3>
                      <p className="text-[#bbb7bc] text-sm">Original manufacturer parts for optimal performance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-[#FF6600] p-3 rounded-full">
                      <FaWrench className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">Upgrade Options</h3>
                      <p className="text-[#bbb7bc] text-sm">Performance upgrades to enhance your RC experience</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/spare-parts" 
                    className="px-6 py-3 bg-[#FF6600] text-white rounded-lg font-medium hover:bg-[#E65C00] transition-colors"
                  >
                    Browse Spare Parts
                  </Link>
                  <Link 
                    href="/accessories" 
                    className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors"
                  >
                    Explore Accessories
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <Image 
                      src="/hummer-wheel-set.webp" 
                      alt="RC Wheel Set" 
                      width={300} 
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <Image 
                      src="/370-brushed-motor.webp" 
                      alt="RC Motor" 
                      width={300} 
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <Image 
                      src="/hummer-led-kit.webp" 
                      alt="RC LED Kit" 
                      width={300} 
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <Image 
                      src="/rc-tool-kit.jpg" 
                      alt="RC Tool Kit" 
                      width={300} 
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Brand Section */}
      <section id="about" className="bg-[#1B1F3B] py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-12">
            About <span className="text-[#FF6600]">RC MEGA</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-white text-lg leading-relaxed">
                RC MEGA is more than just a hobby store – we are a passionate community of RC enthusiasts dedicated to revolutionizing the world of remote-controlled vehicles. Our mission is to create a global RC community and spark an RC revolution where new ideas flourish and innovation thrives.
              </p>
              <p className="text-white text-lg leading-relaxed">
                From our state-of-the-art indoor and outdoor tracks to our curated selection of premium RC vehicles, we offer an unparalleled experience for RC lovers of all levels. Whether you are a seasoned pro or just starting your RC journey, RC MEGA is your ultimate destination where your hobbies throttle.
              </p>
            </div>
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-[#1B1F3B] mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To create a global community of RC enthusiasts, fostering innovation and pushing the boundaries of what is possible in the world of remote-controlled vehicles.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-[#1B1F3B] mb-4">What We Offer</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Premium RC vehicles for sale worldwide</li>
                  <li>Indoor and outdoor racing tracks</li>
                  <li>Community events and competitions</li>
                  <li>Genuine spare parts and accessories</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RC Community Section */}
      <section id="community" className="bg-[#1B1F3B] py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-8">
            Join Our <span className="text-[#FF6600]">RC Mega Community</span>
          </h2>
          <p className="text-center text-white max-w-3xl mx-auto mb-12 text-lg">
            Get ready for exciting events, forums, and competitions! Be part of a growing community of RC enthusiasts.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-[#1B1F3B] mb-6">Coming Soon:</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#FF6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Exclusive RC events and races
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#FF6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Online forums for tips and tricks
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#FF6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Competitions with amazing prizes
                </li>
                <li className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-[#FF6600]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Early access to new products
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-3xl font-bold text-[#1B1F3B] mb-6">Stay Updated</h3>
              <p className="text-gray-600 mb-6">
                Be the first to know about new products, events, and exclusive offers!
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6600] focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-[#FF6600] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#E65C00] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:ring-opacity-50"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <svg className="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    "Sign Up for Updates"
                  )}
                </button>
              </form>
              {message && (
                <p className={`mt-4 text-center ${message.includes("error") ? "text-red-500" : "text-green-500"}`}>
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="bg-[#1B1F3B] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h2>
          <p className="text-white mb-8">Have questions or want to make a purchase? Reach out to us!</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://wa.me/917737373639"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#128C7E] transition-colors inline-flex items-center"
            >
              <FaWhatsapp className="mr-2" size={24} />
              Chat on WhatsApp
            </a>
            <a
              href="mailto:rcmegaofficial@gmail.com"
              className="bg-[#FF6600] text-white px-6 py-3 rounded-full hover:bg-[#E65C00] transition-colors inline-flex items-center"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </main>
  )
}
