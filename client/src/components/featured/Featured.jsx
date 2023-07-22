import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (fromPopular) => {
    navigate(`/gigs?search=${input || fromPopular}`);
  };
  return (
    <div className="featured">
      <div className="textContainer">
        <h1>
          Find the perfect <span>Vendor</span> services for your business
        </h1>
        <div className="search">
          <div className="searchInput">
            <img src="./img/search.png" alt="" />
            <input
              type="text"
              placeholder='Try "building mobil app"'
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSubmit}>Search</button>
          </div>
        </div>
        <div className="popular">
          <span>Popular:</span>
          <button onClick={() => handleSubmit("web")}>Web Development</button>
          <button onClick={() => handleSubmit("app")}>App Development</button>
          <button onClick={() => handleSubmit("seo")}>SEO</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
