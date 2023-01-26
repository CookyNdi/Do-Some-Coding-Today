import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import spiner from "../asset/spiner.gif";

const Body = () => {
  const sheetId = "10r-IFwefCFvFDGDc1cSVHwq-P9-RnJ63Vgr2aHoxKw4";
  const baseUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
  const sheetName = "January";
  const qu = "Select *";
  // const qu = "Select * WHERE B = 2";
  const query = encodeURIComponent(qu);
  const url = `${baseUrl}&sheet=${sheetName}&tq=${query}`;
  const data = [];

  const [datas, setData] = useState([]);
  useEffect(() => {
    document.title = `Do Some Coding Today | Home`;
    localStorage.setItem("gridThree", "Active")
    db();
  }, []);

  const db = () => {
    fetch(url)
      .then((res) => res.text())
      .then((rep) => {
        const jsData = JSON.parse(rep.substr(47).slice(0, -2));
        // console.log(jsData);
        const colz = [];
        jsData.table.cols.forEach((heading) => {
          if (heading.label) {
            colz.push(heading.label.toLowerCase().replace(/\s/g, ""));
          }
        });
        jsData.table.rows.forEach((main) => {
          const row = {};
          colz.forEach((element, index) => {
            row[element] = main.c[index] != null ? main.c[index].v : "NULL";
          });
          data.push(row);
        });
        setData(data);
      });
  };

  // console.log(datas);

  let setGrid = document.getElementById("setGrid");

  const gridTwo = () => {
    localStorage.setItem("gridTwo", "Active");
    if (localStorage.getItem("gridTwo")) {
      setGrid.classList.add("gridTwo");
      setGrid.classList.remove("gridThree");
      setGrid.classList.remove("gridFour");
      localStorage.removeItem("gridThree");
      localStorage.removeItem("gridFour");
    }
  };
  if (localStorage.getItem("gridTwo")) {
    setTimeout(myTimer, 100);
    function myTimer() {
      let setGridReload = document.getElementById("setGrid");
      setGridReload.classList.add("gridTwo");
    }
  }

  const gridThree = () => {
    localStorage.setItem("gridThree", "Active");
    if (localStorage.getItem("gridThree")) {
      setGrid.classList.add("gridThree");
      setGrid.classList.remove("gridTwo");
      setGrid.classList.remove("gridFour");
      localStorage.removeItem("gridTwo");
      localStorage.removeItem("gridFour");
    }
  };
  if (localStorage.getItem("gridThree")) {
    setTimeout(myTimer, 100);
    function myTimer() {
      let setGridReload = document.getElementById("setGrid");
      setGridReload.classList.add("gridThree");
    }
  }

  const gridFour = () => {
    localStorage.setItem("gridFour", "Active");
    if (localStorage.getItem("gridFour")) {
      setGrid.classList.add("gridFour");
      setGrid.classList.remove("gridTwo");
      setGrid.classList.remove("gridThree");
      localStorage.removeItem("gridTwo");
      localStorage.removeItem("gridThree");
    }
  };
  if (localStorage.getItem("gridFour")) {
    setTimeout(myTimer, 100);
    function myTimer() {
      let setGridReload = document.getElementById("setGrid");
      setGridReload.classList.add("gridFour");
    }
  }

  return (
    <section className="bodyContent">
      <div className="containerContent">
        <div className="topContent">
          <h1>January</h1>
          <div className="gridSet">
            <div className="grid2" onClick={gridTwo}></div>
            <div className="grid3" onClick={gridThree}></div>
            <div className="grid4" onClick={gridFour}></div>
          </div>
        </div>
        <div className="mainContent" id="setGrid">
          {datas.map((data) => (
            <Link to={`/january/${data.id}`} className="Card" key={data.id}>
              <div className="containerCard">
                <div className="dayCard">{data.date}</div>
                <div className="CardImages">
                  <img src={data.image} alt={data.title} />
                </div>
                <div className="CardTitle">
                  <div className="CardText">
                    <h2 title={data.title}>{data.title}</h2>
                  </div>
                  <div className="CardTag">
                    <button>React</button>
                    <button>HTML Vanilla</button>
                    <button>CSS Vanilla</button>
                    <button>JS Vanilla</button>
                    <button>Bootstrap</button>
                    <button>Express</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Body;
