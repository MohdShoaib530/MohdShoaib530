'use client';
import { Paragraph } from '@/components/Paragraph';
import Image from 'next/image';
import todo1 from '../../public/images/todo1.png';
import msd from '../../public/images/msd.jpeg';
import msd2 from '../../public/images/msd2.jpg';
import skillsmaster from '../../public/images/skillsmaster1.png';
import { WobbleCard } from './ui/wobble-card';
import { Heading } from "@/components/Heading";

export default function About() {
  const imageAbout = [todo1, msd, skillsmaster];
  return (
    <div className=''>
      <div className='max-w-4xl lg:w-5/6 w-full text-xl md:text-2xl lg:text-3xl'>
        <Paragraph className=' mt-4'>
          Hello, I&apos;m Mohd Shoaib, a passionate full stack web developer
          based in Uttar Pradesh, India.
        </Paragraph>
        <Paragraph className=' mt-4 mb-8'>
          I specialize in frontend development with HTML5, CSS3, JavaScript,
          React.js, and Tailwind CSS, and backend development with Node.js,
          Express.js, and MongoDB. While I&apos;m still gaining experience in Next.js and deploying applications. I have the skills to deploy both frontend and backend applications and use Git and GitHub for version control.
        </Paragraph>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full'>
        <WobbleCard
          containerClassName='col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]'
          className=''
        >
          
          <Image
            src={msd2}
            width={450}
            height={200}
            alt='linear demo image'
            className='absolute -right-4 lg:-right-[15%] filter object-contai rounded-2xl top-2'
          />
        </WobbleCard>
        <WobbleCard containerClassName='col-span-1 min-h-[300px]'>
          <Image
            src={msd}
            width={300}
            height={300}
            alt='linear demo image'
            className='absolute filter object-contain rounded-2xl top-2'
          />
        </WobbleCard>
      
      </div>
       <Heading className="font-black mt-4">Thank you for being here.</Heading>
    </div>
  );
}

