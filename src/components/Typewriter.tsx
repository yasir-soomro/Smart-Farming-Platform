import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const words = [
  { text: "Sustainable", color: "text-primary" },
  { text: "Profitable", color: "text-accent" },
  { text: "Data-Driven", color: "text-blue-500" },
  { text: "Resilient", color: "text-emerald-600" }
];

export function Typewriter() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(timeout);
  }, []);

  // Typing logic
  useEffect(() => {
    if (subIndex === words[index].text.length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 2500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 40 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (
    <span className="inline-flex items-center">
      <span className={`${words[index].color} transition-colors duration-300`}>
        {words[index].text.substring(0, subIndex)}
      </span>
      <motion.span
        animate={{ opacity: blink ? 1 : 0 }}
        transition={{ duration: 0.1 }}
        className={`ml-[0.1em] w-[0.08em] h-[0.9em] bg-current ${words[index].color}`}
      />
    </span>
  );
}
