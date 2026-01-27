const SummeriCard = ({ title, value, Icon }) => {
  return (
    <article className="mx-auto mt-5 mb-5 py-5 w-70 h-30 border  shadow hover:bg-[#00bf8f]/30 transition duration-150 primary-border-color rounded-xl hover:scale-105 flex flex-col items-center justify-between">
      <div className="flex items-center justify-center px-3 py-1 gap-2">
        <span>{<Icon />}</span>
        <h1 className="font-bold  text-lg">{title}</h1>
      </div>
      <div className="flex items-center justify-center px-3 py-1 gap-2">
        <strong className="font-extrabold text-md">{value}</strong>
        <span className="font-bold  text-md">عدد</span>
      </div>
    </article>
  );
};

export default SummeriCard;
