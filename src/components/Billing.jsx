import React from 'react';

export const Billing = () => {
  return (
    <div className='billing'>
      <div className='flex justify-between'>
        <p className='font-inter font-bold'>
          TOTAL
        </p>
        <p className='font-inter font-medium'>
          ${ }
        </p>
      </div>
      <hr className='mt-3' />
      <div className='mt-3 font-inter font-semibold'>
        <section className='flex justify-between'>
          Taxes
          <p>${ }</p>
        </section>
        <section className='flex justify-between'>
          Net.
          <p>${ }</p>
        </section>
      </div>
    </div>
  );
}
