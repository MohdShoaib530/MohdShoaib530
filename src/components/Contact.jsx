/* eslint-disable no-unused-vars */
import gmailGif from "../Assets/Email.gif";
import emailjs from "@emailjs/browser"
import { useState } from 'react';
import toast from 'react-hot-toast';


const Contact = () => {
  const scrollPageUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission if there are errors
  
    function isEmail(string){
      return string.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)
    }
    // Form validation checks
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required");
      return; // Exit the function to prevent form submission
    }
  
    if (formData.name.length < 3) {
      toast.error(`Name must be at least 3 characters`);
      return; // Exit the function to prevent form submission
    }
  
    if(!isEmail(formData.email)) {
      return toast.error(`Please enter a valid email`);
      
  }
    if (formData.message.length < 10) {
      toast.error(`Message should be at least 20 characters`);
      return; // Exit the function to prevent form submission
    }
  
    // If all validations pass, proceed with sending the email
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );
  
      console.log(result.text);
      toast.success("Message sent successfully");
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      scrollPageUp();
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Message not sent");
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      scrollPageUp();
    }
  };
  
  return (
    <>
      <div className="text-center mb-14">
        <button className="text-center text-2xl  btn btn-sm btn-outline dark:text-gray-300 text-gray-950 0 relative ease-out hover:ease-in transition duration-300 transform hover:scale-110 ">
          Let&lsquo;s connect
        </button>
      </div>
      <section className="contact-section dark:bg-slate-800 bg-gray-200 w-full flex flex-col lg:flex-row items-center justify-evenly">
        <div className="hidden lg:flex">
          <img src={gmailGif} alt="Email" />
        </div>
        <div className="contact-form flex flex-col justify-center items-center border border-gray-500 p-7 rounded-xl w-fit lg:w-5/12">
          <form
            onSubmit={handleSubmit}
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
                 value={formData.name}
                  onChange={handleChange}
                  type="text"
                  className="grow"
                  placeholder="Username"
                  name='name'
                  id='name'
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
                  value={formData.email}
                  type="text"
                  className="grow"
                  placeholder="Email"
                  name='email'
                  id='email'
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="w-full flex flex-row gap-1">
              <textarea
                value={formData.message}
                className="textarea textarea-bordered h-20 w-full"
                placeholder="Message"
                onChange={handleChange}
                name='message'
                id='message'
              ></textarea>
            </div>
            <button
              className="submit-btn btn btn-sm btn-outline dark:text-gray-300 text-gray-950 0 relative ease-out hover:ease-in transition duration-300 transform hover:scale-110 "
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
