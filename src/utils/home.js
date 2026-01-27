import { BiCoinStack, BiShoppingBag } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { MdSell } from "react-icons/md";

export const generatorSummery = ({
  productsQty = 0,
  usersQty = 0,
  productsSellQty = 0,
  CurrentOrders = 0,
}) => {
  return [
    {
      id: 1,
      title: "تعداد محصولات",
      value: productsQty,
      Icon: BiShoppingBag,
    },
    {
      id: 2,
      title: "تعداد کاربران",
      value: usersQty,
      Icon: HiUsers,
    },
    {
      id: 3,
      title: "تعداد فروش",
      value: productsSellQty,
      Icon: MdSell,
    },
    {
      id: 4,
      title: "سفارشات جاری",
      value: CurrentOrders,
      Icon: BiCoinStack,
    },
  ];
};
export const generatorChartData = ({
  productsQty,
  usersQty,
  productsSellQty,
  CurrentOrders,
}) => {
  return [
    {
      title: "تعداد محصولات",
      value: productsQty,
    },
    {
      title: "تعداد کاربران",
      value: usersQty,
    },
    {
      title: "تعداد فروش",
      value: productsSellQty,
    },
    {
      title: "سفارشات جاری",
      value: CurrentOrders,
    },
  ];
};
