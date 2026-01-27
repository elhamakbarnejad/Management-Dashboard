import LatestProducts from "./components/LatestProducts";
import LatestUsers from "./components/LatestUsers";
const QuickOverview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5  *:rounded-xl *:primary-border-color *:shadow">
      <LatestUsers />
      <LatestProducts />
    </div>
  );
};

export default QuickOverview;
