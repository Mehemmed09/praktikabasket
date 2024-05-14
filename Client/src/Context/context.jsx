import React, { createContext } from 'react';
import useLocalStorage from '../hooks/UseLocalStorage';

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useLocalStorage('basket', []);

  const AddBasket = (product) => {
    const productExists = basket.find((item) => item.id === product.id);
    if (!productExists) {
      setBasket([...basket, product]);  
    }
  };

  const DeleteBasket = (productId) => {
    const updatedBasket = basket.filter((item) => item.id !== productId);
    setBasket(updatedBasket); 
  };

  const increaseBasket = (productId) => {
    const updatedBasket = basket.map((item) =>
      item.id === productId ? { ...item, count: item.count + 1 } : item
    );
    setBasket(updatedBasket);
  };

  const decreaseBasket = (productId) => {
    const existingItem = basket.find((item) => item.id === productId);
    if (existingItem && existingItem.count > 1) {
      const updatedBasket = basket.map((item) =>
        item.id === productId ? { ...item, count: item.count - 1 } : item
      );
      setBasket(updatedBasket);
    } else {
      const updatedBasket = basket.filter((item) => item.id !== productId);
      setBasket(updatedBasket);
    }
  };

  const basketData = {
    basket,
    AddBasket,
    DeleteBasket,
    increaseBasket,
    decreaseBasket,
  };

  return (
    <BasketContext.Provider value={basketData}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
