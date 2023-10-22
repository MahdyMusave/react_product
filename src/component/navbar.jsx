import { Component } from "react";
import ProductContext from "../context/product_context";
class Navbar extends Component {
  static contextType = ProductContext;
  render() {
    return (
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
          >
            <span style={{ margin: "0 0 0 10px" }}>{this.calculater()}</span>
          </div>
        </div>
      </>
    );
  }
  calculater = () => {
    // console.log("dhks");
    let sum = 0;
    this.context.products.map((p) => (sum += p.count));
    return sum;
  };
}

export default Navbar;
