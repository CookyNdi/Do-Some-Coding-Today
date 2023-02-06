import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BodyMonth = () => {
  const sheetId = "10r-IFwefCFvFDGDc1cSVHwq-P9-RnJ63Vgr2aHoxKw4";
  const baseUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
  const qu = "Select *";
  const query = encodeURIComponent(qu);

  const [dataJan, setDataJan] = useState([]);
  const [dataFeb, setDataFeb] = useState([]);
  const [dataMar, setDataMar] = useState([]);
  const [dataApr, setDataApr] = useState([]);
  const [dataMay, setDataMay] = useState([]);
  const [dataJun, setDataJun] = useState([]);
  const [dataJul, setDataJul] = useState([]);
  const [dataAug, setDataAug] = useState([]);
  const [dataSep, setDataSep] = useState([]);
  const [dataOct, setDataOct] = useState([]);
  const [dataNov, setDataNov] = useState([]);
  const [dataDec, setDataDec] = useState([]);

  const sheetJan = "January";
  const urlJan = `${baseUrl}&sheet=${sheetJan}&tq=${query}`;

  const januaryMonth = () => {
    const data = [];
    fetch(urlJan)
      .then((res) => res.text())
      .then((rep) => {
        const jsData = JSON.parse(rep.substr(47).slice(0, -2));
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
        setDataJan(data);
      });
  };

  const sheetFeb = "February";
  const urlFeb = `${baseUrl}&sheet=${sheetFeb}&tq=${query}`;

  const februaryMonth = () => {
    const data = [];
    fetch(urlFeb)
      .then((res) => res.text())
      .then((rep) => {
        const jsData = JSON.parse(rep.substr(47).slice(0, -2));
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
        setDataFeb(data);
      });
  };

  const sheetMar = "March";
  const urlMar = `${baseUrl}&sheet=${sheetMar}&tq=${query}`;

  const marchMonth = () => {
    const data = [];
    fetch(urlMar)
      .then((res) => res.text())
      .then((rep) => {
        const jsData = JSON.parse(rep.substr(47).slice(0, -2));
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
        setDataMar(data);
      });
  };

  const sheetApr = "April";
  const urlApr = `${baseUrl}&sheet=${sheetApr}&tq=${query}`;

  const aprilMonth = () => {
    const data = [];
    fetch(urlApr)
      .then((res) => res.text())
      .then((rep) => {
        const jsData = JSON.parse(rep.substr(47).slice(0, -2));
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
        setDataApr(data);
      });
  };

  const sheetMay = "May";
  const urlMay = `${baseUrl}&sheet=${sheetMay}&tq=${query}`;

  const mayMonth = () => {
    const data = [];
    fetch(urlMay)
      .then((res) => res.text())
      .then((rep) => {
        const jsData = JSON.parse(rep.substr(47).slice(0, -2));
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
        setDataMay(data);
      });
  };

  const sheetJune = "June";
  const urlJune = `${baseUrl}&sheet=${sheetJune}&tq=${query}`;

  const juneMonth = () => {
    const data = [];
    fetch(urlJune)
      .then((res) => res.text())
      .then((rep) => {
        const jsData = JSON.parse(rep.substr(47).slice(0, -2));
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
        setDataJun(data);
      });
  };

  const sheetJuly = "July";
  const urlJuly = `${baseUrl}&sheet=${sheetJuly}&tq=${query}`;

  const julyMonth = () => {
    const data = [];
    fetch(urlJuly)
      .then((res) => res.text())
      .then((rep) => {
        const jsData = JSON.parse(rep.substr(47).slice(0, -2));
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
        setDataJul(data);
      });
  };

  const sheetAugust = "August";
  const urlAugust = `${baseUrl}&sheet=${sheetAugust}&tq=${query}`;

  const augustMonth = () => {
    const data = [];
    fetch(urlAugust)
      .then((res) => res.text())
      .then((rep) => {
        const jsData = JSON.parse(rep.substr(47).slice(0, -2));
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
        setDataAug(data);
      });
  };

  const sheetSeptember = "September";
  const urlSeptember = `${baseUrl}&sheet=${sheetSeptember}&tq=${query}`;

  const septemberMonth = () => {
    const data = [];
    fetch(urlSeptember)
      .then((res) => res.text())
      .then((rep) => {
        const jsData = JSON.parse(rep.substr(47).slice(0, -2));
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
        setDataSep(data);
      });
  };

  const sheetOctober = "October";
  const urlOctober = `${baseUrl}&sheet=${sheetOctober}&tq=${query}`;

  const octoberMonth = () => {
    const data = [];
    fetch(urlOctober)
      .then((res) => res.text())
      .then((rep) => {
        const jsData = JSON.parse(rep.substr(47).slice(0, -2));
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
        setDataOct(data);
      });
  };

  const sheetNovember = "November";
  const urlNovember = `${baseUrl}&sheet=${sheetNovember}&tq=${query}`;

  const novemberMonth = () => {
    const data = [];
    fetch(urlNovember)
      .then((res) => res.text())
      .then((rep) => {
        const jsData = JSON.parse(rep.substr(47).slice(0, -2));
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
        setDataNov(data);
      });
  };

  const sheetDecember = "December";
  const urlDecember = `${baseUrl}&sheet=${sheetDecember}&tq=${query}`;

  const decemberMonth = () => {
    const data = [];
    fetch(urlDecember)
      .then((res) => res.text())
      .then((rep) => {
        const jsData = JSON.parse(rep.substr(47).slice(0, -2));
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
        setDataDec(data);
      });
  };

  useEffect(() => {
    document.title = `Do Some Coding Today | Month`;
    januaryMonth();
    februaryMonth();
    marchMonth();
    aprilMonth();
    mayMonth();
    juneMonth();
    julyMonth();
    augustMonth();
    septemberMonth();
    octoberMonth();
    novemberMonth();
    decemberMonth();
  }, []);

  return (
    <section className="Month">
      <div className="ContainerMonth">
        <div className="cardMonth">
          <h1>Januari</h1>
          <div className="dateCol">
            {dataJan.map((data) => (
              <Link to={`/january/${data.id}`} className="date" key={data.date}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="cardMonth">
          <h1>Februari</h1>
          <div className="dateCol">
            {dataFeb.map((data) => (
              <Link to={`/february/${data.id}`} className="date" key={data.date}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="cardMonth">
          <h1>Maret</h1>
          <div className="dateCol">
            {dataMar.map((data) => (
              <Link to={`/march/${data.id}`} className="date" key={data.date}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="cardMonth">
          <h1>April</h1>
          <div className="dateCol">
            {dataApr.map((data) => (
              <Link to={`/april/${data.id}`} className="date" key={data.date}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="cardMonth">
          <h1>Mei</h1>
          <div className="dateCol">
            {dataMay.map((data) => (
              <Link to={`/may/${data.id}`} className="date" key={data.date}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="cardMonth">
          <h1>Juni</h1>
          <div className="dateCol">
            {dataJun.map((data) => (
              <Link to={`/june/${data.id}`} className="date" key={data.date}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="cardMonth">
          <h1>Juli</h1>
          <div className="dateCol">
            {dataJul.map((data) => (
              <Link to={`/july/${data.id}`} className="date" key={data.date}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="cardMonth">
          <h1>Agustus</h1>
          <div className="dateCol">
            {dataAug.map((data) => (
              <Link to={`/august/${data.id}`} className="date" key={data.date}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="cardMonth">
          <h1>September</h1>
          <div className="dateCol">
            {dataSep.map((data) => (
              <Link to={`/september/${data.id}`} className="date" key={data.date}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="cardMonth">
          <h1>Oktober</h1>
          <div className="dateCol">
            {dataOct.map((data) => (
              <Link to={`/october/${data.id}`} className="date" key={data.date}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="cardMonth">
          <h1>November</h1>
          <div className="dateCol">
            {dataNov.map((data) => (
              <Link to={`/november/${data.id}`} className="date" key={data.date}>
                {data.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="cardMonth">
          <h1>Desember</h1>
          <div className="dateCol">
            {dataDec.map((data) => (
              <Link to={`/december/${data.id}`} className="date" key={data.date}>
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
