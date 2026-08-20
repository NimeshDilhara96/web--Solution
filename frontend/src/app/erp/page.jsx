"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ShoppingCart,
  Users,
  Package,
  BarChart3,
  UserPlus,
  CreditCard,
  AlertTriangle,
  MessageSquareX,
  ClipboardList,
  TrendingDown,
  Zap,
  History,
  Bell,
  Wallet,
  PieChart,
  Building2,
  Mail,
  Phone,
  MessageCircle,
  Send,
  Globe,
  Moon,
  Sun,
  Menu,
  X,
  ArrowRight,
  Play,
  LayoutDashboard,
  FileText,
  Settings,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import "./erp.css";

/* Inline SVG social icons (removed from recent lucide-react) */
const FacebookIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const GithubIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

/* ================================================================
   TRANSLATIONS — English & Sinhala
   ================================================================ */
const translations = {
  en: {
    // Nav
    navHome: "Home",
    navFeatures: "Features",
    navHowItWorks: "How it Works",
    navChangelog: "Changelog",
    navContact: "Contact",
    navCta: "Get Started",

    // Hero

    heroTitle1: "Manage Your Business Orders",
    heroTitle2: "Smarter & Faster",
    heroSub:
      "Stop losing WhatsApp and Facebook orders. OrderFlow ERP brings all your orders, customers, and inventory into one powerful system — so nothing falls through the cracks.",
    heroBtn1: "Start Free Now",
    heroBtn2: "Open Dashboard",

    // Problem
    problemLabel: "The Problem",
    problemTitle: "Are You Losing Orders Every Day?",
    problemSub:
      "If you're managing your shop through WhatsApp and Facebook, you're likely facing these costly problems:",
    problems: [
      {
        title: "Missing WhatsApp / Facebook Orders",
        desc: "Messages get buried. Orders are forgotten. Customers get frustrated and go to your competitors.",
      },
      {
        title: "Hard to Track Customers",
        desc: "No way to see a customer's order history, preferences, or pending payments. Every order starts from scratch.",
      },
      {
        title: "Manual Inventory Mistakes",
        desc: "Overselling items you don't have. Running out of stock without knowing. Wasting money on excess inventory.",
      },
      {
        title: "No Proper Sales Tracking",
        desc: "You don't know your daily revenue, top-selling items, or profit margins. Running your business in the dark.",
      },
    ],

    // Solution
    solutionLabel: "The Solution",
    solutionTitle: "Everything You Need in One Platform",
    solutionSub:
      "OrderFlow ERP is a complete business management system designed specifically for Sri Lankan shop owners.",
    solutions: [
      {
        title: "Order Management System",
        desc: "Create, track, and manage all customer orders from a single dashboard. Never miss an order again.",
      },
      {
        title: "Customer Tracking",
        desc: "Full customer profiles with order history, contact details, and payment records.",
      },
      {
        title: "Inventory Control",
        desc: "Real-time stock levels, low-stock alerts, and automatic inventory updates when orders are placed.",
      },
      {
        title: "Sales Reports",
        desc: "Daily, weekly, and monthly reports with visual charts. Know exactly how your business is performing.",
      },
      {
        title: "Multi-user Staff System",
        desc: "Add your team members with role-based access. Track who handled what order.",
      },
      {
        title: "COD & Payment Tracking",
        desc: "Track Cash on Delivery orders, partial payments, and outstanding balances effortlessly.",
      },
    ],

    // Dashboard
    dashLabel: "Dashboard Preview",
    dashTitle: "Your Business at a Glance",
    dashSub:
      "A powerful dashboard that gives you instant insights into your business performance.",
    dashStats: [
      { label: "Today Orders", value: "47", change: "+12%", up: true },
      { label: "Revenue", value: "Rs. 125,400", change: "+8.5%", up: true },
      { label: "Pending", value: "12", change: "-3", up: false },
      { label: "Returned", value: "3", change: "-2", up: true },
    ],
    dashChartTitle: "Weekly Revenue",
    dashSidebarItems: [
      "Dashboard",
      "Orders",
      "Customers",
      "Inventory",
      "Reports",
      "Settings",
    ],

    // Features
    featuresLabel: "Features",
    featuresTitle: "Built for Speed and Simplicity",
    featuresSub:
      "Every feature is designed to save you time and help you grow your business.",
    features: [
      {
        title: "Real-time Order Tracking",
        desc: "Track every order from creation to delivery. Get instant status updates and notifications.",
      },
      {
        title: "Customer History Panel",
        desc: "View complete order history, communication logs, and purchase patterns for each customer.",
      },
      {
        title: "Smart Inventory Alerts",
        desc: "Automated alerts when stock runs low. Never oversell or run out of popular items again.",
      },
      {
        title: "COD Management System",
        desc: "Track COD orders separately. Manage partial payments and reconcile deliveries easily.",
      },
      {
        title: "Analytics Dashboard",
        desc: "Beautiful charts and reports showing your sales trends, top products, and growth metrics.",
      },
      {
        title: "Multi-tenant SaaS Support",
        desc: "Each shop gets its own secure workspace. Perfect for scaling to multiple business locations.",
      },
    ],

    // Architecture
    archLabel: "System Architecture",
    archTitle: "One Platform. Every Workflow.",
    archSub:
      "OrderFlow is a multi-tenant SaaS built so that every shop owner gets two powerful wings: a back-office ERP and a customer-facing Online Store — all powered by the same secure backend.",
    archCards: [
      {
        color: "#63d7e0",
        icon: "🏗️",
        title: "One Shared Platform",
        desc: "Every business registers as a Tenant on the OrderFlow Platform. Your data is fully isolated — secure, private, and yours alone.",
      },
      {
        color: "#f2d449",
        icon: "⚡",
        title: "Two Powerful Workflows",
        desc: "Your team uses the ERP side to manage Products, Orders, Inventory & Customers. Meanwhile, shoppers browse your Public Website, hit SEO pages, place Customer Orders, and Checkout — all in one place.",
      },
      {
        color: "#b18cff",
        icon: "🔗",
        title: "One Unified Backend",
        desc: "Both the ERP and the Online Store read from the same OrderFlow Backend. Stock updates instantly when an order lands from any channel — no sync, no duplicate entries.",
      },
    ],
    archLegend: [
      { color: "#f2d449", label: "Domain grouping" },
      { color: "#63d7e0", label: "Core service" },
      { color: "#ff6fae", label: "Customer-facing surface" },
      { color: "#ff9d5c", label: "Storefront service" },
      { color: "#eceef1", label: "Shared resource" },
    ],

    // Release CTA
    comingSoonTitle: "Release v1.0.2 — Now in Public Testing",
    comingSoonSub:
      "OrderFlow ERP v1.0.2 is live for public testing. Try the full ERP dashboard — manage orders, customers, inventory, and reports. Free to use. No credit card required.",
    comingSoonBtn: "Try v1.0.2 Now",
    changelogTitle: "What's in v1.0.2",
    changelog: [
      { type: "new", text: "Products & Inventory management" },
      { type: "new", text: "Orders & Customers module" },
      { type: "new", text: "Reports & Analytics dashboard" },
      { type: "new", text: "Staff & Permissions system" },
      { type: "new", text: "COD & Payment Tracking" },
      { type: "soon", text: "Online Storefront — coming in v2.0" },
    ],

    // Contact
    contactLabel: "Contact Us",
    contactTitle: "Get in Touch",
    contactSub:
      "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    contactNamePlaceholder: "Your Name",
    contactEmailPlaceholder: "Your Email",
    contactMsgPlaceholder: "Your Message",
    contactSendBtn: "Send Message",
    contactEmailLabel: "Email",
    contactPhoneLabel: "Phone",
    contactWhatsAppLabel: "WhatsApp",

    // Footer
    footerTagline: "Smart Business Management for Everyone",
    footerCopyright: `© ${new Date().getFullYear()} OrderFlow ERP. All rights reserved.`,
  },

  si: {
    // Nav
    navHome: "මුල් පිටුව",
    navFeatures: "විශේෂාංග",
    navHowItWorks: "ක්‍රියාකාරිත්වය",
    navChangelog: "Changelog",
    navContact: "සම්බන්ධ වන්න",
    navCta: "ආරම්භ කරන්න",

    // Hero
    heroBadge: "🚀 Release v1.0.2 — Public Testing Live",
    heroTitle1: "ඔබේ ව්‍යාපාරයේ orders",
    heroTitle2: "smart ලෙස manage කරන්න",
    heroSub:
      "WhatsApp සහ Facebook orders මඟ හැරෙනවාද? OrderFlow ERP මඟින් ඔබේ සියලුම orders, customers සහ inventory එක system එකකට ගෙනත් කිසිම දෙයක් මඟ නොහැරෙන බව සහතික කරයි.",
    heroBtn1: "දැන්ම නොමිලේ ආරම්භ කරන්න",
    heroBtn2: "Dashboard විවෘත කරන්න",

    // Problem
    problemLabel: "ගැටලුව",
    problemTitle: "ඔබ සෑම දිනකම orders අහිමි කරනවාද?",
    problemSub:
      "ඔබ WhatsApp සහ Facebook හරහා ව්‍යාපාරය කළමනාකරණය කරනවා නම්, මෙම ගැටලු ඔබට බලපානවා ඇති:",
    problems: [
      {
        title: "WhatsApp / Facebook orders මඟ හැරීම",
        desc: "Messages ගොඩ ගැසෙනවා. Orders අමතක වෙනවා. Customers කලකිරෙනවා, තරඟකාරී වෙත යනවා.",
      },
      {
        title: "Customers track කිරීම අපහසුයි",
        desc: "Customer order history, preferences, pending payments බලන්න ක්‍රමයක් නැහැ. සෑම order එකක්ම මුල සිට ආරම්භ වෙනවා.",
      },
      {
        title: "Manual inventory වැරදි",
        desc: "නැති භාණ්ඩ විකුණනවා. Stock එක ඉවර වෙද්දී දැනගන්නේ නැහැ. අනවශ්‍ය stock එක නිසා මුදල් නාස්තිය.",
      },
      {
        title: "නිසි sales tracking එකක් නැත",
        desc: "ඔබේ daily revenue, top-selling items, profit margins ගැන ඔබ නොදනී. ව්‍යාපාරය අන්ධකාරයේ ධාවනය වෙනවා.",
      },
    ],

    // Solution
    solutionLabel: "විසඳුම",
    solutionTitle: "ඔබට අවශ්‍ය සියල්ල එක platform එකක",
    solutionSub:
      "OrderFlow ERP ශ්‍රී ලංකාවේ shop owners සඳහා විශේෂයෙන් නිර්මාණය කළ සම්පූර්ණ business management system එකකි.",
    solutions: [
      {
        title: "Order Management System",
        desc: "එක dashboard එකෙන් සියලුම customer orders සාදන්න, track කරන්න, manage කරන්න. කිසිම order එකක් මඟ හරින්නේ නැහැ.",
      },
      {
        title: "Customer Tracking",
        desc: "Order history, contact details, payment records සමඟ සම්පූර්ණ customer profiles.",
      },
      {
        title: "Inventory Control",
        desc: "Real-time stock levels, low-stock alerts, orders place කරන විට automatic inventory updates.",
      },
      {
        title: "Sales Reports",
        desc: "Visual charts සමඟ daily, weekly, monthly reports. ඔබේ business perform වෙන විදිය හරියටම දැනගන්න.",
      },
      {
        title: "Multi-user Staff System",
        desc: "Role-based access සමඟ team members add කරන්න. කවුද order එක handle කළේ track කරන්න.",
      },
      {
        title: "COD & Payment Tracking",
        desc: "Cash on Delivery orders, partial payments, outstanding balances පහසුවෙන් track කරන්න.",
      },
    ],

    // Dashboard
    dashLabel: "Dashboard Preview",
    dashTitle: "ඔබේ ව්‍යාපාරය එක බැල්මකින්",
    dashSub:
      "ඔබේ business performance ගැන ක්ෂණික insights ලබා දෙන බලවත් dashboard එකක්.",
    dashStats: [
      { label: "අද Orders", value: "47", change: "+12%", up: true },
      { label: "ආදායම", value: "Rs. 125,400", change: "+8.5%", up: true },
      { label: "Pending", value: "12", change: "-3", up: false },
      { label: "Return", value: "3", change: "-2", up: true },
    ],
    dashChartTitle: "සතිපතා ආදායම",
    dashSidebarItems: [
      "Dashboard",
      "Orders",
      "Customers",
      "Inventory",
      "Reports",
      "Settings",
    ],

    // Features
    featuresLabel: "විශේෂාංග",
    featuresTitle: "වේගය සහ සරල බව සඳහා නිර්මාණය කළ",
    featuresSub:
      "සෑම feature එකක්ම ඔබේ කාලය ඉතිරි කිරීමට සහ ව්‍යාපාරය වර්ධනය කිරීමට නිර්මාණය කර ඇත.",
    features: [
      {
        title: "Real-time Order Tracking",
        desc: "සාදනු ලැබූ විට සිට delivery දක්වා සෑම order එකක්ම track කරන්න. ක්ෂණික status updates සහ notifications ලබා ගන්න.",
      },
      {
        title: "Customer History Panel",
        desc: "සෑම customer සඳහාම සම්පූර්ණ order history, communication logs, purchase patterns බලන්න.",
      },
      {
        title: "Smart Inventory Alerts",
        desc: "Stock අඩු වූ විට automated alerts. ජනප්‍රිය items oversell වීම හෝ ඉවර වීම තවදුරටත් නැත.",
      },
      {
        title: "COD Management System",
        desc: "COD orders වෙන වෙනම track කරන්න. Partial payments manage කරන්න, deliveries reconcile කරන්න.",
      },
      {
        title: "Analytics Dashboard",
        desc: "ඔබේ sales trends, top products, growth metrics පෙන්වන ලස්සන charts සහ reports.",
      },
      {
        title: "Multi-tenant SaaS Support",
        desc: "සෑම shop එකකටම ආරක්ෂිත workspace එකක්. Multiple business locations වලට scale කිරීමට පරිපූර්ණයි.",
      },
    ],

    // Architecture
    archLabel: "System Architecture",
    archTitle: "එක් Platform. සෑම Workflow.",
    archSub:
      "OrderFlow යනු multi-tenant SaaS platform එකක් — සෑම shop owner ට ERP back-office සහ Online Store යන දෙකම, එකම backend එකෙන් ලබා ගත හැකිය.",
    archCards: [
      {
        color: "#63d7e0",
        icon: "🏗️",
        title: "එක් Platform",
        desc: "සෑම ව්‍යාපාරයක්ම Tenant ලෙස OrderFlow Platform එකේ ලියාපදිංචි වේ. ඔබේ data සම්පූර්ණ ලෙස protected.",
      },
      {
        color: "#f2d449",
        icon: "⚡",
        title: "Powerful Workflows දෙකක්",
        desc: "ඔබේ team ERP side හරහා Products, Orders, Inventory & Customers manage කරයි. Customers Public Website, SEO Pages, Order & Checkout හරහා shop කරයි.",
      },
      {
        color: "#b18cff",
        icon: "🔗",
        title: "එකම Backend",
        desc: "ERP සහ Online Store දෙකම Same OrderFlow Backend එකෙන් data ලබා ගනී. Stock real-time update වෙනවා — duplicate entries නැහැ.",
      },
    ],
    archLegend: [
      { color: "#f2d449", label: "Domain grouping" },
      { color: "#63d7e0", label: "Core service" },
      { color: "#ff6fae", label: "Customer-facing surface" },
      { color: "#ff9d5c", label: "Storefront service" },
      { color: "#eceef1", label: "Shared resource" },
    ],

    // Release CTA
    comingSoonTitle: "Release v1.0.2 — Public Testing Live",
    comingSoonSub:
      "OrderFlow ERP v1.0.2 public testing වෙනුවෙන් live. Orders, customers, inventory සහ reports manage කරන්න. නොමිලේ. Credit card අවශ්‍ය නැහැ.",
    comingSoonBtn: "v1.0.2 try කරන්න",
    changelogTitle: "v1.0.2 හි අලුත් දේ",
    changelog: [
      { type: "new", text: "Products & Inventory management" },
      { type: "new", text: "Orders & Customers module" },
      { type: "new", text: "Reports & Analytics dashboard" },
      { type: "new", text: "Staff & Permissions system" },
      { type: "new", text: "COD & Payment Tracking" },
      { type: "soon", text: "Online Storefront — v2.0 හි" },
    ],

    // Contact
    contactLabel: "සම්බන්ධ වන්න",
    contactTitle: "අපව සම්බන්ධ කරගන්න",
    contactSub:
      "ප්‍රශ්න තිබේද? ඔබගෙන් අසන්න අපි කැමතියි. අපට message එකක් යවන්න, ඉක්මනින් පිළිතුරු දෙන්නම්.",
    contactNamePlaceholder: "ඔබේ නම",
    contactEmailPlaceholder: "ඔබේ Email",
    contactMsgPlaceholder: "ඔබේ Message",
    contactSendBtn: "Message යවන්න",
    contactEmailLabel: "Email",
    contactPhoneLabel: "දුරකථන",
    contactWhatsAppLabel: "WhatsApp",

    // Footer
    footerTagline: "හැමෝටම Smart Business Management",
    footerCopyright: `© ${new Date().getFullYear()} OrderFlow ERP. සියලුම හිමිකම් ඇවිරිණි.`,
  },
};

