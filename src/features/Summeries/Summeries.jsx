import SummeriCard from "../Summeries/components/SummeriCard";
import { generatorSummery } from "../../utils/home";

const Summeries = () => {
  const summeriesData = generatorSummery({
    productsQty: 100,
    usersQty: 80,
    productsSellQty: 300,
    CurrentOrders: 400,
  });

  return (
    <div className="grid grid-cols-2 gap-4 w-full border primary-border-color rounded-xl">
      {summeriesData.map((summery) => (
        <SummeriCard key={summery.id} {...summery} />
      ))}
    </div>
  );
};

export default Summeries;
