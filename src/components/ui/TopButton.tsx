import { IoArrowUpOutline } from "react-icons/io5";
import { scrollToWithLenis } from "@/hooks/useLenis";

export default function TopButton() {
  return (
    <button
      type="button"
      onClick={() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          window.scrollTo({ top: 0, behavior: "instant" });
          return;
        }
        scrollToWithLenis(0);
      }}
      className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)] p-2 shadow-lg"
    >
      <IoArrowUpOutline className="h-5 w-5 text-white" />
    </button>
  );
}