/* ================================================================
   COMPONENT
   ================================================================ */
const ERP = () => {
  const [lang, setLang] = useState("en");
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const t = translations[lang];

  /* ---- SEO: dynamic meta tags & structured data ---- */
  useEffect(() => {
    const seo = {
      en: {
        title:
          "OrderFlow ERP — Order Management System for Sri Lankan Businesses",
        description:
          "Stop losing WhatsApp and Facebook orders. OrderFlow ERP helps small businesses in Sri Lanka manage orders, customers, inventory, and sales reports in one powerful platform.",
        keywords:
          "ERP Sri Lanka, order management system, WhatsApp order tracking, Facebook order management, small business ERP, inventory management Sri Lanka, COD tracking, sales reports, OrderFlow",
      },
      si: {
        title:
          "OrderFlow ERP — ශ්‍රී ලංකාවේ ව්‍යාපාර සඳහා Order Management System",
        description:
          "WhatsApp සහ Facebook orders මඟ හැරීම නවත්වන්න. OrderFlow ERP මඟින් orders, customers, inventory, sales reports එක platform එකකින් manage කරන්න.",
        keywords:
          "ERP ශ්‍රී ලංකා, order management, WhatsApp order tracking, Facebook orders, small business ERP, inventory management, OrderFlow",
      },
    };

    const { title, description, keywords } = seo[lang] || seo.en;
    document.title = title;
    
    // Language
    document.documentElement.lang = lang === "si" ? "si" : "en";

    // JSON-LD structured data
    const ldId = "erp-jsonld";
    let ldScript = document.getElementById(ldId);
    if (!ldScript) {
      ldScript = document.createElement("script");
      ldScript.id = ldId;
      ldScript.type = "application/ld+json";
      document.head.appendChild(ldScript);
    }
    ldScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "OrderFlow ERP",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://orderflow.mommentx.space",
      description: seo.en.description,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "LKR",
        availability: "https://schema.org/InStock",
      },
      author: {
        "@type": "Organization",
        name: "OrderFlow",
      },
    });

    return () => {
      // Clean up JSON-LD on unmount
      const el = document.getElementById(ldId);
      if (el) el.remove();
    };
  }, [lang]);

  /* ---- Scroll listener for sticky nav ---- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---- Intersection Observer for fade-up animations ---- */
  useEffect(() => {
    const els = document.querySelectorAll(".erp-animate");
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("erp-visible");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [lang]); // re-observe when language changes

  /* ---- Smooth scroll ---- */
  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenu(false);
    }
  }, []);

  /* ---- Lock body scroll when mobile menu is open ---- */
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

  /* ---- Nav link data ---- */
  const navLinks = [
    { label: t.navHome, id: "erp-hero" },
    { label: t.navFeatures, id: "erp-features" },
    { label: t.navHowItWorks, id: "erp-solution" },
    { label: t.navChangelog, id: "erp-coming-soon", badge: "v1.0.2" },
    { label: t.navContact, id: "erp-contact" },
  ];

  /* ---- Sidebar icon map ---- */
  const sidebarIcons = [
    LayoutDashboard,
    ShoppingCart,
    Users,
    Package,
    FileText,
    Settings,
  ];

  /* ---- Chart bar heights ---- */
  const chartBars = [55, 72, 45, 88, 65, 95, 78];
  const chartLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  /* ---- Solution icons ---- */
  const solutionIcons = [
    ShoppingCart,
    Users,
    Package,
    BarChart3,
    UserPlus,
    CreditCard,
  ];

  /* ---- Feature icons ---- */
  const featureIcons = [Zap, History, Bell, Wallet, PieChart, Building2];

  /* ---- Problem icons ---- */
  const problemIcons = [
    MessageSquareX,
    ClipboardList,
    AlertTriangle,
    TrendingDown,
  ];

  const seoData = {
    en: {
      title:
        "OrderFlow ERP — Order Management System for Sri Lankan Businesses",
      description:
        "Stop losing WhatsApp and Facebook orders. OrderFlow ERP helps small businesses in Sri Lanka manage orders, customers, inventory, and sales reports in one powerful platform.",
      keywords:
        "ERP Sri Lanka, order management system, WhatsApp order tracking, Facebook order management, small business ERP, inventory management Sri Lanka, COD tracking, sales reports, OrderFlow",
    },
    si: {
      title:
        "OrderFlow ERP — ශ්‍රී ලංකාවේ ව්‍යාපාර සඳහා Order Management System",
      description:
        "WhatsApp සහ Facebook orders මඟ හැරීම නවත්වන්න. OrderFlow ERP මඟින් orders, customers, inventory, sales reports එක platform එකකින් manage කරන්න.",
      keywords:
        "ERP ශ්‍රී ලංකා, order management, WhatsApp order tracking, Facebook orders, small business ERP, inventory management, OrderFlow",
    },
  };
  const currentSeo = seoData[lang] || seoData.en;
  const pageUrl = "https://orderflow.mommentx.space/erp";

  return (
    <div className={`erp-page ${darkMode ? "erp-dark" : ""}`}>

      {/* =============== NAVBAR =============== */}
      <nav className={`erp-nav ${scrolled ? "erp-nav-scrolled" : ""}`}>
        <div className="erp-container">
          <div className="erp-nav-inner">
            {/* Logo */}
            <div
              className="erp-nav-logo"
              onClick={() => scrollTo("erp-hero")}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <div className="erp-nav-logo-icon">O</div>
              OrderFlow{" "}
              <span style={{ fontWeight: 400, opacity: 0.6, marginLeft: 4 }}>
                ERP
              </span>
              {/* v1.0.2 release pill */}
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.4px",
                  color: "#00e676",
                  background: "rgba(0,230,118,0.12)",
                  border: "1px solid rgba(0,230,118,0.35)",
                  borderRadius: "5px",
                  padding: "1px 7px",
                  lineHeight: "18px",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                v1.0.2
              </span>
            </div>

            {/* Desktop links */}
            <div className="erp-nav-links">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  className="erp-nav-link"
                  onClick={() => scrollTo(link.id)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  {link.label}
                  {link.badge && (
                    <span
                      style={{
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: "0.3px",
                        color: "#00e676",
                        background: "rgba(0,230,118,0.12)",
                        border: "1px solid rgba(0,230,118,0.3)",
                        borderRadius: "4px",
                        padding: "1px 5px",
                      }}
                    >
                      {link.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="erp-nav-controls">
              <button
                className="erp-nav-icon-btn"
                onClick={() => setLang((prev) => (prev === "en" ? "si" : "en"))}
                title="Switch Language"
                aria-label="Switch Language"
              >
                <Globe size={18} />
              </button>
              <button
                className={`erp-nav-icon-btn ${darkMode ? "active" : ""}`}
                onClick={() => setDarkMode((prev) => !prev)}
                title="Toggle Dark Mode"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <a
                className="erp-nav-cta"
                href="https://orderflow.mommentx.space/register"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                {t.navCta}
              </a>
              {/* Hamburger (mobile) */}
              <button
                className={`erp-hamburger ${mobileMenu ? "open" : ""}`}
                onClick={() => setMobileMenu((prev) => !prev)}
                aria-label="Toggle menu"
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenu && (
        <div className="erp-mobile-menu">
          <button
            className="erp-hamburger open"
            onClick={() => setMobileMenu(false)}
            aria-label="Close menu"
            style={{ position: "absolute", top: 20, right: 24 }}
          >
            <span />
            <span />
            <span />
          </button>
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="erp-nav-link"
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
          <div className="erp-mobile-controls">
            <button
              className="erp-nav-icon-btn"
              onClick={() => setLang((p) => (p === "en" ? "si" : "en"))}
            >
              <Globe size={20} />
            </button>
            <button
              className={`erp-nav-icon-btn ${darkMode ? "active" : ""}`}
              onClick={() => setDarkMode((p) => !p)}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      )}

      {/* =============== HERO =============== */}
      <section className="erp-hero" id="erp-hero">
        <div className="erp-hero-bg">
          <div className="erp-hero-glow erp-hero-glow-1" />
          <div className="erp-hero-glow erp-hero-glow-2" />
          <div className="erp-hero-grid" />
          <div className="erp-hero-float erp-hero-float-1" />
          <div className="erp-hero-float erp-hero-float-2" />
          <div className="erp-hero-float erp-hero-float-3" />
        </div>
        <div className="erp-container">
          <div className="erp-hero-content erp-animate erp-visible">
            {/* Release v1.0.2 announcement banner */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(0,230,118,0.08)",
                border: "1px solid rgba(0,230,118,0.3)",
                borderRadius: "100px",
                padding: "5px 14px 5px 10px",
                marginBottom: "12px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#00e676",
                fontFamily: "Inter, system-ui, sans-serif",
                letterSpacing: "0.2px",
              }}
            >
              <span
                style={{
                  background: "#00e676",
                  borderRadius: "50%",
                  width: "7px",
                  height: "7px",
                  display: "inline-block",
                  flexShrink: 0,
                  boxShadow: "0 0 6px #00e676",
                  animation: "erp-pulse 2s infinite",
                }}
              />
              <span>🚀 Release v1.0.2 &nbsp;—&nbsp;</span>
              <span style={{ color: "#a0c8a8", fontWeight: 500 }}>
                ERP Operations Now Public
              </span>
            </div>
            <div className="erp-hero-badge">
              <span className="erp-hero-badge-dot" />
              {t.heroBadge}
            </div>
            <h1>
              {t.heroTitle1}
              <br />
              <span className="erp-green-text">{t.heroTitle2}</span>
            </h1>
            <p className="erp-hero-sub">{t.heroSub}</p>
            <div className="erp-hero-buttons">
              <a
                className="erp-btn-primary"
                href="https://orderflow.mommentx.space/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.heroBtn1} <ArrowRight size={18} />
              </a>
              <a
                className="erp-btn-outline"
                href="https://orderflow.mommentx.space"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={18} /> {t.heroBtn2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =============== PROBLEM =============== */}
      <section className="erp-problem" id="erp-problem">
        <div className="erp-container">
          <div className="erp-problem-header erp-animate">
            <span className="erp-section-label">
              <AlertTriangle size={14} /> {t.problemLabel}
            </span>
            <h2 className="erp-section-title">{t.problemTitle}</h2>
            <p className="erp-section-subtitle" style={{ margin: "0 auto" }}>
              {t.problemSub}
            </p>
          </div>
          <div className="erp-problem-grid">
            {t.problems.map((item, i) => {
              const Icon = problemIcons[i];
              return (
                <div
                  key={i}
                  className={`erp-problem-card erp-animate erp-animate-delay-${i + 1}`}
                >
                  <div className="erp-problem-icon">
                    <Icon size={24} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =============== SOLUTION =============== */}
      <section className="erp-solution" id="erp-solution">
        <div className="erp-container">
          <div className="erp-solution-header erp-animate">
            <span className="erp-section-label">
              <Zap size={14} /> {t.solutionLabel}
            </span>
            <h2 className="erp-section-title">{t.solutionTitle}</h2>
            <p className="erp-section-subtitle">{t.solutionSub}</p>
          </div>
          <div className="erp-solution-grid">
            {t.solutions.map((item, i) => {
              const Icon = solutionIcons[i];
              return (
                <div
                  key={i}
                  className={`erp-solution-card erp-animate erp-animate-delay-${(i % 3) + 1}`}
                >
                  <div className="erp-solution-icon">
                    <Icon size={24} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =============== DASHBOARD PREVIEW =============== */}
      <section className="erp-dashboard-section" id="erp-dashboard">
        <div
          className="erp-hero-glow erp-hero-glow-1"
          style={{ top: "10%", right: "5%", opacity: 0.2 }}
        />
        <div className="erp-container">
          <div className="erp-dashboard-header erp-animate">
            <span className="erp-section-label">
              <LayoutDashboard size={14} /> {t.dashLabel}
            </span>
            <h2 className="erp-section-title on-dark">{t.dashTitle}</h2>
            <p className="erp-section-subtitle on-dark">{t.dashSub}</p>
          </div>

          <div className="erp-dashboard-mockup erp-animate">
            {/* Browser top bar */}
            <div className="erp-dash-topbar">
              <div className="erp-dash-topbar-left">
                <div className="erp-dash-topbar-dot red" />
                <div className="erp-dash-topbar-dot yellow" />
                <div className="erp-dash-topbar-dot green" />
                <div className="erp-dash-topbar-url">
                  orderflow.mommentx.space
                </div>
              </div>
            </div>

            <div className="erp-dash-body">
              {/* Sidebar */}
              <div className="erp-dash-sidebar">
                {t.dashSidebarItems.map((item, i) => {
                  const Icon = sidebarIcons[i];
                  return (
                    <div
                      key={i}
                      className={`erp-dash-sidebar-item ${i === 0 ? "active" : ""}`}
                    >
                      <Icon size={16} /> {item}
                    </div>
                  );
                })}
              </div>

              {/* Main content */}
              <div className="erp-dash-main">
                <div className="erp-dash-stats">
                  {t.dashStats.map((stat, i) => (
                    <div key={i} className="erp-dash-stat-card">
                      <div className="erp-dash-stat-label">{stat.label}</div>
                      <div
                        className={`erp-dash-stat-value ${i === 0 ? "green" : i === 2 ? "yellow" : i === 3 ? "red" : ""}`}
                      >
                        {stat.value}
                      </div>
                      <div
                        className={`erp-dash-stat-change ${stat.up ? "up" : "down"}`}
                      >
                        {stat.up ? (
                          <ChevronUp size={12} />
                        ) : (
                          <TrendingDown size={12} />
                        )}{" "}
                        {stat.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="erp-dash-chart">
                  <div className="erp-dash-chart-title">{t.dashChartTitle}</div>
                  <div className="erp-dash-chart-bars">
                    {chartBars.map((h, i) => (
                      <div
                        key={i}
                        className="erp-dash-chart-bar"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="erp-dash-chart-labels">
                    {chartLabels.map((label, i) => (
                      <div key={i} className="erp-dash-chart-label">
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============== ARCHITECTURE / PROJECT PLAN =============== */}
      <section className="erp-architecture" id="erp-architecture">
        <div className="erp-architecture-bg">
          <div className="erp-arch-glow erp-arch-glow-1" />
          <div className="erp-arch-glow erp-arch-glow-2" />
        </div>
        <div className="erp-container">
          {/* ---- Section header ---- */}
          <div className="erp-arch-header erp-animate">
            <span className="erp-section-label">
              <BarChart3 size={14} /> {t.archLabel}
            </span>
            <h2 className="erp-section-title on-dark">{t.archTitle}</h2>
            <p className="erp-arch-sub">{t.archSub}</p>
          </div>

          {/* ---- Explanation cards ---- */}
          <div className="erp-arch-cards erp-animate">
            {t.archCards.map((card, i) => (
              <div
                key={i}
                className="erp-arch-card"
                style={{ "--card-accent": card.color }}
              >
                <div className="erp-arch-card-icon">{card.icon}</div>
                <h3 className="erp-arch-card-title">{card.title}</h3>
                <p className="erp-arch-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="erp-arch-diagram-wrap erp-animate">
            <svg
              className="erp-arch-svg"
              viewBox="0 0 1200 790"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <marker
                  id="arch-arrow"
                  viewBox="0 0 8 8"
                  refX="7"
                  refY="4"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M0,0.5 L7,4 L0,7.5 z" fill="#4a4a58" />
                </marker>
                <linearGradient
                  id="platform-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#1e1e28" />
                  <stop offset="100%" stopColor="#16161f" />
                </linearGradient>
                <linearGradient
                  id="backend-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#0d1f1f" />
                  <stop offset="100%" stopColor="#0a1818" />
                </linearGradient>
                <linearGradient
                  id="db-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#14101f" />
                  <stop offset="100%" stopColor="#0f0c18" />
                </linearGradient>
              </defs>

              {/* ── L1: OrderFlow Platform ── */}
              <rect
                x="400"
                y="20"
                width="400"
                height="60"
                rx="10"
                fill="url(#platform-grad)"
                stroke="#3a3a4a"
                strokeWidth="1.2"
              />
              <rect
                x="400"
                y="20"
                width="400"
                height="2.5"
                rx="1.2"
                fill="#63d7e0"
              />
              <text
                x="600"
                y="47"
                textAnchor="middle"
                fill="#eceef1"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="15"
                fontWeight="700"
                letterSpacing="-0.3"
              >
                OrderFlow Platform
              </text>
              <text
                x="600"
                y="64"
                textAnchor="middle"
                fill="#6a6a78"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="10.5"
                letterSpacing="0.5"
              >
                SaaS Infrastructure
              </text>

              {/* connector: Platform → Multi-Tenant Core */}
              <line
                x1="600"
                y1="80"
                x2="600"
                y2="128"
                stroke="#3a3a4a"
                strokeWidth="1.2"
                strokeDasharray="4 3"
                markerEnd="url(#arch-arrow)"
              />
              <rect
                x="614"
                y="92"
                width="116"
                height="18"
                rx="4"
                fill="#1a1a22"
              />
              <text
                x="672"
                y="104"
                textAnchor="middle"
                fill="#6a6a78"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="9.5"
                letterSpacing="0.3"
              >
                Multi-Tenant Architecture
              </text>

              {/* ── L2: Multi-Tenant Core ── */}
              <rect
                x="360"
                y="130"
                width="480"
                height="58"
                rx="10"
                fill="#16161f"
                stroke="#4a4a58"
                strokeWidth="1.2"
              />
              <rect
                x="360"
                y="130"
                width="480"
                height="2.5"
                rx="1.2"
                fill="#f2d449"
              />
              <text
                x="600"
                y="156"
                textAnchor="middle"
                fill="#eceef1"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="13.5"
                fontWeight="700"
                letterSpacing="-0.2"
              >
                Multi-Tenant Core
              </text>
              <text
                x="600"
                y="173"
                textAnchor="middle"
                fill="#6a6a78"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="10"
                letterSpacing="0.2"
              >
                Authentication &amp; Authorization · Tenant Isolation ·
                Role-Based Access
              </text>

              {/* connectors: Core → ERP / Storefront */}
              <path
                d="M520,188 C520,210 290,210 290,232"
                stroke="#3a3a4a"
                strokeWidth="1.2"
                strokeDasharray="4 3"
                fill="none"
                markerEnd="url(#arch-arrow)"
              />
              <path
                d="M680,188 C680,210 910,210 910,232"
                stroke="#3a3a4a"
                strokeWidth="1.2"
                strokeDasharray="4 3"
                fill="none"
                markerEnd="url(#arch-arrow)"
              />

              {/* ── L3 LEFT: ERP Operations (LIVE) ── */}
              <rect
                x="60"
                y="234"
                width="460"
                height="230"
                rx="10"
                fill="rgba(99,215,224,0.04)"
                stroke="#63d7e0"
                strokeWidth="1.4"
                strokeDasharray="5 3"
              />
              {/* Header band */}
              <rect
                x="60"
                y="234"
                width="460"
                height="46"
                rx="10"
                fill="rgba(99,215,224,0.09)"
              />
              <rect
                x="60"
                y="256"
                width="460"
                height="24"
                fill="rgba(99,215,224,0.09)"
              />
              <text
                x="160"
                y="263"
                textAnchor="middle"
                fill="#63d7e0"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="12"
                fontWeight="700"
                letterSpacing="-0.1"
              >
                ERP Operations
              </text>
              {/* LIVE status dot + badge */}
              <circle cx="344" cy="259" r="3.5" fill="#00e676" />
              <rect
                x="352"
                y="251"
                width="36"
                height="16"
                rx="4"
                fill="rgba(0,230,118,0.15)"
                stroke="rgba(0,230,118,0.4)"
                strokeWidth="0.8"
              />
              <text
                x="370"
                y="262"
                textAnchor="middle"
                fill="#00e676"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="9"
                fontWeight="700"
                letterSpacing="0.5"
              >
                LIVE
              </text>
              <text
                x="430"
                y="263"
                textAnchor="start"
                fill="#4a6a58"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="9.5"
              >
                Back-office
              </text>

              {/* ── Module: Products & Inventory ── */}
              <rect
                x="80"
                y="296"
                width="190"
                height="44"
                rx="8"
                fill="rgba(99,215,224,0.06)"
                stroke="#3a6060"
                strokeWidth="1"
              />
              {/* ✓ LIVE label */}
              <text
                x="98"
                y="312"
                fill="#00e676"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="8.5"
                fontWeight="700"
                letterSpacing="0.4"
              >
                ✓ LIVE
              </text>
              {/* Green checkmark badge pill */}
              <rect
                x="234"
                y="299"
                width="30"
                height="14"
                rx="4"
                fill="rgba(0,230,118,0.18)"
                stroke="rgba(0,230,118,0.35)"
                strokeWidth="0.7"
              />
              <text
                x="249"
                y="309"
                textAnchor="middle"
                fill="#00e676"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="8.5"
                fontWeight="700"
              >
                ✓
              </text>
              <text
                x="175"
                y="331"
                textAnchor="middle"
                fill="#c8ddd8"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="12"
                fontWeight="600"
              >
                Products &amp; Inventory
              </text>

              {/* ── Module: Orders & Customers ── */}
              <rect
                x="290"
                y="296"
                width="210"
                height="44"
                rx="8"
                fill="rgba(99,215,224,0.06)"
                stroke="#3a6060"
                strokeWidth="1"
              />
              <text
                x="308"
                y="312"
                fill="#00e676"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="8.5"
                fontWeight="700"
                letterSpacing="0.4"
              >
                ✓ LIVE
              </text>
              <rect
                x="464"
                y="299"
                width="30"
                height="14"
                rx="4"
                fill="rgba(0,230,118,0.18)"
                stroke="rgba(0,230,118,0.35)"
                strokeWidth="0.7"
              />
              <text
                x="479"
                y="309"
                textAnchor="middle"
                fill="#00e676"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="8.5"
                fontWeight="700"
              >
                ✓
              </text>
              <text
                x="395"
                y="331"
                textAnchor="middle"
                fill="#c8ddd8"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="12"
                fontWeight="600"
              >
                Orders &amp; Customers
              </text>

              {/* ── Module: Reports & Analytics ── */}
              <rect
                x="80"
                y="354"
                width="190"
                height="44"
                rx="8"
                fill="rgba(99,215,224,0.06)"
                stroke="#3a6060"
                strokeWidth="1"
              />
              <text
                x="98"
                y="370"
                fill="#00e676"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="8.5"
                fontWeight="700"
                letterSpacing="0.4"
              >
                ✓ LIVE
              </text>
              <rect
                x="234"
                y="357"
                width="30"
                height="14"
                rx="4"
                fill="rgba(0,230,118,0.18)"
                stroke="rgba(0,230,118,0.35)"
                strokeWidth="0.7"
              />
              <text
                x="249"
                y="367"
                textAnchor="middle"
                fill="#00e676"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="8.5"
                fontWeight="700"
              >
                ✓
              </text>
              <text
                x="175"
                y="389"
                textAnchor="middle"
                fill="#c8ddd8"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="12"
                fontWeight="600"
              >
                Reports &amp; Analytics
              </text>

              {/* ── Module: Staff & Permissions ── */}
              <rect
                x="290"
                y="354"
                width="210"
                height="44"
                rx="8"
                fill="rgba(99,215,224,0.06)"
                stroke="#3a6060"
                strokeWidth="1"
              />
              <text
                x="308"
                y="370"
                fill="#00e676"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="8.5"
                fontWeight="700"
                letterSpacing="0.4"
              >
                ✓ LIVE
              </text>
              <rect
                x="464"
                y="357"
                width="30"
                height="14"
                rx="4"
                fill="rgba(0,230,118,0.18)"
                stroke="rgba(0,230,118,0.35)"
                strokeWidth="0.7"
              />
              <text
                x="479"
                y="367"
                textAnchor="middle"
                fill="#00e676"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="8.5"
                fontWeight="700"
              >
                ✓
              </text>
              <text
                x="395"
                y="389"
                textAnchor="middle"
                fill="#c8ddd8"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="12"
                fontWeight="600"
              >
                Staff &amp; Permissions
              </text>

              {/* ── Feature: COD & Payment (LIVE) ── */}
              <rect
                x="80"
                y="412"
                width="420"
                height="38"
                rx="8"
                fill="rgba(0,230,118,0.05)"
                stroke="rgba(0,230,118,0.3)"
                strokeWidth="1"
              />
              <text
                x="98"
                y="427"
                fill="#00e676"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="8.5"
                fontWeight="700"
                letterSpacing="0.4"
              >
                ✓ LIVE
              </text>
              <text
                x="310"
                y="436"
                textAnchor="middle"
                fill="#63d7e0"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="11.5"
                fontWeight="600"
              >
                COD &amp; Payment Tracking
              </text>

              {/* ── L3 RIGHT: Storefront Module (COMING SOON) ── */}
              <rect
                x="680"
                y="234"
                width="460"
                height="230"
                rx="10"
                fill="rgba(255,157,92,0.02)"
                stroke="#ff9d5c"
                strokeWidth="1"
                strokeDasharray="5 3"
                opacity="0.6"
              />
              {/* Header band */}
              <rect
                x="680"
                y="234"
                width="460"
                height="46"
                rx="10"
                fill="rgba(255,157,92,0.05)"
                opacity="0.7"
              />
              <rect
                x="680"
                y="256"
                width="460"
                height="24"
                fill="rgba(255,157,92,0.05)"
                opacity="0.7"
              />
              <text
                x="800"
                y="263"
                textAnchor="middle"
                fill="#ff9d5c"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="12"
                fontWeight="700"
                letterSpacing="-0.1"
                opacity="0.7"
              >
                Storefront Module
              </text>
              {/* 🕐 Coming Soon badge */}
              <rect
                x="866"
                y="251"
                width="96"
                height="16"
                rx="4"
                fill="rgba(255,157,92,0.15)"
                stroke="rgba(255,157,92,0.4)"
                strokeWidth="0.8"
              />
              <text
                x="914"
                y="262"
                textAnchor="middle"
                fill="#ff9d5c"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="9"
                fontWeight="700"
                letterSpacing="0.4"
              >
                🕐 COMING SOON
              </text>
              <text
                x="1108"
                y="263"
                textAnchor="start"
                fill="#3a3a48"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="9.5"
              >
                In development
              </text>

              {/* Frosted overlay over module body to dim it */}
              <rect
                x="680"
                y="282"
                width="460"
                height="180"
                rx="6"
                fill="rgba(8,8,12,0.45)"
              />

              {/* Surface cards — dimmed/locked */}
              {/* Public Website */}
              <rect
                x="700"
                y="296"
                width="200"
                height="44"
                rx="8"
                fill="#0d0d14"
                stroke="#1e1e28"
                strokeWidth="1"
                opacity="0.7"
              />
              <text
                x="730"
                y="312"
                fill="#3a3a4a"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="8.5"
                fontWeight="700"
                letterSpacing="0.3"
              >
                🔒 COMING SOON
              </text>
              <text
                x="800"
                y="331"
                textAnchor="middle"
                fill="#4a4a58"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="12"
                fontWeight="600"
              >
                Public Website
              </text>

              {/* SEO Optimized Pages */}
              <rect
                x="918"
                y="296"
                width="202"
                height="44"
                rx="8"
                fill="#0d0d14"
                stroke="#1e1e28"
                strokeWidth="1"
                opacity="0.7"
              />
              <text
                x="948"
                y="312"
                fill="#3a3a4a"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="8.5"
                fontWeight="700"
                letterSpacing="0.3"
              >
                🔒 COMING SOON
              </text>
              <text
                x="1019"
                y="331"
                textAnchor="middle"
                fill="#4a4a58"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="12"
                fontWeight="600"
              >
                SEO Optimized Pages
              </text>

              {/* Customer Orders */}
              <rect
                x="700"
                y="354"
                width="200"
                height="44"
                rx="8"
                fill="#0d0d14"
                stroke="#1e1e28"
                strokeWidth="1"
                opacity="0.7"
              />
              <text
                x="730"
                y="370"
                fill="#3a3a4a"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="8.5"
                fontWeight="700"
                letterSpacing="0.3"
              >
                🔒 COMING SOON
              </text>
              <text
                x="800"
                y="389"
                textAnchor="middle"
                fill="#4a4a58"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="12"
                fontWeight="600"
              >
                Customer Orders
              </text>

              {/* Checkout Flow */}
              <rect
                x="918"
                y="354"
                width="202"
                height="44"
                rx="8"
                fill="#0d0d14"
                stroke="#1e1e28"
                strokeWidth="1"
                opacity="0.7"
              />
              <text
                x="948"
                y="370"
                fill="#3a3a4a"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="8.5"
                fontWeight="700"
                letterSpacing="0.3"
              >
                🔒 COMING SOON
              </text>
              <text
                x="1019"
                y="389"
                textAnchor="middle"
                fill="#4a4a58"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="12"
                fontWeight="600"
              >
                Checkout Flow
              </text>

              {/* Store Settings & Branding — dimmed */}
              <rect
                x="700"
                y="412"
                width="420"
                height="38"
                rx="8"
                fill="#0d0d14"
                stroke="#1e1e26"
                strokeWidth="1"
                opacity="0.6"
              />
              <text
                x="730"
                y="427"
                fill="#3a3a4a"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="8.5"
                fontWeight="700"
                letterSpacing="0.3"
              >
                🔒 COMING SOON
              </text>
              <text
                x="910"
                y="436"
                textAnchor="middle"
                fill="#3a3a4a"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="11.5"
                fontWeight="600"
              >
                Store Settings &amp; Branding
              </text>

              {/* connectors: ERP → Backend (bright), Storefront → Backend (dimmed) */}
              <path
                d="M290,464 C290,498 560,522 560,540"
                stroke="#3a3a4a"
                strokeWidth="1.2"
                strokeDasharray="4 3"
                fill="none"
                markerEnd="url(#arch-arrow)"
              />
              <path
                d="M910,464 C910,498 640,522 640,540"
                stroke="#2a2a38"
                strokeWidth="1"
                strokeDasharray="4 4"
                fill="none"
                opacity="0.4"
                markerEnd="url(#arch-arrow)"
              />
              <rect
                x="480"
                y="480"
                width="240"
                height="22"
                rx="5"
                fill="#111118"
                stroke="#2a2a35"
                strokeWidth="1"
              />
              <text
                x="600"
                y="495"
                textAnchor="middle"
                fill="#6a6a78"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="9.5"
                letterSpacing="0.5"
              >
                REST API · Business Logic
              </text>

              {/* ── L4: Shared OrderFlow Backend ── */}
              <rect
                x="200"
                y="542"
                width="800"
                height="68"
                rx="10"
                fill="url(#backend-grad)"
                stroke="#63d7e0"
                strokeWidth="1.2"
              />
              <rect
                x="200"
                y="542"
                width="800"
                height="2.5"
                rx="1.2"
                fill="#63d7e0"
              />
              <rect
                x="220"
                y="558"
                width="178"
                height="20"
                rx="5"
                fill="rgba(99,215,224,0.08)"
              />
              <text
                x="309"
                y="571"
                textAnchor="middle"
                fill="#63d7e0"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="9"
                letterSpacing="0.4"
              >
                Authentication &amp; Authorization
              </text>
              <text
                x="600"
                y="572"
                textAnchor="middle"
                fill="#eceef1"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="14"
                fontWeight="700"
                letterSpacing="-0.3"
              >
                Shared OrderFlow Backend API
              </text>
              <text
                x="600"
                y="588"
                textAnchor="middle"
                fill="#6a6a78"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="10"
                letterSpacing="0.2"
              >
                Business Logic · Tenant Context · Data Access Layer
              </text>
              <rect
                x="802"
                y="558"
                width="178"
                height="20"
                rx="5"
                fill="rgba(99,215,224,0.08)"
              />
              <text
                x="891"
                y="571"
                textAnchor="middle"
                fill="#63d7e0"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="9"
                letterSpacing="0.4"
              >
                Tenant Isolation Enforced
              </text>

              {/* connector: Backend → Database */}
              <line
                x1="600"
                y1="610"
                x2="600"
                y2="660"
                stroke="#3a3a4a"
                strokeWidth="1.2"
                strokeDasharray="4 3"
                markerEnd="url(#arch-arrow)"
              />
              <rect
                x="614"
                y="624"
                width="72"
                height="18"
                rx="4"
                fill="#1a1a22"
              />
              <text
                x="650"
                y="636"
                textAnchor="middle"
                fill="#6a6a78"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="9.5"
                letterSpacing="0.3"
              >
                Data Layer
              </text>

              {/* ── L5: Database Layer ── */}
              <rect
                x="320"
                y="662"
                width="560"
                height="68"
                rx="10"
                fill="url(#db-grad)"
                stroke="#b18cff"
                strokeWidth="1.2"
              />
              <rect
                x="320"
                y="662"
                width="560"
                height="2.5"
                rx="1.2"
                fill="#b18cff"
              />
              <text
                x="600"
                y="690"
                textAnchor="middle"
                fill="#eceef1"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="14"
                fontWeight="700"
                letterSpacing="-0.3"
              >
                Database Layer
              </text>
              <text
                x="600"
                y="706"
                textAnchor="middle"
                fill="#6a6a78"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="10"
                letterSpacing="0.2"
              >
                MongoDB · Tenant-Scoped Collections · Indexed Queries
              </text>

              {/* ── Legend ── */}
              <line
                x1="60"
                y1="756"
                x2="1140"
                y2="756"
                stroke="#222228"
                strokeWidth="1"
              />
              {/* ERP — Live */}
              <circle cx="64" cy="770" r="4" fill="#00e676" />
              <text
                x="74"
                y="775"
                fill="#6a6a78"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="10"
              >
                ERP Module — Live
              </text>
              {/* Storefront — Coming Soon */}
              <rect
                x="186"
                y="764"
                width="8"
                height="8"
                rx="2"
                fill="#ff9d5c"
                opacity="0.4"
              />
              <text
                x="200"
                y="775"
                fill="#4a4a58"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="10"
              >
                Storefront — Coming Soon
              </text>
              <rect
                x="336"
                y="766"
                width="8"
                height="8"
                rx="2"
                fill="#eceef1"
              />
              <text
                x="350"
                y="775"
                fill="#6a6a78"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="10"
              >
                Shared Backend
              </text>
              <rect
                x="474"
                y="766"
                width="8"
                height="8"
                rx="2"
                fill="#b18cff"
              />
              <text
                x="488"
                y="775"
                fill="#6a6a78"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="10"
              >
                Database Layer
              </text>
              <rect
                x="594"
                y="766"
                width="8"
                height="8"
                rx="2"
                fill="#f2d449"
              />
              <text
                x="608"
                y="775"
                fill="#6a6a78"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="10"
              >
                Tenant Core
              </text>
              <rect
                x="700"
                y="766"
                width="8"
                height="8"
                rx="2"
                fill="#4a4a58"
                stroke="#6a6a78"
                strokeWidth="1"
              />
              <text
                x="714"
                y="775"
                fill="#6a6a78"
                fontFamily="Inter,system-ui,sans-serif"
                fontSize="10"
              >
                REST API Connection
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* =============== FEATURES =============== */}
      <section className="erp-features" id="erp-features">
        <div className="erp-container">
          <div className="erp-features-header erp-animate">
            <span className="erp-section-label">
              <Zap size={14} /> {t.featuresLabel}
            </span>
            <h2 className="erp-section-title">{t.featuresTitle}</h2>
            <p className="erp-section-subtitle">{t.featuresSub}</p>
          </div>
          <div className="erp-features-grid">
            {t.features.map((item, i) => {
              const Icon = featureIcons[i];
              return (
                <div
                  key={i}
                  className={`erp-feature-card erp-animate erp-animate-delay-${(i % 3) + 1}`}
                >
                  <div className="erp-feature-card-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =============== RELEASE v1.0.2 CTA =============== */}
      <section className="erp-coming-soon" id="erp-coming-soon">
        <div className="erp-coming-soon-content erp-animate">
          {/* Version badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(0,230,118,0.1)",
              border: "1px solid rgba(241, 241, 241, 1)",
              borderRadius: "100px",
              padding: "5px 16px 5px 12px",
              marginBottom: "20px",
              fontSize: "12px",
              fontWeight: 700,
              color: "#ffffffff",
              letterSpacing: "0.3px",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                background: "#ffffffff",
                borderRadius: "50%",
                display: "inline-block",
                boxShadow: "0 0 8px #ffffffff",
                animation: "erp-pulse 2s infinite",
              }}
            />
            Public Testing · Release v1.0.2
          </div>

          <h2>{t.comingSoonTitle}</h2>
          <p>{t.comingSoonSub}</p>

          {/* Changelog */}
          <div
            style={{
              margin: "32px auto",
              maxWidth: "520px",
              background:
                "linear-gradient(180deg, rgba(22,22,25,0.8) 0%, rgba(13,13,20,0.8) 100%)",
              border: "1px solid rgba(255,255,255,0.05)",
              boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderRadius: "16px",
              padding: "24px 32px",
              textAlign: "left",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
                paddingBottom: "12px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.8px",
                  color: "#eceef1",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: "#00e676" }}>✦</span> {t.changelogTitle}
              </div>
              <span
                style={{ fontSize: "11px", color: "#6a6a78", fontWeight: 500 }}
              >
                v1.0.2
              </span>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {t.changelog.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "9px",
                      fontWeight: 800,
                      letterSpacing: "0.5px",
                      padding: "3px 8px",
                      borderRadius: "6px",
                      marginTop: "2px",
                      flexShrink: 0,
                      background:
                        item.type === "new"
                          ? "rgba(0,230,118,0.12)"
                          : "rgba(255,157,92,0.1)",
                      color: item.type === "new" ? "#00e676" : "#ff9d5c",
                      border: `1px solid ${item.type === "new" ? "rgba(0,230,118,0.25)" : "rgba(255,157,92,0.25)"}`,
                    }}
                  >
                    {item.type === "new" ? "NEW" : "SOON"}
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.5",
                      color: item.type === "new" ? "#eceef1" : "#6a6a78",
                      fontWeight: 400,
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <a
            className="erp-release-btn"
            href="https://orderflow.mommentx.space/register"
            rel="noopener noreferrer"
          >
            {t.comingSoonBtn} <ExternalLink size={18} />
          </a>
        </div>
      </section>

      {/* =============== CONTACT =============== */}
      <section className="erp-contact" id="erp-contact">
        <div className="erp-container">
          <div className="erp-contact-header erp-animate">
            <span className="erp-section-label">
              <Mail size={14} /> {t.contactLabel}
            </span>
            <h2 className="erp-section-title">{t.contactTitle}</h2>
            <p className="erp-section-subtitle">{t.contactSub}</p>
          </div>

          <div className="erp-contact-grid erp-animate">
            {/* Form */}
            <form
              className="erp-contact-form"
              action="https://formsubmit.co/mommentx@gmail.com"
              method="POST"
            >
              {/* FormSubmit config */}
              <input
                type="hidden"
                name="_subject"
                value="New ERP Contact — OrderFlow"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_next"
                value="https://mommentx.space/"
              />
              <input type="text" name="_honey" style={{ display: "none" }} />

              <input
                type="text"
                name="name"
                placeholder={t.contactNamePlaceholder}
                required
              />
              <input
                type="email"
                name="email"
                placeholder={t.contactEmailPlaceholder}
                required
              />
              <textarea
                name="message"
                placeholder={t.contactMsgPlaceholder}
                required
              />
              <button type="submit" className="erp-btn-primary">
                <Send size={18} /> {t.contactSendBtn}
              </button>
            </form>

            {/* Info */}
            <div className="erp-contact-info">
              <div className="erp-contact-info-item">
                <div className="erp-contact-info-icon">
                  <Mail size={22} />
                </div>
                <div className="erp-contact-info-text">
                  <h4>{t.contactEmailLabel}</h4>
                  <p>mommentx@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============== FOOTER =============== */}
      <footer className="erp-footer">
        <div className="erp-container">
          <div className="erp-footer-inner">
            <div className="erp-footer-brand">
              <div
                className="erp-nav-logo"
                style={{ cursor: "default", marginBottom: "8px" }}
              >
                <div className="erp-nav-logo-icon">O</div>
                OrderFlow{" "}
                <span style={{ fontWeight: 400, opacity: 0.6, marginLeft: 4 }}>
                  ERP
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "16px",
                }}
              >
                <span style={{ fontSize: "12px", opacity: 0.7 }}>
                  Developed by
                </span>
                <div
                  style={{
                    fontFamily: "'Blanka', sans-serif",
                    fontWeight: 400,
                    fontSize: "20px",
                    letterSpacing: "-0.02em",
                    display: "flex",
                    alignItems: "center",
                    userSelect: "none",
                    cursor: "default",
                  }}
                >
                  MOMMENTX
                  <span
                    style={{
                      display: "inline-block",
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "currentColor",
                      verticalAlign: "super",
                      marginLeft: "2px",
                    }}
                  />
                </div>
              </div>
              <div className="erp-footer-tagline">{t.footerTagline}</div>
            </div>
            <div className="erp-footer-social">
              <a
                className="erp-footer-social-icon"
                href="#"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                className="erp-footer-social-icon"
                href="#"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <a
                className="erp-footer-social-icon"
                href="#"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
            </div>
          </div>
          <div className="erp-footer-bottom">{t.footerCopyright}</div>
        </div>
      </footer>
    </div>
  );
};

export default ERP;
