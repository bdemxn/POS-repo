import React from 'react';
import { motion } from "framer-motion";
import { default as userEdit } from "../svg/user-edit.svg";

export const Customer = () => {
  const customerName = "Kevin Bonilla";
  const customerCode = 10000001;

  return (
    <div className='customer-box'>
      <div className='customer flex justify-between'>
        <div>
          <p className='font-inter font-medium'>
            {customerName}
          </p>
          <p className='font-inter font-medium'>
            #{customerCode}
          </p>
        </div>

        <motion.img
          src={userEdit}
          alt='edit'
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className='w-8'
        />
      </div>
    </div>
  );
}
