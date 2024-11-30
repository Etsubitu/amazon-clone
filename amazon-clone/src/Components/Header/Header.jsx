import React from "react";

import classes from "./Header.module.css";
import { SlLocationPin} from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHearder from "./LowerHearder";
// import LowerHeader from "./LowerHeader";


function Header() {

return (
  <>
    <section className={classes.header_container}>
      <div className={classes.logo_container}>
        {/* {logo } */}
        <a href="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </a>

        {/* {Delivery} */}
        <div className={classes.delivery}>
          <span>
            <SlLocationPin />
          </span>
          <div>
            <p>Delivered to</p>
            <span>Ethiopia</span>
          </div>
        </div>
      </div>
      <div className={classes.search}>
        {/* {search} */}
        <select name="" id="">
          <option value="">All</option>
        </select>
        <input type="text" name="" id="" placeholder="search product" />
        <BsSearch />
      </div>

      {/* {right side link} */}
      <div>
        <div className={classes.order_container}>
          <a href="" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
              alt=""
            />
            <section name="" id="">
              <option value="">EN</option>
            </section>
          </a>

          {/* { three components} */}
          <a href="">
            <div>
              <p>Sign In</p>
              <span> Account & Lists </span>
            </div>
          </a>

          {/* {order} */}
          <a href="">
            <p>Returns</p>
            <span>& Orders</span>
          </a>

          {/* {Cart} */}
          <a href=" /cart" className={classes.cart}>
            <BiCart size={35} />
            <span>0</span>
          </a>
        </div>
      </div>
    </section>
    <LowerHearder />
  </>
);
}
export default Header;