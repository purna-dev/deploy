import React from "react";
import style from "./Footer.module.css";
import { TbBrandPrintables } from "react-icons/tb";
import { FiYoutube } from "react-icons/fi";

import { CiLinkedin } from "react-icons/ci";
import { AiOutlineFacebook } from "react-icons/ai";
import { LiaTwitterSquare } from "react-icons/lia";
function Footer() {
  return (
    <div className={style.footer}>
      <div>
        <div>
          <div>
            <TbBrandPrintables size={45} />

            <p>Gelato</p>
          </div>
          
            <span>
              We're focused on driving great margins, superior services, and
              amazing product quality for our b2b partners
            </span>
          
        </div>
        <div>
          <span>
            <p>Discover</p>
            <ul>
              <li>Products</li>
              <li>Guides</li>
              <li>Brands</li>
              <li>Pricing</li>
            </ul>
          </span>

          <span>
            <p>Account</p>
            <ul>
              <li>Sign In</li>
              <li>Sign Up</li>
              <li>Start Selling</li>
              <li>Pricing</li>
            </ul>
          </span>

          <span>
            <p>Resources</p>
            <ul>
              <li>About us</li>
              <li>Contact</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </span>

          <span>
            <p>Connect with us</p>
            <ul>
              <li> <AiOutlineFacebook size={22} color="rgba(255,255,255,.8)" /> Facebook</li>
              <li> <CiLinkedin size={22} color="rgba(255,255,255,.8)" /> Linkdin</li>
              <li><FiYoutube size={18}  color="rgba(255,255,255,.8)"/> Youtube</li>
              <li><LiaTwitterSquare size={25} color="rgba(255,255,255,.8)"/> Twitter</li>
            </ul>
          </span>
        </div>
      </div>

      
      <div style={{borderTop:'1px solid rgba(255,255,255,0.1)',margin:'1rem 0'}}>
        <div>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms of Services</li>
                <li>Cookie Policy</li>
            </ul>
        </div>
        <div>
        &copy; 2024 Gelato, Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
