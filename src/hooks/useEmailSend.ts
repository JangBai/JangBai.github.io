import { useState } from "react";
import emailjs from "@emailjs/browser";

type EmailParams = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string; // honeypot
};

export const useEmailSend = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const sendEmail = async (data: EmailParams) => {
    // Honeypot (봇 방지)
    if (data.company) return;

    setLoading(true);
    setSuccess(null);
    setEmailError(null);

    try {
      await emailjs.send(
        //
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      setSuccess(true);
      return true;
    } catch (err) {
      console.error(err);
      setEmailError("메일 전송에 실패했습니다.");
      setSuccess(false);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    sendEmail,
    loading,
    success,
    emailError,
  };
};
