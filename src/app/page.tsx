"use client";
import data from "./list.json";
import styles from "./page.module.css";
import React from "react";
import Body from "./right";
import Nav from "./Nav";
import Logo from "./Seller1.svg";
import small from "./smallicon.svg";
import { useState, useRef } from "react";

export default function Inventory() {
  const [Jdata, setDatas] = useState(data);
  const [state, setState] = useState("Productdetails");
  const [width, setWidth] = useState("Small");

  const myRef = useRef(null);
  const rRef = useRef(null);
  const hvrRef = useRef(null);
  const bodyRef = useRef(null);
  const oRef = useRef(null);
  const tRef = useRef(null);
  const thRef = useRef(null);
  const fRef = useRef(null);
  const fiRef = useRef(null);
  const sRef = useRef(null);
  const moreRef = useRef(null);
  const menu1Ref = useRef(null);
  const menu2Ref = useRef(null);

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
    if (bodyRef.current) {
      bodyRef.current.style.gridTemplateColumns = "2fr 10fr";
      oRef.current.style.display = "block";
      tRef.current.style.display = "block";
      thRef.current.style.display = "block";
      fRef.current.style.display = "block";
      fiRef.current.style.display = "block";
      sRef.current.style.display = "block";
      moreRef.current.style.display = "block";
      if (menu2Ref.current) {
        menu2Ref.current.style.display = "none";
        menu1Ref.current.style.display = "block";
        console.log("small disappear");
        console.log("big appear");
      }
    }
  };

  const DisPop = () => {
    if (hvrRef.current) {
      bodyRef.current.style.gridTemplateColumns = "0.5fr 10fr";
      oRef.current.style.display = "none";
      tRef.current.style.display = "none";
      thRef.current.style.display = "none";
      fRef.current.style.display = "none";
      fiRef.current.style.display = "none";
      sRef.current.style.display = "none";
      moreRef.current.style.display = "none";
      if (menu2Ref.current) {
        menu2Ref.current.style.display = "block";
        menu1Ref.current.style.display = "none";
        console.log("small appear");
        console.log("Big disappear");
      }
    }
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
  const DesCsort = () => {
    const reversesort = [...Jdata].sort((a, b) => b.Cost_Price - a.Cost_Price);
    setDatas(reversesort);
  };

  return (
    <>
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
        />
      </main>
    </>
  );
}
