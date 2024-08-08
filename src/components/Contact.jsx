import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState("");
  const controls = useAnimation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmissionStatus("");

    const webhookURL = "YOUR_DISCORD_WEBHOOK_URL"; // Replace with your Discord webhook URL

    const payload = {
      content: `**Name:** ${form.name}\n**Email:** ${form.email}\n**Message:** ${form.message}`,
    };

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmissionStatus("sent");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmissionStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:m-12 md:px-48 flex flex-col sm:flex-row gap-10 overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 100 },
          show: { opacity: 1, y: 0, transition: { type: "tween", duration: 1, delay: 0.2 } },
        }}
        className="flex-[0.8] md:pb-40 mx-4 sm:mx-auto"
      >
        <h3 className={styles.sectionText}>Contact</h3>

        <form onSubmit={handleSubmit} className="mt-12 gap-4 flex flex-col">
          <span className="text-white font-medium mt-3">Full Name</span>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange}
            className="bg-tertiary p-4 text-white border font-medium"
          />
          <span className="text-white font-medium mt-3">Email Address</span>
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            value={form.email}
            onChange={handleChange}
            className="bg-tertiary p-4 text-white border font-medium"
          />
          <span className="text-white font-medium mt-3">Message</span>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            value={form.message}
            onChange={handleChange}
            className="bg-tertiary p-4 text-white border font-medium"
          />
          <button
            type="submit"
            className={`py-3 px-8 w-fit font-bold shadow-md shadow-primary ${
              loading || submissionStatus === "sent" || submissionStatus === "error"
                ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                : "bg-tertiary text-white"
            }`}
            disabled={loading || submissionStatus === "sent" || submissionStatus === "error"}
          >
            {loading ? "Sending..." : submissionStatus === "sent" ? "Sent" : submissionStatus === "error" ? "Error" : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");