import useTitle from "../../components/hooks/useTitle";
import ProductsDetailedTable from "../../features/ProductsTable/ProductsDetailedTable";
import UsersDetailedTable from "../../features/UsersTable/UsersDetailedTable";
import SectionUsersTitle from "../../components/commons/SectionUsersTitle";

const page = () => {
  useTitle("کاربران");

  return (
    <>
      <SectionUsersTitle title={"لیست کاربران"} />
      <div className="mt-20 pb-10 space-y-10">
        <UsersDetailedTable />
      </div>
    </>
  );
};

export default page;
