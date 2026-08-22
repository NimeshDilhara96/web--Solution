export const metadata = {
  title: "Enterprise Cloud ERP & CRM Solutions | OrderFlow by MommentX",
  description: "OrderFlow ERP by MommentX — a powerful cloud-based enterprise resource planning system for multi-channel order management, inventory tracking, and business automation.",
  keywords: [
    "Cloud ERP Software", "Enterprise ERP System", "CRM Solution",
    "Order Management System", "Inventory Management Software",
    "Business Automation Platform", "Multi-Channel ERP",
    "OrderFlow ERP", "Custom ERP Development", "SaaS ERP",
  ],
  alternates: {
    canonical: "https://mommentx.space/erp",
  },
  openGraph: {
    title: "OrderFlow ERP — Enterprise Cloud ERP & CRM | MommentX",
    description: "Solve the chaos of multi-channel selling with centralized order management, real-time inventory, and seamless business automation.",
    url: "https://mommentx.space/erp",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OrderFlow ERP by MommentX — Cloud Enterprise ERP",
    description: "Multi-channel order management, inventory tracking, and business automation built for growing businesses.",
  },
};

export default function ERPLayout({ children }) {
  return <>{children}</>;
}

