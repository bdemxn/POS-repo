import React from 'react';
import { motion } from "framer-motion";
import { default as posLogo } from "../svg/pos-logo.svg";
import { default as account } from "../svg/id-badge.svg";
import { default as settings } from "../svg/settings.svg";

export const Navbar = () => {
  return (
    <nav className='bg-gray-200 flex justify-between h-14'>
      <div className='flex items-center ml-10 gap-3'>
        <img src={posLogo} alt="POS" className='w-8' />
        <p className='font-inter font-medium'>Default POS - v0.1 pre-alpha</p>
      </div>
      <div className='flex items-center mr-10 gap-3'>
        <motion.img
          src={settings}
          alt="settings"
          whileHover={{ rotate: 90 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className='w-8'
        />
        <motion.img
          src={account}
          alt="id"
          className='w-8'
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </nav>
  );
}
