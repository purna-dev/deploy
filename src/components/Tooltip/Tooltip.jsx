import React from 'react'
import style from './Tooltip.module.css'
function Tooltip({data}) {
    console.log(data)
  return (
    <div className={style.tooltip}>
    <div className={style.top}></div>
    <div className={style.bottom}>
        <ul>
            {data?.map((ele,i)=><li key={i}>{ele} {'>'}</li>)}
        </ul>
    </div>
    </div>
  )
}

export default Tooltip