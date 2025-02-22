export default function PrimaryButton({children, onClick}: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      className="relative mt-3 w-full bg-[#F4B400] hover:bg-[#E0A000] active:bg-[#C98F00] text-black font-bold py-1 rounded-lg text-sm transition duration-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
