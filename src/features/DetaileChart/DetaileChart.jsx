import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { generatorChartData } from "../../utils/home";
const DetaileChart = () => {
  const data = generatorChartData({
    productsQty: 100,
    usersQty: 80,
    productsSellQty: 300,
    CurrentOrders: 400,
  });
  return (
    <div className=" rounded-xl border primary-border-color p-5 w-full h-full">
      <p className="text-lg font-bold mb-4 text-center">نمودار کلی داشبورد</p>
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} width={150} height={40}>
            <Bar dataKey="value" fill="#00bf8f" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DetaileChart;
