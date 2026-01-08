# Ryze AI - Website Redesign (Internship Assignment)

This repository contains the complete redesign of the Ryze AI website, focusing on a modern, high-trust SaaS aesthetic and improved user conversion paths.

## 🚀 Live Demo
**[Insert Your Vercel/Netlify Link Here]**

## 🛠 Tech Stack
*   **Framework**: React (Vite)
*   **Styling**: Pure CSS (CSS Variables, Flexbox/Grid)
*   **Icons**: Lucide-React
*   **Routing**: React Router DOM

---

## 🎨 Design & Structural Decisions

### 1. Design Strategy: "Trust & Clarity"
The primary goal was to shift Ryze AI from a generic landing page to a **Flagship SaaS Product** that instills trust in high-budget marketing teams.

*   **Color Palette (Blue & Slate)**: Switched from aggressive orange to a professional **Royal Blue (`#2563EB`)** and **Slate Gray (`#0F172A`)**. Blue is the standard for trust in fintech and data products.
*   **Typography**: Used `Inter` with **tight letter-spacing (`-0.025em`)** for headings to mimic the crisp, authoritative look of tools like Linear or Vercel.
*   **Card-Based Interface**: Implemented a unified `.card-base` system with consistent borders, padding, and hover lifts to make complex information tangible and organized.

### 2. Information Architecture
We restructured the site into three distinct narratives to reduce cognitive load:

*   **Homepage (The Problem)**: Focuses on "Inefficient Ads" and "Real Results".
*   **How it Works (The Mechanics)**: A chronological Step 1-2-3 flow (Audit -> Bidding -> Creative) to prove the AI isn't a "black box."
*   **Pricing (The Value)**: Explicitly compares Ryze ($299) against Traditional Agencies ($2,500+) to anchor the value.

### 3. User Experience
*   **Mobile-First**: Fully responsive layouts using CSS Grid (`repeat(auto-fit, minmax(...))`) ensure perfect rendering on all devices.
*   **Action-Oriented**: High-contrast "Book a Demo" buttons are strategically placed at the top, middle, and bottom of every conversion path.
