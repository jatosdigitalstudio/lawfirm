import React, { FC } from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button className="group py-2 px-8 bg-[#652126] rounded-full font-semibold hover:bg-[#1C2677] transition-colors duration-500 delay-[0.1s] ease-[cubic-bezier(0.19,1,0.22,1)]">
      <div className="overflow-hidden relative">
        <p className="text-white group-hover:translate-y-[-20px] duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
          {children}
        </p>
        <p className="absolute left-0 top-5 text-white group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
          {children}
        </p>
      </div>
    </button>
  );
};