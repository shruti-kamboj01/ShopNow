import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="">
  {
    cart.length > 0  ? 
    (<div className="flex justify-evenly mt-10 ">


      <div className="h-[100%]">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div>

      <div className="flex flex-col h-[75%] ">
          <div className="text-green-700 font-semibold mt-5 mb-1 text-lg ">Your Cart</div>
          <div className="text-green-700 font-semibold text-6xl uppercase mb-4">Summary</div>
          <p>
            <span className="font-semibold text-lg">Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col w-[350px]">
          <p className="font-semibold text-lg mb-6">Total Amount: ${totalAmount}</p>
          <button className="border-2 bg-green-700 text-white p-3 rounded-full ">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col justify-center text-center min-h-[89vh] ">
      <h1 className="text-lg font-semibold"> Your Cart is Empty!</h1>
      <Link to={"/"}>
        <button className="border-2 rounded-lg p-2 px-11 mt-3 font-semibold bg-green-600 text-white border-green-600 hover:text-green-600 hover:bg-white ">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
