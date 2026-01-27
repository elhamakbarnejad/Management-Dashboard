import React from "react";

const TableRow = ({ children }) => {
  return (
    <div
      className="flex items-center text-sm even:bg-zinc-300 
*:flex-1 *:px-3 *:flex *:items-center *:justify-center h-24"
    >
      {children}
    </div>
  );
};

export default TableRow;
