const TableHead = ({ children }) => {
  return (
    <div
      className="grow flex items-center text-sm  h-12
*:flex-1 *:px-3 *:flex *:items-center *:justify-center
 *:font-semibold bg-zinc-300"
    >
      {children}
    </div>
  );
};

export default TableHead;
