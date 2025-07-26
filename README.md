# 💼 Personal Portfolio Website

A modern, responsive, and fully functional developer portfolio website built with [Next.js](https://nextjs.org/) and styled using [Tailwind CSS](https://tailwindcss.com/). The site includes interactive animations via [Framer Motion](https://www.framer.com/motion/), a working contact form powered by [EmailJS](https://www.emailjs.com/) with spam protection using [Google reCAPTCHA](https://www.google.com/recaptcha/), and beautiful UI elements from [shadcn/ui](https://ui.shadcn.dev/).

### 🚀 Live Demo
👉 [View Website on Vercel](https://my-portfolio-site-theta-five.vercel.app/)

---

## ✨ Features

- 🔥 Built with Next.js 14 (App Router)
- 🎨 Styled using Tailwind CSS
- 💌 Contact form integrated with EmailJS
- ✅ Google reCAPTCHA v2 for spam protection
- ⚡️ Smooth animations using Framer Motion
- 🧩 Reusable components with shadcn/ui
- 📱 Fully responsive design
- 🌙 Dark mode support (optional if implemented)
- 🧠 Clean and well-organized codebase

---


## 🛠️ Tech Stack

- **Frontend:** Next.js, Tailwind CSS
- **UI Library:** shadcn/ui
- **Animations:** Framer Motion
- **Form Handling:** EmailJS
- **Security:** Google reCAPTCHA v2
- **Deployment:** Vercel

---

## 🧰 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/MEETparmar230/MyPortfolioSite
cd portfolio
```

### 2. Install dependencies

```bash
npm install
# or
pnpm install
```

### 3. Configure Environment Variables

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
RECAPTCHA_SECRET_KEY=your_secret_key
```

### 4. Run the development server

```bash
npm run dev
# or
ppnpm run dev
```

## 📬 Contact Form Setup

The contact form is powered by EmailJS and protected by Google reCAPTCHA v2.

    Setup your EmailJS account: https://www.emailjs.com/docs

    Add reCAPTCHA site keys: https://www.google.com/recaptcha/admin


## 📦 Deployment

This site is deployed with Vercel. Push your code to GitHub and link the repository on vercel.com for seamless CI/CD.

```bash
# To build locally
npm run build
```

## 🙋‍♂️ Author

Meet Parmar
