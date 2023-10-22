import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
/*const nav = (
  <>
    <div
      className="navbar"
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "99%",
        margin: "auto",
      }}
    >
      <div
        className="link"
        style={{
          border: "1px solid red",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "35%",
        }}
      >
        <a href="#">about</a>
        <a href="#">news</a>
        <a href="#">content</a>
        <a href="#">home</a>
      </div>
      <div
        className="serach"
        style={{ width: "30%", border: "1px solid green" }}
      >
        <input
          style={{ width: "100%", borderRadius: "5px" }}
          type="search"
          name="search"
          id="search"
          placeholder="search"
        />
      </div>
      <div
        className="media"
        style={{ border: "1px solid red", width: "30%" }}
      ></div>
    </div>
  </>
); */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
