'use client'
import { useState } from "react";

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const useNewsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => EMAIL_REGEX.test(email);

  const subscribe = async () => {
    if (isSubmitting) return;
    const { toast } = await import("react-toastify");

    if (!email.trim()) {
      toast.error("Please enter an email address!", { position: "top-center" });
      return;
    }

    if (validateEmail(email)) {
      toast.success("Subscribed to Newsletter!", {
        position: "top-center",
        onOpen: () => {
          setIsSubmitting(true);
          setEmail("");
        },
        onClose: () => setIsSubmitting(false)
      });
    } else {
      toast.error("Invalid Email Address!", {
        position: "top-center",
        onOpen: () => setIsSubmitting(true),
        onClose: () => setIsSubmitting(false)
      });
    }
  };

  const reset = () => {
    setEmail("");
    setIsSubmitting(false);
  };

  return {
    email,
    isSubmitting,
    handleEmailChange,
    subscribe,
    reset
  };
};

export default useNewsletter;