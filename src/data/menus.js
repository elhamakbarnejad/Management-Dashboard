import {
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineUsers,
} from "react-icons/hi";

export default [
  {
    id: crypto.randomUUID(),
    title: "منوی اصلی",
    items: [
      {
        id: crypto.randomUUID(),
        href: "/",
        title: "داشبورد",
        icon: HiOutlineHome,
      },
      {
        id: crypto.randomUUID(),
        href: "/products",
        title: "محصولات",
        icon: HiOutlineShoppingCart,
      },
      {
        id: crypto.randomUUID(),
        href: "/users",
        title: "کاربران",
        icon: HiOutlineUsers,
      },
    ],
  },
];
