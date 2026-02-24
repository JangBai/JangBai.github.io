import { useContactForm } from "@/hooks/useContactForm";
import { GrSend } from "react-icons/gr";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useContactForm();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-xl border border-white/10 bg-[var(--color-accent-soft-20)] p-6 text-[var(--color-primary)]">
      <form
        className="w-full"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit);
        }}
      >
        <div className="flex w-full flex-col items-center justify-between gap-4">
          <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="sm:w-2/1 flex h-24 w-full flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full rounded-md border border-gray-500 bg-white/20 p-2 dark:bg-black/20"
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="sm:w-2/1 flex h-24 w-full flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full rounded-md border border-gray-500 bg-white/20 p-2 dark:bg-black/20"
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="sm:w-2/1 flex h-24 w-full flex-col gap-2">
            <label htmlFor="subject">Subject</label>
            <input
              name="subject"
              value={values.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full rounded-md border border-gray-500 bg-white/20 p-2 dark:bg-black/20"
            />
            {errors.subject && (
              <p className="text-xs text-red-500">{errors.subject}</p>
            )}
          </div>

          <div className="flex h-60 w-full flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Message"
              className="h-60 w-full rounded-md border border-gray-500 bg-white/20 p-2 dark:bg-black/20"
            />
            {errors.message && (
              <p className="text-xs text-red-500">{errors.message}</p>
            )}
          </div>

          <button
            disabled={isSubmitting}
            className="mt-8 w-full rounded-md bg-[var(--color-accent-strong)] p-2 text-white dark:bg-[var(--color-accent)]"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <span className="flex items-center justify-center gap-2">
                  Send Message <GrSend />
                </span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
