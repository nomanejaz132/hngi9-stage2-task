import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ label, id, link, title, target }) => {
  return (
    <>
      {target ? (
        <a
          href={link}
          id={id}
          title={title}
          className="py-6 w-full text-[#101828] text-lg text-center font-medium font-inter bg-[#EAECF0] hover:bg-[#D0D5DD] rounded-lg border-[#EAECF0] hover:border-[#D0D5DD] drop-shadow-[0_1px_2px_rgba(16,24,40,0.05)] cursor-pointer"
        >
          {label}
        </a>
      ) : (
        <Link
          to={link}
          id={id}
          title={title}
          className="py-6 w-full text-[#101828] text-lg text-center font-medium font-inter bg-[#EAECF0] hover:bg-[#D0D5DD] rounded-lg border-[#EAECF0] hover:border-[#D0D5DD] drop-shadow-[0_1px_2px_rgba(16,24,40,0.05)] cursor-pointer"
        >
          {label}
        </Link>
      )}
    </>
  );
};

export default LinkButton;
