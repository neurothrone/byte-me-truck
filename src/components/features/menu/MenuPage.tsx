import { useGetMenuQuery } from "../../../api/menu-api.ts";
import StickyNavbar from "./components/StickyNavbar.tsx";
import MenuSection from "./components/MenuSection.tsx";
import WontonsSection from "./components/WontonsSection.tsx";
import DrinksSection from "./components/DrinksSection.tsx";
import DipsSection from "./components/DipsSection.tsx";
import TextMessage from "../../shared/TextMessage.tsx";

const MenuPage = () => {
  const {data, error, isLoading} = useGetMenuQuery();

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-background to-background-accent">
      <StickyNavbar/>

      {/* Push content down so it's not hidden under the sticky header */}
      <div className="mt-20 mx-auto max-w-3xl space-y-6">
        {isLoading ? (
          <TextMessage className="text-center" text="Laddar meny..."/>
        ) : error ? (
          <TextMessage className="text-center text-red-500" text="Kunde inte ladda menyn."/>
        ) : !data || data.length === 0 ? (
          <TextMessage className="text-center text-gray-500" text="Menyn är för tillfället tom."/>
        ) : (
          <>
            <MenuSection title="Wontons">
              <WontonsSection wontons={data.filter((item) => item.type === "wonton")}/>
            </MenuSection>
            <MenuSection title="Dryckar">
              <DrinksSection drinks={data.filter((item) => item.type === "drink")}/>
            </MenuSection>
            <MenuSection title="Dips">
              <DipsSection dips={data.filter((item) => item.type === "dip")}/>
            </MenuSection>
          </>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
