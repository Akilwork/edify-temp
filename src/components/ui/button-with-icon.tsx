import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonWithIconProps {
  label?: string;
  className?: string;
  variant?: "dark" | "light";
  onClick?: () => void;
}

const ButtonWithIcon = ({
  label = "Let's Collaborate",
  className,
  variant = "dark",
  onClick,
}: ButtonWithIconProps) => {
  const isDark = variant === "dark";

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative text-sm font-semibold rounded-full h-12 pl-6 pr-14 group transition-all duration-500 hover:pl-14 hover:pr-6 w-fit overflow-hidden cursor-pointer",
        isDark ? "bg-brand-black text-white" : "bg-white text-brand-black",
        className
      )}
    >
      <span className="relative z-10 whitespace-nowrap">{label}</span>
      <div
        className={cn(
          "absolute top-1/2 -translate-y-1/2 right-1.5 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-42px)] group-hover:rotate-45 shrink-0",
          isDark ? "bg-white text-brand-black" : "bg-brand-black text-white"
        )}
      >
        <ArrowUpRight size={15} />
      </div>
    </button>
  );
};

export default ButtonWithIcon;
