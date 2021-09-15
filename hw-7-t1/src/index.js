import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Products extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    // ...
    this.setState({
      products: [
        { id: 1, namen: 'Товар 1', price: 1000 },
        { id: 2, namen: 'Товар 2', price: 2000 },
        { id: 3, namen: 'Товар 3', price: 3000 },
        { id: 4, namen: 'Товар 4', price: 4000 },
        { id: 5, namen: 'Товар 5', price: 5000 }
      ]
    })
  }

  create = (id, namen, price) => this.setState({
    products: [
      ...this.state.products,
      { id: id, namen: namen, price: price }
    ]
  })

  update = (targetId, namen, price) => this.setState({
    products: this.state.products.map(product => (
      product.id !== targetId ? product : {
        id: targetId, namen: namen, price: price
      }
    ))
  })

  delete = (targetId) => this.setState({
    products: this.state.products.filter(({ id }) => id !== targetId)
  })

  render() {
    const { products } = this.state
    return(
      <table className="products">
        <thead>
          <tr>
            <th className="products__th">#</th>
            <th className="products__th">Название</th>
            <th className="products__th">Цена</th>
            <th className="products__th">Действия</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, namen, price }) => 
            <tr key={id}>
              <td className="products__td">{id}</td>
              <td className="products__td">{namen}</td>
              <td className="products__td">{price}</td>
              <td className="products__td">
                <button
                  className="products__btn"
                  onClick={() => this.delete(id)}
                >Удалить</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    )
  }
}

ReactDOM.render(
  <Products/>,
  document.getElementById('root')
);

