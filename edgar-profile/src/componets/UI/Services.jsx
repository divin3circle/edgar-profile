import { useEffect, useState } from "react";
import data from "../../assets/data/portfolioData";
/* import portfolios from "../../assets/data/portfolioData"; */
import Modal from "./Modal";

const Services = () => {
  const [nextItems, setNextItems] = useState(6);
  const [services, setServices] = useState(data);
  const [selectTab, setSelectTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 2);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  useEffect(() => {
    if (selectTab === "all") {
      setServices(data);
    } else {
      const filteredServices = data.filter(
        (item) => item.category.toLowerCase() === selectTab.toLowerCase()
      );
      setServices(filteredServices);
      console.log(filteredServices);
      console.log(selectTab);
    }
  }, [selectTab]);

  return (
    <section className="" id="services">
      <div className="container">
        <div className="flex items-center justify-between flex-wrap">
          <div className="mb-7 sm:mb-0">
            <h3 className="text-teal text-[2.4rem] font-bold xxs:mb-0 mb-4 xxs:text-2xl">
              Law Services Available
            </h3>
          </div>

          <div className="xxs:flex-wrap xxs:text-sm flex gap-3 mb-3">
            <button
              onClick={() => setSelectTab("all")}
              className="border-2 border-solid border-teal py-2 px-4 rounded-lg hover:bg-teal hover:text-white ease-in duration-150 hover:scale-90"
            >
              All
            </button>
            <button
              onClick={() => setSelectTab("civil")}
              className="border-2 border-solid border-teal py-2 px-4 rounded-lg hover:bg-teal hover:text-white ease-in duration-150 hover:scale-90"
            >
              Civil Law
            </button>
            <button
              onClick={() => setSelectTab("family")}
              className="border-2 border-solid border-teal py-2 px-4 rounded-lg hover:bg-teal hover:text-white ease-in duration-150 hover:scale-90"
            >
              Individual & Family Law
            </button>
            <button
              onClick={() => setSelectTab("business")}
              className="border-2 border-solid border-teal py-2 px-4 rounded-lg hover:bg-teal hover:text-white ease-in duration-150 hover:scale-90"
            >
              Commercial & Business Law{" "}
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          {services?.slice(0, nextItems)?.map((service, index) => (
            <div
              key={index}
              data-aos="fade-zoom-in"
              data-aos-delay="50"
              data-aos-duration="1000"
              className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]"
            >
              <figure>
                <img
                  className="rounded-lg"
                  src={service.imgUrl}
                  alt={service.title}
                />
              </figure>
              <div className="w-full h-full bg-teal bg-opacity-60 absolute top-0 left-0 z-[50] hidden group-hover:block">
                <div className="w-full h-full flex items-center justify-center gap-2 ">
                  <button
                    className="text-brightWhite hover:bg-teal px-4 py-2 border-2 border-teal rounded-lg hover:scale-90 ease-in duration-150 font-semibold"
                    onClick={() => showModalHandler(service.id)}
                  >
                    More Details
                  </button>
                  <h5 className="font-bold text-brightWhite">
                    {service.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 ">
          {nextItems < data.length && data.length > 6 && (
            <button
              className="hover:bg-teal px-4 py-2 border-2 border-teal rounded-lg hover:text-brightWhite hover:scale-90 ease-in duration-150 font-semibold"
              onClick={loadMoreHandler}
            >
              Load More
            </button>
          )}
        </div>
      </div>

      {showModal && <Modal activeID={activeID} setShowModal={setShowModal} />}
    </section>
  );
};

export default Services;
