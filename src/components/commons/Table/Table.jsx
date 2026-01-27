import TableHeadr from "./components/TableHeadr";
import TablePagination from "./components/TablePagination";
const Table = ({
  header = { title: null, LinkBtn: undefined },
  pagination = {
    items: null,
    setItems: null,
    itemPerPage: null,
  },
  children,
}) => {
  return (
    <div className="mt-10 border min-w-full!  primary-border-color rounded-xl overflow-hidden">
      <TableHeadr header={header} />
      <div>{children}</div>
      <TablePagination
        items={pagination.items}
        setItems={pagination.setItems}
        itemPerPage={pagination.itemPerPage}
      />
    </div>
  );
};

export default Table;
