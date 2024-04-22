const Contact = () => {
  return (
    <section className="contact-section dark:bg-slate-800 bg-gray-200 w-full flex flex-col items-center">
      <div className="mt-2 mb-6">
        <button className="text-center text-2xl  btn btn-sm dark:btn-outline">
          Let&lsquo;s connect
        </button>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-10 ">
        <div className="mr-1 hidden lg:flex">
          <img src="./src/Assets/Email.gif" alt="Email" />
        </div>
        <div className="contact-form flex flex-col justify-center items-center   border border-gray-500 p-7 rounded-xl">
          <form className="contact flex flex-col gap-5" name="contact">
            <div className='flex flex-row gap-1'>
            <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input type="text" className="grow" placeholder="Username" />
</label>
            </div>
            <div className='flex flex-row gap-1'>
            <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
            </div>
            <div className='flex flex-row gap-1'> 
            <textarea className="textarea textarea-bordered h-20 w-full" placeholder="Message"></textarea>
            </div>
            <button className="submit-btn btn-sm btn" type="submit">
              <i className="fas fa-paper-plane"></i> &nbsp; Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
