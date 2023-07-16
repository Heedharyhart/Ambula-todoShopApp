// eslint-disable-next-line
import { createContext, useEffect, useState } from "react";
import axios from "axios";
const ShoppingAppContext = createContext();


export const ShoppingAppProvider = ({ children }) => {
  const [todosItem, setTodosItem] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [completedTodo, setCompletedTodo] = useState(false);

  const fetchData = async () => {
    try {
      //Todo endpoint is called here
      const todosResponse = await axios.get("https://dummyjson.com/todos");
      const allTodos = todosResponse.data;

      //Shopping cart endPoint is called here
      const ProductsResponse = await axios.get(
        "https://fakestoreapi.com/products/"
      );
      const getProducts = ProductsResponse.data;
      

      setTodosItem(allTodos.todos);
      setProducts(getProducts);
      setLoading(false);
    } catch (error) {
      setError("Error fetching data.: ", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  
  

  // The function below are all for TODOS

  //This function add new todos
  const addTodo = (newTodo) => {
    const newTodoObj = {
      id: Date.now(),
      todo: newTodo.text,
      completed: completedTodo,
      userId: 26,
    };

    setTodosItem([newTodoObj, ...todosItem]);
  };

  // This function Delete/Remove Todo
  const deleteTodo = (todoId) => {
    setTodosItem(todosItem.filter((todo) => todo.id !== todoId));
  };

  // This fuction checks if a TODO is completed or not, if completed mark as completed
  const markTodoComplete = (todoId) => {
    setTodosItem(
      todosItem &&
        todosItem.map((todo) =>
          todo.id === todoId ? { ...todo, completed: true } : todo
        ),
        setCompletedTodo(true)
    );
  };
  // TODOS FUNCTIONS END HERE



  //  @ func for the shopping cart
  // FUCTION BELOW
  // ARE FOR SHOPPING CART

//This Fuction is for adding an item to cart
 const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
     if (existingProduct) { 
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

// THis Fuction is for Removing an item from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

//This Function is for increasing the quantity of an item in a cart
  const increaseQuantity = (productId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

//This Function is for decreasing the quantity of an item in a cart
  const decreaseQuantity = (productId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

//This is for clearing the Cart
  const clearCart = () => {
    setCartItems([]);
  };

//This function gives the total amount of products in the cart
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  

  

  

  return (
    <ShoppingAppContext.Provider
      value={{
        todosItem,
        addTodo,
        deleteTodo,
        markTodoComplete,
        completedTodo,
        products,
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cartTotal,
        clearCart,
      }}
    >
      {children}
    </ShoppingAppContext.Provider>
  );
}

export default ShoppingAppContext;