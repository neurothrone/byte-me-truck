import { Link } from "react-router";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import * as React from "react";

interface PageHeaderProps {
  title: string;
  icon: React.ElementType;
}

const PageHeader = ({title, icon: Icon}: PageHeaderProps) => {
  return (
    <header>
      <div className="flex justify-between items-center mb-4">
        <Link to="/" className="flex items-center gap-2 text-lg font-semibold text-prominent-light hover:text-primary">
          <ArrowLeftIcon className="w-6 h-6"/> {title}
        </Link>

        <Icon className="w-7 h-7 text-prominent-light"/>
      </div>

      <hr className="mb-6 border-t-2 border-dashed border-primary-border"/>
    </header>
  );
};

export default PageHeader;
