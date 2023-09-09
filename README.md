# Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL.

This is a repository for a Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL

The application is now deployed on vercel. You can find it on https://fullstack-e-commerce-admin-repo.vercel.app

Key Features:

- The admin interface will be built using Shadcn UI, providing a user-friendly design.
- The admin dashboard serves multiple functions, including CMS, admin management, and API handling.
- Through this unified CMS, you can easily manage various vendors and their stores. For instance, you can oversee a "Shoe store," a "Laptop store," and a "Suit store," with dedicated API routes generated for each.
- Full control over categories: creation, updating, and deletion.
- Effortlessly manage products with options for creation, updating, and deletion.
- Enjoy the flexibility of uploading and changing multiple product images whenever needed.
- Conveniently create, modify, and delete filters like "Color" and "Size," seamlessly integrated into the product creation process.
- Craft, edit, and remove attention-grabbing "Billboards" – prominent text sections atop pages. These can be linked to specific categories or used independently, with corresponding API generation in the admin panel.
- Conduct comprehensive searches across categories, products, sizes, colors, and billboards, all with built-in pagination for convenience.
- Showcase certain products on the homepage by designating them as "featured."
- Gain insights into your business operations, including order tracking and sales data.
- Visualize your revenue and other metrics through intuitive graphs and charts.
- Acquire proficiency in Clerk Authentication for enhanced security.
- Seamlessly manage order creation, ensuring a smooth customer experience.
- Implement Stripe checkout for secure and efficient payment processing.
- Incorporate Stripe webhooks for real-time transaction updates.
- Leverage the power of MySQL, Prisma, and PlanetScale to handle your database needs effectively.

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/yagizharman/Fullstack-E-Commerce-Admin-Repo.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
DATABASE_URL=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

```

### Connect to PlanetScale and Push Prisma

```shell
npx prisma generate
npx prisma db push
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
