const SidebarHeader = () => {
  return (
    <header className="flex gap-3 items-center justify-start max-[641px]:flex-col">
      <div className="size-12 object-cover">
        <img
          src="./public//images//eli-logo.jpg"
          alt="Logo"
          className="rounded-full"
        />
      </div>
      <p className="text-xl  font-extrabold font-sans select-none ">Eli-Shop</p>
    </header>
  );
};

export default SidebarHeader;
