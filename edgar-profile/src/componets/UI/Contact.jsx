import React from 'react'

const Contact = () => {
  return (
    <section id="#contact" className="pt-14">
      <div className="container">
        <h2 className="text-teal text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.801979302361!2d36.78769750981582!3d-1.293272435626817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMTcnMzUuOCJTIDM2wrA0NycyNS4wIkU!5e0!3m2!1sen!2ske!4v1686570710568!5m2!1sen!2ske"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-teal/40 lg:px-8 py-8">
            <form className="xxs:p-4 w-full">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none rounded-lg"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 focus:outline-none rounded-lg"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Law Service"
                  className="w-full p-3 focus:outline-none rounded-lg"
                />
              </div>
              <div className="mb-5">
                <textarea
                  rows={3}
                  type="text"
                  placeholder="Brief description"
                  className="w-full p-3 focus:outline-none rounded-lg"
                />
              </div>
              <button className="w-full p-3 focus:outline-none rounded-lg bg-teal text-white font-semibold hover:bg-brightWhite hover:text-teal text-center ease-in duration-150 ">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact