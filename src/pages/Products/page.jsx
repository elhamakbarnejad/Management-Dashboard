import useTitle from "../../components/hooks/useTitle";
import ProductsDetailedTable from "../../features/ProductsTable/ProductsDetailedTable";
import SectionTitle from "../../components/commons/SectionTitle";
import SectionProductsTitle from "../../components/commons/SectionProductsTitle";

const page = () => {
  useTitle("محصولات");

  return (
    <>
      <SectionProductsTitle title={"لیست محصولات"} />
      <div className="mt-20 pb-10 space-y-10">
        <ProductsDetailedTable />
      </div>
    </>
  );
};

export default page;
