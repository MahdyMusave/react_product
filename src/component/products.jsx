import { Component } from "react";
import Product from "./product";
import ProductContext from "../context/product_context";
class Products extends Component {
  static contextType = ProductContext;
  /*state = {
    products: [
      {
        id: 1,
        productName: "apple 10",
        productCampaigns: "apple",
        price: "$2.99",
        count: 5,
        description: "fresh apple",
      },
      {
        id: 2,
        productName: "apple 8",
        productCampaigns: "apple",
        price: "$1.99",
        count: 5,
        description: "fresh apple",
      },
      {
        id: 3,
        productName: "samsung s 10",
        productCampaigns: "samsung",
        price: "$3.99",
        count: 4,
        description: "fresh samsung",
      },
      {
        id: 4,
        productName: "samsung note 8",
        productCampaigns: "samsung",
        price: "$5.99",
        count: 6,
        description: "fresh samsung",
      },
    ],
  };*/
  //   render() {
  //     return (
  //       <>
  //         <button
  //           className="update_amount"
  //           style={{
  //             padding: "5px 10px",
  //             backgroundColor: "green",
  //             color: "white",
  //             fontSize: "21px",
  //             fontWeight: "bolder",
  //           }}
  //           onClick={() => {
  //             this.handleresent();
  //           }}
  //         >
  //           reload
  //         </button>
  //         {this.props.products.map((p, index) => {
  //           return (
  //             <Product
  //               productName={p.productName}
  //               key={index}
  //               id={p.id}
  //               count={p.count}
  //               handleDelete={() => {
  //                 this.delete_product(p.id);
  //               }}
  //               handleIncrease={() => {
  //                 this.handleIncrease(p.id);
  //               }}
  //               handleDecrease={() => {
  //                 this.handleDecrease(p.id);
  //               }}
  //             />
  //           );
  //         })}
  //       </>
  //     );
  //   }

  //   delete_product(pro_id) {
  //     // console.log(this.state);
  //     /*
  //     let newProductsList = this.state.products.filter((p) => p.id !== pro_id);
  //     this.setState({ products: newProductsList });
  //     */

  //     this.props.onDelete(pro_id);
  //   }
  //   handleresent() {
  //     /*const resent = this.state.products.map((p) => {
  //       p.count = 0;
  //       return p;
  //     });
  //     // console.log(resent);
  //     this.setState({ products: resent });
  //     */
  //     this.props.onResent();
  //   }

  //   handleIncrease(product_id) {
  //     /*
  //     const newProduct = [...this.state.products];
  //     const index = newProduct.findIndex((p) => p.id === product_id);
  //     newProduct[index].count += 1;
  //     this.setState({ products: newProduct });
  //     */
  //     this.props.onIncrease(product_id);
  //   }
  //   handleDecrease(product_id) {
  //     /*
  //     const newProduct = [...this.state.products];
  //     const index = newProduct.findIndex((p) => p.id === product_id);
  //     newProduct[index].count -= 1;
  //     this.setState({ products: newProduct });
  //     */

  //     this.props.onDecrease(product_id);
  //     // this.props.onDecrease(product_id);
  //   }
  // }
  // export default Products;

  //---------------------------->after context
  render() {
    return (
      <>
        <button
          className="update_amount"
          style={{
            padding: "5px 10px",
            backgroundColor: "green",
            color: "white",
            fontSize: "21px",
            fontWeight: "bolder",
          }}
          onClick={() => {
            this.handleresent();
          }}
        >
          reload
        </button>
        {this.context.products.map((p, index) => {
          return (
            <Product
              productName={p.productName}
              key={index}
              id={p.id}
              count={p.count}
              handleDelete={() => {
                this.delete_product(p.id);
              }}
              handleIncrease={() => {
                this.handleIncrease(p.id);
              }}
              handleDecrease={() => {
                this.handleDecrease(p.id);
              }}
            />
          );
        })}
      </>
    );
  }

  delete_product(pro_id) {
    // console.log(this.state);
    /*
    let newProductsList = this.state.products.filter((p) => p.id !== pro_id);
    this.setState({ products: newProductsList });
    */

    this.context.onDelete(pro_id);
  }
  handleresent() {
    /*const resent = this.state.products.map((p) => {
      p.count = 0;
      return p;
    });
    // console.log(resent);
    this.setState({ products: resent });
    */
    this.context.onResent();
  }

  handleIncrease(product_id) {
    /*
    const newProduct = [...this.state.products];
    const index = newProduct.findIndex((p) => p.id === product_id);
    newProduct[index].count += 1;
    this.setState({ products: newProduct });
    */
    this.context.onIncrease(product_id);
  }
  handleDecrease(product_id) {
    /*
    const newProduct = [...this.state.products];
    const index = newProduct.findIndex((p) => p.id === product_id);
    newProduct[index].count -= 1;
    this.setState({ products: newProduct });
    */

    this.context.onDecrease(product_id);
    // this.props.onDecrease(product_id);
  }
}
export default Products;
