import React from 'react';
import { Billing, Customer, Navbar } from './components';
import { Products } from './views/Products';
import { motion } from "framer-motion";

const POSApp = () => {

  const btnDelete = "rounded-xl bg-red-400 px-7 py-2 font-inter font-normal text-white";
  const btnBuy = "rounded-xl bg-blue-500 px-7 py-2 font-inter font-normal text-white";

  return (
    <>
      <div className='animate__animated animate__fadeInDown'>
        <Navbar />
      </div>
      <div className='flex gap-6'>
        <div className='animate__animated animate__fadeInLeft'>
          <Customer />
          <Billing />
        </div>
        <section>
          <Products />
          <div className='flex gap-5 mt-6 justify-end mx-10'>
            <motion.button
              className={btnDelete}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              Delete
            </motion.button>
            <motion.button
              className={btnBuy}
              whileTap={{ scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              Buy
            </motion.button>
          </div>
        </section>
      </div>
    </>
  )
}

export default POSApp;