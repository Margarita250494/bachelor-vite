import {clsx} from 'clsx'

const MainButton = ({
                           type = 'button',
                           icon,
                           title,
                           onClick,
                           disabled,
                           isMobileHidden,
                           className
                         }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(" h-[51.5px] text-[16px] xs:text-[18px] py-3.5 px-5 " +
        "tracking-[.8px] text-white border border-transparent rounded-[28px] " +
        "outline-transparent bg-primary-500 font-serif items-center " +
        "gap-1.5 duration-300 hover:text-primary-500 hover:bg-transparent " +
        "hover:border-primary-500", isMobileHidden ? 'hidden m:flex' : 'flex', className)}
    >
      {icon} {title}
    </button>
  );
};


export default MainButton;


