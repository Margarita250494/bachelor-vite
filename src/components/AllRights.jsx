import {clsx} from 'clsx'

const AllRights = ({hasStyle}) => {
  return (
    <p
      className={clsx(
        hasStyle ? 'py-3 px-5 xs:py-6 xs:px-10 block font-serif ' +
          'text-[16px] xs:text-[18px] font-bold tracking-[0.8px] leading-[1.6rem] ' +
          'text-center xs:text-start' : '')}
    >© 2013-2023 Health+. All rights reserved.</p>
  );
};

export default AllRights;