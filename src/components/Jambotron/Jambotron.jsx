import React from 'react'
import style from './Jambotron.module.css'
import jambo from '../../assets/jambo2.png'
import cir from '../../assets/cir.png'
import Button from '../Button/Button'
import brush from './../../assets/brush.png'

import { MdOutlineArrowOutward } from "react-icons/md";
function Jambotron() {
  return (
    <div className={style.jambo}>

    <div className={style.jambo_left}>

    <img src={cir} className={style.cir}/>
    <img src={brush} className={style.brush}/>

        <h2>
        Print on demand for your ecommerce business
        </h2>
        <p>
        Sign up for free and only pay for what you sell
        </p>
        {/* <h2>Design Place</h2>
        <p>Print Product</p>
        <span>Print on demand for your ecommerce business.</span> */}
        <p className={style.note}>Turn your passion into profit with the world's largest print on demand  network.</p>

          <div className={style.btns}>
          <Button/>
          <span>See our products <MdOutlineArrowOutward  /> </span>
          </div>

    </div>
    <div className={style.jambo_right}>


    <img src={jambo} />

    </div>
    
    </div>
  )
}

export default Jambotron