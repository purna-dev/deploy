import {useEffect, useRef, useState} from 'react'
import { TbBrandPrintables } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import style from './Navbar.module.css'
import Tooltip from '../Tooltip/Tooltip';
import Sidebar from '../Mobile/Sidebar';
function Navbar() {
    const [show,setShow] = useState('')
    const [mobilenav,setMobilenav] = useState(false);
    const arrow = useRef(null)

    useEffect(()=>{
        console.log(arrow.current)
    },[])

    const default_links =[{
        link:'Products',
        subLink:[
            'Best Seller',
            'Mens Cloths',
            'Kids & baby clothing',
            'Wall art',
            'Calenders',
            'Cards',
            'Photo books',
            
        ]
    },
    {
        link:'Start selling',
        subLink:[
            'Best Seller',
            'Mens Cloths',
            'Kids & baby clothing',
            'Wall art',
            'Calenders',
            'Cards',
            'Photo books',
            
        ]
    },
    {
        link:'Tools and apps',
        subLink:[
            'Best Seller',
            'Mens Cloths',
            'Kids & baby clothing',
            'Wall art',
            'Calenders',
            'Cards',
            'Photo books',
            
        ]
    },
    {
        link:'Pricing',
        subLink:[
            'Best Seller',
            'Mens Cloths',
            'Kids & baby clothing',
            'Wall art',
            'Calenders',
            'Cards',
            'Photo books',
            
        ]
    },
    {
        link:'Resources',
        subLink:[
            'Best Seller',
            'Mens Cloths',
            'Kids & baby clothing',
            'Wall art',
            'Calenders',
            'Cards',
            'Photo books',
            
        ]
    },

    {
        link:'Pro sellers'
        
    }
    ,{
        link:'GelatoConnect',
        subLink:[
            'Best Seller',
            'Mens Cloths',
            'Kids & baby clothing',
            'Wall art',
            'Calenders',
            'Cards',
            'Photo books',
            
        ]
    },

]

const handleEnter = (eleLink)=>{
    console.log(eleLink)
    setShow(eleLink)
    
}

const handleLeave = (eleLink)=>{
    console.log(eleLink)
    setShow('')
}

const handleClick = ()=>{
    setMobilenav(true)
}

  return (
    <>
    {
    mobilenav?
    <Sidebar mobilenav={mobilenav} navFun={setMobilenav} />
    :
    <></>
    }
    <div className={style.header}>

    <div className={style.head}>



    <div className={style.icon}>


    <div className={style.navicon} onClick={()=>handleClick()}>

    <HiMenuAlt2 size={29}/>

    </div>

    <TbBrandPrintables size={45}/>

    <p >Gelato</p>
    </div> 


    <div className={style.headbar}>

        <div>
            <IoSearch size={26} color='black'/>
        </div>
        <div>
            <IoCartOutline size={30} color='black'/>
            <span>0</span>
        </div>
        <div>
            <MdOutlineSupportAgent size={20} color='white'/>
            
        </div>
        <div>
            <p>My Account</p>
            <span> <a href='#'>SignIn</a>  / <a href='#'>SignUp</a></span>
            </div>

    </div>




    </div>

    <div className={style.navbar}>


    <nav>
        <ul>
            {/* <li>Products
            <Tooltip/>
            
            </li> */}

            {
                default_links.map((ele,i)=><li style={{display:'flex',alignItems:'center',gap:'0.4rem'}} onMouseEnter={()=>handleEnter(ele.link)} onMouseLeave={()=>handleLeave(ele.link)} key={i}> {ele.link} <span style={{transform:show===ele.link?'rotate(180deg)':'rotate(0deg)',padding:'0',margin:'0',height:'14px',alignItems:'center',justifyContent:'center',display:ele?.subLink?'flex':'none',transition:'all .3s ease-in-out'}} ref={arrow}><MdKeyboardArrowDown size={18}  /></span> {show===ele.link && ele.subLink?<Tooltip data={ele.subLink} />:<></>} </li>)
            }
        </ul>
    </nav>
    
    
    </div>
    </div>
    </>
  )
}

export default Navbar