import React from "react";

const Footer = () => {
  return (
    <div className="bg-cyan-700 text-white pt-12 pb-6 mt-12">
      <div className="container mx-auto mt-26 mb-6 space-y-7">
        <div className="flex flex-col items-center text-center space-y-5">
          <h2 className="text-5xl font-bold ">KeenKeeper</h2>
          <h2 className="text-gray-300 ">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </h2>
        </div>
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-xl font-medium ">Social Links</h2>
          <div className="flex gap-5">
            <img className="cursor-pointer" src="/assets/facebook.png" alt="" />
            <img className="cursor-pointer" src="/assets/twitter.png" alt="" />
            <img
              className="cursor-pointer"
              src="/assets/instagram.png"
              alt=""
            />
          </div>
        </div>
        <div className="divider bg-gray-200 h-px mt-22 mb-8"></div>
        <div className="lg:flex space-y-5 lg:justify-between px-6">
          <div className="flex justify-center items-center text-center pt-4">
            <h2>© 2026 KeenKeeper. All rights reserved.</h2>
          </div>
          <div className="flex gap-5 justify-center items-center text-center">
            <h3>Privacy Policy</h3>
            <h3>Terms of Service</h3>
            <h2>Cookies</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
