import SectionTitle from "../../components/commons/SectionTitle";
import Summeries from "../../features/Summeries/Summeries";
import DetaileChart from "../../features/DetaileChart/DetaileChart";
import ProductsTable from "../../features/ProductsTable/ProductsTable";
import UsersTable from "../../features/UsersTable/UsersTable";
import QuickOverview from "../../features/QuickOverview/QuickOverview";
import useTitle from "../../components/hooks/useTitle";

const page = () => {
  useTitle("صفحه اصلی");
  return (
    <>
      <SectionTitle title={"داشبورد"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <Summeries />
        <DetaileChart />
      </div>
      <div className=" pb-10 space-y-10">
        <div className="grid grid-col-1 md:grid-cols-2 gap-2">
          <ProductsTable /> <UsersTable />
        </div>
        <QuickOverview />
      </div>
    </>
  );
};

export default page;
