import { useGetMenuQuery } from "../../../../api/menu-api.ts";
import WontonCard from "./WontonCard.tsx";

const WontonsSection = () => {
  const {data: menu, error, isLoading} = useGetMenuQuery();
  const wontons = menu?.filter((item) => item.type === "wonton") ?? [];

  if (isLoading) return <p className="text-center">Laddar meny...</p>;
  if (error) return <p className="text-red-500 text-center">Kunde inte ladda menyn.</p>;

  return (
    <div className="space-y-4">
      {wontons.map((item) => (
        <WontonCard key={item.id} item={item}/>
      ))}
    </div>
  );
}

export default WontonsSection;
