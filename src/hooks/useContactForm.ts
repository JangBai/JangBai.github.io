import { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<FormValues>;

export const useContactForm = () => {
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 값 변경
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  // 간단 유효성 검사
  const validate = () => {
    const newErrors: FormErrors = {};

    if (!values.name.trim()) newErrors.name = "이름을 입력해주세요.";
    if (!values.email.trim()) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "올바른 이메일 형식이 아닙니다.";
    }

    if (!values.subject.trim()) newErrors.subject = "제목을 입력해주세요.";
    if (!values.message.trim()) newErrors.message = "메시지를 입력해주세요.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 제출
  const handleSubmit = async (
    onSubmit: (data: FormValues) => Promise<void>
  ) => {
    if (!validate()) return;

    try {
      setIsSubmitting(true);
      await onSubmit(values);
      resetForm();
    } catch (error) {
      console.error("Submit Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setValues({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({});
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};
