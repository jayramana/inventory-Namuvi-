import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Logo from "./Seller1.svg";
import small from "./smallicon.svg";
import product from "./product.svg";
import smallprofile from "./smallprofile.svg";
import signin from "./sigin.svg";
import inventory from "./inventory.svg";
import catalogue from "./catalogue.svg";
import home from "./home.svg";
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
}) {
  return (
    <section
      className={styles.left}
      onMouseEnter={() => Pop()}
      onMouseLeave={() => DisPop()}
      ref={hvrRef}
    >
      <div>
        <div>
          <Image
            src={Logo}
            alt="icon"
            height={20}
            width={140}
            style={{ transform: "translateX(20px)",display:"none"}}
            ref={menu1Ref}
          />
          <Image
            src={small}
            alt="icon"
            height={20}
            width={40}
            style={{ transform: "translate(15px,10px)", display: "block",marginBottom:"1rem" }}
            ref={menu2Ref}
          />
        </div>

        <Image
          src={"/image/Separator.png"}
          alt="Logo"
          width={180}
          height={20}
        />
      </div>
      <div className={styles.flxc} style={{marginTop:"1rem"}}>
        <div className={`${styles.flx} ${styles.flex_ad}`}>
          <Image src={home} alt="home" width={18.4} height={16} />
          <p className={`${styles.lp}`} ref={oRef}>
            Dashboard
          </p>
        </div>
        <div className={styles.flx}>
          <Image src={inventory} alt="inventory" width={18} height={18} />
          <p className={styles.lp} ref={tRef}>
            Inventory
          </p>
        </div>
        <div className={styles.flx}>
          <Image src={catalogue} alt="catalogue" width={16.66} height={18.41} />
          <p className={`${styles.lp} ${styles.focus}`} ref={thRef}>
            Catalogue
          </p>
        </div>
        <div className={styles.flx}>
          <Image
            src={product}
            alt="prod-intelligence"
            width={16.33}
            height={16.33}
          />
          <p className={styles.lp} ref={fRef}>
            Product Intelligence
          </p>
        </div>
        <div className={styles.flx}>
          <Image src={smallprofile} alt="profile" width={16} height={16} />
          <p className={styles.lp} ref={fiRef}>
            Profile
          </p>
        </div>
        <div className={styles.flx}>
          <Image
            src={signin}
            alt="sign-in"
            style={{ display: "block" }}
            width={16}
            height={21}
          />
          <p className={styles.lp} ref={sRef}>
            Sign-In
          </p>
        </div>
      </div>
      <div className={styles.more} style={{ display: "none" }} ref={moreRef}>
        <Image src={"/image/info.png"} alt="info" width={35} height={35} />
        <p className={styles.wh}>
          Get more <br />
          benefits
        </p>
        <button className={`${styles.wh} ${styles.btn}`}>Subscribe</button>
      </div>
    </section>
  );
}
