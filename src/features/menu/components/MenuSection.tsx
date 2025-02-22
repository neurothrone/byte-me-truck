import { PropsWithChildren } from "react";

interface MenuSectionProps {
  title: string;
}

const MenuSection = ({title, children}: PropsWithChildren<MenuSectionProps>) => {
  return (
    <div className="bg-card-background text-black p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center uppercase mb-4">{title}</h2>
      {children}
    </div>
  );
}

export default MenuSection;
