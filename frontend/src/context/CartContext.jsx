import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

  // 🔥 Load from localStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // 🔥 Save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ➕ Add to cart
  const addToCart = (product) => {
    const exist = cart.find((item) => item._id === product._id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item._id === product._id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // ➖ Decrease quantity
  const decreaseQty = (id) => {
    const exist = cart.find((item) => item._id === id);

    if (exist.qty === 1) {
      removeFromCart(id);
    } else {
      setCart(
        cart.map((item) =>
          item._id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
      );
    }
  };

  // ❌ Remove item completely
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  // 🧹 Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // 💰 Calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  // 📦 Total items
  const totalItems = cart.reduce(
    (acc, item) => acc + item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQty,
        removeFromCart,
        clearCart,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;