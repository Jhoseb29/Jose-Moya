import React from "react";
import {useTheme} from "../context/ThemeProvider";


const Contact = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <div
      name="contact"
      className="w-full h-screen pt-36 p-4"
      style={{ backgroundColor: theme.background, color: theme.textColor }}
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/26eb22cb-5399-46d0-9c35-9fab746f861e"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              required
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 border-2 border-black bg-transparent rounded-md text-black "
            />
            <input
              required
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 border-2 border-black bg-transparent rounded-md text-black"
            />
            <textarea
              required
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 border-2 border-black bg-transparent rounded-md text-black"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
