import React, { useState } from "react";
import Button from "./components/Button";
import CheckBox from "./components/CheckBox";
import Footer from "./components/Footer";
import Input from "./components/Input";
import TextArea from "./components/TextArea";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const [fNameError, setFNameError] = useState("");
  const [lNameError, setlNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [checkboxError, setCheckboxError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const formValidation = () => {
    if (firstName.length === 0) {
      setFNameError("Please enter your First Name");
    } else {
      setFNameError("");
    }
    if (lastName.length === 0) {
      setlNameError("Please enter your Last Name");
    } else {
      setlNameError("");
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
    if (message.length === 0) {
      setMessageError("Please enter a message");
    } else {
      setMessageError("");
    }
    if (checkbox === false) {
      setCheckboxError("Please select this to provide your data ");
    } else {
      setCheckboxError("");
    }
  };

  return (
    <div>
      <main className="max-w-6xl mx-auto py-16 md:pt-16 md:pb-24">
        <div className="max-w-[720px] mx-auto px-4 md:px-0">
          <div className="flex flex-col gap-5">
            <h2 className="text-4xl text-[#101828] font-inter font-semibold leading-[44px]">
              Contact Me
            </h2>
            <p className="text-lg md:text-xl text-[#475467] font-inter font-normal leading-[30px]">
              Hi there, contact me to ask me about anything you have in mind.
            </p>
          </div>
          <form className="mt-12" onSubmit={handleSubmit}>
            <div className="w-full flex flex-col md:flex-row gap-6">
              <Input
                htmlFor="first_name"
                label="First Name"
                type="text"
                id="first_name"
                placeholder="Enter your first name"
                error={fNameError}
                value={firstName}
                setValue={setFirstName}
              />
              <Input
                htmlFor="last_name"
                label="Last Name"
                type="text"
                id="last_name"
                placeholder="Enter your last name"
                error={lNameError}
                value={lastName}
                setValue={setLastName}
              />
            </div>
            <div className="mt-6">
              <Input
                htmlFor="email"
                label="Email"
                type="email"
                id="email"
                placeholder="yourname@email.com"
                error={emailError}
                value={email}
                setValue={setEmail}
              />
            </div>
            <div className="mt-6">
              <TextArea
                htmlFor="message"
                label="Message"
                id="message"
                placeholder="Send me a message and I'll reply you as soon as possible..."
                error={messageError}
                value={message}
                setValue={setMessage}
              />
            </div>
            <div className="mt-[26px]">
              <CheckBox
                checkbox={checkbox}
                setCheckbox={setCheckbox}
                error={checkboxError}
              />
            </div>
            <div className="mt-8">
              <Button onClick={formValidation} />
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
