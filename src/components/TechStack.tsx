import Image from 'next/image';
import React from 'react';
import { Heading } from './Heading';
import { twMerge } from 'tailwind-merge';
import { FaCss3, FaGithub } from 'react-icons/fa6';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { RiJavascriptLine, RiNextjsLine } from 'react-icons/ri';
import { TiHtml5 } from 'react-icons/ti';
import {
  SiExpress,
  SiPostman,
  SiVercel,
  SiCloudinary,
  SiStackblitz,
  SiCodesandbox,
  SiAppwrite,
  SiRedux,
  SiMongodb,
  SiNetlify,
  SiRender,
  SiMysql,
  SiPrisma
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import { IoGitCompareOutline } from 'react-icons/io5';
import { BorderBeam } from './magicui/border-beam';

export const TechStack = () => {
  const personalSkillset = [
    {
      name: 'HTML5',
      icon: <TiHtml5 className='text-red-500' />
    },
    {
      name: 'CSS3',
      icon: <FaCss3 className='text-blue-500' />
    },
    {
      name: 'JavaScript',
      icon: <RiJavascriptLine className='text-yellow-500' />
    },
    {
      name: 'React.js',
      icon: <FaReact className='text-blue-400' />
    },
    {
      name: 'Next.js',
      icon: <RiNextjsLine className='text-gray-400' />
    },
    {
      name: 'Redux',
      icon: <SiRedux className='text-purple-500' />
    },
    {
      name: 'Prisma',
      icon: <SiPrisma className='text-blue-500' />
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs className='text-green-500' />
    },
    {
      name: 'Express.js',
      icon: <SiExpress className='text-gray-400' />
    },
    {
      name: 'MongoDB',
      icon: <SiMongodb className='text-green-500' />
    },
    {
      name: 'MySQL',
      icon: <SiMysql className='text-blue-500' />
    },
    {
      name: 'Vercel',
      icon: <SiVercel className='text-gray-400' />
    },
    {
      name: 'Netlify',
      icon: <SiNetlify className='text-green-500' />
    },
    {
      name: 'Render',
      icon: <SiRender className='text-gray-400' />
    },
    {
      name: 'VS Code',
      icon: <TbBrandVscode className='text-blue-500' />
    },
    {
      name: 'Git',
      icon: <IoGitCompareOutline className='text-red-400' />
    },
    {
      name: 'GitHub',
      icon: <FaGithub className='text-gray-400' />
    },
    {
      name: 'Postman',
      icon: <SiPostman className='text-orange-500' />
    },
    {
      name: 'Cloudinary',
      icon: <SiCloudinary className='text-blue-500' />
    },
    {
      name: 'Stackblitz',
      icon: <SiStackblitz className='text-blue-400' />
    },
    {
      name: 'Codesandbox',
      icon: <SiCodesandbox className='text-gray-400' />
    },
    {
      name: 'Appwrite',
      icon: <SiAppwrite className='text-red-400' />
    }
  ];
  return (
    <div className='mt-10 mb-10'>
      <div className=' mb-10 relative flex h-8 w-fit flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl px-1'>
        <span className='text-lg text-gray-500 '>Tech</span>
        <BorderBeam size={50} duration={12} delay={9} />
      </div>
      <div className='w-full flex flex-row flex-wrap gap-3 text-gray-400 items-center justify-center'>
        {personalSkillset.map((skill, index) => (
          <div
            key={index}
            className='skill-icon flex flex-col items-center gap-1 justify-between'
          >
            <ul className='skill-icon text-7xl'>{skill.icon}</ul>
            <h1>{skill.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

