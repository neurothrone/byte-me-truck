import WontonCard from "./WontonCard.tsx";
import { MenuItem } from "../../../../types/menu.ts";

interface WontonsSectionProps {
  wontons: MenuItem[];
}

const WontonsSection = ({wontons}: WontonsSectionProps) => {
  return (
    <div className="space-y-4">
      {wontons.map((item) => (
        <WontonCard key={item.id} item={item}/>
      ))}
    </div>
  );
};

export default WontonsSection;
