"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import music from "@/assets/music.png";
import brand from "@/assets/brand.png";
import { toast } from "@/components/Toast";
import { collaboration } from "@/actions/collaboration";

export default function PartnerWithUs() {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("");

  return (
    <div id="partner-with-us" className="mx-auto max-w-7xl px-2">
      <h2 className="font-pjs text-center text-5xl font-bold">
        Partner with us
      </h2>
      <div className="flex flex-wrap justify-center gap-12 py-14">
        <div className="relative w-143 overflow-hidden rounded-[25px] border border-blue-200 bg-white bg-linear-to-br from-[#3183FF3D] to-white to-15% p-10">
          <div className="mb-6 flex items-start gap-6">
            <div className="relative flex h-[83.75px] w-[83.75px] items-center justify-center rounded-[25.12px] bg-blue-600">
              <Sparkles className="absolute -top-[5.63px] -right-2 h-[25.12px] w-[25.12px] text-blue-300" />

              <Image src={music} alt="Music" width={55} height={55} />
            </div>

            <h3 className="font-pjs text-3xl leading-tight font-bold text-[#306BEC] lg:text-4xl">
              Artist <br /> Collaboration
            </h3>
          </div>

          <p className="mb-8 text-[#000000] lg:text-xl">
            Calling all DJs, musicians, performers, and creators! Join us on
            stage and share your talent with thousands of fellow creators. Get
            featured, network, and make memories that last.
          </p>

          <ul className="mb-10 space-y-2">
            <li className="flex items-center gap-4">
              <span className="relative mt-1 h-6 w-6 rounded-full bg-[#0096FF33]">
                <span className="absolute top-1/2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0096FF]"></span>
              </span>

              <span className="leading-none text-[#000000] lg:text-xl">
                Perform at multiple city events
              </span>
            </li>

            <li className="flex items-center gap-4">
              <span className="bg-[#0096FF33]0 relative mt-1 h-6 w-6 rounded-full bg-[#0096FF33]">
                <span className="absolute top-1/2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0096FF]"></span>
              </span>
              <span className="leading-none text-[#000000] lg:text-xl">
                Collaborate with top creators
              </span>
            </li>

            <li className="flex items-center gap-4">
              <span className="relative mt-1 h-6 w-6 rounded-full bg-[#0096FF33]">
                <span className="absolute top-1/2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0096FF]"></span>
              </span>
              <span className="leading-none text-[#000000] lg:text-xl">
                Get featured on social media
              </span>
            </li>
          </ul>
          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer rounded-xl bg-blue-600 py-4 text-center text-xl text-white transition hover:-translate-y-0.5 hover:shadow"
          >
            Collaborate with us
          </div>
        </div>

        <div className="relative w-143 overflow-hidden rounded-[25px] border border-blue-200 bg-white bg-linear-to-br from-[#3183FF3D] to-white to-15% p-10">
          <div className="mb-6 flex items-start gap-6">
            <div className="relative flex h-[83.75px] w-[83.75px] items-center justify-center rounded-[25.12px] bg-blue-600">
              <Sparkles className="absolute -top-[5.63px] -right-2 h-[25.12px] w-[25.12px] text-blue-300" />

              <Image src={brand} alt="Brand" width={55} height={55} />
            </div>

            <h3 className="font-pjs text-3xl leading-tight font-bold text-[#306BEC]">
              Brand <br /> Collaboration
            </h3>
          </div>

          <p className="mb-8 text-[#000000] lg:text-xl">
            Brands, this is your stage! Connect with India’s most engaged
            creator community. Activate your brand, build authentic
            partnerships, and amplify your reach.
          </p>

          <ul className="mb-10 space-y-2">
            <li className="flex items-center gap-4">
              <span className="relative mt-1 h-6 w-6 rounded-full bg-[#0096FF33]">
                <span className="absolute top-1/2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0096FF]"></span>
              </span>

              <span className="text-[#000000] lg:text-xl">
                Custom brand activations
              </span>
            </li>

            <li className="flex items-center gap-4">
              <span className="bg-[#0096FF33]0 relative mt-1 h-6 w-6 rounded-full bg-[#0096FF33]">
                <span className="absolute top-1/2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0096FF]"></span>
              </span>
              <span className="text-[#000000] lg:text-xl">
                Direct creator partnerships
              </span>
            </li>

            <li className="flex items-center gap-4">
              <span className="relative mt-1 h-6 w-6 rounded-full bg-[#0096FF33]">
                <span className="absolute top-1/2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0096FF]"></span>
              </span>
              <span className="leading-none text-[#000000] lg:text-xl">
                Massive digital amplification
              </span>
            </li>
          </ul>
          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer rounded-xl bg-blue-600 py-4 text-center text-xl text-white transition hover:-translate-y-0.5 hover:shadow"
          >
            Collaborate with us
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 p-12 text-center">
        <p className="text-xl">Need help choosing? Have questions?</p>
        <div className="text-xl">
          Conatct us At: +91
          <a href="tel:9990461299" className="cursor-pointer text-blue-500">
            {" "}
            9990461299
          </a>
          ,
          <a href="tel:9990461133" className="cursor-pointer text-blue-500">
            {" "}
            9990461133
          </a>
          ,
          <a href="tel:9990461144" className="cursor-pointer text-blue-500">
            {" "}
            9990461144
          </a>
          ,
          <a href="tel:9990461155" className="cursor-pointer text-blue-500">
            {" "}
            9990461155
          </a>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-2xl rounded-xl bg-white p-8">
            <h2 className="mb-6 text-2xl font-bold">
              Collaboration Form
            </h2>

            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const form = new FormData(e.currentTarget);
                const data: any = Object.fromEntries(form.entries());

                if (data.category === "Other") {
                  data.category = data.otherCategory;
                }

                try {
                  await collaboration({
                    fullName: data.fullName,
                    brandName: data.brandName,
                    email: data.email,
                    phone: data.phone,
                    links: data.links,
                    category: data.category,
                    physicalStore: data.physicalStore,
                    exhibitedBefore: data.exhibitedBefore,
                  });

                  toast("Form submitted successfully!", "success", 2000);
                  setIsOpen(false);
                } catch (err) {
                  console.error(err);
                  toast("Something went wrong!", "error", 2000);
                }
              }}
              className="space-y-4"
            >
              <input
                name="fullName"
                required
                placeholder="Your Full Name*"
                className="w-full rounded border p-2"
              />
              <input
                name="brandName"
                required
                placeholder="Brand Name*"
                className="w-full rounded border p-2"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email*"
                className="w-full rounded border p-2"
              />
              <input
                name="phone"
                required
                placeholder="Phone Number*"
                className="w-full rounded border p-2"
              />
              <input
                name="links"
                placeholder="Website/Instagram/Facebook Links"
                className="w-full rounded border p-2"
              />

              <div>
                <select
                  name="category"
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded border p-2"
                >
                  <option value="">Select Brand Category*</option>
                  <option value="Food Brand">Food Brand</option>
                  <option value="Fashion & Lifestyle Brand">
                    Fashion & Lifestyle Brand
                  </option>
                  <option value="Small Business">Small Business</option>
                  <option value="Beverages">Beverages</option>
                  <option value="Other">Other</option>
                </select>

                {category === "Other" && (
                  <input
                    type="text"
                    name="otherCategory"
                    required
                    placeholder="Please specify your category*"
                    className="mt-3 w-full rounded border p-2"
                  />
                )}
              </div>

              <div>
                <p className="font-medium">Do You Have any Physical Store?*</p>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="physicalStore"
                    value="Yes"
                    required
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="physicalStore"
                    value="No"
                    required
                  />{" "}
                  No
                </label>
              </div>

              <div>
                <p className="font-medium">
                  Have You Exhibited with INGLU before?*
                </p>
                <label className="mr-4">
                  <input
                    type="radio"
                    name="exhibitedBefore"
                    value="Yes"
                    required
                  />{" "}
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="exhibitedBefore"
                    value="No"
                    required
                  />{" "}
                  No
                </label>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded bg-gray-300 px-4 py-2"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded bg-blue-600 px-6 py-2 text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
