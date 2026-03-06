import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" },
  }),
};

const Contact = () => {
  const ref = useRef(null);
  const form = useRef(null);

  const isInView = useInView(ref, { once: false, margin: "-80px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2900k09",
        "template_1mvdljl",
        form.current,
        "cb7E8WEnG6AaPJAN8"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-[1100px] px-4 md:px-8 mb-24"
    >
      {/* Divider */}
      <div
        className="w-full h-[2px] my-20"
        style={{ backgroundColor: "var(--card-background)" }}
      />

      <motion.div
        ref={ref}
        className="flex flex-col items-center text-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-[2.5rem] md:text-[3rem] font-bold"
          style={{ color: "var(--text-color)" }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={1}
          className="max-w-xl mt-4 text-[1rem]"
          style={{ color: "var(--text-color)", opacity: 0.75 }}
        >
          Have a project in mind or want to collaborate? Drop me a message and
          I'll get back to you soon.
        </motion.p>

        {/* CONTACT FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={fadeUp}
          custom={2}
          className="mt-10 w-full max-w-[600px] flex flex-col gap-4"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="flex-1 px-5 py-3 rounded-lg outline-none text-[0.9rem]"
              style={{
                backgroundColor: "var(--card-background)",
                color: "var(--text-color)",
              }}
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="flex-1 px-5 py-3 rounded-lg outline-none text-[0.9rem]"
              style={{
                backgroundColor: "var(--card-background)",
                color: "var(--text-color)",
              }}
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="px-5 py-3 rounded-lg outline-none text-[0.9rem]"
            style={{
              backgroundColor: "var(--card-background)",
              color: "var(--text-color)",
            }}
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message..."
            required
            className="px-5 py-3 rounded-lg outline-none text-[0.9rem] resize-none"
            style={{
              backgroundColor: "var(--card-background)",
              color: "var(--text-color)",
            }}
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="self-center mt-2 px-10 py-3 rounded-full uppercase text-[0.85rem] font-bold"
            style={{
              backgroundColor: "var(--primary-color)",
              color: "#000",
            }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Direct email and phone */}
        <motion.div
          variants={fadeUp}
          custom={3}
          className="mt-6 flex flex-col gap-2 text-[0.85rem]"
          style={{ color: "var(--text-color)", opacity: 0.6 }}
        >
          <p>
            Or email directly at{" "}
            <a
              href="mailto:gnaneshwarnani8605@gmail.com"
              className="font-semibold underline hover:text-[var(--primary-color)] transition-colors"
              style={{ color: "var(--text-color)" }}
            >
              gnaneshwarnani8605@gmail.com
            </a>
          </p>
          <p>
            Or call at{" "}
            <a
              href="tel:+918608698986"
              className="font-semibold underline hover:text-[var(--primary-color)] transition-colors"
              style={{ color: "var(--text-color)" }}
            >
              +91 8608698986
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;