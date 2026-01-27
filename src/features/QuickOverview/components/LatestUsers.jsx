import { useNavigate } from "react-router";
import SectionTitle from "../../../components/commons/SectionTitle";
import { users } from "../../../data/users";
import UserCard from "./UserCard";

const LatestUsers = () => {
  const Button = () => {
    const navigate = useNavigate();
    const CTAaction = () => {
      navigate("/users");
    };
    return (
      <button className="primary-bg py-2 px-3" onClick={CTAaction}>
        صفحه کاربران
      </button>
    );
  };

  return (
    <div>
      <SectionTitle title="لیست آخرین کاربران" Button={<Button />} />
      <div className="space-y-3">
        {users.slice(0, 5).map((user) => {
          return <UserCard key={user.id} {...user} />;
        })}
      </div>
    </div>
  );
};

export default LatestUsers;
