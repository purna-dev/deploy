import React from "react";
import style from "./Section.module.css";
import { BsGrid } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";

function Section() {
  return (
    <div className={style.section}>
      <div className={style.sectop}>
        <div>
          <span>
            <BsGrid size={17} /> Our Collection
          </span>
          <p>See Our Printing Store Collection</p>
        </div>
        <div>
          {/* <span> <MdOutlineArrowOutward size={18} /> See products</span> */}
          <span>
          <ul>
            <li>All Items</li>
            <li>T-shirts</li>
            <li>Bottle's</li>
            <li>Wall art's</li>
            
          </ul>
          </span>
        </div>
      </div>

      <div className={style.secbottom}>
        <div className={style.cardl}>
          <div>
            {/* <img src='https://misterfab.in/cdn/shop/products/front-60fbb3a1512a5-Black_S_Men_Round_1024x1024.jpg?v=1627521685' /> */}

            <div className={style.ban}>
              <span>
                <button>
                  <FaPlus size={17} color="white" />
                </button>
                <p>Bottle's Collection</p>
                Up to 30% OFF
              </span>
            </div>
          </div>
        </div>
        <div className={style.cardr}>
          <div>
            <div>
              <button>T-shits Collection</button>

              <span>
                <FaPlus size={15} color="#fff" />
              </span>
            </div>

            <div>
              <button>Cap's Collection</button>
              <span>
                <FaPlus size={15} color="#fff" />
              </span>
            </div>
          </div>

          <div>
            <div>
              <button>Wall art Collection</button>
              <span>
                <FaPlus size={15} color="#fff" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
