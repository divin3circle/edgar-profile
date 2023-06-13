import {
  FaArchway,
  FaEnvelope,
  FaFacebook,
  FaFeather,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import hero from "../../assets/images/hero1.jpg";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="pt-0 " id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/**left hero content */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-teal text-[18px] font-semibold"
            >
              Hello,
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-teal text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5 font-semibold "
            >
              I'm Advocate Edgar Wambilianga
              <br />
              General Law Practitioner{" "}
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="font-[500] flex items-center gap-2 hover:bg-teal hover:text-white ease-in duration-200 py-2 px-4 rounded-lg border-2  border-teal ">
                  <FaEnvelope />
                  Hire me
                </button>
              </a>
              <a href="#contact">
                <button className="font-[500] flex items-center gap-2 hover:bg-teal hover:text-white ease-in duration-200 py-2 px-4 rounded-lg border-2  border-teal ">
                  <FaFeather />
                  See Services
                </button>
              </a>
            </div>

            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2   text-[15px] leading-7 sm:pl-14 sm:pr-10 mt-14"
            >
              <FaArchway className=" text-7xl mr-4" />
              Introducing a new era of Legal Advocacy-Your Personal Legal
              Champion. As a general practitioner, I offer you dedicated and
              personalized legal representation that puts your needs first. With
              a deep understanding of the law and passion for justice, I'm
              committed to fighting for your rights and achieving the best
              possible outcome fo your case.
            </p>
            <div className="flex items-center gap-4 mt-14">
              <span className="text-teal text-[18px] font-[600]"></span>
              <span className="text-teal text-3xl font-[600]">
                <a href="https://www.linkedin.com/in/edga-sichangi-98a082143/">
                  <FaLinkedin />
                </a>
              </span>
              <span className="text-teal text-3xl font-[600]">
                <a href="https://www.linkedin.com/in/edga-sichangi-98a082143/">
                  <FaInstagram />
                </a>
              </span>
              <span className="text-teal text-3xl font-[600]">
                <a href="https://twitter.com/edgunners">
                  <FaFacebook />
                </a>
              </span>
              <span className="text-teal text-3xl font-[600]">
                <a href="https://twitter.com/edgunners">
                  <FaTwitter />
                </a>
              </span>
            </div>
          </div>
          {/** end of left hero content */}
          {/**hero image && data */}
          <div
            className="basis-1/3 mt-10 sm:mt-o"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <figure className="flex items-center justify-center">
              <img src={hero} alt="Attorney Edgar" className="rounded-lg" />
            </figure>
          </div>
          <div className="md:basis-1/5  flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-teal font-[700] text-[32px]">
                <CountUp start={0} end={15} duration={3} suffix="+" />
              </h2>
              <h4 className="text-teal font-[700] text-[16px]">
                Years of experience
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-teal font-[700] text-[32px]">
                <CountUp start={0} end={109} duration={3} suffix="+" />
              </h2>
              <h4 className="text-teal font-[700] text-[16px]">
                Cases won in 3 years
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-teal font-[700] text-[32px]">
                <CountUp start={0} end={96} duration={3} suffix="%" />
              </h2>
              <h4 className="text-teal font-[700] text-[16px]">
                Case success rate
              </h4>
            </div>
          </div>
          {/* end of hero image && data */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
