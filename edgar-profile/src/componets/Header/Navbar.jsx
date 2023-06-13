import { FaAlignJustify, FaWeixin } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center font-poppins">
      <div className="container">
        <div className="flex items-center justify-between">
          {/**Logo Design */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-teal text-white text-[18px] font-bold font-nunito rounded-full flex items-center justify-center">
              E
            </span>
            <div className="leading-[12px]">
              <h2 className="text-xl font-[700]">Advocate Edgar Wambilianga</h2>
              <p className="text-[18px] font-[500] xxs:hidden md:block">
                Wambilianga Majani Associates
              </p>
            </div>
          </div>
          {/**End of Logo Design */}
          {/**Navbar */}
          <div className="menu">
            <ul className="flex items-center gap-10 xxs:hidden">
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-teal ease-in-out duration-150 "
                  href="#about"
                >
                  about
                </a>
              </li>
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-teal ease-in-out duration-150 "
                  href="#certifications"
                >
                  certifications
                </a>
              </li>
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-teal ease-in-out duration-150 "
                  href="#services"
                >
                  services
                </a>
              </li>
              <li>
                <a
                  className="font-semibold hover:border-b-2 border-teal ease-in-out duration-150 "
                  href="#testimonials"
                >
                  testimonials
                </a>
              </li>
            </ul>
          </div>
          {/** End Navbar */}

          {/**right menu */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 border-2 border-teal bg-darkGrey text-teal rounded-[8px] py-2 px-2 max-h-[40px] hover:bg-teal hover:text-darkGrey hover:font-[500] ease-in duration-200 xxs:mr-4">
              <FaWeixin className="text-2xl" />
              <a href="https://wa.me/254721219452" className="xxs:hidden">
                Let's Chat
              </a>
            </button>
            <p className="absolute text-2xl text-teal md:hidden cursor-pointer right-0 xxs:m-2 hidden">
              <FaAlignJustify />
            </p>
          </div>

          {/**right menu end*/}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
