import React, { useEffect } from "react";
import style from "./Sidebar.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsGrid } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { MdOutlineArrowOutward } from "react-icons/md";
function Sidebar({ mobilenav, navFun }) {
  const default_links = [
    {
      link: "Products",
      subLink: [
        "Best Seller",
        "Mens Cloths",
        "Kids & baby clothing",
        "Wall art",
        "Calenders",
        "Cards",
        "Photo books",
      ],
    },
    {
      link: "Start selling",
      subLink: [
        "Best Seller",
        "Mens Cloths",
        "Kids & baby clothing",
        "Wall art",
        "Calenders",
        "Cards",
        "Photo books",
      ],
    },
    {
      link: "Tools and apps",
      subLink: [
        "Best Seller",
        "Mens Cloths",
        "Kids & baby clothing",
        "Wall art",
        "Calenders",
        "Cards",
        "Photo books",
      ],
    },
    {
      link: "Pricing",
      subLink: [
        "Best Seller",
        "Mens Cloths",
        "Kids & baby clothing",
        "Wall art",
        "Calenders",
        "Cards",
        "Photo books",
      ],
    },
    {
      link: "Resources",
      subLink: [
        "Best Seller",
        "Mens Cloths",
        "Kids & baby clothing",
        "Wall art",
        "Calenders",
        "Cards",
        "Photo books",
      ],
    },

    {
      link: "Pro sellers",
    },
    {
      link: "GelatoConnect",
      subLink: [
        "Best Seller",
        "Mens Cloths",
        "Kids & baby clothing",
        "Wall art",
        "Calenders",
        "Cards",
        "Photo books",
      ],
    },
  ];

  const handleClose = () => {
    navFun(false);
  };
  useEffect(() => {
    console.log(mobilenav);
  });
  return (
    <div className={style.wrapper} style={{ left: mobilenav ? "0%" : "-100%" }}>
      <div className={style.sidebar}>

      <div className={style.close}>

      {/* <button onClick={handleClose}>Close</button> */}
      <span onClick={handleClose}>
        <CgClose size={27}/>
      </span>

      <span>
        <IoLocationOutline size={27} />
         India
      </span>

      </div>

        <div className={style.collection}>

            <span>
            <BsGrid size={20}/>
                Menu
            </span>

          <ul>
            {default_links.map((ele, i) => (
              <li
                style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
                key={i}
              >
                {" "}
                {ele.link}{" "}
                <span
                  style={{
                    padding: "0",
                    margin: "0",
                    height: "14px",
                    alignItems: "center",
                    justifyContent: "center",
                    display: ele?.subLink ? "flex" : "none",
                    transition: "all .3s ease-in-out",
                  }}
                >
                  <MdKeyboardArrowDown size={18} />
                </span>{" "}
              </li>
            ))}
          </ul>
        </div>

        <div className={style.collection} style={{marginTop:'0.6rem'}}>

<span>
<FiUser size={20}/>
    Account
</span>

<div className={style.user}>
<span >Sign In <MdOutlineArrowOutward size={18} /> </span>

    <button>Sign Up for free</button>


</div>


</div>

      </div>
    </div>
  );
}

export default Sidebar;
