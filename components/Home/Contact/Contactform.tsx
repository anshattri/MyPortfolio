"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contactform = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateId = 'template_qskf7xm';
    const serviceID = "service_ezwvymd";
    const publicKey = "FvlFjsma54958O0N_";
    const template = {
      from_name: fname,
      from_last: lname,
      from_email: email,
      regarding : selectedOption,
      to_name: "AnshAtrri",
      message: message,
    };

    emailjs
      .send(serviceID, templateId, template, publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setFname("");
        setLname("");
        setEmail("");
        setPhone("");
        setMessage("");
        setSelectedOption("");
        setStatusMessage("Your message has been sent successfully!");
      })
      .catch((error) => {
        console.log("Error sending email: ", error);
        setStatusMessage("There was an error sending your message. Please try again.");
      });
  };

  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold h-11">
        Let's work together!
      </h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iusto
        sint non officia amet vel debitis facilis rerum.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
            onChange={(e) => setFname(e.target.value)}
            value={fname}
          />

          <input
            type="text"
            placeholder="Last Name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
            onChange={(e) => setLname(e.target.value)}
            value={lname}
          />
        </div>

        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            placeholder="Email address"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>

        <div>
          <select
            className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-[3.5] rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="fullstack">Fullstack Development</option>
          </select>
        </div>

        <textarea
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-[3.5] rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          rows={7}
          placeholder="Messages"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>

        <div className="mt-4">
          <button
            className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full"
          >
            Send Message
          </button>
        </div>

        {/* Status Message */}
        {statusMessage && (
          <p className="mt-4 text-white text-lg">{statusMessage}</p>
        )}
      </form>
      </div>
  );
};

export default Contactform;
