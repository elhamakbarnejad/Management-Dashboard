import { FaEllipsis } from "react-icons/fa6";
import { Link } from "react-router";

const UserCard = ({ profile, userName, fullName, role, description }) => {
  return (
    <article className="flex items-center gap-3 p-3 mt-3  border primary-border-color shadow rounded-md   hover:scale-101 duration-150 hover:bg-linear-to-t hover:from-neutral-200/50">
      <div className="size-18! min-w-18 max-w-18 ">
        <img
          src={profile}
          alt={userName}
          className="size-full object-cover  rounded-full"
        />
      </div>
      <div className="h-full flex-justify-between flex-col ">
        <div className="space-y-3">
          <p>
            <strong>{userName}</strong>
          </p>
          <p className="text-sm ">{fullName}</p>
        </div>
        <div className="flex gap-1 items-center">
          <span className="font-black ">{role}</span>
        </div>
        <div className="flex gap-1 items-center">
          <span className=" text-sm line-clamp-3">{description}</span>
        </div>
        <div className=" flex items-center justify-between gap-1 w-fit text-rose-400">
          <span className="text-sm">بیشتر</span>
          <Link to="/users" className="text-2xl cursor-pointer">
            <FaEllipsis />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default UserCard;
