import React, { useContext } from 'react';
import { BasketContext } from '../../Context/context';

const Basket = () => {
  const { basket, DeleteBasket, increaseBasket, decreaseBasket,} = useContext(BasketContext);

  return (
    <div>
      {basket.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {basket.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt="" width="60px" />
                </td>
                <td>{item.name}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => DeleteBasket(item.id)}>
                    Delete
                  </button>
                  <button className="btn btn-primary" onClick={() => decreaseBasket(item.id)}>
                    -
                  </button>
                  <p>{item.count}</p>
                  <button className="btn btn-primary" onClick={() => increaseBasket(item.id)}>
                    +
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items in basket</p>
      )}
    </div>
  );
};

export default Basket;
