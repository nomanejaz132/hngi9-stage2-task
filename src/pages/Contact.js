import React, { useState } from 'react';
import Button from './components/Button';
import CheckBox from './components/CheckBox';
import Footer from './components/Footer';
import Input from './components/Input';
import TextArea from './components/TextArea';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [checkbox, setCheckbox] = useState(false);

  const [firstNError, setFirstNError] = useState('');
  const [lastNError, setLastNError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validate = () => {
    const errors = {};
    if (firstName === '') errors.firstName = 'Please enter a first name';

    if (lastName === '') errors.lastName = 'Please enter a last name';

    if (email === '') errors.email = 'Please enter a valid email';

    if (message === '') errors.message = 'Please write a message here';

    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (errors) {
      setFirstNError(errors.firstName);
      setLastNError(errors.lastName);
      setEmailError(errors.email);
      setMessageError(errors.message);
    } else {
      setFirstNError('');
      setLastNError('');
      setEmailError('');
      setMessageError('');
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
                value={firstName}
                setValue={setFirstName}
                error={firstNError}
              />
              <Input
                htmlFor="last_name"
                label="Last Name"
                type="text"
                id="last_name"
                placeholder="Enter your last name"
                value={lastName}
                setValue={setLastName}
                error={lastNError}
              />
            </div>
            <div className="mt-6">
              <Input
                htmlFor="email"
                label="Email"
                type="email"
                id="email"
                placeholder="yourname@email.com"
                value={email}
                setValue={setEmail}
                error={emailError}
              />
            </div>
            <div className="mt-6">
              <TextArea
                htmlFor="message"
                label="Message"
                id="message"
                placeholder="Send me a message and I'll reply you as soon as possible..."
                value={message}
                setValue={setMessage}
                error={messageError}
              />
            </div>
            <div className="mt-[26px]">
              <CheckBox checkbox={checkbox} setCheckbox={setCheckbox} />
            </div>
            <div className="mt-8">
              <Button />
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
