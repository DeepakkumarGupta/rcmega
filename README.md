# RC MEGA – Next.js E-commerce Platform

This is a modern e-commerce platform for RC vehicles, accessories, and spare parts, built with Next.js (App Router), TypeScript, and Tailwind CSS. It features dynamic product, accessory, and spare part management, with all data fetched from a RESTful API backend.

## Getting Started

### Install dependencies

```bash
npm install
# or
yarn install
```

### Configure environment

Create a `.env` file with:
```
NEXT_PUBLIC_API_URL=http://localhost:6500/api
```
Adjust the API URL as needed for your backend.

### Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- `app/` – Main Next.js app directory (pages, layouts, etc.)
- `components/` – Reusable UI components (Header, ProductCard, etc.)
- `lib/` – API helpers, fonts, and utilities
- `types/` – TypeScript types for products, accessories, etc.
- `public/` – Static assets
- `scripts/` – Utility scripts (e.g., sitemap generation)
- `tailwind.config.ts` – Tailwind CSS configuration

## Key Features

- **Dynamic Data:** All product, accessory, and spare part data is fetched from the backend API (see `lib/api.ts`).
- **Responsive UI:** Mobile-first design with adaptive navigation, grid/list toggles, and dropdowns.
- **SEO & Meta:** Each page sets appropriate meta tags and Open Graph data.
- **Filtering & Sorting:** Products, accessories, and spare parts can be filtered and sorted by category, brand, price, etc.
- **Product Details:** Each product, accessory, and spare part has a dynamic `[slug]` page with images, details, and compatible items.
- **Cart & User Actions:** Cart and login/signup (with dropdown) are available in the header.
- **Loading States:** Skeleton UIs prevent layout shifts and improve perceived performance.
- **Type Safety:** All data models are strongly typed via `types/product.ts`.

## API Integration

- **API Base URL:** Set via `NEXT_PUBLIC_API_URL` (default: `http://localhost:6500/api`)
- **Endpoints Used:**
  - `/products`, `/products/slug/:slug`, `/products/:id/complete`
  - `/accessories`, `/accessories/slug/:slug`
  - `/spare-parts`, `/spare-parts/slug/:slug`
  - `/brands`, `/categoriesproduct`, `/categoriesaccessory`, `/categoriessparepart`
- See `lib/api.ts` for all API helper functions.

## Customization

- **Styling:** Uses Tailwind CSS (see `tailwind.config.ts` and `app/globals.css`).
- **Fonts:** Custom fonts loaded via `lib/fonts.ts`.
- **Navigation:** Easily adjust nav items in `components/Header.tsx`.
- **Product Cards:** Customize card layouts in `ProductCard.tsx`, `accessory-card.tsx`, and `spare-part-card.tsx`.

## Deployment

- **Vercel:** Ready for deployment on Vercel or any Node.js hosting.
- **Sitemap:** `scripts/generate-sitemap.ts` generates a sitemap for SEO.

## Contributing

- Fork the repo and create a feature branch.
- Ensure all code is type-safe and passes linting.
- Submit a pull request with a clear description.

## License

This project is for RC MEGA and is not open source for commercial use.

For more details, see the API documentation in `ApiReadme.md`.
