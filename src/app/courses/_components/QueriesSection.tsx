"use client";

import { useState } from "react";
import Image from "next/image";
import faqImg from "@/assets/FAQ.png";
import { validatequeriesForm } from "@/lib/validation";
import { toast } from "@/components/Toast";
import { AlertTriangle, CircleCheck } from "lucide-react";

export default function QueriesSection() {
  // Form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  //Track validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Track if user touched a field
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  //Enable button only when all fields are filled
  const isFormFilled = Object.values(formData).every(
    (value) => value.trim() !== "",
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    const updatedForm = { ...formData, [name]: value };
    setFormData(updatedForm);

    if (touched[name]) {
      setErrors(validatequeriesForm(updatedForm));
    }
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validatequeriesForm(formData));
  }

  //Handle submit
  async function handleSubmit() {
    const validationErrors = validatequeriesForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTouched({ name: true, email: true, message: true });
      return;
    }

    try {
      const res = await fetch("/api/queries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || data?.success === false) {
        // console.error("Submission failed:", data?.message);
        toast(
          <span className="flex items-center gap-2">
            <AlertTriangle size={18} />
            Submission failed
          </span>,
          "error",
          2000,
        );
        return;
      }

      toast(
        <span className="flex items-center gap-2">
          <CircleCheck size={18} />
          Query submitted successfully
        </span>,
        "success",
        2000,
      );

      // Reset form after success
      setFormData({ name: "", email: "", message: "" });
      setTouched({});
      setErrors({});
    } catch (error: unknown) {
      console.error(error);
      toast(
        <span className="flex items-center gap-2">
          <AlertTriangle size={18} />
          Error submitting query
        </span>,
        "error",
        2000,
      );
    }
  }

  return (
    <section className="flex w-full flex-col items-center gap-16">
      <span className="font-pjs text-4xl font-semibold text-[#1A1A1A]">
        Send your Queries
      </span>

      <div className="mx-auto flex w-6xl items-start justify-between gap-16">
        <div className="flex w-1/2 justify-center">
          <Image
            src={faqImg}
            alt="FAQ Illustration"
            className="max-w-105 object-contain"
            priority
          />
        </div>

        <div className="flex w-1/2 flex-col items-center gap-6">
          {/* NAME */}
          <label
            className={`${
              touched.name && errors.name
                ? "border-red-400"
                : "border-[#6B99FF]"
            } relative w-full cursor-text rounded-3xl border-2 bg-white px-14 py-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-all`}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="peer w-full outline-none"
            />

            <span
              className={`${
                formData.name
                  ? "-top-2.5 left-6 text-xs"
                  : "top-6 left-12 text-base peer-focus:-top-2.5 peer-focus:left-6 peer-focus:text-xs"
              } absolute bg-white px-2 transition-all`}
            >
              Your Name :
            </span>

            {touched.name && errors.name && (
              <span className="absolute -top-2.5 right-6 bg-white px-2 text-xs text-red-500 transition-all">
                {errors.name}
              </span>
            )}
          </label>

          {/* EMAIL */}
          <label
            className={`${
              touched.email && errors.email
                ? "border-red-400"
                : "border-[#6B99FF]"
            } relative w-full cursor-text rounded-3xl border-2 bg-white px-14 py-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-all`}
          >
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="peer w-full outline-none"
            />

            <span
              className={`${
                formData.email
                  ? "-top-2.5 left-6 text-xs"
                  : "top-6 left-12 text-base peer-focus:-top-2.5 peer-focus:left-6 peer-focus:text-xs"
              } absolute bg-white px-2 transition-all`}
            >
              Email Address :
            </span>

            {touched.email && errors.email && (
              <span className="absolute -top-2.5 right-6 bg-white px-2 text-xs text-red-500 transition-all">
                {errors.email}
              </span>
            )}
          </label>

          {/* MESSAGE */}
          <label
            className={`${
              touched.message && errors.message
                ? "border-red-400"
                : "border-[#6B99FF]"
            } relative w-full cursor-text rounded-3xl border-2 bg-white px-14 py-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-all`}
          >
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className="peer h-65.25 w-full resize-none outline-none"
            />

            <span
              className={`${
                formData.message
                  ? "-top-2.5 left-6 text-xs"
                  : "top-6 left-12 text-base peer-focus:-top-2.5 peer-focus:left-6 peer-focus:text-xs"
              } absolute bg-white px-2 transition-all`}
            >
              Enter Your Message :
            </span>

            {touched.message && errors.message && (
              <span className="absolute -top-2.5 right-6 bg-white px-2 text-xs text-red-500 transition-all">
                {errors.message}
              </span>
            )}
          </label>

          {/* BUTTON */}
          <button
            type="button"
            disabled={!isFormFilled}
            onClick={handleSubmit}
            className="cursor-pointer rounded-[30px] bg-linear-to-r from-[#155DFC] to-[#5087FF] px-12 py-3 text-white transition-all hover:-translate-y-0.5 hover:shadow-[0px_2px_0px_0px_rgba(0,0,0,0.25)] active:translate-0 active:shadow-none disabled:cursor-not-allowed disabled:opacity-75"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
