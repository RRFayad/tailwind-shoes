import React from "react";
import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { QTY, SIZES } from "../constant";

function CartItem({ item: { product, qty, size } }) {
  return (
    <div className="cursor-pointer  space-y-2 bg-gray-50 p-2 hover:bg-[#DAFFA2] dark:bg-transparent dark:hover:bg-night-50">
      {/* {Image} */}
      <div className="flex space-x-2 ">
        <img className="h-24" src={product.src} />
        {/* {Title and Desc} */}
        <div className="space-y-2">
          <div className="font-bold dark:text-white">{product.title}</div>
          <div className="text-sm text-gray-400">{product.description}</div>
        </div>
        {/* {Price} */}
        <div className="font-bold dark:text-white">{product.price}</div>
      </div>

      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold dark:text-white">SIZE</div>
            <Select
              options={SIZES}
              title=""
              className={"w-16 p-1 pl-2"}
              defaulValue={size}
            />
          </div>
          <div>
            <div>
              <div className="font-bold dark:text-white">QTY</div>
              <Select
                options={QTY}
                title=""
                className={"w-16 p-1 pl-2"}
                defaulValue={size}
              />
            </div>
          </div>
        </div>
        <button>
          <CiTrash size={25} className="text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
