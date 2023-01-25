import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BodyMonth = () => {
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
    db();
  });

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

  return (
    <section className="Month">
      <div className="ContainerMonth">
        <div className="cardMonth">
          <h1>Januari</h1>
          <div className="dateCol">
            {datas.map((data) => (
              <Link to={`/january/${data.id}`} className="date" key={data.id}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="cardMonth">
          <h1>Februari</h1>
          <div className="dateCol">
            {datas.map((data) => (
              <Link to={`/january/${data.id}`} className="date" key={data.id}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="cardMonth">
          <h1>Maret</h1>
          <div className="dateCol">
            {datas.map((data) => (
              <Link to={`/january/${data.id}`} className="date" key={data.id}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="cardMonth">
          <h1>April</h1>
          <div className="dateCol">
            {datas.map((data) => (
              <Link to={`/january/${data.id}`} className="date" key={data.id}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="cardMonth">
          <h1>Mei</h1>
          <div className="dateCol">
            {datas.map((data) => (
              <Link to={`/january/${data.id}`} className="date" key={data.id}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="cardMonth">
          <h1>Juni</h1>
          <div className="dateCol">
            {datas.map((data) => (
              <Link to={`/january/${data.id}`} className="date" key={data.id}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="cardMonth">
          <h1>Juli</h1>
          <div className="dateCol">
            {datas.map((data) => (
              <Link to={`/january/${data.id}`} className="date" key={data.id}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="cardMonth">
          <h1>Agustus</h1>
          <div className="dateCol">
            {datas.map((data) => (
              <Link to={`/january/${data.id}`} className="date" key={data.id}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="cardMonth">
          <h1>September</h1>
          <div className="dateCol">
            {datas.map((data) => (
              <Link to={`/january/${data.id}`} className="date" key={data.id}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="cardMonth">
          <h1>Oktober</h1>
          <div className="dateCol">
            {datas.map((data) => (
              <Link to={`/january/${data.id}`} className="date" key={data.id}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="cardMonth">
          <h1>November</h1>
          <div className="dateCol">
            {datas.map((data) => (
              <Link to={`/january/${data.id}`} className="date" key={data.id}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="cardMonth">
          <h1>Desember</h1>
          <div className="dateCol">
            {datas.map((data) => (
              <Link to={`/january/${data.id}`} className="date" key={data.id}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodyMonth;
