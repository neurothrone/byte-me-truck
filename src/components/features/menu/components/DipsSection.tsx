import { MenuItem } from "../../../../types/menu.ts";
import DipItem from "./DipItem.tsx";

interface DipsSectionProps {
  dips: MenuItem[];
}

const DipsSection = ({dips}: DipsSectionProps) => {
  return (
    <div>
      <p className="text-center text-sm text-gray-600 mb-2">Alla dips: {dips[0]?.price} SEK</p>

      <div className="flex flex-wrap gap-2">
        {dips.map((dip) => (
          <DipItem key={dip.id} dip={dip}/>
        ))}
      </div>
    </div>
  );
};

export default DipsSection;
