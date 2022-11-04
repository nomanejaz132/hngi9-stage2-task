import React from 'react';
import ProfileImg from '../../assets/images/profile__img.jpg';
import { CameraIcon } from './Icons';

const ProfileImage = () => {
  return (
    <div className="relative w-fit h-fit cursor-pointer focus:ring focus:ring-[#F2F4F7] focus:rounded-full">
      <span class="opacity-0 hover:opacity-100 transition-opacity absolute bg-[rgba(52,64,84,0.75)] rounded-full inset-0">
        <CameraIcon />
      </span>
      <img
        src={ProfileImg}
        alt="User Profile Img"
        id="profile__img"
        width="88px"
        height="88px"
        className="rounded-full"
      />
    </div>
  );
};

export default ProfileImage;
