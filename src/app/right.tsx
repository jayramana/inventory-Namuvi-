import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Profile from './profile.svg'

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
}) {
  return (
      <section className={styles.right}>
        <section className={`${styles.flex} ${styles.top}`}>
          <div>
            
            <p className={styles.catfont}>Inventory</p>
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

            <div className={`${styles.end} ${styles.flex}`}>
              <button className={styles.new}>
                <Image
                  src={"/image/pencil.png"}
                  alt="edit"
                  width={16}
                  height={15}
                />
                <p>Edit</p>
              </button>
              <input
                type="text"
                placeholder="Search"
                className={styles.search}
              />
            </div>
          </div>
          <div className="change">
            {state === "Productdetails" ? (
              <>
                <section className={styles.title}>
                  <div className={styles.flex_ad}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      checked={false}
                    />
                    <p className={styles.fonth}>PRODUCT NAME</p>
                  </div>
                  <p className={styles.fonth}>SKU</p>
                  <p className={styles.fonth}>Stock on Hand</p>
                  <div className={`${styles.flex} ${styles.gap}`}>
                    <p className={styles.fonth}>Selling Price</p>
                    <button>
                      <div className={`${styles.flexc} ${styles.huge}`}>
                        <Image
                          src={"/image/up.png"}
                          alt="up"
                          width={7}
                          height={7}
                          className={styles.between}
                          onClick={() => Descsort() }
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
                  <div className={`${styles.flex} ${styles.gap}`}>
                    <p className={styles.fonth}>Cost Price</p>
                    <button>
                      <div className={`${styles.flexc} ${styles.huge}`}>
                        <Image
                          src={"/image/up.png"}
                          alt="up"
                          width={7}
                          height={7}
                          className={styles.between}
                          onClick={() => DesCsort() }
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
                  <div className={`${styles.flex} ${styles.huge}`}>
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
                    {Jdata.map((item:any) => (
                      <li
                        className={`${styles.title} ${styles.products} ${styles.list}`}
                        key={item.skuid}
                      >
                        <div className={`${styles.flex_ad} `}>
                          <input
                            type="checkbox"
                            checked={item.checked}
                            className={styles.checkbox}
                            onChange={() => handleCheckboxChange(item.skuid)}
                          />
                          <p className={`${styles.fontd} ${styles.prod_text}`}>
                            {item.name}
                          </p>
                        </div>
                        <p className={`${styles.fontd} ${styles.prod_text}`} style={{width:"fit-content",marginLeft:"2rem"}}>
                          {item.skuid}
                        </p>
                        <p className={`${styles.fontd} ${styles.prod_text}`} style={{width:"fit-content",transform:"translateX(-30px)"}}>
                          {item.stockonhand}
                        </p>
                        <p className={`${styles.fontd} ${styles.prod_text}`} style={{width:"fit-content",transform:"translateX(-50px)"}}>
                          {item.Selling_Price}
                        </p>
                        <p className={`${styles.fontd} ${styles.prod_text}`} style={{width:"fit-content",transform:"translateX(-50px)"}}>
                          {item.Cost_Price}
                        </p>
                        <div className={`${styles.flex} ${styles.huge}`} style={{width:"fit-content",transform:"translateX(-50px)",gap:"2rem"}}>
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
              <>
                <section className={styles.title}>
                  <div className={styles.flex_ad}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      checked={false}
                    />
                    <p className={styles.fonth}>PRODUCT NAME</p>
                  </div>
                  <p className={styles.fonth}>SKU</p>
                  <p className={styles.fonth}>Stock on Hand</p>
                  <p className={styles.fonth}>Selling Price</p>

                  <p className={styles.fonth}>View Demand</p>
                  <p className={styles.fonth}>Oppurtunity score</p>
                </section>
                <section className="lst">
                  <ul className={styles.ulc}>
                    {Jdata.map((item:any) => (
                      <li
                        className={`${styles.title} ${styles.products} ${styles.list}`}
                        key={item.skuid}
                      >
                        <div className={`${styles.flex_ad} `}>
                          <input
                            type="checkbox"
                            checked={item.checked}
                            className={styles.checkbox}
                            onChange={() => handleCheckboxChange(item.skuid)}
                          />
                          <p className={`${styles.fontd} ${styles.prod_text}`}>
                            {item.name}
                          </p>
                        </div>
                        <p className={`${styles.fontd} ${styles.prod_text}`}>
                          {item.skuid}
                        </p>
                        <p className={`${styles.fontd} ${styles.prod_text}`}>
                          {item.stockonhand}
                        </p>
                        <p className={`${styles.fontd} ${styles.prod_text}`}>
                          {item.Selling_Price}
                        </p>
                        <p className={`${styles.fontd} ${styles.prod_text}`}>
                          {item.viewdemand}
                        </p>
                        <p className={`${styles.fontd} ${styles.prod_text}`}>
                          {item.oppurtunity}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              </>
            )}
          </div>
        </section>
      </section>
  );
}
