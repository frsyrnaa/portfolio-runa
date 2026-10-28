import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Return to top of folio"
      className="fixed bottom-6 right-6 z-40 size-11 rounded-full border border-[#B08D57] bg-card/90 text-foreground hover:bg-[#722F37] hover:text-[#F3E8D2] dark:hover:bg-[#B08D57] dark:hover:text-[#190C10] shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs"
      title="Return to top"
    >
      <ArrowUp className="size-4" />
    </button>
  );
}
