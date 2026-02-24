import ContactForm from "@/components/ui/ContactForm";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export default function Connect() {
  return (
    <section
      id="connect"
      className="section-spacing flex flex-col items-center justify-center gap-6"
    >
      <div className="w-full text-[var(--color-primary)]">
        <h2 className="pb-16 text-center text-3xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
          Connect
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-center text-lg text-black/70 dark:text-white/70 sm:text-xl">
          새로운 기회나 협업 제안은 언제든 환영합니다.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-sm text-black/60 dark:text-white/60">
          <div className="flex items-center gap-2">
            <IoLocationOutline
              className="text-[var(--color-accent)]"
              size={18}
            />
            <span>Seoul, South Korea</span>
          </div>

          <span className="hidden opacity-40 sm:block">|</span>

          <a
            href="mailto:jbkim948@gmail.com"
            className="flex items-center gap-2 transition-colors hover:text-[var(--color-accent)]"
          >
            <MdOutlineEmail className="text-[var(--color-accent)]" size={18} />
            <span>jbkim948@gmail.com</span>
          </a>
        </div>
      </div>

      <ContactForm />
    </section>
  );
}
