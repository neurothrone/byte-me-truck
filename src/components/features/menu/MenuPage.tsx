import StickyNavbar from "./components/StickyNavbar.tsx";
import MenuSection from "./components/MenuSection.tsx";
import WontonsSection from "./components/WontonsSection.tsx";
import DrinksSection from "./components/DrinksSection.tsx";
import DipsSection from "./components/DipsSection.tsx";

const MenuPage = () => {
  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-background to-background-accent">
      <StickyNavbar/>

      {/* Push content down so it's not hidden under the sticky header */}
      <div className="mt-20 mx-auto max-w-3xl space-y-6">
        <MenuSection title="Wontons">
          <WontonsSection/>
        </MenuSection>
        <MenuSection title="Dryckar">
          <DrinksSection/>
        </MenuSection>

        <MenuSection title="Dips">
          <DipsSection/>
        </MenuSection>
      </div>
    </div>
  );
}

export default MenuPage;
