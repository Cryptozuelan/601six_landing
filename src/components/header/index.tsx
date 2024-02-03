import React from "react";

import { Logo } from "@components";

export const Header: React.FC = () => {
  return (
    <div className="flex fixed bg-transparent px-3 py-3 w-full text-white ">
      <div className="text-8xl z-50 italic w-2/5 ">601Six</div>
      <div className="flex justify-evenly  w-3/5">
        <CurrentHour/>
        <Options/>
        <ContactCTAHeader/>

      </div>
    </div>
  );
};

const CurrentHour = () => {
  return (
    <div className="text-1xl font-thin">
      Lecheria, Venezuela  {"{"}  {new Date().toLocaleTimeString()} {"}"}
    </div>
  )
}

const Options = () => {
  return (
    <div className="flex text-1xl">
      <div>Work</div>,
      <div>Services</div>,
      <div>Archives</div>
    </div>
  )
}

const ContactCTAHeader = () => {
  return (
    <div className="flex text-1xl font-thin">
      <p>Contact</p>
    </div>
  )
}

