This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).



## Nakash Jewels - E-commerce Platform

# Project Overview
Nakash Jewels is a modern e-commerce platform for jewelry products, featuring:

Product listing with filters and search

Admin panel for product management

Responsive design for all devices

# Tech Stack
Frontend: Next.js 15 (App Router), React 18, Tailwind CSS

Backend: Next.js API Routes

Database: MongoDB

Deployment: Vercel (recommended)

Other Libraries:

react-toastify (for notifications)

mongoose (for MongoDB interactions)

# Getting Started
Prerequisites
Node.js (v18 or higher)

MongoDB Atlas account or local MongoDB instance

npm or yarn

Installation
Clone the repository:

bash
git clone https://github.com/your-username/nakash-jewels.git
cd nakash-jewels
Install dependencies:

bash
npm install
# or
yarn install
Set up environment variables:
Create a .env.local file in the root directory with:

env
MONGODB_URI=your_mongodb_connection_string
Seed the database (optional):

bash
npm run seed
# or
yarn seed
Running the Development Server
bash
npm run dev
# or
yarn dev
Open http://localhost:3000 in your browser.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
