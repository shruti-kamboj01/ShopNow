
import {MdOutlineDelete} from "react-icons/md"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="m-auto w-[400px] h-[250px] border-b-2">

      <div className="flex gap-9 mt-4 ">

        <div className="">
          <img src={item.image} alt="card" className="h-[200px] w-[200px]"/>
        </div>
        <div className="text-gray-700 font-semibold text-lg text-left w-50 mt-1 ">
          <h1>{item.title}</h1>
          <h1 className="w-40 text-gray-500 font-semibold  leading-4 text-[10px] text-left mt-3">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
          <div className="flex justify-between gap-12 items-center w-full mt-6">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div
            onClick={removeFromCart}
            className="border rounded-full hover:bg-red-700 bg-red-300 text-red-700 hover:text-red-300 p-[5px] cursor-pointer">
              <MdOutlineDelete/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
