import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="navbar bg-white text-black">
        <div className="w-11/12 mx-auto flex items-center justify-between md:justify-start px-4">
          <div className="flex items-center gap-3 md:w-1/2">
            <button
              className="btn btn-ghost border-0 shadow-xs bg-white text-black md:hidden font-bold p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
            <h2 className="text-base md:text-2xl font-bold">
              CS — Ticket System
            </h2>
          </div>

          <div className="flex items-center gap-6 md:w-1/2 justify-end">
            <div className="gap-6 hidden md:flex">
              <a href="#">Home</a>
              <a href="#">FAQ</a>
              <a href="#">Changelog</a>
              <a href="#">Blog</a>
              <a href="#">Download</a>
              <a href="#">Contact</a>
            </div>
            <button
              className="btn border-none flex items-center gap-2 text-white px-4 py-2 shadow-md text-sm md:text-base"
              style={{
                background: "linear-gradient(to right, #632EE3, #9F62F2)",
              }}
            >
              <span className="text-lg">+</span>
              <span>New Ticket</span>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-4 z-50 w-fit min-w-48 p-5 rounded-md bg-white text-black shadow-sm md:hidden">
          <div className="flex flex-col gap-3">
            <a href="#">Home</a>
            <a href="#">FAQ</a>
            <a href="#">Changelog</a>
            <a href="#">Blog</a>
            <a href="#">Download</a>
            <a href="#">Contact</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
