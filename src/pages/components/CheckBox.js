import React from "react";

const CheckBox = ({ checkbox, setCheckbox, error }) => {
  const name = "Noman Ejaz";

  return (
    <div className="flex flex-col gap-[6px]">
      <div className="flex items-start md:items-center gap-3">
        <input
          id="checkbox"
          type="checkbox"
          value=""
          required
          className="w-5 h-5 text-blue-600 bg-white hidden"
        />
        <div
          onClick={() => setCheckbox(!checkbox)}
          className={`bg-white rounded-md border ${
            checkbox ? "border-[#1570EF]" : "border-[#D0D5DD]"
          } w-5 h-5 mt-1 md:mt-0 flex flex-shrink-0 justify-center items-center focus-within:drop-shadow-[0_0px_0px_4px_rgba(209, 233, 255, 1)] cursor-pointer`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${checkbox ? "block" : "hidden"}`}
          >
            <path
              d="M11.6668 3.5L5.25016 9.91667L2.3335 7"
              stroke="#1570EF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <label
          htmlFor="checkbox"
          className="text-base text-[#475467] font-inter font-normal select-none"
        >
          You agree to providing your data to {name} who may contact you.
        </label>
      </div>
      {error && (
        <p className="text-sm text-[#F83F23] font-inter font-normal">{error}</p>
      )}
    </div>
  );
};

export default CheckBox;
