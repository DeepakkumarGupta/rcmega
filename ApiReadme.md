# RCMega API Documentation

## Overview

This RESTful API serves as the backend for the RCMega e-commerce platform, specializing in remote-controlled models, accessories, and spare parts. Built using **Express.js**, **Node.js**, and **TypeScript**, with **Mongoose** for MongoDB integration, it follows a modular architecture with clear separation of concerns.

## Base URL

```
https://api.rcmega.com
```

## Project Structure

```
src/
├── config/             # Configuration files
├── controllers/        # Request handlers
├── middlewares/        # Express middlewares
├── models/             # Mongoose models
├── routes/             # API routes
├── services/           # Business logic
├── types/              # TypeScript interfaces
├── utils/              # Utility functions
├── app.ts              # Express application setup
└── server.ts           # Entry point
```

## Key Features

- **JWT Authentication** with role-based access control
- **RESTful API Design** with consistent endpoints
- **MongoDB with Mongoose** for structured data handling
- **Comprehensive Error Handling** for robust error management
- **Secure Middleware** for authentication, validation, and more
- **CORS Support** for cross-origin requests
- **Image & Media Management** for product visuals
- **Custom Data Validation** for request integrity

## Authentication

The API uses JWT (JSON Web Token) for authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your_token>
```

### Authentication Endpoints

#### Register a new user
- **URL**: `/api/auth/register`
- **Method**: `POST`
- **Authentication**: None
- **Request Body**:
  ```json
  {
    "name": "User Name",
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**: 
  ```json
  {
    "success": true,
    "data": {
      "user": {
        "id": "user_id",
        "name": "User Name",
        "email": "user@example.com",
        "role": "user",
        "isActive": true,
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z"
      },
      "token": "jwt_token"
    }
  }
  ```

#### Login
- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Authentication**: None
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "data": {
      "user": {
        "id": "user_id",
        "name": "User Name",
        "email": "user@example.com",
        "role": "user",
        "isActive": true,
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z"
      },
      "token": "jwt_token"
    }
  }
  ```

#### Get current user
- **URL**: `/api/auth/me`
- **Method**: `GET`
- **Authentication**: Required
- **Response**:
  ```json
  {
    "success": true,
    "data": {
      "id": "user_id",
      "name": "User Name",
      "email": "user@example.com",
      "role": "user",
      "isActive": true,
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    }
  }
  ```

## User Management

### User Model

```typescript
{
  id: string;                         // MongoDB ObjectId
  name: string;                       // User's full name
  email: string;                      // User's email address (unique)
  password: string;                   // Hashed password (not returned in responses)
  role: "user" | "admin";             // User's role
  isActive: boolean;                  // Whether the account is active
  createdAt: Date;                    // When the user was created
  updatedAt: Date;                    // When the user was last updated
}
```

### User Endpoints

#### Get all users (Admin only)
- **URL**: `/api/users`
- **Method**: `GET`
- **Authentication**: Required (Admin)
- **Response**:
  ```json
  {
    "success": true,
    "count": 2,
    "data": [
      {
        "id": "user_id_1",
        "name": "User One",
        "email": "user1@example.com",
        "role": "user",
        "isActive": true,
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z"
      },
      {
        "id": "user_id_2",
        "name": "User Two",
        "email": "user2@example.com",
        "role": "admin",
        "isActive": true,
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z"
      }
    ]
  }
  ```

#### Get user by ID
- **URL**: `/api/users/:id`
- **Method**: `GET`
- **Authentication**: Required (Admin or owner)
- **Response**:
  ```json
  {
    "success": true,
    "data": {
      "id": "user_id",
      "name": "User Name",
      "email": "user@example.com",
      "role": "user",
      "isActive": true,
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    }
  }
  ```

#### Update user
- **URL**: `/api/users/:id`
- **Method**: `PUT`
- **Authentication**: Required (Admin or owner)
- **Request Body**:
  ```json
  {
    "name": "Updated Name",
    "role": "admin"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "data": {
      "id": "user_id",
      "name": "Updated Name",
      "email": "user@example.com",
      "role": "admin",
      "isActive": true,
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-02T00:00:00.000Z"
    }
  }
  ```

#### Delete user
- **URL**: `/api/users/:id`
- **Method**: `DELETE`
- **Authentication**: Required (Admin)
- **Response**:
  ```json
  {
    "success": true,
    "data": {}
  }
  ```

## Product Management

### Product Model

```typescript
{
  id: string;                         // MongoDB ObjectId
  name: string;                       // Product name
  sku: string;                        // Stock keeping unit (unique)
  description: string;                // Product description
  categories: string[];               // Array of category IDs
  brand: string;                      // Brand ID reference
  color: string;                      // Product color
  modelCode: string;                  // Model code
  scale: string;                      // Scale of the model
  stock: number;                      // Available stock quantity
  OutOfStock: boolean;                // Whether product is out of stock
  price: number;                      // Product price
  slug: string;                       // URL-friendly identifier (unique)
  media: [                            // Array of media items
    {
      type: "image" | "video" | "instagram"; // Media type
      url: string;                    // URL to the media
      mediaId: string | undefined;    // ID of the media in storage
    }
  ],
  socialLinks: {                      // Social media links
    instagram?: string;
    facebook?: string;
    youtube?: string;
  },
  technicalSpecs: string[];           // Array of technical specifications
  weight: number;                     // Product weight
  dimensions: {                       // Product dimensions
    length: number;
    width: number;
    height: number;
    unit: "mm" | "cm" | "in";
  },
  createdAt: Date;                    // When the product was created
  updatedAt: Date;                    // When the product was last updated
}
```

### Product Endpoints

#### Create product
- **URL**: `/api/products`
- **Method**: `POST`
- **Authentication**: Required
- **Request Body**:
  ```json
  {
    "name": "RC Car Model X",
    "sku": "RC-CAR-001",
    "description": "High-performance RC car model",
    "categories": ["category_id_1", "category_id_2"],
    "brand": "brand_id",
    "color": "Red",
    "modelCode": "MCX-001",
    "scale": "1:10",
    "stock": 100,
    "price": 299.99,
    "slug": "rc-car-model-x",
    "media": [
      {
        "type": "image",
        "url": "https://example.com/image.jpg",
        "mediaId": "media_id_1"
      }
    ],
    "socialLinks": {
      "instagram": "https://instagram.com/product",
      "facebook": "https://facebook.com/product",
      "youtube": "https://youtube.com/product"
    },
    "technicalSpecs": ["Spec 1", "Spec 2"],
    "weight": 1.5,
    "dimensions": {
      "length": 30,
      "width": 15,
      "height": 10,
      "unit": "cm"
    }
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "data": {
      "id": "product_id",
      "name": "RC Car Model X",
      "sku": "RC-CAR-001",
      "description": "High-performance RC car model",
      "categories": ["category_id_1", "category_id_2"],
      "brand": "brand_id",
      "color": "Red",
      "modelCode": "MCX-001",
      "scale": "1:10",
      "stock": 100,
      "OutOfStock": false,
      "price": 299.99,
      "slug": "rc-car-model-x",
      "media": [
        {
          "type": "image",
          "url": "https://example.com/image.jpg",
          "mediaId": "media_id_1"
        }
      ],
      "socialLinks": {
        "instagram": "https://instagram.com/product",
        "facebook": "https://facebook.com/product",
        "youtube": "https://youtube.com/product"
      },
      "technicalSpecs": ["Spec 1", "Spec 2"],
      "weight": 1.5,
      "dimensions": {
        "length": 30,
        "width": 15,
        "height": 10,
        "unit": "cm"
      },
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    }
  }
  ```

#### Get all products
- **URL**: `/api/products`
- **Method**: `GET`
- **Authentication**: None
- **Query Parameters**:
  - `brand`: Filter by brand ID
  - `minPrice`: Minimum price filter
  - `maxPrice`: Maximum price filter
  - `outOfStock`: Filter by stock status (true/false)
- **Response**:
  ```json
  {
    "success": true,
    "count": 2,
    "data": [
      {
        "id": "product_id_1",
        "name": "RC Car Model X",
        "sku": "RC-CAR-001",
        "description": "High-performance RC car model",
        "categories": ["category_id_1", "category_id_2"],
        "brand": "brand_id",
        "color": "Red",
        "modelCode": "MCX-001",
        "scale": "1:10",
        "stock": 100,
        "OutOfStock": false,
        "price": 299.99,
        "slug": "rc-car-model-x",
        "media": [...],
        "socialLinks": {...},
        "technicalSpecs": [...],
        "weight": 1.5,
        "dimensions": {...},
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z"
      },
      {
        "id": "product_id_2",
        "name": "RC Helicopter Model Y",
        "sku": "RC-HELI-001",
        "description": "Advanced RC helicopter model",
        "categories": ["category_id_3"],
        "brand": "brand_id",
        "color": "Black",
        "modelCode": "MHY-001",
        "scale": "1:8",
        "stock": 50,
        "OutOfStock": false,
        "price": 399.99,
        "slug": "rc-helicopter-model-y",
        "media": [...],
        "socialLinks": {...},
        "technicalSpecs": [...],
        "weight": 2.0,
        "dimensions": {...},
        "createdAt": "2023-01-02T00:00:00.000Z",
        "updatedAt": "2023-01-02T00:00:00.000Z"
      }
    ]
  }
  ```

#### Get product by ID
- **URL**: `/api/products/:id`
- **Method**: `GET`
- **Authentication**: None
- **Response**: Single product object

#### Get product by slug
- **URL**: `/api/products/slug/:slug`
- **Method**: `GET`
- **Authentication**: None
- **Response**: Single product object

#### Get product with spare parts
- **URL**: `/api/products/:id/spare-parts`
- **Method**: `GET`
- **Authentication**: None
- **Response**:
  ```json
  {
    "success": true,
    "data": {
      "id": "product_id",
      "name": "RC Car Model X",
      "... other product fields": "...",
      "compatibleSpareParts": [
        {
          "id": "spare_part_id_1",
          "name": "Spare Wheel",
          "... other spare part fields": "..."
        },
        {
          "id": "spare_part_id_2",
          "name": "Motor Replacement",
          "... other spare part fields": "..."
        }
      ]
    }
  }
  ```

#### Get product with accessories
- **URL**: `/api/products/:id/accessories`
- **Method**: `GET`
- **Authentication**: None
- **Response**:
  ```json
  {
    "success": true,
    "data": {
      "id": "product_id",
      "name": "RC Car Model X",
      "... other product fields": "...",
      "compatibleAccessories": [
        {
          "id": "accessory_id_1",
          "name": "Controller Upgrade",
          "... other accessory fields": "..."
        },
        {
          "id": "accessory_id_2",
          "name": "Battery Pack",
          "... other accessory fields": "..."
        }
      ]
    }
  }
  ```

#### Get complete product info
- **URL**: `/api/products/:id/complete`
- **Method**: `GET`
- **Authentication**: None
- **Response**:
  ```json
  {
    "success": true,
    "data": {
      "id": "product_id",
      "name": "RC Car Model X",
      "... other product fields": "...",
      "compatibleSpareParts": [...],
      "compatibleAccessories": [...]
    }
  }
  ```

#### Update product
- **URL**: `/api/products/:id`
- **Method**: `PUT`
- **Authentication**: Required
- **Request Body**: Same as Create Product (all fields optional)
- **Response**: Updated product object

#### Delete product
- **URL**: `/api/products/:id`
- **Method**: `DELETE`
- **Authentication**: Required
- **Response**:
  ```json
  {
    "success": true,
    "data": {}
  }
  ```

## Accessory Management

### Accessory Model

```typescript
{
  id: string;                         // MongoDB ObjectId
  name: string;                       // Accessory name
  slug: string;                       // URL-friendly identifier (unique)
  sku: string;                        // Stock keeping unit (unique)
  price: number;                      // Accessory price
  stock: number;                      // Available stock quantity
  outOfStock: boolean;                // Whether accessory is out of stock
  categories: string[];               // Array of category IDs
  compatibleProductIds: string[];     // Array of compatible product IDs
  brand: string;                      // Brand ID reference
  description: string;                // Accessory description
  media: [                            // Array of media items
    {
      type: "image" | "video";        // Media type
      url: string;                    // URL to the media
      mediaId: string | undefined;    // ID of the media in storage
    }
  ],
  weight: number;                     // Accessory weight
  dimensions: {                       // Accessory dimensions
    length: number;
    width: number;
    height: number;
    unit: "mm" | "cm" | "in";
  },
  createdAt: Date;                    // When the accessory was created
  updatedAt: Date;                    // When the accessory was last updated
}
```

### Accessory Endpoints

- **Create**: `POST /api/accessories`
- **Get All**: `GET /api/accessories`
- **Get by ID**: `GET /api/accessories/:id`
- **Get by Slug**: `GET /api/accessories/slug/:slug`
- **Get for Product**: `GET /api/accessories/product/:productId`
- **Update**: `PUT /api/accessories/:id`
- **Delete**: `DELETE /api/accessories/:id`

Request and response formats follow the same pattern as Product endpoints.

## Spare Part Management

### Spare Part Model

```typescript
{
  id: string;                         // MongoDB ObjectId
  name: string;                       // Spare part name
  slug: string;                       // URL-friendly identifier (unique)
  sku: string;                        // Stock keeping unit (unique)
  price: number;                      // Spare part price
  stock: number;                      // Available stock quantity
  outOfStock: boolean;                // Whether spare part is out of stock
  categories: string[];               // Array of category IDs
  compatibleProductIds: string[];     // Array of compatible product IDs
  brand: string;                      // Brand ID reference
  description: string;                // Spare part description
  media: [                            // Array of media items
    {
      type: "image" | "video";        // Media type
      url: string;                    // URL to the media
      mediaId: string | undefined;    // ID of the media in storage
    }
  ],
  weight: number;                     // Spare part weight
  dimensions: {                       // Spare part dimensions
    length: number;
    width: number;
    height: number;
    unit: "mm" | "cm" | "in";
  },
  createdAt: Date;                    // When the spare part was created
  updatedAt: Date;                    // When the spare part was last updated
}
```

### Spare Part Endpoints

- **Create**: `POST /api/spare-parts`
- **Get All**: `GET /api/spare-parts`
- **Get by ID**: `GET /api/spare-parts/:id`
- **Get by Slug**: `GET /api/spare-parts/slug/:slug`
- **Get for Product**: `GET /api/spare-parts/product/:productId`
- **Update**: `PUT /api/spare-parts/:id`
- **Delete**: `DELETE /api/spare-parts/:id`

Request and response formats follow the same pattern as Product endpoints.

## Brand Management

### Brand Model

```typescript
{
  id: string;                         // MongoDB ObjectId
  name: string;                       // Brand name
  logo: string;                       // URL to brand logo
  logoMediaId: string;                // ID of the logo media in storage
  createdAt: Date;                    // When the brand was created
  updatedAt: Date;                    // When the brand was last updated
}
```

### Brand Endpoints

#### Create brand
- **URL**: `/api/brands`
- **Method**: `POST`
- **Authentication**: Required
- **Request Body**:
  ```json
  {
    "name": "XYZ RC",
    "logo": "https://example.com/logo.jpg",
    "logoMediaId": "media_id_1"
  }
  ```
- **Response**: Brand object with created timestamps

#### Get all brands
- **URL**: `/api/brands`
- **Method**: `GET`
- **Authentication**: None
- **Response**: Array of brand objects

#### Get brand by ID
- **URL**: `/api/brands/:id`
- **Method**: `GET`
- **Authentication**: None
- **Response**: Single brand object

#### Update brand
- **URL**: `/api/brands/:id`
- **Method**: `PUT`
- **Authentication**: Required
- **Request Body**: Same as Create Brand (all fields optional)
- **Response**: Updated brand object

#### Delete brand
- **URL**: `/api/brands/:id`
- **Method**: `DELETE`
- **Authentication**: Required
- **Response**: Empty data object

## Category Management

The API includes three types of categories, each with their own endpoints:

1. Product Categories: `/api/categoriesproduct`
2. Accessory Categories: `/api/categoriesaccessory`
3. Spare Part Categories: `/api/categoriessparepart`

### Category Model

```typescript
{
  id: string;                         // MongoDB ObjectId
  name: string;                       // Category name
  logo: string;                       // URL to category logo
  createdAt: Date;                    // When the category was created
  updatedAt: Date;                    // When the category was last updated
}
```

### Category Endpoints

For each category type (`categoriesproduct`, `categoriesaccessory`, `categoriessparepart`):

- **Create**: `POST /api/categories{type}`
- **Get All**: `GET /api/categories{type}`
- **Get by ID**: `GET /api/categories{type}/:id`
- **Update**: `PUT /api/categories{type}/:id`
- **Delete**: `DELETE /api/categories{type}/:id`

## Error Handling

The API uses a standardized error response format:

```json
{
  "success": false,
  "error": {
    "statusCode": 400,
    "message": "Error message details"
  }
}
```

### Common Error Codes:
- **400 Bad Request**: Missing or invalid parameters
- **401 Unauthorized**: Authentication required or invalid credentials
- **403 Forbidden**: Insufficient permissions
- **404 Not Found**: Resource not found
- **409 Conflict**: Resource already exists
- **500 Internal Server Error**: Server-side error

## Getting Started

### Installation

1. Clone the repository:
   ```sh
   git clone <repository_url>
   cd <repository_name>
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/rcmega
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=30d
   ```

4. Start development server:
   ```sh
   npm run dev
   ```

5. Build for production:
   ```sh
   npm run build
   npm start
   ```

## API Testing

You can use tools like Postman, Insomnia, or curl to test the API endpoints.

### Example: Login and Get Products

1. Login to get authentication token:
   ```sh
   curl -X POST https://api.rcmega.com/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email": "admin@rcmega.com", "password": "your_password"}'
   ```

2. Use the token to create a product:
   ```sh
   curl -X POST https://api.rcmega.com/api/products \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_TOKEN" \
     -d '{
       "name": "RC Car Model X",
       "sku": "RC-CAR-001",
       "description": "High-performance RC car model",
       "categories": ["category_id_1"],
       "brand": "brand_id",
       "color": "Red",
       "modelCode": "MCX-001",
       "scale": "1:10",
       "stock": 100,
       "price": 299.99,
       "slug": "rc-car-model-x",
       "media": [{"type": "image", "url": "https://example.com/image.jpg", "mediaId": "media_id_1"}],
       "weight": 1.5
     }'
   ```

## Future Enhancements

- Implementing pagination for all collection endpoints
- Adding advanced search capabilities with filters
- Integrating with a CDN for media storage
- Implementing webhooks for real-time event notifications
- Adding caching layer for improved performance
