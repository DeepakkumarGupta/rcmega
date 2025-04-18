"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp, FaShare } from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from "swiper"
import { A11y, Keyboard, Pagination, Thumbs } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ProductCard from "@/components/ProductCard"
import Head from "next/head"
import { IAccessory, IBrand, IProduct } from "@/types/product"
import { API_BASE_URL, getBrands } from "@/lib/api"

export default function AccessoryDetailPage() {
  const params = useParams()
  const [accessory, setAccessory] = useState<IAccessory | null>(null)
  const [compatibleProducts, setCompatibleProducts] = useState<IProduct[]>([])
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const [showShareTooltip, setShowShareTooltip] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [brands, setBrands] = useState<IBrand[]>([])

  useEffect(() => {
    getBrands().then((data) => setBrands(data || []))
  }, [])

  useEffect(() => {
    async function fetchAccessoryAndProducts() {
      if (!params.slug) return
      setIsLoading(true)
      try {
        // 1. Fetch accessory by slug
        const res = await fetch(`${API_BASE_URL}/accessories/slug/${params.slug}`)
        const json = await res.json()
        if (!json.success || !json.data) {
          setAccessory(null)
          setCompatibleProducts([])
          setIsLoading(false)
          return
        }
        setAccessory(json.data)

        // 2. Fetch compatible products if any
        if (json.data.compatibleProductIds && json.data.compatibleProductIds.length > 0) {
          const productPromises = json.data.compatibleProductIds.map((id: string) =>
            fetch(`${API_BASE_URL}/products/${id}`).then(res => res.json())
          )
          const productsJson = await Promise.all(productPromises)
          const validProducts = productsJson
            .filter((p) => p.success && p.data)
            .map((p) => p.data)
          setCompatibleProducts(validProducts)
        } else {
          setCompatibleProducts([])
        }
      } catch (error) {
        setAccessory(null)
        console.error("Error fetching accessory or compatible products", error)
        setCompatibleProducts([])
      } finally {
        setIsLoading(false)
      }
    }
    fetchAccessoryAndProducts()
  }, [params.slug])

  const handleShare = () => {
    const url = window.location.href
    if (navigator.share) {
      navigator
        .share({
          title: accessory ? `${accessory.name} - RC MEGA` : "RC MEGA Accessory",
          text: accessory
            ? `Check out this ${accessory.brand} ${accessory.name} from RC MEGA!`
            : "Check out this accessory from RC MEGA!",
          url: url,
        })
        .catch(() => {
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

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1B1F3B] to-[#2A305E]">
        <div className="text-center p-8 max-w-2xl">
          <h1 className="text-3xl font-bold text-white mb-4">Loading...</h1>
        </div>
      </div>
    )
  }

  if (!accessory) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1B1F3B] to-[#2A305E]">
        <div className="text-center p-8 max-w-2xl">
          <h1 className="text-3xl font-bold text-white mb-4">Accessory Not Found</h1>
          <Link href="/accessories" className="text-yellow-500 hover:underline font-medium">
            Browse All Accessories →
          </Link>
        </div>
      </div>
    )
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: accessory.name,
    image: accessory.media.map((m) => m.url),
    description: `RC Accessory: ${accessory.name} by ${accessory.brand}. ${accessory.description}`,
    brand: {
      "@type": "Brand",
      name: accessory.brand,
    },
    offers: {
      "@type": "Offer",
      url: `https://www.rcmega.com/accessories/${accessory.slug}`,
      priceCurrency: "INR",
      price: accessory.price,
      availability: accessory.outOfStock ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
    },
    sku: accessory.sku,
  }

  const whatsappMessage = `Hi! I'm interested in the accessory: ${accessory.name} (${accessory.sku}). Price: ₹${accessory.price.toLocaleString()}. Please provide more details.`
  const notifyMessage = `Hi! I'm interested in the accessory: ${accessory.name} (${accessory.sku}). Please notify me when it's back in stock.`

  // Find the brand object for this accessory
  const brandObj = brands.find(
    (b) => b._id === accessory?.brand || b.name === accessory?.brand
  )

  return (
    <>
      <Head>
        <title>{`${accessory.name} - RC MEGA Accessories`}</title>
        <meta name="description" content={`${accessory.description} High-quality RC accessory available at RC MEGA.`} />
        <meta property="og:title" content={`${accessory.name} - RC MEGA Accessories`} />
        <meta property="og:description" content={`${accessory.description} Premium RC accessory from RC MEGA.`} />
        <meta property="og:image" content={accessory.media[0]?.url} />
        <meta property="og:type" content="product" />
        <meta property="og:price:amount" content={accessory.price.toString()} />
        <meta property="og:price:currency" content="INR" />
        <link rel="canonical" href={`https://www.rcmega.com/accessories/${accessory.slug}`} />
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
                <li>
                  <Link href="/accessories" className="text-white text-xl hover:text-orange transition-colors">
                    Accessories
                  </Link>
                </li>
                <li className="text-gray-300 text-xl">/</li>
                <li aria-current="page" className="text-yellow-500 text-xl font-medium truncate max-w-xs">
                  {accessory.name}
                </li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <div className="relative">
                <button
                  onClick={handleShare}
                  className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors"
                  aria-label="Share accessory"
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
              {/* Accessory Images Section */}
              <section aria-labelledby="accessory-images" className="relative">
                {accessory.outOfStock && (
                  <div className="absolute top-4 left-4 z-20 bg-red-600 text-white px-4 py-2 rounded-full font-bold">
                    OUT OF STOCK
                  </div>
                )}

                <h2 id="accessory-images" className="sr-only">
                  Accessory images
                </h2>
                <Swiper
                  modules={[A11y, Keyboard, Pagination, Thumbs]}
                  a11y={{
                    prevSlideMessage: "Previous accessory image",
                    nextSlideMessage: "Next accessory image",
                    paginationBulletMessage: "Go to image {{index}}",
                  }}
                  keyboard={{
                    enabled: true,
                    onlyInViewport: true,
                  }}
                  pagination={{ clickable: true }}
                  thumbs={{ swiper: thumbsSwiper }}
                  className="rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl overflow-hidden"
                >
                  {accessory.media.map((media, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative aspect-square bg-gray-800">
                        <Image
                          src={media.url || "/placeholder.svg"}
                          alt={`${accessory.name} - Detailed view ${index + 1}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority={index === 0}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {accessory.media.length > 1 && (
                  <div className="p-4 bg-black/20">
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      spaceBetween={10}
                      slidesPerView={4}
                      watchSlidesProgress
                      className="thumbnail-swiper"
                      a11y={{
                        containerRoleDescriptionMessage: "Accessory thumbnail images",
                      }}
                    >
                      {accessory.media.map((media, index) => (
                        <SwiperSlide
                          key={index}
                          className="cursor-pointer"
                          role="button"
                          tabIndex={0}
                          aria-label={`View accessory image ${index + 1}`}
                        >
                          <div className="relative aspect-square border-2 border-transparent rounded-lg overflow-hidden transition-all hover:border-yellow-500 group">
                            <Image
                              src={media.url || "/placeholder.svg"}
                              alt={`Thumbnail view of ${accessory.name} - ${index + 1}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 25vw, 150px"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10 group-hover:ring-transparent" />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                )}
              </section>

              {/* Accessory Details Section */}
              <section aria-labelledby="accessory-details" className="p-6 md:p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                    <Image
                      src={brandObj?.logo || "/placeholder.svg"}
                      alt={brandObj?.name || accessory.brand}
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain"
                    />
                    <span className="text-sm text-white font-medium">{brandObj?.name || accessory.brand}</span>
                  </div>
                  {accessory.outOfStock ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-600/20 text-red-400">
                      Out of Stock
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-600/20 text-green-400">
                      In Stock
                    </span>
                  )}
                </div>

                <h1 id="accessory-details" className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {accessory.name}
                </h1>

                <p className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6">
                  ₹{accessory.price.toLocaleString()}
                  <span className="text-base md:text-lg text-gray-300 ml-2">INR</span>
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 p-4 rounded-xl">
                    <dt className="text-xs text-gray-300 mb-1">SKU</dt>
                    <dd className="font-medium text-white">{accessory.sku}</dd>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <dt className="text-xs text-gray-300 mb-1">Brand</dt>
                    <dd className="font-medium text-white">{accessory.brand}</dd>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <dt className="text-xs text-gray-300 mb-1">Weight</dt>
                    <dd className="font-medium text-white">{accessory.weight}g</dd>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl">
                    <dt className="text-xs text-gray-300 mb-1">Categories</dt>
                    <dd className="font-medium text-white">{accessory.categories.join(", ")}</dd>
                  </div>
                </div>

                <div className="mb-8">
                  {accessory.outOfStock ? (
                    <a
                      href={`https://wa.me/917737373639?text=${encodeURIComponent(notifyMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg"
                      aria-label={`Request notification when ${accessory.name} is back in stock`}
                    >
                      <FaWhatsapp className="text-xl" aria-hidden="true" />
                      <span className="font-semibold">Notify Me When Available</span>
                    </a>
                  ) : (
                    <a
                      href={`https://wa.me/917737373639?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-600 text-white py-4 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-100"
                      aria-label={`Contact via WhatsApp to purchase ${accessory.name}`}
                    >
                      <FaWhatsapp className="text-xl" aria-hidden="true" />
                      <span className="font-semibold">Buy Now on WhatsApp</span>
                    </a>
                  )}
                </div>

                {/* Description */}
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4 text-white">Description</h2>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <p className="text-white text-sm leading-relaxed">{accessory.description}</p>
                  </div>
                </div>

                {/* Dimensions */}
                {accessory.dimensions && (
                  <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-white">Dimensions</h2>
                    <div className="grid grid-cols-4 gap-3">
                      <div className="bg-white/5 p-3 rounded-lg text-center">
                        <span className="block text-xs text-gray-400">Length</span>
                        <span className="text-white font-medium">
                          {accessory.dimensions.length}
                          {accessory.dimensions.unit}
                        </span>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg text-center">
                        <span className="block text-xs text-gray-400">Width</span>
                        <span className="text-white font-medium">
                          {accessory.dimensions.width}
                          {accessory.dimensions.unit}
                        </span>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg text-center">
                        <span className="block text-xs text-gray-400">Height</span>
                        <span className="text-white font-medium">
                          {accessory.dimensions.height}
                          {accessory.dimensions.unit}
                        </span>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg text-center">
                        <span className="block text-xs text-gray-400">Unit</span>
                        <span className="text-white font-medium">{accessory.dimensions.unit}</span>
                      </div>
                    </div>
                  </div>
                )}
              </section>
            </div>
          </div>

          {/* Compatible Products Section */}
          {compatibleProducts.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold text-white mb-6">Compatible Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {compatibleProducts.map((product) => (
                  <ProductCard key={product._id} product={product} brands={brands} layout="grid" />
                ))}
              </div>
            </section>
          )}
        </main>
        <Footer />
      </div>
    </>
  )
}

