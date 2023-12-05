import React from "react";
import { twMerge } from "tw-merge";

import { IoIosArrowDown } from "react-icons/io";

function Select(props) {
  const { title, options, className } = props;
  return (
    <div className="relative">
      <select
        name=""
        id=""
        defaultValue={""}
        className={twMerge(
          ` w-24 appearance-none border border-gray-300 bg-white px-2 py-4 ${className}`,
        )}
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
