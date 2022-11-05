import React from "react";

const Input = ({
  htmlFor,
  label,
  type,
  id,
  placeholder,
  error,
  value,
  setValue,
}) => {
  console.log(value);
  return (
    <div className="w-full flex flex-col gap-[6px]">
      <label
        htmlFor={htmlFor}
        className="text-sm text-[#344054] font-inter font-medium"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        // required="required"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`bg-white border  ${
          error ? "border-[#F83F23]" : "border-[#D0D5DD]"
        } focus:outline-0 focus:border-[#84CAFF] py-[10px] px-[14px] rounded-lg drop-shadow-[0_1px_2px_rgba(16,24,40,0.05)] text-base text-[#667085] font-inter font-normal`}
        placeholder={placeholder}
      />
      {error && (
        <p className="text-sm text-[#F83F23] font-inter font-normal">{error}</p>
      )}
    </div>
  );
};

export default Input;
