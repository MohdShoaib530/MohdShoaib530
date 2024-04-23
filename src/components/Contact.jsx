/* eslint-disable no-unused-vars */
import gmailGif from "../Assets/Email.gif";
import emailjs from "@emailjs/browser"
import { useState } from 'react';
import { useForm } from "react-hook-form"

const Contact = () => {
  const { register, handleSubmit , reset} = useForm()
  const [errors, setError] = useState('')
  const scrollPageUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const contact = async (data) => {
    setError('');
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      console.log(result.text);
      alert('Message sent successfully');
      reset(); // Reset the form after successful submission
      scrollPageUp();
    } catch (error) {
      console.error(error.text);
      setError('Message not sent');
      alert(errors)
      reset()
      scrollPageUp()
    }
  };
  return (
    <>
      <div className="text-center mb-14">
        <button className="text-center text-2xl  btn btn-sm dark:btn-outline btn-outline bg-gray-700">
          Let&lsquo;s connect
        </button>
      </div>
      <section className="contact-section dark:bg-slate-800 bg-gray-200 w-full flex flex-col lg:flex-row items-center justify-evenly">
        <div className="hidden lg:flex">
          <img src={gmailGif} alt="Email" />
        </div>
        <div className="contact-form flex flex-col justify-center items-center border border-gray-500 p-7 rounded-xl w-fit lg:w-5/12">
          <form
            onSubmit={handleSubmit(contact)}
            className="contact flex flex-col gap-5 w-full"
          >
            <div className="flex flex-row gap-1">
              <label className="input input-bordered flex items-center gap-2 w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70 bg-transparent"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  {...register("username", {
                    required: true,
                  })}
                  type="text"
                  className="grow"
                  placeholder="Username"
                />
              </label>
            </div>
            <div className="flex flex-row gap-1">
              <label className="w-full input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    validate: {
                      matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                  })}
                />
              </label>
            </div>
            <div className="w-full flex flex-row gap-1">
              <textarea
                className="textarea textarea-bordered h-20 w-full"
                placeholder="Message"
                {...register("message", {
                  required: true,
                })}
                minLength={10}
              ></textarea>
            </div>
            <button
              className="submit-btn btn-sm btn dark:btn-outline btn-outline bg-gray-700"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
