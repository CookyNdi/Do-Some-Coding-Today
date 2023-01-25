import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BodyMonth = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    const response = await axios.get("http://localhost:5000/january");
    if (response.data !== undefined && response.data !== null) {
      setData(response.data);
    }
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
