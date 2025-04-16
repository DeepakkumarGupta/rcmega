# API Integration Guide

This document outlines how the RC Mega eCommerce frontend integrates with the ListingAPI backend.

## Overview

The RC Mega eCommerce frontend now fetches product data from the ListingAPI backend instead of using static data files. This allows for dynamic content management and real-time updates.

## API Service

The API integration is implemented in the `lib/api.ts` file, which provides functions for fetching:

- Products
- Accessories
- Spare Parts

## Configuration

The API base URL is configured via environment variables:

```
NEXT_PUBLIC_API_URL=http://localhost:6500/api
```

You can change this in the `.env.local` file to point to your API server.

## API Endpoints Used

The following API endpoints are used:

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/slug/:slug` - Get product by slug

### Accessories

- `GET /api/accessories` - Get all accessories
- `GET /api/accessories/:id` - Get accessory by ID
- `GET /api/accessories/slug/:slug` - Get accessory by slug

### Spare Parts

- `GET /api/spare-parts` - Get all spare parts
- `GET /api/spare-parts/:id` - Get spare part by ID
- `GET /api/spare-parts/slug/:slug` - Get spare part by slug

## Implementation Details

The integration has been implemented in the following components:

1. **Home Page**: Fetches featured products, accessories, and spare parts
2. **Products Page**: Fetches all products with filtering and sorting
3. **Product Detail Page**: Fetches product details along with compatible accessories and spare parts
4. **TopProducts Component**: Fetches products for the featured carousel

## Error Handling

All API requests include error handling with user-friendly error messages and loading states to improve user experience.

## Development

To run the application with the API integration:

1. Start the ListingAPI backend server:
   ```
   # Navigate to the backend repo
   cd /path/to/listingapiforrcmega
   npm run dev
   ```

2. Ensure your `.env.local` file has the correct API URL:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:6500/api
   ```

3. Start the frontend development server:
   ```
   npm run dev
   ```

4. The frontend will now fetch data from the backend API instead of using static data files.

## Troubleshooting

If you encounter issues with the API integration:

1. Check that the backend server is running
2. Verify that the API URL in `.env.local` is correct
3. Check the browser console for error messages
4. Ensure the API endpoints match the expected structure in `lib/api.ts` 