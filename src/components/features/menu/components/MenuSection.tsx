import { PropsWithChildren } from "react";

interface MenuSectionProps {
  title: string;
}

const MenuSection = ({title, children}: PropsWithChildren<MenuSectionProps>) => {
  return (
    <section className="p-6 bg-prominent-light text-black rounded-lg shadow-md">
      <h2 className="mb-4 text-2xl font-bold text-center uppercase">{title}</h2>
      {children}
    </section>
  );
}

export default MenuSection;
