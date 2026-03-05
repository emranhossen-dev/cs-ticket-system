import React from "react";

const Footer = () => {
  return (
    <div className="text-white w-full bg-black pt-10 md:pt-20 pb-8">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-20">
          <div className="col-span-1 md:col-span-2">
            <h1 className="text-3xl md:text-2xl text-center md:text-left font-bold">CS - Ticket System</h1>
            <p className="text-xl md:text base text-justify my-3 mx-10 md:mx-0 text-[#A1A1AA] leading-relaxed">
              CS – Ticket System is a customer support management tool designed
              to handle issues, requests, and queries efficiently. It organizes
              customer complaints into tickets, each containing details like
              title, description, priority, status, and creation time. Agents
              can track, update, and resolve tickets systematically, ensuring no
              request is overlooked. The system improves communication between
              customers and support teams by centralizing interactions in one
              place.
            </p>
          </div>
          <div className="col-span-1 md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            <div className="w-full text-center md:text-left">
              <h1 className="text-2xl md:text-xl font-medium">Company</h1>
              <p className="text-xl md:text-base my-2 md:my-4 text-[#A1A1AA]">About Us</p>
              <p className="text-xl md:text-base my-2 md:my-4 text-[#A1A1AA]">
                Our Mission
              </p>
              <p className="text-xl md:text-base my-2 md:my-4 text-[#A1A1AA]">
                Contact Sales
              </p>
            </div>
            <div className="text-center md:text-left my-5 md:my-0">
              <h1 className="text-2xl md:text-xl font-medium">Services</h1>
              <p className="text-xl md:text-base my-2 md:my-4 text-[#A1A1AA]">
                Products & Services
              </p>
              <p className="text-xl md:text-base my-2 md:my-4 text-[#A1A1AA]">
                Customer Stories
              </p>
              <p className="text-xl md:text-base my-2 md:my-4 text-[#A1A1AA]">
                Download Apps
              </p>
            </div>
            <div className="text-center md:text-left my-5 md:my-0">
              <h1 className="text-2xl md:text-xl font-medium">Information</h1>
              <p className="text-xl md:text-base my-2 md:my-4 text-[#A1A1AA]">
                Privacy Policy
              </p>
              <p className="text-xl md:text-base my-2 md:my-4 text-[#A1A1AA]">
                Terms & Conditions
              </p>
              <p className="text-xl md:text-base my-2 md:my-4 text-[#A1A1AA]">Join Us</p>
            </div>
            <div className="text-center md:text-left my-5 md:my-0">
              <h1 className="text-2xl md:text-xl font-medium">Social Links</h1>
              <p className="text-xl md:text-base my-2 md:my-4 text-[#A1A1AA]">
                @CS - Ticket System
              </p>
              <p className="text-xl md:text-base my-2 md:my-4 text-[#A1A1AA]">
                @CS - Ticket System
              </p>
              <p className="text-xl md:text-base my-2 md:my-4 text-[#A1A1AA]">
                @CS - Ticket System
              </p>
              <p className="text-xl md:text-base my-2 md:my-4 text-[#A1A1AA]">
                support@cst.com
              </p>
            </div>
          </div>
        </div>
        <div className="border-t-[0.1px] border-[#726868] pt-5 mt-10 text-center">
          <p className="text-base font-normal">
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
