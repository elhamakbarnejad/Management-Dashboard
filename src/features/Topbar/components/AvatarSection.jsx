import React from "react";

const AvatarSection = () => {
  return (
    <div className="size-15 max-[769px]:hidden">
      {" "}
      <img
        src="./public//images//profile-avatar-1.jpg"
        alt="Logo"
        className="rounded-full size-full object-cover"
      />
    </div>
  );
};

export default AvatarSection;
