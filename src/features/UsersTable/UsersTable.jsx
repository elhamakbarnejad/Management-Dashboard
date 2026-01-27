import { useEffect, useState } from "react";
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
import { LastUsersTableHeadTitle, users } from "../../data/users";

function ProductsTable() {
  const [lastUsers, setLastUsers] = useState([...users]);

  // ?????
  // Due to the international internet outage, it was not possible to fetch data from the *fakestoreapi* site. Therefore, the desired pattern is provided below, which can be used to obtain data with minor changes to the names and by replacing the *return* codes.
  // ?????
  // const [members, setMembers] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const controll = new AbortController();
  //   setLoading(true);

  //   const fetchMembers = async () => {
  //     try {
  //       const res = await fetch("https://fakestoreapi.com/users", {
  //         signal: controll.signal(),
  //       });

  //// !!! صحت سنجی با استفاده از Postman// !!!
  //       if (res.status === 400) {
  //         const data = await res.json();
  //         setMembers(data);
  //       } else {
  //         setError("خطایی وجود دارد!");
  //       }
  //       setLoading(false);
  //     } catch (error) {
  //       setError(err.message);
  //     }
  //   };

  //   fetchMembers();
  //   return () => controll.abort();
  // }, []);

  // return (
  //   <>
  //     {loading ? (
  //       <h1>در حال پردازش اطلاعات ....</h1>
  //     ) : (
  //       <>
  //         (
  //         <ul>
  //           {members.map((member) => {
  //             return <li key={member.id}>{member.name}</li>;
  //           })}
  //         </ul>
  //         )
  //       </>
  //     )}
  //   </>
  // );

  const Button = () => {
    return (
      <Link
        to={"/users"}
        className="flex items-center justify-between gap-2 primary-bg py-2 px-3 border primary-border-color cursor-pointer hover:opacity-80 transition-all duration-150"
      >
        <span className="text-sm font-bold text-white">صفحه کاربران</span>
        <MdOpenInNew />
      </Link>
    );
  };

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
          {LastUsersTableHeadTitle.map((item) => {
            return <TableHeadCell key={item}>{item}</TableHeadCell>;
          })}
        </TableHead>
        <TableBody>
          {lastUsers.map((user) => {
            return (
              <TableRow key={user.id}>
                <TableBodyCell>{user.id}</TableBodyCell>
                <TableBodyCell>{user.userName}</TableBodyCell>

                <TableBodyCell>
                  <span> {user.fullName} </span>{" "}
                </TableBodyCell>

                <TableBodyCell>
                  <span> {user.role} </span>{" "}
                </TableBodyCell>
                <TableBodyCell>
                  <div className="flex items-center justify-between gap-5">
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
