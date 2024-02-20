import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Profile from "./profile.svg";
import Expandlow from "./Expandlow.svg";
import Exporthigh from "./expandhigh.svg";

export default function Body({
  Jdata,
  myRef,
  rRef,
  handleCheckboxChange,
  setDatas,
  leftC,
  rightC,
  setState,
  state,
  Ascsort,
  Descsort,
  AsCsort,
  DesCsort,
  predict,
  scoreRef,
  handleColor,
  Seperate,
  appear,
  noneRef,
  successRef,
  MulSelect
}: {
  Jdata: any;
  myRef: any;
  rRef: any;
  handleCheckboxChange: any;
  setDatas: any;
  leftC: any;
  rightC: any;
  setState: any;
  state: any;
  Ascsort: any;
  Descsort: any;
  AsCsort: any;
  DesCsort: any;
  predict: any;
  scoreRef: any;
  handleColor: any;
  Seperate: any;
  appear: any;
    noneRef: any;
    successRef: any;
    MulSelect: any;
}) {
  return (
    <section className={styles.right}>
      <section className={`${styles.flex} ${styles.top}`}>
        <div>
          <p className={`${styles.catfont}`}>Inventory</p>
        </div>
        <div className={`${styles.flex} ${styles.huge} `}>
          <Image
            src={Profile}
            className={styles.icon}
            alt="notification"
            width={35}
            height={35}
          />
        </div>
      </section>
      <section>
        <div className={styles.btnlst}>
          <div className={`${styles.flex} ${styles.button_box}`}>
            <button
              ref={myRef}
              className={`${styles.toggle_btn} ${styles.fontI} ${styles.btnbox}`}
              onClick={() => {
                leftC();
                setState("Productdetails");
                console.log(state);
              }}
            >
              Product List
            </button>
            <button
              ref={rRef}
              className={`${styles.toggle_btn} ${styles.fontI} ${styles.btnbx}`}
              onClick={() => {
                rightC();
                setState("Demandcheck");
                console.log(state);
              }}
            >
              Check Demand
            </button>
          </div>
          <div className={styles.none} ref={noneRef}>
            <p>No product has been selected</p>
          </div>

          <div className={`${styles.end} ${styles.flex}`}>
            <button
              className={styles.new}
              onClick={() => {
                Seperate();
                appear();
              }}
            >
              <Image
                src={"/image/pencil.png"}
                alt="edit"
                width={16}
                height={15}
              />
              <p>Edit</p>
            </button>
            <input type="text" placeholder="Search" className={styles.search} />
          </div>
        </div>
        {/* //prev */}
        <div className="change">
          {state === "Productdetails" ? (
            <>
              <section className={styles.title}>
                <div
                  className={styles.flex_ad}
                  style={{ gap: ".3rem", marginLeft: "1rem" }}
                >
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    onClick={MulSelect}
                    style={{ marginRight: "1rem" }}
                  />
                  <p className={styles.fonth}>PRODUCT NAME</p>
                </div>
                <p className={styles.fonth} style={{ marginLeft: "2.3rem" }}>
                  SKU
                </p>
                <p className={styles.fonth} style={{ marginLeft: "-4rem" }}>
                  Stock on Hand
                </p>
                <div
                  className={`${styles.flex} ${styles.gap}`}
                  style={{ marginLeft: "-6rem" }}
                >
                  <p className={styles.fonth}>Selling Price</p>
                  <button>
                    <div className={`${styles.flexc} ${styles.huge}`}>
                      <Image
                        src={"/image/up.png"}
                        alt="up"
                        width={7}
                        height={7}
                        className={styles.between}
                        onClick={() => Descsort()}
                      />
                      <Image
                        src={"/image/down.png"}
                        alt="down"
                        width={7}
                        height={7}
                        onClick={() => Ascsort()}
                      />
                    </div>
                  </button>
                </div>
                <div
                  className={`${styles.flex} ${styles.gap}`}
                  style={{ marginLeft: "-6.3rem" }}
                >
                  <p className={styles.fonth}>Cost Price</p>
                  <button>
                    <div className={`${styles.flexc} ${styles.huge}`}>
                      <Image
                        src={"/image/up.png"}
                        alt="up"
                        width={7}
                        height={7}
                        className={styles.between}
                        onClick={() => DesCsort()}
                      />
                      <Image
                        src={"/image/down.png"}
                        alt="down"
                        width={7}
                        height={7}
                        onClick={() => AsCsort()}
                      />
                    </div>
                  </button>
                </div>
                <div
                  className={`${styles.flex} ${styles.huge}`}
                  style={{ marginLeft: "-5rem", gap: "1.8rem" }}
                >
                  {/* /Now */}
                  <Image
                    src={"/image/amazon.png"}
                    width={17.77}
                    height={15.77}
                    alt="amazon"
                  />
                  <Image
                    src={"/image/flip.png"}
                    width={17.77}
                    height={15.77}
                    alt="flipkart"
                  />
                  <Image
                    src={"/image/meesho.png"}
                    width={20.77}
                    height={15.77}
                    alt="meesho"
                  />
                  <Image
                    src={"/image/ajio.png"}
                    width={17.77}
                    height={15.77}
                    alt="ajio"
                  />
                  <Image
                    src={"/image/myntra.png"}
                    width={17.77}
                    height={15.77}
                    alt="myntra"
                  />
                </div>
              </section>
              <section className="lst">
                <ul className={styles.ulc}>
                  {Jdata.map((item: any) => (
                    <li
                      className={`${styles.title} ${styles.products} ${styles.list}`}
                      key={item.skuid}
                      style={{alignItems:"center"}}
                    >
                      <div
                        className={`${styles.flex_ad} `}
                        style={{ gap: ".2rem" }}
                      >
                        <input
                          type="checkbox"
                          checked={item.checked}
                          className={styles.checkbox}
                          style={{ marginRight: "1rem" }}
                          onChange={() => handleCheckboxChange(item.skuid)}
                        />
                        <Image
                          src={item.src}
                          height={30}
                          width={30}
                          alt="product"
                        />
                        <p className={`${styles.fontd} ${styles.prod_text}`}>
                          {item.name}
                        </p>
                      </div>
                      <p
                        className={`${styles.fontd} ${styles.prod_text}`}
                        style={{ width: "fit-content", marginLeft: "2rem" }}
                      >
                        {item.skuid}
                      </p>
                      <p
                        className={`${styles.fontd} ${styles.prod_text}`}
                        style={{
                          width: "fit-content",
                          transform: "translateX(-30px)",
                        }}
                      >
                        {item.stockonhand}
                      </p>
                      <p
                        className={`${styles.fontd} ${styles.prod_text}`}
                        style={{
                          width: "fit-content",
                          transform: "translateX(-60px)",
                        }}
                      >
                        {item.Selling_Price}
                      </p>
                      <p
                        className={`${styles.fontd} ${styles.prod_text}`}
                        style={{
                          width: "fit-content",
                          transform: "translateX(-60px)",
                        }}
                      >
                        {item.Cost_Price}
                      </p>
                      <div
                        className={`${styles.flex} ${styles.huge}`}
                        style={{
                          width: "fit-content",
                          transform: "translateX(-50px)",
                          gap: "2rem",
                        }}
                      >
                        <p className={`${styles.fontd} ${styles.prod_text}`}>
                          {item.amazon}
                        </p>
                        <p className={`${styles.fontd} ${styles.prod_text}`}>
                          {item.flipkart}
                        </p>
                        <p className={`${styles.fontd} ${styles.prod_text}`}>
                          {item.meesho}
                        </p>
                        <p className={`${styles.fontd} ${styles.prod_text}`}>
                          {item.ajio}
                        </p>
                        <p className={`${styles.fontd} ${styles.prod_text}`}>
                          {item.myntra}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </>
          ) : (
            // This
            <>
              <section className={styles.title}>
                <div
                  className={styles.flex_ad}
                  style={{ gap: ".3rem", marginLeft: "1rem" }}
                >
                  <input
                    type="checkbox"
                      className={styles.checkbox}
                      onClick={MulSelect}
                    style={{ marginRight: "1rem" }}
                  />
                  <p className={styles.fonth}>PRODUCT NAME</p>
                </div>
                <p className={styles.fonth} style={{ marginLeft: "2.7rem" }}>
                  SKU
                </p>
                <p className={styles.fonth} style={{ marginLeft: "-4rem" }}>
                  Stock on Hand
                </p>
                <p className={styles.fonth} style={{ marginLeft: "-6rem" }}>
                  Selling Price
                </p>

                <p className={styles.fonth} style={{ marginLeft: "-7rem" }}>
                  View Demand
                </p>
                <p className={styles.fonth} style={{ marginLeft: "-7rem" }}>
                  Oppurtunity scoreRef
                </p>
              </section>
              <section className="lst">
                <ul className={styles.ulc}>
                  {Jdata.map((item: any) => (
                    <li
                      className={`${styles.title} ${styles.products} ${styles.list}`}
                      key={item.skuid}
                      style={{alignItems:"center"}}
                    >
                      <div
                        className={`${styles.flex_ad} `}
                        style={{ gap: ".2rem"}}
                      >
                        <input
                          type="checkbox"
                          checked={item.checked}
                          className={styles.checkbox}
                          style={{ marginRight: "1rem" }}
                          onChange={() => handleCheckboxChange(item.skuid)}
                        />
                        <Image
                          src={item.src}
                          height={30}
                          width={30}
                          alt="product"
                        />

                        <p className={`${styles.fontd} ${styles.prod_text}`}>
                          {item.name}
                        </p>
                      </div>
                      <p
                        className={`${styles.prod_text}`}
                        style={{ marginLeft: "2rem" }}
                      >
                        {item.skuid}
                      </p>
                      <p
                        className={` ${styles.prod_text}`}
                        style={{ marginLeft: "-2rem" }}
                      >
                        {item.stockonhand}
                      </p>
                      <p
                        className={`${styles.prod_text}`}
                        style={{ marginLeft: "-4rem" }}
                      >
                        {item.Selling_Price}
                      </p>
                      <p
                        className={` ${
                          item.oppurtunity < 70 ? styles.low : styles.medium
                        }`}
                        ref={predict}
                        style={{ marginLeft: "-6rem" }}
                      >
                        {item.viewdemand}
                      </p>
                      {/* //Now */}{" "}
                      <div
                        className={`${styles.flex} ${
                          item.oppurtunity < 70 ? styles.lowi : styles.mediumi
                        }`}
                        style={{ width: "fit-content", marginLeft: "-3rem" }}
                      >
                        <p
                          className={` ${
                            item.oppurtunity < 70 ? styles.low : styles.medium
                          }`}
                          // className={  ? styles.low : styles.medium}
                          ref={scoreRef}
                        >
                          {item.oppurtunity}
                        </p>
                        <Image
                          className={`${styles.flex}`}
                          src={item.oppurtunity < 70 ? Expandlow : Exporthigh}
                          width={20}
                          height={20}
                          alt="expand"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}
          <p ref={successRef} className={styles.success}>Product listing is successful</p>
        </div>
      </section>
    </section>
  );
}
