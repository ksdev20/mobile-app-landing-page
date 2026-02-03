import type { navLinkType } from "../types/homepage-types";

export const navLinks: navLinkType[] = [
  {
    label: "Features",
    link: "#features",
  },
  {
    label: "Benefits",
    link: "#benefits",
  },
  {
    label: "Pricing",
    link: "#pricing",
  },
  {
    label: "More",
    link: "#",
    submenu: {
      subMenuItems: [
        {
          label: "FAQ",
          link: "/",
        },
        {
          label: "Support",
          link: "/",
        },
        {
          label: "Blog",
          link: "/",
        },
      ],
    },
  },
];

export const downloadBtn: navLinkType = {
    label: "Download",
    link: "/download"
};

export const logoObj = {
    text: "Brevo",
    img: {
        url: "/vite.svg",
        alt: "Brand Icon"
    }
}

export const sidebarVariants = {
    hidden: {},
    visible: {},
    exit: {},
}