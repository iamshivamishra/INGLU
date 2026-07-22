"use client";

import { contact } from "@/actions/contact";
import { useState } from "react";
import HomeContactGraphics from "@/assets/home_contact_graphics.png";
import { validateContactForm } from "@/lib/validation";
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    reason: "",
    message: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isFormFilled = Object.values(formData).every(
    (value) => value.trim() !== "",
  );

  function handleChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    const updatedFormData = {
      ...formData,
      [name]: value,
    };

    setFormData(updatedFormData);

    if (touched[name]) {
      const validationErrors = validateContactForm(updatedFormData);
      setErrors(validationErrors);
    }
  }

  function handleBlur(
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
      | React.FocusEvent<HTMLSelectElement>,
  ) {
    const { name } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    setErrors(validateContactForm(formData));
  }

  async function handleSubmit() {
    const validationErrors = validateContactForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTouched({
        name: true,
        contact: true,
        email: true,
        reason: true,
        message: true,
      });
      return;
    }

    try {
      const res = await contact(formData);
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <section
      id="home-contact-section"
      className="relative flex w-full flex-col items-center gap-8 px-4 md:gap-12"
    >
      <h2 className="font-plus-jakarta-sans text-center text-2xl font-extrabold uppercase sm:text-3xl md:text-4xl lg:text-5xl">
        Want to connect with us!
      </h2>

      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-6 rounded-3xl border border-black/25 bg-[#F4F7FE] p-6 sm:p-10 md:gap-8 md:p-12 lg:flex-row lg:p-16">
        <Image
          src={HomeContactGraphics}
          alt="Home Contact Section Graphics"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:h-71.5 lg:w-92.75"
        />

        <div className="flex w-full flex-col items-center gap-6 md:gap-8">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <label
              className={`${touched.name && errors.name ? "border-red-400" : "border-[#6B99FF]"} relative cursor-text rounded-2xl border-2 bg-white px-6 py-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:px-8 md:px-10 md:py-5`}
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
                    ? "-top-2.5 left-5 text-xs sm:left-7"
                    : "top-4 left-6 text-sm peer-focus:-top-2.5 peer-focus:left-5 peer-focus:text-xs sm:top-5 sm:left-8 sm:text-base sm:peer-focus:left-7"
                } absolute bg-linear-to-b from-transparent from-50% to-white to-50% px-2 transition-all`}
              >
                Name :
              </span>
            </label>

            <label
              className={`${touched.contact && errors.contact ? "border-red-400" : "border-[#6B99FF]"} relative cursor-text rounded-2xl border-2 bg-white px-6 py-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:px-8 md:px-10 md:py-5`}
            >
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                onBlur={handleBlur}
                className="peer w-full outline-none"
              />
              <span
                className={`${
                  formData.contact
                    ? "-top-2.5 left-5 text-xs sm:left-7"
                    : "top-4 left-6 text-sm peer-focus:-top-2.5 peer-focus:left-5 peer-focus:text-xs sm:top-5 sm:left-8 sm:text-base sm:peer-focus:left-7"
                } absolute bg-linear-to-b from-transparent from-50% to-white to-50% px-2 transition-all`}
              >
                Contact :
              </span>
            </label>

            <label
              className={`${touched.email && errors.email ? "border-red-400" : "border-[#6B99FF]"} relative cursor-text rounded-2xl border-2 bg-white px-6 py-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:px-8 md:px-10 md:py-5`}
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
                    ? "-top-2.5 left-5 text-xs sm:left-7"
                    : "top-4 left-6 text-sm peer-focus:-top-2.5 peer-focus:left-5 peer-focus:text-xs sm:top-5 sm:left-8 sm:text-base sm:peer-focus:left-7"
                } absolute bg-linear-to-b from-transparent from-50% to-white to-50% px-2 transition-all`}
              >
                Email Address :
              </span>
            </label>

            <label className="relative rounded-2xl border-2 border-[#6B99FF] bg-white px-6 py-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:px-8 md:px-10 md:py-5">
              <select
                name="reason"
                defaultValue=""
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full outline-none"
              >
                <option value="" disabled>
                  Select Reason :
                </option>
                <option value="artist_booking">Artist Booking</option>
                <option value="collaboration">Collaboration</option>
              </select>
            </label>

            <label
              className={`${touched.message && errors.message ? "border-red-400" : "border-[#6B99FF]"} relative col-span-1 h-28 cursor-text rounded-2xl border-2 bg-white px-6 py-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:col-span-2 sm:px-8 md:h-24 md:px-10 md:py-5`}
            >
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className="peer h-full w-full resize-none outline-none"
              />
              <span
                className={`${
                  formData.message
                    ? "-top-2.5 left-5 text-xs sm:left-7"
                    : "top-4 left-6 text-sm peer-focus:-top-2.5 peer-focus:left-5 peer-focus:text-xs sm:top-5 sm:left-8 sm:text-base sm:peer-focus:left-7"
                } absolute bg-linear-to-b from-transparent from-50% to-white to-50% px-2 transition-all`}
              >
                Enter Your Message :
              </span>
            </label>
          </div>

          <button
            type="button"
            disabled={!isFormFilled}
            onClick={handleSubmit}
            className="cursor-pointer rounded-full bg-linear-to-br from-[#155DFC] to-[#5087FF] px-6 py-2 text-xl font-medium text-white transition-all"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}
