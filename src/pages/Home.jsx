import { Link } from 'react-router-dom';
import { FaLinkedin,  FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";

const Home = () => {
  const socialMedia = [
    { name: 'LinkedIn', url: '', icon: <FaLinkedin /> },
    { name: 'GitHub', url: '', icon: <FaGithub /> },
    { name: 'Instagram', url: '', icon: <FaInstagram /> },
    { name: 'Gmail', url: '', icon: <BiLogoGmail /> },
    { name: 'Twitter', url: '', icon: <FaTwitter /> },
  ];

  return (
    <div className="flex flex-col items-center justify-center lg:justify-between lg:flex-row w-full mt-10 mb-10">
      <div className='flex flex-col justify-center items-center w-7/12'>
        <h1 className='text-4xl text-gray-100'>Hi There! <br /> I&apos;M Mohammad Shoaib</h1>
        <h1 className='animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-2 text-5xl text-white font-bold ease-linear '>MERN Stack Developer</h1>
      </div>
      <ul className='hidden lg:flex flex-col gap-y-7 pr-5 '>
        {socialMedia.map((social, index) => (
          <li key={index}>
            <Link to={social.url} className='text-3xl hover:text-gray-200'>{social.icon}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home;
