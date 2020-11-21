import React, { useState, useEffect } from "react";
import axios from "axios";

const Comics = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://marvel-backend-20.herokuapp.com/comics"
      );
      console.log(response.data);
      setData(response.data);

      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="comicspage">
      <h2>DISCOVER OUR COMICS</h2>
      <div className="comics">
        {data.results.map((results, index) => {
          //   const keys = Object.keys(results);
          //   console.log(keys);
          return (
            <div className="comicsbox" key={index}>
              <h3>{results.title}</h3>
              <div className="cry">📚</div>
              {/* <img alt={keys} src={keys} /> */}
              <span>{results.description}</span>
            </div>
          );
        })}
      </div>
      {/* <div>
          {data.results.thumbnail.map((thumbnail, index) => {
            const keys = Object.keys(thumbnail);
            return (
              <div>
                <img alt={keys} src={keys} />
              </div>
            );
          })}
        </div> */}
    </div>
  );
};

export default Comics;
