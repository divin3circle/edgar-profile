import portfolios from "../../assets/data/portfolioData";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);

  return (
    <div className="font-poppins w-full h-full fixed top-0 left-0 z-10 bg-teal/60 ">
      <div className="max-w-[600px] absolute top-1/2 left-1/2 z-20 bg-brightWhite rounded-lg transform -translate-x-1/2 -translate-y-1/2 p-5 ">
        <div className="flex justify-center items-center">
          <figure>
            <img
              src={portfolio.imgUrl}
              alt={portfolio.title}
              className="rounded-lg"
            />
          </figure>
        </div>
        <div>
          <h2 className="xxs:text-sm text-2xl text-center text-teal font-semibold xxs:my-2 my-5">
            {portfolio.title}
          </h2>
          <p className="leading-7 xxs:leading-4 xxs:text-xs">{portfolio.description}</p>
          <div className="mt-5 flex items-center gap-3 flex-wrap ">
            <h4 className="text-teal text-[18px] text-[700] text-center">
              Skill set:
            </h4>
            {portfolio.skills.map((skill, index) => (
              <span
                className="bg-gray-200 py-1 px-2 font-semibold rounded-md cursor-pointer text-sm"
                key={index}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <button onClick={() => setShowModal(false)} className=" xxs:text-sm w-[1.8rem] h-[1.8rem] bg-brightWhite absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-s-md leading-0 cursor-pointer font-bold bg-teal/60 p-2 border-2 border-teal/60 hover:bg-brightWhite hover:text-teal ease-in duration-150">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
