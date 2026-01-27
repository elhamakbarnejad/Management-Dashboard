import { BiTable } from "react-icons/bi";

const TableHeadr = ({ header }) => {
  const { LinkBtn } = header;

  return (
    <div className="flex items-center justify-between px-5 h-16">
      <p className="text-lg  font-bold">{header.title}</p>
      {typeof LinkBtn === "function" ? (
        <div className="flex items-center gap-2">{<LinkBtn />}</div>
      ) : (
        <div>
          <BiTable />
        </div>
      )}
    </div>
  );
};

export default TableHeadr;
