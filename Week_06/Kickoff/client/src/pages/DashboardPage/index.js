import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import products from '../../data';

const DashboardPage = () => {
  const [displayInStockItems, setDisplayInStockItems] = useState(false)

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {
            products
              .filter((prod) => prod.quantity > 0 || displayInStockItems)
              .map((prod) => (
                <tr>
                  <td>{prod.name}</td>
                  <td>${prod.price.toFixed(2)}</td>
                  <td>{prod.quantity > 0 ? prod.quantity : "Out of Stock"}</td>
                  <td><Link to={`/products/${prod.id}`}>Details</Link></td>
                </tr>
              ))
          }
        </tbody>
      </table>
      <Outlet />
    </Container>
  )
}

export default DashboardPage