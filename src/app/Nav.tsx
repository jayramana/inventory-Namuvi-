import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Logo from "./Seller1.svg";
import small from "./smallicon.svg";
import product from "./product.svg";
import smallprofile from "./smallprofile.svg";
import signin from "./sigin.svg";
import seperator from "./Separator.svg";
import inventory from "./inventory.svg";
import catalogue from "./catalogue.svg";
import home from "./home.svg";
import { profile } from "console";
export default function Nav({
  hvrRef,
  Pop,
  DisPop,
  oRef,
  tRef,
  thRef,
  fRef,
  fiRef,
  sRef,
  moreRef,
  menu1Ref,
  menu2Ref,
  menu,
  setMenu
}: {
  hvrRef: any;
  Pop: any;
  DisPop: any;
  oRef: any;
  tRef: any;
  thRef: any;
  fRef: any;
  fiRef: any;
  sRef: any;
  moreRef: any;
  menu1Ref: any;
    menu2Ref: any;
    menu: any;
    setMenu: any;
  }) {
  const img = menu === "small" ? small : Logo
  return (
    <div
      className={styles.left}
      onMouseEnter={Pop}
      onMouseLeave={DisPop}
      ref={hvrRef}
    >
      <div style={{height:"100px",display:"flex",flexDirection:"column"}}>
        <Image
          src={img}
          height={30}
          width={30}
          alt="logo"
          style={{ marginLeft: "1.3rem", marginBottom: "1rem" }}
          ref={menu1Ref}
        />

        <Image
          src={seperator}
          height={100}
          width={500}
          alt="line"
          style={{ height:"10px", width: "500px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          marginLeft: "2rem",
        }}
      >
        <div className={`${styles.flex} ${styles.gap}`}>
          <Image src={home} alt="home" height={20} width={20} />
          <p className={styles.lp} ref={oRef}>
            Dashboard
          </p>
        </div>
        <div className={`${styles.flex} ${styles.gap}`}>
          <Image src={inventory} alt="home" height={20} width={20} />
          <p className={styles.lp} ref={tRef}>
            Inventory
          </p>
        </div>
        <div className={`${styles.flex} ${styles.gap}`}>
          <Image src={catalogue} alt="home" height={20} width={20} />
          <p
            className={`${styles.lp}`}
            style={{ color: "#FFA823" }}
            ref={thRef}
          >
            Catalogue
          </p>
        </div>
        <div
          className={`${styles.flex} ${styles.gap}`}
          style={{ height: "29px" }}
        >
          <div style={{ height: "30px", width: "20px" }}>
            <Image src={product} alt="home" height={20} width={20} />
          </div>
          <div
            ref={fRef}
            style={{
              visibility: "hidden",
              width: "100px",
              display: "flex",
              gap: "0.2rem",
              marginTop: ".1rem",
              fontFamily: "DM Sans",
              color: "#b8b8b8",
              fontWeight: "590",
              fontSize: "13px",
            }}
          >
            {" "}
            <p>Product</p> <p>Intelligence</p>
          </div>
        </div>
        <div className={`${styles.flex} ${styles.gap}`}>
          <Image src={smallprofile} alt="home" height={20} width={20} />
          <p className={styles.lp} ref={fiRef}>
            Profile
          </p>
        </div>
        <div className={`${styles.flex} ${styles.gap}`}>
          <Image src={signin} alt="home" height={20} width={20} />
          <p className={styles.lp} ref={sRef}>
            Sign In
          </p>
        </div>
      </div>
      <div>
        <div className={styles.more} ref={moreRef}>
          <Image src={"/image/info.png"} alt="info" width={35} height={35} />
          <p className={styles.wh}>
            Get more <br />
            benefits
          </p>
          <button className={`${styles.wh} ${styles.btn}`}>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
