import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineEditCalendar } from "react-icons/md";
import { BsFillEyeFill, BsGithub } from "react-icons/bs";
import { BiArrowToBottom } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { AiFillTag } from "react-icons/ai";

const December = () => {
  const { id } = useParams();
  const sheetId = "10r-IFwefCFvFDGDc1cSVHwq-P9-RnJ63Vgr2aHoxKw4";
  const baseUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
  const sheetName = "December";
  const qu = `Select * WHERE A = ${id}`;
  const query = encodeURIComponent(qu);
  const url = `${baseUrl}&sheet=${sheetName}&tq=${query}`;
  const data = [];

  const [datasById, setDataById] = useState([]);

  useEffect(() => {
    document.title = `Do Some Coding Today | ${id} January 2023`;
    db();
  }, []);

  const db = () => {
    fetch(url)
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
        setDataById(data);
      });
  };

  const toGithub = () => {
    const github = datasById[0].github;
    window.location = github;
  };
  const togithubZip = () => {
    const githubZip = datasById[0].githubzip;
    window.location = githubZip;
  };

  return (
    <div>
      {datasById.map((data) => (
        <section className="BodyDay" key={data.id}>
          <div className="ContainerDay">
            <div className="DayTitle">
              <h1>{data.title}</h1>
            </div>
            <div className="BannerDay">
              <img src={data.image} alt={data.title} />
              <div className="DescBanner">
                <div className="viewPageDay">
                  <BsFillEyeFill className="iconDayPosted" />
                  10k
                </div>
                <div className="DayPosted">
                  <MdOutlineEditCalendar className="iconDayPosted" />
                  {data.date}
                </div>
              </div>
            </div>
            <div className="ContentDay">
              <div className="RightContentDay">
                <div className="btnGithub" title="GitHub" onClick={toGithub}>
                  <div className="IconBtn">
                    <BsGithub className="icon" />
                  </div>
                  <div className="TitleBtn">
                    <h3>View Code In GitHub</h3>
                    <IoIosArrowForward className="arrow" />
                  </div>
                </div>
                <div className="btnDownload" title="Download" onClick={togithubZip}>
                  <div className="IconBtn">
                    <BiArrowToBottom className="icon" />
                  </div>
                  <div className="TitleBtn">
                    <h3>Download Zip</h3>
                    <IoIosArrowForward className="arrow" />
                  </div>
                </div>
                <div className="containerCreator">
                  <div className="btnCreator">
                    <div className="IconBtn">
                      <FaUserAlt className="iconUser" />
                    </div>
                    <div className="TitleBtn">
                      <h3>Creator</h3>
                    </div>
                  </div>
                  <button className="Creator" onClick={toGithub}>
                    {data.creator}
                  </button>
                </div>
                <div className="containerTag">
                  <div className="btnTag">
                    <div className="IconBtn">
                      <AiFillTag className="icon" />
                    </div>
                    <div className="TitleBtn">
                      <h3>Tag</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="LeftContentDay">
                <div className="LeftContentDayDesc">
                  <div className="TitleDesc">
                    <h2>Description:</h2>
                  </div>
                  <div className="subTitleDesc">
                    <p>{data.desc}</p>
                  </div>
                </div>
                <div className="LeftContentDayImg">
                  <img src={data.image} alt={data.title} />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default December;
