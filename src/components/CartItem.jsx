import React from "react";
import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { QTY, SIZES } from "../constant";

function CartItem({ item }) {
  return (
    <div className="cursor-pointer  space-y-2 bg-gray-50 p-2 hover:bg-[#DAFFA2]">
      {/* {Image} */}
      <div className="flex space-x-2 ">
        <img className="h-24" src={item.src} />
        {/* {Title and Desc} */}
        <div className="space-y-2">
          <div className="font-bold">{item.title}</div>
          <div className="text-sm text-gray-400">{item.description}</div>
        </div>
        {/* {Price} */}
        <div className="font-bold">{item.price}</div>
      </div>

      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold">SIZE</div>
            <Select options={SIZES} title="" />
          </div>
          <div>
            <div>
              <div className="font-bold">QTY</div>
              <Select options={QTY} title="" />
            </div>
          </div>
        </div>
        <button>
          <CiTrash size={25} className="text-black" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
