import React from 'react'
import { FaCode, FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-teal/80 font-poppins pt-8">
      <div className="container">
        <div className="xxs:flex items-center justify-between md:gap-8">
          <div className="w-full xxs:w-1/2">
            <h2 className="text-xl leading-10 xxs:text-sm mb-5 md:text-[2rem]">
              <FaCode /> Source Code Labs
            </h2>
            <a
              href="https://github.com/divin3circle"
              rel="noreferrer"
              target="_blank"
            >
              <button className="bg-teal xxs:text-sm text-brightWhite font-semibold flex items-center gap-2 hover:bg-brightWhite hover:text-teal hover:scale-105 ease-in duration-150 py-2 px-4 rounded-e-lg xxs:hidden">
                Check out Github{" "}
                <FaGithub className="inline xxs:text-sm xxs:pb-0.5" />
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-brightWhite leading-7 mt-7 xxs:mt-0 xxs:text-sm">
              Source Code Labs. Your best solution for designing, hosting and
              maintaining your websites.
            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-brightWhite xxs:text-sm font-semibold">
                Socials
              </span>
              <span className="w-[35px] h-[35px] bg-teal/40 p-1 rounded-[50px] cursor-pointer flex items-center justify-center text-2xl">
                <a
                  href="https://github.com/divin3circle"
                  className=" text-brightWhite font-semibold"
                >
                  <FaGithub className="hover:scale-90 ease-in duration-150" />
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-teal/40 p-1 rounded-[50px] cursor-pointer flex items-center justify-center text-2xl">
                <a
                  href="https://twitter.com/Silasabel5"
                  className=" text-brightWhite font-semibold"
                >
                  <FaTwitter className="hover:scale-90 ease-in duration-150" />
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-teal/40 p-1 rounded-[50px] cursor-pointer flex items-center justify-center text-2xl">
                <a
                  href="https://www.instagram.com/sylus.abel/"
                  className=" text-brightWhite font-semibold"
                >
                  <FaInstagram className="hover:scale-90 ease-in duration-150" />
                </a>
              </span>
              <span className=" xxs:hidden w-[35px] h-[35px] bg-teal/40 p-1 rounded-[50px] cursor-pointer flex items-center justify-center text-2xl">
                <a
                  href="https://www.facebook.com/sylus.abel"
                  className=" text-brightWhite font-semibold"
                >
                  <FaFacebook className="hover:scale-90 ease-in duration-150" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="xxs:text-xs py-3 mt-14">
        <div className="container">
          <div className="flex justify-between text-white/40">
            <p className="font-semibold">Source Code Labs Inc</p>
            <p>
              Copyright ©2023 <a href="#">Privacy Policy</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer