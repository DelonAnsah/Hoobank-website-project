import React from 'react'
import styles, { layout } from '../style'
import bill from '../assets/bill.png'
import apple from '../assets/apple.svg'
import google from '../assets/google.svg'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" 
        className='w-[100%] h-[100%] relative z-[5]'/>

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
        </div>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>Easily control your <br /> billing & invoicing.</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Master your finances with confidence. Streamline your transactions, knowing that wise management today lays the foundation for your financial freedom tomorrow.
          </p>

          <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
            <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-point'/>
            <img src={google} alt="google_store" className='w-[128px] h-[42px] object-contain cursor-point'/>
          </div>
        </div>
    </section>
  )
}

export default Billing
