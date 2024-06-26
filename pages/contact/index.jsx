import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { fadeIn } from "../../variants";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/api/contact/route", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      }),
    })
      .then(() => {
        console.log("Form submitted successfully.");
        setIsLoading(false);
        toast.success(
          "Thank you. We will get back to you ASAP.",
          {
            style: {
              background: "linear-gradient(to right, #8A2387, #000000)",
              color: "white",
              fontWeight: "bold"
            }
          }
        );
        myForm.reset();
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-16 md:py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px] px-4 md:px-0">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-4 md:mb-10 pt-10"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-4 md:gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            action="/api/sendEmail"
            method="POST"
            data-netlify="true"
          >
            {/* input group */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-x-6 w-full">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="input w-full"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                className="input w-full"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              className="input w-full"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <textarea
              name="message"
              id="message"
              placeholder="Message..."
              className="textarea w-full"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 py-2 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group mx-auto md:mx-0"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                Let's talk
              </span>

              <BsArrowRight
                className="opacity-0 group-hover:flex group-hover:opacity-100 transition-all duration-300 absolute text-[22px] right-3 -top-1"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
