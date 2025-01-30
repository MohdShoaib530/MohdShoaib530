import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { BorderBeam } from '@/components/magicui/border-beam';
import { Paragraph } from '@/components/Paragraph';
import { Products } from '@/components/Products';
import { TechStack } from '@/components/TechStack';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

export default function Home() {
  const words = [
    {
      text: 'Hello',
      className: 'text-gray-600 lg:text-4xl text-xl md: text-2xl'
    },
    {
      text: 'There',
      className: 'text-gray-600 lg:text-4xl text-xl md: text-2xl'
    },
    {
      text: " I'm ",
      className: 'text-gray-600 lg:text-4xl text-xl md: text-2xl'
    },
    {
      text: 'Md',
     className: 'text-blue-500 lg:text-4xl text-xl md: text-2xl'
    },
    {
      text: 'Shoaib',
   className: 'text-blue-500 lg:text-4xl text-xl md: text-2xl'
    }
  ];
  return (
    <div className='bg-gray-900 text-gray-100'>
      <Container>
        <span className='text-4xl'>👋</span>
        <TypewriterEffectSmooth words={words} />
        <Paragraph className='max-w-xl mt-4 lg:text-xl'>
          I&apos;m a Full-Stack Web developer with a passion for building real
          world web applications and products with strong foundation in
          JavaScript.
        </Paragraph>
        <Paragraph className='max-w-xl mt-2 lg:text-xl'>
          I&apos;m building scalable web apps that are performance optimized and
          good looking. I am always ready to learn and stay updated with the
          latest trends in web development.
        </Paragraph>
        <Heading as='h2' className=' text-lg md:text-lg lg:text-lg mt-10 mb-4'>
          <div className='relative flex h-10 w-fit flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl px-3'>
            <span className='text-xl text-gray-500 '>
              What I&apos;ve been working on
            </span>
            <BorderBeam size={100} duration={12} delay={9} />
          </div>
        </Heading>
        <Products />
        <TechStack />
      </Container>
    </div>
  );
}
