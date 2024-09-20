import React from 'react'
import style from './Tooltip.module.css'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

function Tooltip({data}) {
    console.log(data)
  return (
    <div className={style.tooltip}>
    <div className={style.top}></div>
    <div className={style.bottom}>
        <ul>
            {data?.map((ele,i)=><li key={i}>{ele} <MdArrowForwardIos size={11}/></li>)}
        </ul>
    </div>
    </div>
  )
}

export default Tooltip