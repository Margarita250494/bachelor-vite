'use client'
import { useState } from "react";

const useAppointmentForm = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    patientNumber: "",
    patientGender: "default",
    appointmentTime: "",
    preferredMode: "default"
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));

    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = () => {
    const errors = {};
    const { patientName, patientNumber, patientGender, appointmentTime, preferredMode } = formData;

    if (!patientName.trim()) {
      errors.patientName = "Patient name is required";
    } else if (patientName.trim().length < 8) {
      errors.patientName = "Patient name must be at least 8 characters";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = "Patient phone number must be of 10 digits";
    }

    if (patientGender === "default") {
      errors.patientGender = "Please select patient gender";
    }

    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = Date.now();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }

    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    return errors;
  };

  const resetForm = () => {
    setFormData({
      patientName: "",
      patientNumber: "",
      patientGender: "default",
      appointmentTime: "",
      preferredMode: "default"
    });
    setFormErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    resetForm();
    const { toast } = await import("react-toastify");
    toast.success("Appointment Scheduled!", {
      position: "top-center",
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false)
    });
  };

  return {
    formData,
    formErrors,
    isSubmitted,
    handleChange,
    handleSubmit,
    resetForm
  };
};

export default useAppointmentForm;