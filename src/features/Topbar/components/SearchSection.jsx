import { BiSearch } from "react-icons/bi";

const SearchSection = () => {
  return (
    <div className="relative h-10 border rounded-lg  primary-border-color w-[288px] flex items-center justify-center duration-150  focus-within:border-rose-500/20! text-sm">
      <input
        type="text"
        className="absolute right-1 focus-within:outline-none placeholder:text-sm px-4  w-[82%] h-[80%] "
        placeholder="جستجو کنید ..."
      />

      <div className="absolute left-1 flex-center gap-1 *:size-8 text-sm rounded-lg *:rounded-lg bg-zinc-100   select-none *:flex-center text-[#818898] *:hover:bg-zinc-300 *:hover:text-md *:transition-all *:duration-150">
        <span>
          <BiSearch />
        </span>
      </div>
    </div>
  );
};

export default SearchSection;
