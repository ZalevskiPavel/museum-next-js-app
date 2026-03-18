import { Facebook, Instagram, Twitter, Youtube, Tiktok, Vk } from "@boxicons/react";

const footerData = {
  social_media: [
    {
      name: "facebook",
      link: "#",
      icon: Facebook
    },
    {
      name: "instagram",
      link: "#",
      icon: Instagram
    },
    {
      name: "twitter",
      link: "#",
      icon: Twitter
    },
    {
      name: "youtube",
      link: "#",
      icon: Youtube
    },
    {
      name: "tiktok",
      link: "#",
      icon: Tiktok
    },
    {
      name: "vk",
      link: "#",
      icon: Vk
    }
  ],

  contact: {
    email: "museumemail@gmail.com",
    phone: "+44 (0)20 7323 8000",
    address: [
      "Great Russell Street",
      "London WC1B 3DG"
    ]
  },

  opening_hours: {
    opening: "Daily: 10.00–17.00 (Fridays: 20.30)",
    last_entry: "Last entry: 16.45 (Fridays: 20.15)"
  },

  footer_links: [
    { title: "Privacy policy", link: "#" },
    { title: "Cookies", link: "#" },
    { title: "Accesibility statement", link: "#" },
    { title: "Terms of use", link: "#" }
  ],

  image: "/footer-turtle.webp",

  copyright: "2026 The Trustees of Museum"
};

export default footerData;