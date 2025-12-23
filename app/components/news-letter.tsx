"use client";
import { useState, ChangeEvent, FormEvent } from "react";

export default function NewsLetter() {
  const [formData, setFormData] = useState({ email: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Subscribed Successfully!");
    setFormData({ email: "" });
  };

  return (
    <section className="py-15 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 bg-white md:px-20 px-10 py-10 shadow-xl rounded-xl">
        <h4 className="text-2xl font-semibold">Subscribe for Latest Offers</h4>

        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            value={formData.email}
            onChange={handleChange}
            className="border px-4 py-2 w-auto"
          />

          <button type="submit" className="border px-6 py-2 bg-black text-white">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
