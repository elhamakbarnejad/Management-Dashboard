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
import { users, UsersTableHeadTitle } from "../../data/users";

function ProductsTable() {
  const [lastUsers, setLastUsers] = useState([...users]);

  const Button = () => {
    return (
      <Link
        to={"/"}
        className="flex items-center justify-between gap-2 primary-bg py-2 px-3 border primary-border-color cursor-pointer hover:opacity-80 transition-all duration-150"
      >
        <span className="text-sm font-bold text-white">صفحه اصلی</span>
        <MdOpenInNew />
      </Link>
    );
  };

  // const changeVisibilityHandler = (productID) => {
  //   const newProducts = lastProducts.map((product) => {
  //     return product.id === productID
  //       ? { ...product, isPublished: !product.isPublished }
  //       : { ...product };
  //   });
  //   setLastProducts(newProducts);
  // };

  const removeHandler = (userID) => {
    const newUsers = lastUsers.filter((user) => {
      return user.id !== userID;
    });
    setLastUsers(newUsers);
  };

  return (
    <div>
      <Table
        header={{ title: "جدول کاربران", LinkBtn: Button }}
        pagination={{
          items: users,
          setItems: setLastUsers,
          itemPerPage: 5,
        }}
      >
        <TableHead>
          {UsersTableHeadTitle.map((item) => {
            return <TableHeadCell key={item}>{item}</TableHeadCell>;
          })}
        </TableHead>
        <TableBody>
          {lastUsers.map((user) => {
            console.log(user);
            return (
              <TableRow key={user.id}>
                <TableBodyCell>{user.id}</TableBodyCell>
                <TableBodyCell>{user.userName}</TableBodyCell>
                <TableBodyCell>
                  <span> {user.fullName} </span>{" "}
                </TableBodyCell>
                <TableBodyCell>
                  <span className="line-clamp-1 text-sm text-right">
                    {" "}
                    {user.phoneNumber}{" "}
                  </span>{" "}
                </TableBodyCell>
                <TableBodyCell>
                  <span> {user.email} </span>{" "}
                </TableBodyCell>

                <TableBodyCell>
                  <span> {user.role} </span>{" "}
                </TableBodyCell>
                <TableBodyCell>
                  <div className="size-20! min-w-20 max-w-20 ">
                    <img
                      src={user.profile}
                      alt={user.title}
                      className="size-full object-cover rounded-full "
                    />
                  </div>{" "}
                </TableBodyCell>
                <TableBodyCell>
                  <div className="flex items-center justify-between gap-5">
                    {/* <ChangeVisibility
                      product={user}
                      onChangeVisibility={changeVisibilityHandler}
                    /> */}
                    <RemoveProduct product={user} onRemove={removeHandler} />
                  </div>
                </TableBodyCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default ProductsTable;
