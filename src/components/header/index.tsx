import React from "react";

import { Logo } from "@components";

export const Header: React.FC = () => {
  return (
    <div className="flex fixed bg-transparent px-10 py-10 w-full text-white ">
      <div className="text-9xl w-2/5 ">601Six</div>
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
    <div className="text-3xl">
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
    <div className="flex">
      <p>Contact</p>
    </div>
  )
}

