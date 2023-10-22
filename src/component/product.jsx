import { Component } from "react";

class Product extends Component {
  // list = ["item one", "item two", "item three"];

  // state = {
  //   count: 1,
  // };

  render() {
    // const count = 1;
    // const list = ["item one", "item two", "item three"];

    return (
      <>
        <div
          className="main"
          style={{
            border: "1px solid red",
            marginTop: "10px",
            padding: "4px 2px",
            borderRadius: "10px",
            width: "30%",
          }}
        >
          <div
            className="product"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <div
              className="product_name"
              style={{
                width: "135px",
                border: "none",
                padding: "6px",
              }}
            >
              {this.props.productName}
            </div>
            <span
              className="amont"
              style={{ padding: "6px 14px", border: "1px solid orange" }}
            >
              {this.format()}
            </span>
            <span
              className="add"
              onClick={() => {
                this.HandleIncrease();
              }}
              style={{ padding: "6px 14px", border: "1px solid orange" }}
            >
              +
            </span>
            <span
              className="diff"
              onClick={() => {
                this.HandleDecrease();
              }}
              style={{ padding: "6px 14px", border: "1px solid orange" }}
            >
              -
            </span>
            <span
              className="dlt"
              onClick={() => {
                this.HandleDelete();
              }}
              style={{
                margin: "0 0 0 10px",
                padding: "6px 4px",
                border: "1px solid orange",
              }}
            >
              Delete
            </span>
          </div>
        </div>

        <div className="item">
          <ul>
            {
              // console.log(this.list)
              // list.map((item, index) => {
              //   return <li key={index}>item</li>;
              // })
            }
          </ul>
        </div>
      </>
    );
  }

  format() {
    if (this.props.count === 0) {
      return "zero";
    } else {
      return this.props.count;
    }
  }
  HandleIncrease() {
    // console.log(this.count);
    // const amount = this.state.count;
    // this.setState({ count: amount + 1 });
    this.props.handleIncrease();
  }
  HandleDecrease() {
    // const amount = this.state.count;
    // this.setState({ count: amount - 1 });
    this.props.handleDecrease();
  }
  HandleDelete() {
    // console.log(this.props);
    this.props.handleDelete();
  }
}
export default Product;
