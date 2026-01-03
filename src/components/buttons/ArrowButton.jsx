const ArrowButton = ({onClick, arrow}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="font-arial mr-4 s:mr-6 text-black border-none
      bg-transparent outline-none text-[40px] s:text-[48px] hover:text-primary-700"
    >
      {arrow}
    </button>
  );
};

export default ArrowButton;