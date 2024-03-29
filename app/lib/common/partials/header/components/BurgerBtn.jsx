'use client';

import {useBurger} from "@partials/header/state/useBurger";

const BurgerBtn = () => {
  const toggleBurger = useBurger((state) => state.toggle);
  const isOpen = useBurger((state) => state.isOpen);

  return (
    <button onClick={toggleBurger} className={`w-6 ${isOpen ? 'translate-y-2' : 'translate-y-0'} transition-all duration-75 lg:hidden flex h-4 flex-col justify-between`}>
      <div className={`${isOpen ? 'rotate-45' : 'rotate-0'} transform  w-full transition-all duration-300 h-[1px] border border-solid border-black`}></div>
      <div className={`${isOpen ? 'invisible opacity-0' : 'visible opacity-100'} w-full transition-all duration-300 h-[1px] border border-solid border-black`}></div>
      <div className={`${isOpen ? 'rotate-[-45deg] translate-y-[-14px]' : 'rotate-0'} w-full transform transition-all duration-300 h-[1px] border border-solid border-black`}></div>
    </button>
  );
};

export default BurgerBtn;