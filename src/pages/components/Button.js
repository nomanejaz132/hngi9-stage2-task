import React from "react";

const Button = ({ onClick }) => {
  return (
    <button
      id="btn__submit"
      type="submit"
      onClick={onClick}
      className="w-full py-3 text-base text-white text-center font-inter font-semibold bg-[#1570EF] hover:bg-[#175CD3] focus:outline-none focus:ring focus:ring-[#D1E9FF] border border-[#1570EF] rounded-lg drop-shadow-[0px_1px_2px_rgba(16,24,40,0.05)] cursor-pointer"
    >
      Send message
    </button>
  );
};

export default Button;
