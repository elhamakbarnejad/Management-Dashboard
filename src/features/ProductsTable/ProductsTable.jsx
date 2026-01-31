import { useState } from "react";
import { Link } from "react-router";
import { MdOpenInNew } from "react-icons/md";
import clsx from "clsx";

import Table from "../../components/commons/Table/Table";
import TableHead from "../../components/commons/Table/components/TableHead";
import TableHeadCell from "../../components/commons/Table/components/TableHeadCell";
import TableBody from "../../components/commons/Table/components/TableBody";
import TableBodyCell from "../../components/commons/Table/components/TableBodyCell";
import TableRow from "../../components/commons/Table/components/TableRow";
import ChangeVisibility from "../ProductsTable/components/ChangeVisibility";
import RemoveProduct from "../ProductsTable/components/RemoveProduct";
import { products, LastProductsTableHeadTitle } from "../../data/products";

const ProductsTable = () => {
  const [lastProducts, setLastProducts] = useState([...products]);

  const Button = () => {
    return (
      <Link
        to={"/products"}
        className="flex items-center justify-between gap-2 primary-bg py-2 px-3 border primary-border-color cursor-pointer hover:opacity-80 transition-all duration-150"
      >
        <span className="text-sm font-bold text-white">صفحه محصولات</span>
        <MdOpenInNew />
      </Link>
    );
  };

  const changeVisibilityHandler = (productID) => {
    const newProducts = lastProducts.map((product) => {
      return product.id === productID
        ? { ...product, isPublished: !product.isPublished }
        : { ...product };
    });
    setLastProducts(newProducts);
  };

  const removeHandler = (productID) => {
    const newProducts = lastProducts.filter((product) => {
      return product.id !== productID;
    });
    setLastProducts(newProducts);
  };

  return (
    <div>
      <Table
        header={{ title: "جدول محصولات", LinkBtn: Button }}
        pagination={{
          items: products,
          setItems: setLastProducts,
          itemPerPage: 5,
        }}
      >
        <TableHead>
          {LastProductsTableHeadTitle.map((item) => {
            return <TableHeadCell key={item}>{item}</TableHeadCell>;
          })}
        </TableHead>
        <TableBody>
          {lastProducts.map((product) => {
            return (
              <TableRow key={product.id}>
                <TableBodyCell>{product.id}</TableBodyCell>
                <TableBodyCell>{product.title}</TableBodyCell>
                <TableBodyCell>
                  <p
                    className={clsx(
                      product.isPublished ? "success-badge" : "danger-badge",
                      "badge",
                    )}
                  >
                    {product.isPublished ? "عمومی" : "خصوصی"}
                  </p>
                </TableBodyCell>

                <TableBodyCell>
                  <span> {product.price.toLocaleString("fa-IR")} </span>{" "}
                  تومان{" "}
                </TableBodyCell>
                <TableBodyCell>
                  <div className="flex items-center justify-between gap-5">
                    <ChangeVisibility
                      product={product}
                      onChangeVisibility={changeVisibilityHandler}
                    />
                    <RemoveProduct product={product} onRemove={removeHandler} />
                  </div>
                </TableBodyCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductsTable;
