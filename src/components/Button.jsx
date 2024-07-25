import React from 'react';
import { motion } from "framer-motion";

export const Button = ({ text, color }) => {

  const colorAssigned = `rounded-xl bg-${color}-500 px-7 py-2 font-inter font-normal text-white`;

  return (
    <motion.button
      className={colorAssigned}
      whileTap={{ scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      {text}
    </motion.button>
  );
}
