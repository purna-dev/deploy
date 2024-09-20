import React from 'react'
import style from './Card.module.css'
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'
import cir2 from './../../assets/cir2.png'


function Card() {
  return (
    <div className={style.card}>

        <ul>
            <li>

            <img className={style.parn} src={cir2} />
            
            <img src={img1} />
                <h3 style={{color:'rgba(0,0,0,.8)',fontWeight:'600'}}>High Quality Offset
                Printing</h3>
                <p style={{fontSize:'0.9rem',color:'rgba(0,0,0,.7)',fontWeight:'400'}}>Competently enable equity invested rather matrix alternative catalysts</p>
            </li>

            <li>
            <img src={img2} />

            <img className={style.parn} src={cir2} />


                <h3 style={{color:'rgba(0,0,0,.8)',fontWeight:'600'}}>Smooth Automation
                Your Products</h3>
                <p style={{fontSize:'0.9rem',color:'rgba(0,0,0,.7)',fontWeight:'400'}}>Competently enable equity invested rather matrix alternative catalysts</p>
            </li>

            <li>
            <img src={img4} />
            <img className={style.parn} src={cir2} />

                <h3 style={{color:'rgba(0,0,0,.8)',fontWeight:'600'}}>Custom Branding Tools
                Using Printing</h3>
                <p style={{fontSize:'0.9rem',color:'rgba(0,0,0,.7)',fontWeight:'400'}}>Competently enable equity invested rather matrix alternative catalysts</p>
            </li>

            <li>
            <img src={img3} />
            <img className={style.parn} src={cir2} />

                <h3 style={{color:'rgba(0,0,0,.8)',fontWeight:'600'}}>Lowest Risk Online
                Business</h3>
                <p style={{fontSize:'0.9rem',color:'rgba(0,0,0,.7)',fontWeight:'400'}}>Competently enable equity invested rather matrix alternative catalysts</p>
            </li>
        </ul>

    </div>
  )
}

export default Card