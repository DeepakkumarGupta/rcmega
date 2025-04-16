"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaShare } from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from "swiper"
import { A11y, Keyboard, Pagination, Thumbs } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import Footer from "@/components/Footer"
import { useVideoAutoplay } from "@/components/hooks/useVideoAutoply"
import Header from "@/components/Header"
import Head from "next/head"
import AccessoriesSection from "@/components/accessories-section"
import SparePartsSection from "@/components/spare-parts-section"
import { IAccessory, ISparePart, IDimensions, IMedia } from "@/types/product"
import { API_BASE_URL, getBrands } from "@/lib/api"

// Define interfaces
export interface Product {
  _id: string
  id: string
  name: string
  sku: string
  description: string
  categories: string[]
  brand: string
  color: string
  modelCode: string
  scale: string
  stock: number
  OutOfStock: boolean
  price: number
  slug: string
  media: IMedia[]
  socialLinks?: {
    instagram?: string
    facebook?: string
    youtube?: string
  }
  technicalSpecs: string[]
  weight: number
  dimensions: IDimensions
  discountPercentage?: number
  finalPrice?: number
  compatibleAccessories?: IAccessory[]
  compatibleSpareParts?: ISparePart[]
}

export default function ProductPage() {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [brands, setBrands] = useState<any[]>([]) // <-- Add this line
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const [showShareTooltip, setShowShareTooltip] = useState(false)
  const videoRef = useVideoAutoplay()

  // Fetch brands on mount
  useEffect(() => {
    getBrands().then((data) => setBrands(data || []))
  }, [])

  useEffect(() => {
    async function fetchProduct() {
      if (params.slug) {
        try { 
          // Fetch product by slug
          const resSlug = await fetch(`${API_BASE_URL}/products/slug/${params.slug}`)
          const slugResponse = await resSlug.json()
          let productData = null
          
          // Handle case where the response is an array
          if (Array.isArray(slugResponse)) {
            if (slugResponse.length > 0 && slugResponse[0].success && slugResponse[0].data) {
              productData = slugResponse[0].data
            }
          } else if (slugResponse.success && slugResponse.data) {
            productData = slugResponse.data
          }
          
          if (productData) {
            // Extract product id (assign id property if missing)
            const productId = productData.id || productData._id
            // Optionally, ensure productData has an "id" field
            productData = { ...productData, id: productId }

            // Fetch complete product info (with spare parts and accessories)
            const resComplete = await fetch(`${API_BASE_URL}/products/${productId}/complete`)
            const completeResponse = await resComplete.json()
            if (completeResponse.success && completeResponse.data) {
              setProduct(completeResponse.data)
            } else {
              setProduct(null)
            }
          } else {
            setProduct(null)
          }
        } catch (error) {
          console.error("Error fetching product details:", error)
          setProduct(null)
        }
      }
    }
    fetchProduct()
  }, [params.slug])

  const handleShare = () => {
    const url = window.location.href
    if (navigator.share) {
      navigator.share({
          title: product ? `${product.name} - RC MEGA` : "RC MEGA Product",
          text: product ? `Check out this ${product.brand} ${product.name} from RC MEGA!` : "Check out this product from RC MEGA!",
          url: url,
      }).catch(() => {
          navigator.clipboard.writeText(url)
          setShowShareTooltip(true)
          setTimeout(() => setShowShareTooltip(false), 2000)
      })
    } else {
      navigator.clipboard.writeText(url)
      setShowShareTooltip(true)
      setTimeout(() => setShowShareTooltip(false), 2000)
    }
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1B1F3B] to-[#2A305E]">
        <div className="text-center p-8 max-w-2xl">
          <h1 className="text-3xl font-bold text-white mb-4">Product Not Found</h1>
          <Link href="/products" className="text-yellow-500 hover:underline font-medium">
            Browse All Products →
          </Link>
        </div>
      </div>
    )
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.media.filter((m) => m.type === "image").map((m) => m.url),
    description: `RC Model Car ${product.name} by ${product.brand}. Scale: ${product.scale}, Color: ${product.color}`,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    offers: {
      "@type": "Offer",
      url: `https://www.rcmega.com/products/${product.slug}`,
      priceCurrency: "INR",
      price: product.price,
      availability: product.OutOfStock ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
    },
    sku: product.modelCode,
    mpn: product.modelCode,
  }

  // Prepare messages for WhatsApp actions
  const whatsappMessage = `Hi! I'm interested in ${product.name} (${product.modelCode}). Price: ₹${product.price.toLocaleString()}. Please provide more details.`
  const notifyMessage = `Hi! I'm interested in ${product.name} (${product.modelCode}). Please notify me when it's back in stock.`

  // Find the brand object for this product
  const brandObj = brands.find(
    (b) => b._id === product?.brand || b.name === product?.brand
  )

  return (
    <>
      <Head>
        <title>{`${product.name} - RC MEGA`}</title>
        <meta
          name="description"
          content={`Discover the ${product.name} by ${product.brand}. Scale: ${product.scale}, Color: ${product.color}. High-quality RC model available at RC MEGA.`}
        />
        <meta property="og:title" content={`${product.name} - RC MEGA`} />
        <meta
          property="og:description"
          content={`Explore the ${product.name} by ${product.brand}. Scale: ${product.scale}, Color: ${product.color}. Premium RC model from RC MEGA.`}
        />
        <meta property="og:image" content={product.media[0]?.url} />
        <meta property="og:type" content="product" />
        <meta property="og:price:amount" content={product.price.toString()} />
        <meta property="og:price:currency" content="INR" />
        <link rel="canonical" href={`https://www.rcmega.com/products/${product.slug}`} />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-[#1B1F3B] to-[#2A305E]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <Header />

        {/* Breadcrumb and Action Buttons */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav className="shadow-sm" aria-label="Breadcrumb">
              <ol className="flex flex-wrap gap-2 items-center text-sm">
                <li>
                  <Link href="/" className="text-white text-xl hover:text-orange transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-gray-300 text-xl">/</li>
                <li aria-current="page" className="text-yellow-500 text-xl font-medium truncate max-w-xs">
                  {product.name}
                </li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <div className="relative">
                <button
                  onClick={handleShare}
                  className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors"
                  aria-label="Share product"
                >
                  <FaShare />
                </button>
                {showShareTooltip && (
                  <div className="absolute right-0 top-full mt-2 bg-white text-gray-900 px-3 py-1.5 rounded-md text-sm whitespace-nowrap z-10 shadow-lg">
                    Link copied to clipboard!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-0">
              {/* Product Images Section */}
              <section aria-labelledby="product-images" className="relative">
                {product.OutOfStock && (
                  <div className="absolute top-4 left-4 z-20 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                    OUT OF STOCK
                  </div>
                )}
                <h2 id="product-images" className="sr-only">Product images</h2>
                <Swiper
                  modules={[A11y, Keyboard, Pagination, Thumbs]}
                  a11y={{
                    prevSlideMessage: "Previous product image",
                    nextSlideMessage: "Next product image",
                    paginationBulletMessage: "Go to image {{index}}",
                  }}
                  keyboard={{ enabled: true, onlyInViewport: true }}
                  pagination={{ clickable: true }}
                  thumbs={{ swiper: thumbsSwiper }}
                  className="rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl overflow-hidden"
                >
                  {product.media.map((media, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative aspect-square bg-gray-800">
                        {media.type === "video" ? (
                          <div className="relative h-full w-full">
                            <video
                              ref={videoRef}
                              className="w-full h-full object-cover"
                              controls muted playsInline preload="metadata"
                              title={`${product.name} video demonstration`}
                            >
                              <source src={media.url} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm">
                              Video
                            </div>
                          </div>
                        ) : media.type === "instagram" ? (
                          <div className="relative h-full w-full bg-black aspect-auto">
                            <div className="instagram-reel-container">
                              <iframe
                                src={`https://www.instagram.com/reel/${media.url}/embed/`}
                                className="w-full h-full object-cover instagram-reel-iframe"
                                title={`Instagram Reel - ${product.name}`}
                                allow="autoplay; encrypted-media" allowFullScreen
                                style={{ minHeight: "500px" }}
                              />
                            </div>
                            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm">
                              Instagram Reel
                            </div>
                          </div>
                        ) : (
                          <Image
                            src={media.url || "/placeholder.svg"}
                            alt={`${product.name} - Detailed view ${index + 1}`}
                            fill className="object-contain"
                            sizes="(max-width: 1024px) 100vw, 50vw" priority={index === 0}
                          />
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="p-4 bg-black/20">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10} slidesPerView={4} watchSlidesProgress
                    className="thumbnail-swiper"
                    a11y={{ containerRoleDescriptionMessage: "Product thumbnail images" }}
                  >
                    {product.media.map((media, index) => (
                      <SwiperSlide key={index} className="cursor-pointer" role="button"
                        tabIndex={0} aria-label={`View product image ${index + 1}`}>
                        <div className="relative aspect-square border-2 border-transparent rounded-lg overflow-hidden transition-all hover:border-yellow-500 group">
                          {media.type === "image" ? (
                            <Image
                              src={media.url || "/placeholder.svg"}
                              alt={`Thumbnail view of ${product.name} - ${index + 1}`}
                              fill className="object-cover"
                              sizes="(max-width: 640px) 25vw, 150px" loading="lazy"
                            />
                          ) : media.type === "video" ? (
                            <div className="bg-gray-800 h-full flex items-center justify-center">
                              <span className="text-sm text-white">Video</span>
                            </div>
                          ) : (
                            <div className="bg-gray-800 h-full flex items-center justify-center">
                              <span className="text-sm text-white">Reel</span>
                            </div>
                          )}
                          <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10 group-hover:ring-transparent" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </section>

              {/* Product Details Section */}
              <section aria-labelledby="product-details" className="p-6 md:p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <Image
                      src={brandObj?.logo || "/placeholder.svg"}
                      alt={brandObj?.name || product.brand}
                      width={24} height={24} className="h-6 w-6 object-contain"
                    />
                    <span className="text-sm text-white font-medium">{brandObj?.name || product.brand}</span>
                  </div>
                  {product.OutOfStock ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-600/20 text-red-400">
                      Out of Stock
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-600/20 text-green-400">
                      In Stock
                    </span>
                  )}
                </div>

                <h1 id="product-details" className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {product.name}
                </h1>

                <p className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6">
                  ₹{product.price.toLocaleString()}
                  <span className="text-base md:text-lg text-gray-300 ml-2">INR</span>
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <dt className="text-xs text-gray-300 mb-1">Model Code</dt>
                    <dd className="font-medium text-white">{product.modelCode}</dd>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <dt className="text-xs text-gray-300 mb-1">Scale Ratio</dt>
                    <dd className="font-medium text-white">{product.scale}</dd>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <dt className="text-xs text-gray-300 mb-1">Color</dt>
                    <dd className="font-medium text-white">{product.color}</dd>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <dt className="text-xs text-gray-300 mb-1">Brand</dt>
                    <dd className="font-medium text-white">{product.brand}</dd>
                  </div>
                </div>

                <div className="mb-8">
                  {product.OutOfStock ? (
                    <a
                      href={`https://wa.me/917737373639?text=${encodeURIComponent(notifyMessage)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg"
                      aria-label={`Request notification when ${product.name} is back in stock`}
                    >
                      <FaWhatsapp className="text-xl" aria-hidden="true" />
                      <span className="font-semibold">Notify Me When Available</span>
                    </a>
                  ) : (
                    <a
                      href={`https://wa.me/917737373639?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="w-full bg-green-600 text-white py-4 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-100"
                      aria-label={`Contact via WhatsApp to purchase ${product.name}`}
                    >
                      <FaWhatsapp className="text-xl" aria-hidden="true" />
                      <span className="font-semibold">Buy Now on WhatsApp</span>
                    </a>
                  )}
                </div>

                {/* Technical Specifications */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-white">Technical Specifications</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.technicalSpecs.map((spec, index) => (
                      <div key={index} className="flex items-start bg-white/5 p-3 rounded-lg">
                        <svg className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5"
                          fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-white text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="border-t border-white/10 pt-6">
                  <h3 className="text-lg text-white font-semibold mb-4">Follow Our Socials</h3>
                  <div className="flex gap-4">
                    
                      <a href={"https://www.facebook.com/rcmegaofficial"} target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-blue-600/30 text-white p-3 rounded-full transition-colors"
                        aria-label={`Visit ${product.brand}'s Facebook page`}>
                        <FaFacebook className="text-xl" />
                      </a>

                    
                      <a href={"https://www.instagram.com/rcmegaofficial/"} target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-pink-600/30 text-white p-3 rounded-full transition-colors"
                        aria-label={`Check ${product.brand}'s Instagram profile`}>
                        <FaInstagram className="text-xl" />
                      </a>


                      <a href={"https://www.youtube.com/@rcmegaofficial"} target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-red-600/30 text-white p-3 rounded-full transition-colors"
                        aria-label={`Watch videos on ${product.brand}'s YouTube channel`}>
                        <FaYoutube className="text-xl" />
                      </a>

                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Compatible Accessories Section */}
          {product.compatibleAccessories && product.compatibleAccessories.length > 0 && (
            <div className="mt-10">
              <AccessoriesSection accessories={product.compatibleAccessories}
                title={`Compatible Accessories for ${product.name}`} />
            </div>
          )}

          {/* Compatible Spare Parts Section */}
          {product.compatibleSpareParts && product.compatibleSpareParts.length > 0 && (
            <div className="mt-10">
              <SparePartsSection spareParts={product.compatibleSpareParts}
                title={`Compatible Spare Parts for ${product.name}`} />
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  )
}

