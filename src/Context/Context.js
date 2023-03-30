import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [AddedProducts, setAddedProducts] = useState([]);

  const DeleteFromCart = (id) => {
    const newArray = [...AddedProducts];
    const index = newArray.findIndex((item) => item.id === id);
    newArray.splice(index, 1);

    setAddedProducts(newArray);
  };

  const increaseCart = (id) =>{
      const exist = AddedProducts.findIndex((x) => x.id === id);
      if (exist !== -1) {
        setAddedProducts(prev => { 
          const newArray =  [...prev]
          newArray[exist].count = newArray[exist].count + 1 
          return newArray
        });
      } 
  }
  const decreaseCart = (id) =>{
      const exist = AddedProducts.findIndex((x) => x.id === id);
      if (exist !== -1 && AddedProducts[exist].count > 0) {
        setAddedProducts(prev => { 
          const newArray =  [...prev]
          newArray[exist].count = newArray[exist].count - 1 
          return newArray
        });
      } 
  }
  const AddToCart = (product) => {
    const exist = AddedProducts.findIndex((x) => x.id === product.id);
      if(exist === -1){
        setAddedProducts([...AddedProducts, { ...product , count : 1}]);
      }
  };

  return (
    <Context.Provider
      value={{
        increaseCart ,
        decreaseCart ,
        count: AddedProducts.length,
        AddedProducts,
        AddToCart,
        DeleteFromCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
