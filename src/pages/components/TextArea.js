import React from 'react';

const TextArea = ({
  htmlFor,
  label,
  id,
  placeholder,
  error,
  value,
  setValue,
}) => {
  return (
    <div className="w-full flex flex-col gap-[6px]">
      <label
        htmlFor={htmlFor}
        class="text-sm text-[#344054] font-inter font-medium"
      >
        {label}
      </label>
      <textarea
        rows={4}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        class="max-h-[132px] bg-white border border-[#D0D5DD] focus:outline-0 focus:border-[#84CAFF] py-[10px] px-[14px] rounded-lg drop-shadow-[0_1px_2px_rgba(16,24,40,0.05)] text-base text-[#667085] font-inter font-normal"
      ></textarea>
      <p class="text-sm text-[#F83F23] font-inter font-normal">{error}</p>
    </div>
  );
};

export default TextArea;
