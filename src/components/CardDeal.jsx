import React from 'react'
import styles, { layout } from '../style'
import Button from './Button'
import card from '../assets/card.png'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className='sm:block hidden'/> in few easy steps</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Take control of your choices effortlessly. The right decision, made today, opens the door to smarter spending and a wealthier future.</p>

        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="alt" className='w-[100%] h-[100%]' />
      </div>
      
    </section>
  )
}

export default CardDeal
