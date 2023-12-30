import React, { useEffect, useState } from "react";
import "./News.css";

const News = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    try {
      let response = await fetch(
        "https://newsdata.io/api/1/news?country=al&apikey=pub_35609bb2c75368620f0d9f429d40e0359c990"
      );
      let data = await response.json();
      setMyNews(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-center my-3">Lajmet e ditës</h1>
      <div className="mainDiv">
        {mynews.map((ele) => {
          return (
            <div
              key={ele.id}
              className="card"
              style={{
                marginTop: "2rem",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              <img
                src={
                  ele.image_url ? ele.image_url : "https://placeholder.com/150"
                }
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  {ele.title ? ele.title : "No Title Available"}
                </h5>
                <p className="card-text">{ele.description}</p>
                <a
                  href={ele.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default News;
