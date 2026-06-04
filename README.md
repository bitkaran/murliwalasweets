# 🪔 Murliwala Sweets Website

A premium, fully responsive, and visually stunning Next.js web application designed for **Murliwala Sweets**, a traditional Indian sweets and snacks shop located in Jhunjhunu, Rajasthan. 

The website blends traditional Rajasthani aesthetic themes with a modern, high-end digital identity, optimized to drive local foot traffic and WhatsApp/call orders.

---

## 🌐 Live Preview
* **URL**: `Coming soon / Add Vercel URL here`

---

## 🛠️ Tech Stack

This project is built using a modern, performance-first frontend stack:

| Technology | Purpose |
| :--- | :--- |
| **Next.js 16 (App Router)** | Framework for static prerendering, routing, and fast load times. |
| **TypeScript** | Enforces type safety, solid interfaces, and clean code. |
| **Tailwind CSS v4** | CSS-first custom utility themes (Crimson, Gold, Cream) and animations. |
| **Framer Motion** | Fluid scroll entrance animations, hover states, and client interactions. |
| **Lucide React** | Premium icon pack for markers, CTAs, and lists. |
| **JSON-LD Schema** | Embedded Local Business (`SweetShop`) semantic markup for Local SEO. |

---

## ✨ Main Features

* **Cinematic Hero**: Immersive hero overlay, responsive text slide-ins, and three call-to-action buttons (Call, WhatsApp, Directions).
* **Responsive Sticky Navbar**: Floating glassmorphism navbar that adapts on scroll, complete with an elegant mobile drawer menu.
* **Our Story**: Rich heritage section detailing the shop's history, commitment to purity, and local community legacy.
* **Legendary Specialties**: Highlighted signature items (Rabdi, Kesar Peda, Malpua, Jalebi) showcasing pure Desi Ghee badges and pre-filled WhatsApp messaging.
* **Interactive Menu Showcase**: Tabbed catalog (Sweets, Snacks, Namkeen, Festive) with smooth Framer Motion height/layout transitions.
* **Festive & Bulk Orders Banner**: Elegant promotion of gift boxes for corporate events and catering services.
* **Pinterest Masonry Gallery**: A dynamic filterable gallery showcasing counter photos and sweets preparation.
* **Why Families Trust Us**: Value pillars (Purity, Freshness, Legacy Recipes, Hygiene) alongside sample customer review highlights (to be verified with real Google reviews before final launch).
* **Store Locator & Embedded Maps**: Landmarking instructions ("opposite Kamal Heights, in the lane opposite Axis Bank") next to an interactive Google Map iframe.
* **Persistent Floating WhatsApp FAB**: Pulse-animated button positioned in the screen corner to convert visitors.

---

## 📍 Business Details Used

* **Name**: Murliwala Sweets
* **Address**: Near Satyam Residency, Opposite Kamal Heights, Axis Bank ke samne wali gali, Fauz Ka Mohalla, Jhunjhunu – 333001, Rajasthan
* **Phone / WhatsApp**: `+91 98283 57226`
* **Google Maps Coordinates**: `28.1249054, 75.4048634`
* **Core Specialties**: Rabdi, Chamcham, Sandesh, Kesar Peda, Malpua, Imarti, Jalebi, Samosa, Bread Kofta, Khaman Dhokla, Saag Rota, Gud Kachori, Desi Ghee Cookies, Rajasthani Mix Namkeen, Matar Suhal, Puff Khari, Gujiya.

---

## 🚀 Installation & Local Development

To run the codebase on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bitkaran/murliwalasweets.git
   cd murliwalasweets
   ```

2. **Install all dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Verify production compilation**:
   ```bash
   npm run build
   npm run start
   ```

---

## 📸 Image Replacement Guide

All graphics are currently utilizing high-quality, lightweight royalty-free placeholder images from Unsplash. To change these with real business images:

1. Collect high-resolution JPEG/PNG photographs of the shop facade, counters, sweet preparation, and packaging. Make sure you have verified permissions from the owner before final use.
2. Place the image files inside the `/public/images/` folder (e.g., `public/images/shop-front.jpg`).
3. Open the central data file at [`lib/data.ts`](./lib/data.ts).
4. Update the `image` attributes of `MENU_ITEMS` or `GALLERY_ITEMS` to refer to your local path:
   ```typescript
   // Example update:
   image: "/images/shop-front.jpg"
   ```

---

## ✍️ Content & Copy Update Guide

To modify prices, item descriptions, phone numbers, or coordinates, **do not edit the layout code**. Instead, simply update [`lib/data.ts`](./lib/data.ts):

* **Business Info**: Modify `BUSINESS_INFO` parameters to change address text, phone numbers, WhatsApp URL strings, and embedded map link sources.
* **Menu Items**: Edit the `MENU_ITEMS` array. You can adjust the name, price tag (e.g., `₹480 / kg`), description, category type, and flags like `isDesiGhee` or `isSpecial`.
* **Gallery**: Edit the `GALLERY_ITEMS` array to include new photos or categories.
* **Testimonials**: Update the `TESTIMONIALS` array with new Google review quotes.

---

## ⚡ Deployment to Vercel

The website is optimized for one-click Vercel deployments:

1. Push your latest code changes to your GitHub repository:
   ```bash
   git add .
   git commit -m "Initial commit: Murliwala Sweets website"
   git push origin main
   ```
2. Log in to [Vercel](https://vercel.com).
3. Select **Add New Project**, import the `murliwalasweets` repository.
4. Vercel will auto-detect Next.js. Keep defaults and click **Deploy**.
5. Assign your custom domain name (e.g. `www.murliwalasweets.com`) inside Vercel project settings.

---

## 📋 Owner Confirmation Checklist

Before deploying the final build to a custom domain, double-check these details with the shop owner:
- [ ] **Operational Hours**: Validate if `07:00 AM - 10:00 PM (Everyday)` is correct.
- [ ] **Precise Price Tags**: Review the menu pricing array in `lib/data.ts` to matches current shop rates.
- [ ] **Social Media Channels**: Add real links to the shop's Facebook, Instagram, or Google Maps profile if available.
- [ ] **FSSAI / GST Registrations**: Confirm if they want to display food safety certificate numbers in the footer.
- [ ] **Delivery / Catering Policies**: Review the bulk order description copy to align with their actual logistics capacities.
