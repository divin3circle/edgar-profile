import law1 from "../../assets/images/law1.svg";
import law2 from "../../assets/images/law2.svg";
import law3 from "../../assets/images/family.svg";
import law4 from "../../assets/images/lawyer.svg";

const Certifications = () => {
  return (
    <section id="certifications">
      <div className="container lg:pt-5 font-poppins">
        <div className="text-center">
          <h2 className="text-teal text-[2.4rem] font-bold mb-5">
            Recognitions
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-black xxs:text-sm text-[16px] leading-7">
            My experience in the field has earned mr several recognitions across
            the board from Civil Law firms, Personal Injury, Commercial Law
            firms among many others. Here are some of my prestigious recognition
            in the industry.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:px-0">
            <div className="relative text-gray-700  antialiased text-sm font-semibold">
              {/**vertical separator */}
              <div className="hidden absolute w-1 sm:block bg-teal h-full left-1/2 transform-translate-x-1/2"></div>

              {/**left certification */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1500"
                        className="bg-brightWhite p-4 rounded shadow-lg group hover:bg-teal cursor-pointer ease-in duration-150"
                      >
                        <h2 className="mb-3 xxs:text-lg font-[700] group-hover:text-brightWhite group-hover:font-[600]  text-2xl">
                          Advocate of the High Court of Kenya
                        </h2>
                        <p className="text-[15px] text-black group-hover:text-brightWhite group-hover:font-[500] leading-7">
                          An advocate of the High Court of Kenya having meet the
                          legal requirements necessary to practice law in Kenya
                          at the High Court Level.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="xxs:hidden rounded-full border-1 w-10 h-10 absolute  left-1/2 transform -translate-x-1/2 -translate-y-0 p-[0.5rem]
                   md:flex items-center justify-center bg-teal"
                  >
                    <figure>
                      <img src={law1} alt="Kenya High Court" />
                    </figure>
                  </div>
                </div>
              </div>

              {/**right certification */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-brightWhite p-4 rounded shadow-lg group hover:bg-teal cursor-pointer ease-in duration-150"
                      >
                        <h2 className="mb-3 xxs:text-lg font-[700] group-hover:text-brightWhite group-hover:font-[600]  text-2xl">
                          Member of The Law Society of Kenya
                        </h2>
                        <p className="text-[15px] text-black group-hover:text-brightWhite group-hover:font-[500] leading-7">
                          The LSK is a professional board the represents and
                          regulates the legal profession in Kenya.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="xxs:hidden rounded-full border-1 w-10 h-10 absolute  left-1/2 transform -translate-x-1/2 -translate-y-0 p-[0.5rem]
                   md:flex items-center justify-center bg-teal"
                  >
                    <figure>
                      <img src={law2} alt="Kenya High Court" />
                    </figure>
                  </div>
                </div>
              </div>

              {/**left2 certification */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-brightWhite p-4 rounded shadow-lg group hover:bg-teal cursor-pointer ease-in duration-150"
                      >
                        <h2 className="xxs:text-lg mb-3 font-[700] group-hover:text-brightWhite group-hover:font-[600]  text-2xl">
                          Notary Public
                        </h2>
                        <p className="text-[15px] text-black group-hover:text-brightWhite group-hover:font-[500] leading-7">
                          A professional lawyer appointed by the Attorney
                          General with the authority to authenticate and certify
                          documents.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="xxs:hidden rounded-full border-1 w-10 h-10 absolute  left-1/2 transform -translate-x-1/2 -translate-y-0 p-[0.5rem]
                  md:flex items-center justify-center bg-teal"
                  >
                    <figure>
                      <img src={law3} alt="Kenya High Court" />
                    </figure>
                  </div>
                </div>
              </div>

              {/**right2 certification */}
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="100"
                        data-aos-duration="1400"
                        className="bg-brightWhite p-4 rounded shadow-lg group hover:bg-teal cursor-pointer ease-in duration-150"
                      >
                        <h2 className="mb-3 font-[700] group-hover:text-brightWhite group-hover:font-[600] xxs:text-lg text-2xl">
                          Commissioner of Oaths
                        </h2>
                        <p className="text-[15px] text-black group-hover:text-brightWhite group-hover:font-[500] leading-7">
                          A professional lawyer appointed by the Chief Justice
                          of Kenya, with the authority to administer oaths and
                          take affirmations and affidavits.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="xxs:hidden rounded-full border-1 w-10 h-10 absolute  left-1/2 transform -translate-x-1/2 -translate-y-0 p-[0.5rem]
                   md:flex items-center justify-center bg-teal"
                  >
                    <figure>
                      <img src={law4} alt="Kenya High Court" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
