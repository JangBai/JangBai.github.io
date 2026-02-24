import { useState, useCallback } from "react";

export const useCopy = () => {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async (text: string) => {
    if (!text) return false;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      return true;
    } catch (err) {
      console.error("Clipboard copy failed:", err);
      setCopied(false);
      return false;
    }
  }, []);

  const reset = () => setCopied(false);

  return {
    copy,
    copied,
    reset,
  };
};
