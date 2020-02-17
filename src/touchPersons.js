import React, { useState } from "react";

function Products(props) {
//   const [state, setState] = useState({
//     products: [
//       {
//         id: 1,
//         name: "",
//         sex: "",
//         rela: "",
//         pho1: "",
//         pho2: "",
//         addr: "",
//         note: ""
//       }
//     ]
//   });

//   function handleRowDel(product) {
//     var index = state.products.indexOf(product);
//     let new_state = { ...state };
//     new_state.products.splice(index, 1);
//     setState(new_state);
//   }

//   function handleAddEvent(evt) {
//     var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
//     var _product = {
//       id: id,
//       name: "",
//       sex: "",
//       rela: "",
//       pho1: "",
//       pho2: "",
//       addr: "",
//       note: ""
//     };
//     let new_products = [...state.products, _product];
//     setState({ ...state, products: new_products });
//   }

//   function handleProductTable(evt) {
//     var item = {
//       id: evt.target.id,
//       name: evt.target.name,
//       value: evt.target.value
//     };
//     var products = state.products.slice();
//     var newProducts = products.map(function(product) {
//       for (var key in product) {
//         if (key == item.name && product.id == item.id) {
//           product[key] = item.value;
//         }
//       }
//       return product;
//     });
//     setState({ ...state, products: newProducts });
//   }

  return (
    <div>
      <ProductTable
        onProductTableUpdate={props.handleProductTable}
        onRowAdd={props.handleAddEvent}
        onRowDel={props.handleRowDel}
        products={props.products}
      />
    </div>
  );
}

// class Products extends React.Component {
//   constructor(props) {
//     super(props);

//     //  this.state.products = [];
//     this.state = {};
//     this.state.filterText = "";
//     this.state.products = [
//       {
//         id: 1,
//         category: "Sporting Goods",
//         price: "49.99",
//         qty: 12,
//         name: "football"
//       }
//     ];
//   }
//   handleUserInput(filterText) {
//     this.setState({ filterText: filterText });
//   }
//   handleRowDel(product) {
//     var index = this.state.products.indexOf(product);
//     this.state.products.splice(index, 1);
//     this.setState(this.state.products);
//   }

//   handleAddEvent(evt) {
//     var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
//     var product = {
//       id: id,
//       name: "",
//       price: "",
//       category: "",
//       qty: 0
//     };
//     this.state.products.push(product);
//     this.setState(this.state.products);
//   }

//   handleProductTable(evt) {
//     var item = {
//       id: evt.target.id,
//       name: evt.target.name,
//       value: evt.target.value
//     };
//     var products = this.state.products.slice();
//     var newProducts = products.map(function(product) {
//       for (var key in product) {
//         if (key == item.name && product.id == item.id) {
//           product[key] = item.value;
//         }
//       }
//       return product;
//     });
//     this.setState({ products: newProducts });
//     //  console.log(this.state.products);
//   }
//   render() {
//     return (
//       <div>
//         <ProductTable
//           onProductTableUpdate={this.handleProductTable.bind(this)}
//           onRowAdd={this.handleAddEvent.bind(this)}
//           onRowDel={this.handleRowDel.bind(this)}
//           products={this.state.products}
//           filterText={this.state.filterText}
//         />
//       </div>
//     );
//   }
// }

class ProductTable extends React.Component {
  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var product = this.props.products.map(function(product) {
      return (
        <ProductRow
          onProductTableUpdate={onProductTableUpdate}
          product={product}
          onDelEvent={rowDel.bind(this)}
          key={product.id}
        />
      );
    });
    return (
      <div>
        <button
          type="button"
          onClick={this.props.onRowAdd}
          className="btn btn-success pull-right"
        >
          Add
        </button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>姓名</th>
              <th>性别</th>
              <th>与病例关系</th>
              <th>联系方式1</th>
              <th>联系方式2</th>
              <th>住址</th>
              <th>备注</th>
            </tr>
          </thead>

          <tbody>{product}</tbody>
        </table>
      </div>
    );
  }
}

class ProductRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.product);
  }
  render() {
    return (
      <tr className="eachRow">
        <EditableCell
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: "name",
            value: this.props.product.name,
            id: this.props.product.id
          }}
        />
        <EditableCell
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: "sex",
            value: this.props.product.sex,
            id: this.props.product.id
          }}
        />
        <EditableCell
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: "rela",
            value: this.props.product.rela,
            id: this.props.product.id
          }}
        />
        <EditableCell
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: "pho1",
            value: this.props.product.pho1,
            id: this.props.product.id
          }}
        />
        <EditableCell
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: "pho2",
            value: this.props.product.pho2,
            id: this.props.product.id
          }}
        />
        <EditableCell
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: "addr",
            value: this.props.product.addr,
            id: this.props.product.id
          }}
        />
        <EditableCell
          onProductTableUpdate={this.props.onProductTableUpdate}
          cellData={{
            type: "note",
            value: this.props.product.note,
            id: this.props.product.id
          }}
        />
        <td className="del-cell">
          <input
            type="button"
            onClick={this.onDelEvent.bind(this)}
            value="X"
            className="del-btn"
          />
        </td>
      </tr>
    );
  }
}
class EditableCell extends React.Component {
  render() {
    return (
      <td>
        <input
          type="text"
          name={this.props.cellData.type}
          id={this.props.cellData.id}
          value={this.props.cellData.value}
          onChange={this.props.onProductTableUpdate}
        />
      </td>
    );
  }
}
export default Products;
