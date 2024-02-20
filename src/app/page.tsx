"use client";
import data from "./list.json";
import styles from "./page.module.css";
import React from "react";
import Body from "./right";
import Nav from "./Nav";
import Logo from './Seller .svg'

import small from "./smallicon.svg";
import { useState, useRef } from "react";
import Appear from "./Pop";

export default function Inventory() {
  const [Jdata, setDatas] = useState(data);
  const [state, setState] = useState("Productdetails");
  var [count, setCount] = useState(0);
  let [menu,setMenu] = useState('small')

  const myRef: any = useRef(null);
  const rRef: any = useRef(null);
  const hvrRef: any = useRef(null);
  const bodyRef: any = useRef(null);
  const oRef: any = useRef(null);
  const tRef: any = useRef(null);
  const thRef: any = useRef(null);
  const fRef: any = useRef(null);
  const fiRef: any = useRef(null);
  const sRef: any = useRef(null);
  const moreRef: any = useRef(null);
  const menu1Ref: any = useRef(null);
  const menu2Ref: any = useRef(null);
  const predict: any = useRef(null);
  const scoreRef: any = useRef(null);
  const chanRef: any = useRef(null);
  const dummyRef: any = useRef(null);
  const noneRef: any = useRef(null);
  const successRef: any = useRef(null);

  const appear = () => {
    successRef.current.style.visibility = "hidden";

    if (count == 0) {
      noneRef.current.style.visibility = "visible";
    } else {
      noneRef.current.style.visibility = "hidden";
    }
    if (count >= 1) {
      if ((chanRef.current.style.visibility = "hidden")) {
        chanRef.current.style.visibility = "visible";
        chanRef.current.style.filter = "brightness(1)";
        dummyRef.current.style.zIndex = "-1";
        dummyRef.current.style.filter = "brightness(50%)";
      } else {
        chanRef.current.style.visibility = "hidden";
      }
    } else {
      chanRef.current.style.visibility = "hidden";
    }
  };

  const Inc = (id: number) => {
    setDatas((prevComp) => {
      return prevComp.map((item) => {
        if (item.skuid == id) {
          return { ...item, inc: item.inc + 1 };
        }
        return item;
      });
    });
  };
  const Dec = (id: number) => {
    setDatas((prevComp) => {
      return prevComp.map((item) => {
        if (item.skuid == id && item.inc >= 2) {
          return { ...item, inc: item.inc - 1 };
        }
        return item;
      });
    });
  };

  const handleCheckboxChange = (id: number) => {
    setDatas((prevState) =>
      prevState.map((checkbox) =>
        checkbox.skuid === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  const Pop = () => {
    setMenu("large")
    const interval = setInterval(() => {
      menu1Ref.current.style.visibility = "visible";
    }, 300);
    menu1Ref.current.style.width = "100px"
    oRef.current.style.visibility = "visible";
    tRef.current.style.visibility = "visible";
    thRef.current.style.visibility = "visible";
    fRef.current.style.visibility = "visible";
    fiRef.current.style.visibility = "visible";
    sRef.current.style.visibility = "visible";
    moreRef.current.style.visibility = "visible";
    hvrRef.current.style.width = "250px";
    return () => clearInterval(interval);
  };
  
  const DisPop = () => {
    setMenu("small")
    const interval = setInterval(() => {
      menu1Ref.current.style.visibility = "visible";
    }, 300);
    menu1Ref.current.style.width = "30px"
    oRef.current.style.visibility = "hidden";
    tRef.current.style.visibility = "hidden";
    thRef.current.style.visibility = "hidden";
    fRef.current.style.visibility = "hidden";
    fiRef.current.style.visibility = "hidden";
    sRef.current.style.visibility = "hidden";
    moreRef.current.style.visibility = "hidden";
    hvrRef.current.style.width = "70px";
    return () => clearInterval(interval);
  };
  const handleColor = () => {
    Jdata.map((item) => {
      if (item.oppurtunity < 70) {
        scoreRef.current.style.color = "red";
      }
    });
  };
  const rightC = () => {
    if (myRef.current) {
      myRef.current.style.color = "#777777";
    }
    myRef.current.style.backgroundColor = "transparent";
    rRef.current.style.color = "white";
    rRef.current.style.backgroundColor = "#e67e22";
  };
  const leftC = () => {
    rRef.current.style.color = "#777777";
    rRef.current.style.backgroundColor = "transparent";
    myRef.current.style.backgroundColor = "#e67e22";
    myRef.current.style.color = "white";
  };
  const Seperate = () => {
    Jdata.map((item) => {
      if (item.checked == true) {
        setCount(0);
        count = count + 1;
        setCount(count);
      }
    });
    console.log(count);
  };
  const Success = () => {
    successRef.current.style.visibility = "visible";
    chanRef.current.style.visibility = "hidden";
    dummyRef.current.style.filter = "brightness(1)";
    dummyRef.current.style.zIndex = "1";
  };

  const Ascsort = () => {
    const sortedNumbers = [...Jdata].sort(
      (a, b) => a.Selling_Price - b.Selling_Price
    );
    setDatas(sortedNumbers);
    console.log(data);
  };
  const Descsort = () => {
    const reversesort = [...Jdata].sort(
      (a, b) => b.Selling_Price - a.Selling_Price
    );
    setDatas(reversesort);
  };
  const AsCsort = () => {
    const sortedNumbers = [...Jdata].sort(
      (a, b) => a.Cost_Price - b.Cost_Price
    );
    setDatas(sortedNumbers);
    console.log(data);
  };
  const MulSelect = () => {
    const upd = Jdata.map((data) => {
      if (data.checked === true) {
        return { ...data, checked: false };
      } else {
        return { ...data, checked: true };
      }
    });
    setDatas(upd);
    console.log(Jdata);
  };
  const DesCsort = () => {
    const reversesort = [...Jdata].sort((a, b) => b.Cost_Price - a.Cost_Price);
    setDatas(reversesort);
  };

  return (
    <div style={{ transition: "all 0.5s" }}>
      <Appear
        chanRef={chanRef}
        Jdata={Jdata}
        Inc={Inc}
        Dec={Dec}
        Success={Success}
      />
      <section
        ref={dummyRef}
        style={{ position: "relative", transition: "0.5s" }}
      >
        <main className={styles.main} ref={bodyRef}>
          <Nav
            hvrRef={hvrRef}
            Pop={Pop}
            DisPop={DisPop}
            oRef={oRef}
            tRef={tRef}
            thRef={thRef}
            fRef={fRef}
            fiRef={fiRef}
            sRef={sRef}
            moreRef={moreRef}
            menu1Ref={menu1Ref}
            menu2Ref={menu2Ref}
            menu={menu}
            setMenu={setMenu}
          />
          <Body
            Jdata={Jdata}
            setDatas={setDatas}
            Ascsort={Ascsort}
            Descsort={Descsort}
            AsCsort={AsCsort}
            DesCsort={DesCsort}
            handleCheckboxChange={handleCheckboxChange}
            rightC={rightC}
            leftC={leftC}
            myRef={myRef}
            rRef={rRef}
            state={state}
            setState={setState}
            predict={predict}
            scoreRef={scoreRef}
            handleColor={handleColor}
            Seperate={Seperate}
            appear={appear}
            noneRef={noneRef}
            successRef={successRef}
            MulSelect={MulSelect}
          />
        </main>
      </section>
    </div>
  );
}
