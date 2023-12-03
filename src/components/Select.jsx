import React from "react";

import { IoIosArrowDown } from "react-icons/io";

function Select(props) {
  const { title, options } = props;
  return (
    <div className="relative">
      <select
        name=""
        id=""
        className="h-8 w-24 appearance-none border border-gray-300 bg-transparent p-4  md:h-14 "
      >
        <option key={title} value="" disabled selected hidden>
          {title}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="flex-center absolute inset-y-0 right-0 -z-10 pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
}

export default Select;
