import React from 'react'
import style from './Products.module.css'
import { BsGrid } from 'react-icons/bs'
import { MdOutlineArrowOutward } from "react-icons/md";
import ProductC from '../ProductC/ProductC';

function Products() {
  const default_data = [
    {
      pic:'https://www.theapparelbox.com/cdn/shop/files/4_12.jpg?v=1688633177',
      range:'10$-50$',
      productType:'T-shirt'
    },
    {
      pic:'https://www.yourprint.in/wp-content/uploads/2018/12/Black_Cap-1.jpg',
      range:'10$-50$',
      productType:'Cap'
    },
    {
      pic:'https://printbebo.in/wp-content/uploads/2020/06/74594343_598369980912916_4559769664543759925_n.jpg',
      range:'10$-50$',
      productType:'Mobile Cover'
    },
    {
      pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI9LxOkZxnAjpovJEy823vxP6lZ6lKWpvKVhL6JeHsU3yHhJShIUkhAqDZeHWC394D8gU&usqp=CAU',
      range:'10$-50$',
      productType:'Wall Art'
    },
    {
      pic:'https://www.arcprint.in/category/wp-content/uploads/2023/11/2-1.webp',
      range:'10$-50$',
      productType:'Calendars'
    },
    {
      pic:'https://s.alicdn.com/@sc04/kf/Hcbd6265dd6c74708b257a75a029d71c6x.jpg_720x720q50.jpg',
      range:'10$-50$',
      productType:'Cards'
    },
    {
      pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGI5iEI6i6aTVLIvfnF20tp7bUxWXvu-FhaGtee5w_r7EAvvtu2Gc2iGVE0EOwSSgSsUw&usqp=CAU',
      range:'10$-50$',
      productType:'Bottel'
    },
    {
      pic:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzxesOFmkIIluDcl7TvDtnfPN_UcvUSFtjw&s',
      range:'10$-50$',
      productType:'Photo books'
    }
  ]
  return (
    <div className={style.section}>
      <div className={style.sectop}>
        <div>
          <span>
            <BsGrid size={17} /> Our Product
          </span>
          <p>See Our Amazing Products</p>
        </div>
        <div>
          {/* <span> <MdOutlineArrowOutward size={18} /> See products</span> */}
          <span>
          <ul>
            <li> <MdOutlineArrowOutward size={14} /> All Products</li>
            
            
          </ul>
          </span>
        </div>
      </div>

      <div className={style.bottom}>

      {
        default_data.map((ele,i)=><ProductC key={i} data={ele}/>)
      }

      </div>

    </div>
  )
}

export default Products