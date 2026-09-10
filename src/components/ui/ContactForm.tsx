import { useContactForm } from "@/hooks/useContactForm";
import { useEmailSend } from "@/hooks/useEmailSend";
import { GrSend } from "react-icons/gr";
import { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [visible, setVisible] = useState(false);
  const [flight, setFlight] = useState(false);

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useContactForm();

  const { sendEmail } = useEmailSend();

  const onSubmit = async (data: FormValues) => {
    const result = await sendEmail(data);

    if (result) {
      setVisible(true);
      setTimeout(() => setVisible(false), 3000);
    }
  };

  return (
    <div
      data-reveal="card"
      className="relative flex w-full flex-col items-center justify-center rounded-xl border border-white/10 bg-[var(--color-accent-soft-20)] p-6 text-[var(--color-primary)]"
    >
      <form
        className="w-full"
        onSubmit={(e) => {
          e.preventDefault();
          setFlight(
            !window.matchMedia("(prefers-reduced-motion: reduce)").matches
          );
          handleSubmit(onSubmit);
        }}
      >
        <div className="flex w-full flex-col items-center justify-between gap-4">
          <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="sm:w-2/1 flex h-24 w-full flex-col gap-2">
              <label htmlFor="name">이름</label>
              <input
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="이름을 입력해주세요"
                className="w-full rounded-md border border-gray-500 bg-white/20 p-2 dark:bg-black/20"
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="sm:w-2/1 flex h-24 w-full flex-col gap-2">
              <label htmlFor="email">이메일</label>
              <input
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="이메일을 입력해주세요"
                className="w-full rounded-md border border-gray-500 bg-white/20 p-2 dark:bg-black/20"
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="sm:w-2/1 flex h-24 w-full flex-col gap-2">
            <label htmlFor="subject">제목</label>
            <input
              name="subject"
              value={values.subject}
              onChange={handleChange}
              placeholder="제목을 입력해주세요"
              className="w-full rounded-md border border-gray-500 bg-white/20 p-2 dark:bg-black/20"
            />
            {errors.subject && (
              <p className="text-xs text-red-500">{errors.subject}</p>
            )}
          </div>

          <div className="flex h-60 w-full flex-col gap-2">
            <label htmlFor="message">내용</label>
            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="내용을 입력해주세요"
              className="h-60 w-full rounded-md border border-gray-500 bg-white/20 p-2 dark:bg-black/20"
            />
            {errors.message && (
              <p className="text-xs text-red-500">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            aria-busy={isSubmitting}
            data-flying={flight || undefined}
            disabled={isSubmitting}
            className="send-button mt-8 w-full rounded-md bg-[var(--color-accent-strong)] p-2 text-white transition-all duration-300 hover:bg-[var(--color-accent)] dark:bg-[var(--color-accent)] dark:hover:bg-[var(--color-accent-strong)]"
          >
            <span className="send-label">
              {isSubmitting ? "보내는 중" : "문의하기"}
            </span>
            <span
              className="send-plane"
              aria-hidden="true"
              onAnimationEnd={() => setFlight(false)}
            >
              <GrSend />
            </span>
            <span className="send-trail" aria-hidden="true" />
          </button>
        </div>
      </form>

      {visible && (
        <div className="absolute inset-0 z-50 flex items-center justify-center rounded-xl bg-black/70 backdrop-blur-sm">
          <div className="rounded-md bg-[var(--color-accent)] px-6 py-4 text-white shadow-lg">
            메일이 성공적으로 전송되었습니다.
          </div>
        </div>
      )}
    </div>
  );
}
