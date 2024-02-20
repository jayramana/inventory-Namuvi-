import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Left from "./left.svg";
import Right from "./right.svg"

export default function Appear({
  chanRef,
    Jdata,
    Inc,
  Dec,
  Success
}: {
  chanRef: any;
        Jdata: any;
        Inc: any;
    Dec: any;
    Success: any;
}) {
  return (
    <div>
      <div className={styles.edit} ref={chanRef} style={{width:"fit-content"}}>
        <div style={{display:"flex",gap:"12rem",paddingBottom:"2rem",borderBottom:"1px solid #DEDEDE",marginBottom:"2rem"}}>
          <h2 style={{color:"#0057AD",fontSize:"30px",fontWeight:"500",fontFamily:"DM Sans"}}>Edit Quantity</h2>
          <button className={styles.new} style={{fontSize:"small"}} onClick={Success}>Update</button>
        </div>
        <ul>
          {Jdata.filter((item: any) => item.checked === true).map(
            (item: any) => (
              <li
                className={styles.flex}
                style={{gap:"12rem",marginBottom:"2rem" }}
              >
                <div className={styles.flex} style={{alignItems:"center",gap:".3rem"}}>
                  <Image src={item.src} alt="item" width={30} height={30} />
                  <p style={{color:"#2B3674", fontFamily:"DM Sans",fontSize:"small",fontWeight:"600"}}>{item.name}</p>
                  <p style={{color:"#7F7F7F",fontSize:"small"}}>({item.stockonhand})</p>
                </div>
                <div
                  className={styles.flex}
                  style={{ justifyContent: "center", alignItems: "center",gap:"1rem",border:"1px solid #DEDEDE",padding:"0 1rem",borderRadius:"20px" }}
                >
                  <button onClick={()=>Dec(item.skuid)}><Image  src={Left} alt="try" height={5} width={5}/></button>
                  <p style={{color:"#2C7BE5"}}>{item.inc}</p>
                  <button onClick={()=>Inc(item.skuid)}><Image  src={Right} alt="try" height={5} width={5}/></button>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
