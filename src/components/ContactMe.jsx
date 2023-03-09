import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_73yukw7',
        'template_o5knkj9',
        form.current,
        'Lvr2bSHTsIAIrKIho'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactForm">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="font-poppins text-white flexCenter text-white font-bold ss:text-[36px] text-[24px] mt-10">
            Contact Me
          </h1>
          <p className="mx-auto leading-relaxed ss:text-[20px] text-[12px] text-white">
            You can reach out to me by filling out the form below
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-white">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-white">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  value="Send"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="flex flex-col w-full ss:text-[20px] text-[12px] text-white py-10">
          <div className="flex-1 text-center">
            <p>Or you can reach me at</p>
          </div>
          <div className="flex items-center justify-center">
            <table>
              <tr>
                <td>Whatsapp number</td>
                <td>: +61435448690</td>
              </tr>
              <tr>
                <td>E-mail address</td>
                <td>: andarulinggar23@gmail.com</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
