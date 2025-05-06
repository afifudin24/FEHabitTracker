import React from "react";
interface ButtonHrefProps {
    href: string;
    children: React.ReactNode;
  }
const ButtonHref: React.FC<ButtonHrefProps> = ({href, children}) => {
    return (
        <a
        href={href}
        className="
          text-primary 
          no-underline 
          uppercase 
          rounded 
          border-2 
          border-primary 
          px-[15px] 
          py-[8px] 
          inline-block 
          relative 
          cursor-pointer 
          outline-dashed 
          outline-2 
          outline-transparent 
          transition-all 
          duration-[600ms] 
          ease-[ease]
          shadow-[.7px_1px_0_0_var(--color-primary),1.5px_2px_0_0_var(--color-primary),2.5px_3px_0_0_var(--color-primary),3.5px_4px_0_0_var(--color-primary),4.5px_5px_0_0_var(--color-primary),5.5px_6px_0_0_var(--color-primary),6.5px_7px_0_0_var(--color-primary),7.5px_8px_0_0_var(--color-primary),7.5px_9px_0_0_var(--color-primary),7.5px_10px_0_0_var(--color-primary)]
          hover:shadow-none 
          hover:[inset:6px_0_5.5px_0] 
          hover:[transform:rotateX(5deg)_rotateY(3deg)_rotateZ(.25deg)]
        "
      >
        {children}
      </a>
    )
}

export default ButtonHref;