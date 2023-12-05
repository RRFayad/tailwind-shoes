import React from "react";

import { IoIosArrowDown } from "react-icons/io";

function Select(props) {
  const { title, options } = props;
  return (
    <div className="relative">
      <select
        name=""
        id=""
        defaultValue={""}
        className=" w-24 appearance-none border border-gray-300 bg-white p-4  "
      >
        <option value="" disabled>
          {title}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="flex-center absolute inset-y-0 right-0 pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
}

export default Select;
