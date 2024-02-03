import React from "react";

import { Button } from "@components";
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import Image from "next/image";
export const Main: React.FC = () => {
  return (
    <div className="">
      <Hero />
      <Manifesto />
      <About />
    </div>
  );
};

const Hero = () => {
  return (
    <ParallaxProvider>
      <div className="flex text-white  h-screen w-full">
        <div className="w-2/6 h-2/6 absolute top-1/3 left-40">
          <Parallax speed={25}>
            <Image
              src="/logo.jpg"
              alt="Hero Image"
              className="rounded-sm"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </Parallax>
        </div>
        <div className="absolute bottom-32 left-2/4 w-2/5">
          <p className="text-6xl font-thin">
            <Parallax speed={13}>
              <span>
                Redefining <br /> the Global Landscape with
                Cutting-Edge
                Web Design, Brand Identity, and Marketing Strategies
              </span>
            </Parallax>
          </p>
        </div>
      </div>
    </ParallaxProvider>
  )
}

const Manifesto = () => {
  return (
    <ParallaxProvider>
      <div className="flex text-white h-auto w-full p-32 justify-center bg-gray-900">
        <div style={{ minHeight: '100rem' }}>
          <Parallax speed={-10}>
            <h2 className="text-6xl font-thin text-center mb-32">We Engineer <br /> Digital Platforms</h2>
          </Parallax>

          <div className="flex flex-col h-auto gap-72">
            {Skills.map((skill) => (
              <Parallax speed={-8}>
                <SkillCard {...skill} />
              </Parallax>
            ))}

          </div>

        </div>
      </div>
    </ParallaxProvider>
  )
}

// ? Abstract that image component to reuse it in the skill card
const SkillCard = (skill: SkillProps) => {
  return (
    <div className="flex flex-row text-transparent-gray hover:text-white transition p-9 h-auto duration-700 w-full gap-4 justify-between">
      <div className="w-3/5 flex flex-col">
        <div className="flex flex-row">
          <p className=" text-5xl font-thin">
            0{skill.id}
          </p>
        </div>
        <div className="flex flex-col">
          <div>
            <h3 className="text-5xl font-light">
              {skill.title}
            </h3>
          </div>
          <div>
            <p className="mt-2 text-2xl font-thin w-3/4">
              {skill.description}
            </p>
          </div>
        </div>
      </div>
      <div className="w-3/5 block h-auto py-10">

        <Image
          src={skill.image}
          alt={skill.title}
          className="rounded-sm z-30"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  )
}

interface SkillProps {
  id: number,
  title: string,
  description: string,
  image: string
}


const Skills = [
  {
    id: 1,
    title: 'Quality',
    description: `
    We hold the conviction that both design and development ought to transcend mere aesthetics to deliver outstanding functionality. It's our commitment to excellence and our meticulous focus on every detail that sets us apart. Our aim is to craft designs that not only fulfill your requirements but surpass them, ensuring that every project we undertake achieves its highest potential.
    `,
    image: "https://i.ibb.co/Gdcd9Pq/create-an-image-of-a-craftsmans-workshop-filled-with-tools-and-intricate-designs-on-the-workbench-31.png"
  },
  {
    id: 2,
    title: 'Creativity',
    description: `
    We are passionate about creating unique and innovative designs that are tailored to your specific needs. Our team of experts is dedicated to delivering creative solutions that are not only visually stunning but also highly functional. We believe that creativity is the key to unlocking the full potential of your brand, and we are committed to helping you achieve your goals.`,
    image: "https://i.ibb.co/whHn00v/illustrate-an-artists-studio-where-imagination-takes-flight-with-canvases-painted-in-vibrant-color-9.png"
  },
  {
    id: 3,
    title: 'Collaboration',
    description: `
    We believe that the best results are achieved through collaboration. We work closely with our clients to understand their unique needs and develop custom solutions that are tailored to their specific requirements. Our team is committed to providing exceptional service and support, and we are dedicated to helping you achieve your goals.`,
    image: "https://i.ibb.co/n6fHfqR/depict-a-modern-open-plan-office-environment-where-a-diverse-group-of-professionals-gather-around-a.png"
  },
] as SkillProps[]

const About = () => {
  return (
    <div className="flex text-white h-screen w-full">
    </div>
  )
}
