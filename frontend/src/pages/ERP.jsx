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
    navContact: "Contact",
    navCta: "Get Started",

    // Hero
    heroBadge: "🚀 Now Live — Built for Sri Lankan Businesses",
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

    // Live Now
    comingSoonTitle:
      "OrderFlow ERP is now live for small business owners in Sri Lanka!",
    comingSoonSub:
      "Start managing your orders, customers, and inventory today — completely free to get started. No credit card required.",
    comingSoonBtn: "Launch App Now",

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
    navContact: "සම්බන්ධ වන්න",
    navCta: "ආරම්භ කරන්න",

    // Hero
    heroBadge: "🚀 දැන් Live — ශ්‍රී ලංකාවේ ව්‍යාපාර සඳහා නිර්මාණය කළ",
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

    // Live Now
    comingSoonTitle:
      "OrderFlow ERP දැන් ශ්‍රී ලංකාවේ කුඩා ව්‍යාපාරිකයින්ට live!",
    comingSoonSub:
      "ඔබේ orders, customers සහ inventory අද සිටම manage කරන්න — ආරම්භ කිරීම සම්පූර්ණයෙන්ම නොමිලේ. Credit card අවශ්‍ය නැහැ.",
    comingSoonBtn: "App එක විවෘත කරන්න",

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
    const url = "https://orderflow.mommentx.space/erp";

    // Title
    document.title = title;

    // Helper to set or create a meta tag
    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Standard meta
    setMeta("name", "description", description);
    setMeta("name", "keywords", keywords);
    setMeta("name", "author", "OrderFlow ERP");
    setMeta("name", "robots", "index, follow");

    // Open Graph
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", url);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:site_name", "OrderFlow ERP");
    setMeta("property", "og:locale", lang === "si" ? "si_LK" : "en_US");

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

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

  return (
    <div className={`erp-page ${darkMode ? "erp-dark" : ""}`}>
      {/* =============== NAVBAR =============== */}
      <nav className={`erp-nav ${scrolled ? "erp-nav-scrolled" : ""}`}>
        <div className="erp-container">
          <div className="erp-nav-inner">
            {/* Logo */}
            <div className="erp-nav-logo" onClick={() => scrollTo("erp-hero")}>
              <div className="erp-nav-logo-icon">O</div>
              OrderFlow{" "}
              <span style={{ fontWeight: 400, opacity: 0.6, marginLeft: 4 }}>
                ERP
              </span>
            </div>

            {/* Desktop links */}
            <div className="erp-nav-links">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  className="erp-nav-link"
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
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

      {/* =============== LIVE NOW CTA =============== */}
      <section className="erp-coming-soon" id="erp-coming-soon">
        <div className="erp-coming-soon-content erp-animate">
          <h2>{t.comingSoonTitle}</h2>
          <p>{t.comingSoonSub}</p>
          <a
            className="erp-btn-primary"
            href="https://orderflow.mommentx.space/register"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", textDecoration: "none" }}
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
                style={{
                  fontFamily: "'Blanka', sans-serif",
                  fontWeight: 400,
                  fontSize: "32px",
                  letterSpacing: "-0.02em",
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "14px",
                  userSelect: "none",
                  cursor: "default",
                }}
              >
                MOMMENTX
                <span
                  style={{
                    display: "inline-block",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "currentColor",
                    verticalAlign: "super",
                    marginLeft: "2px",
                  }}
                />
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
