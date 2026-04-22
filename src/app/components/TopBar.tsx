import { useEffect, useState } from "react";
import { Sparkles, Truck } from "lucide-react";

const offers = [
  { icon: Sparkles, text: "Get 10% OFF on your first order — Use code WELCOME10" },
  { icon: Truck, text: "Free shipping on all orders above ₹1199 or above" },
];

export default function TopBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % offers.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const Current = offers[index];
  const Icon = Current.icon;

  return (
    <div
      className="w-full overflow-hidden border-b"
      style={{
        backgroundColor: "#cb1f52",
        borderColor: "rgba(124, 23, 49, 0.12)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-2 text-center">
        <Icon
          className="h-4 w-4 shrink-0"
          style={{ color: "white" }}
          aria-hidden="true"
        />
        <p
          key={index}
          className="text-xs font-medium tracking-wide animate-in fade-in slide-in-from-bottom-1 duration-500 sm:text-sm"
          style={{ color: "white" }}
        >
          {Current.text}
        </p>
      </div>
    </div>
  );
}