import { Component } from "react";
import Navbar from "./component/navbar";
// import Product from "./component/product";
import Products from "./component/products";
import ProductContext from "./context/product_context";
// console.log(ProductContext);
// class App extends Component {
//   /*render() {
//     return (
//       <>
//         <Navbar />
//         <Product />
//       </>
//     );
//   }*/
//   state = {
//     products: [
//       {
//         id: 1,
//         productName: "apple 10",
//         productCampaigns: "apple",
//         price: "$2.99",
//         count: 5,
//         description: "fresh apple",
//       },
//       {
//         id: 2,
//         productName: "apple 8",
//         productCampaigns: "apple",
//         price: "$1.99",
//         count: 5,
//         description: "fresh apple",
//       },
//       {
//         id: 3,
//         productName: "samsung s 10",
//         productCampaigns: "samsung",
//         price: "$3.99",
//         count: 4,
//         description: "fresh samsung",
//       },
//       {
//         id: 4,
//         productName: "samsung note 8",
//         productCampaigns: "samsung",
//         price: "$5.99",
//         count: 6,
//         description: "fresh samsung",
//       },
//     ],
//   };

//   render() {
//     return (
//       <>
//         <Navbar products={this.state.products} />
//         <Products
//           products={this.state.products}
//           onDelete={this.delete_product}
//           onIncrease={this.handleIncrease}
//           onDecrease={this.handleDecrease}
//           onResent={this.handleresent}
//         />
//       </>
//     );
//   }
//   delete_product = (pro_id) => {
//     // console.log(this.state);
//     let newProductsList = this.state.products.filter((p) => p.id !== pro_id);
//     this.setState({ products: newProductsList });
//   };
//   handleresent = () => {
//     const resent = this.state.products.map((p) => {
//       p.count = 0;
//       return p;
//     });
//     // console.log(resent);
//     this.setState({ products: resent });
//   };

//   handleIncrease = (product_id) => {
//     const newProduct = [...this.state.products];
//     const index = newProduct.findIndex((p) => p.id === product_id);
//     newProduct[index].count += 1;
//     this.setState({ products: newProduct });
//   };
//   handleDecrease = (product_id) => {
//     const newProduct = [...this.state.products];
//     const index = newProduct.findIndex((p) => p.id === product_id);
//     newProduct[index].count -= 1;
//     this.setState({ products: newProduct });
//   };
// }

// export default App;
//--------------------->after context
class App extends Component {
  /*render() {
    return (
      <>
        <Navbar />
        <Product />
      </>
    );
  }*/

  constructor(props) {
    super(props);
    //you have not access by defult to props
    //but you muste set on paramter
    console.log("constructor-app", this.props);
  }
  componentDidMount() {
    console.log("complete - app");
  }
componentWillUnmount() {
    console.log("delete-app");
  }
  componentDidUpdate() {
    console.log("update-app");
  }
  

  state = {
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
  };

  render() {
    console.log("render - app");
    return (
      <>
        <ProductContext.Provider
          value={{
            products: this.state.products,
            onDelete: this.delete_product,
            onIncrease: this.handleIncrease,
            onDecrease: this.handleDecrease,
            onResent: this.handleresent,
          }}
        >
          <Navbar />
          <Products />
        </ProductContext.Provider>
      </>
    );
  }
  delete_product = (pro_id) => {
    // console.log(this.state);
    let newProductsList = this.state.products.filter((p) => p.id !== pro_id);
    this.setState({ products: newProductsList });
  };
  handleresent = () => {
    const resent = this.state.products.map((p) => {
      p.count = 0;
      return p;
    });
    // console.log(resent);
    this.setState({ products: resent });
  };

  handleIncrease = (product_id) => {
    const newProduct = [...this.state.products];
    const index = newProduct.findIndex((p) => p.id === product_id);
    newProduct[index].count += 1;
    this.setState({ products: newProduct });
  };
  handleDecrease = (product_id) => {
    const newProduct = [...this.state.products];
    const index = newProduct.findIndex((p) => p.id === product_id);
    newProduct[index].count -= 1;
    this.setState({ products: newProduct });
  };
}

export default App;
