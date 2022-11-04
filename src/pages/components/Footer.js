import React from 'react';
import ZuriInternshipLogo from '../../assets/images/Zuri.Internship.png';
import I4GLogo from '../../assets/images/I4G.png';

const Footer = () => {
  return (
    <footer className="mt-8 md:mt-16 py-8 md:py-12 px-4 md:px-28">
      <div className="pt-[38px] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 border-t border-[#EAECF0]">
        <img src={ZuriInternshipLogo} alt="Zuri Internship" />
        <p className="text-base text-[#667085] font-normal">
          HNG Internship 9 Frontend Task
        </p>
        <img src={I4GLogo} alt="Ingressive for Good" />
      </div>
    </footer>
  );
};

export default Footer;
