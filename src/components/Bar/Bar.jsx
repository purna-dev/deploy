import React from 'react'
import style from './Bar.module.css'
import pattern from './../../assets/bitmap.png'
import { MdRebaseEdit } from "react-icons/md";
import { MdOutlineLocalPrintshop } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import cir2 from './../../assets/cir2.png'


function Bar() {
  return (

<>
{/* 
     <div className={style.marquee}>
   <div className={style.track}>
     <div className={style.content}>&nbsp;Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence Infinite Marquee with long sentence</div>
   </div>
 </div> */}

<div className={style.bar}>

<img src={cir2} className={style.cir2} />
<div className={style.pattern}>
<img src={pattern} />

</div>

<div className={style.lists}>

<div>

<MdOutlineLocalPrintshop color='#64e0a6' size={41}/>

    <span>High Quality Printing</span>
</div>


<div>

<MdRebaseEdit color='#c5717d' size={41}/>

    <span>100% Free editing design tool</span>
</div>


<div>

<RiSecurePaymentFill color='#64e0a6' size={60}/>

    <span>Safe & secure online transaction</span>
</div>

</div>




</div>


</>
  )
}

export default Bar