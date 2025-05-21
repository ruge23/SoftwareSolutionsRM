"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaAngular,
} from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: 'About me',
  description: `Experienced Full Stack JavaScript developer with strong experience building and
    maintaining web and mobile applications using a variety of technologies.
    Competent in frontend and backend development, with significant experience in
    frameworks such as React, React Native, Angular and Ionic. Proven track record of
    working in diverse environments, from freelance projects to large corporate
    teams. I am fluent in Spanish and fluent in English, with a strong commitment to
    continue learning and staying up to date with the latest industry trends and
    technologies`,
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Rodrigo Ruiz Gerez',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+1) 786 968 2945',
    },
    {
      fieldName: 'Experience',
      fieldValue: '6+ Years',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Argentine',
    },
    {
      fieldName: 'Email',
      fieldValue: 'ruizgerezr@gmail.com',
    },{
      fieldName: 'Languages',
      fieldValue: 'Spanish, English',
    },
  ]
};

const experience = {
  icon: '',
  title: 'My experience',
  description: `I am a proficient Full Stack JavaScript developer with experience 
  in frontend and backend technologies like React, Angular, Node.js, and TypeScript. 
  I have worked on diverse projects, including roles at Santander Bank and Telecom Argentina,
  where I developed accessible web components, implemented micro-frontends, and managed full project lifecycles. 
  My work spans from freelancing to large corporate teams, showcasing my versatility and adaptability.`,
    items: [
      {
        company: 'Santander Bank Technology',
        position: 'SSr Software Engineer',
        duration: '2021 — 2024'
      },
      {
        company: 'Freelance',
        position: 'Full Stack JavaScript Developer',
        duration: '2021 — 2021'
      },
      {
        company: 'Telecom Argentina',
        position: 'Full Stack JavaScript Developer',
        duration: '2019 — 2021'
      },
      {
        company: 'CtrlZ Software Factory',
        position: 'Full Stack JavaScript Developer',
        duration: '2017 — 2019'
      },
    ] 
}

const education = {
  icon: '',
  title: 'My education',
  description: `I hold a Higher Technician degree in Programming
   from the National Technological University of Tucuman. This education has provided 
   me with a solid foundation in software development, and I am dedicated to continuous 
   learning and staying updated with industry trends.`,
    items: [
      {
        institution: 'National Technological University of Tucuman',
        degree: 'Higher Technician in Programming',
        duration: '2016 — 2017'
      },
      {
        institution: 'National Technological University of Tucuman',
        degree: 'Full Stack Javascript Immersive Bootcamp',
        duration: '2017 — 2018'
      },
    ] 
}

const skills = {
  icon: '',
  title: 'My skills',
  description: `I excel in UI design, server-side development, database management, 
  and real-time data handling. Additionally, I am knowledgeable in cloud technologies 
  and committed to staying updated with industry trends.`,
    skillList: [
      {
        icon: <FaHtml5 />,
        name: 'HTML5',
      },
      {
        icon: <FaCss3 />,
        name: 'CSS3',
      },
      {
        icon: <FaJs />,
        name: 'JavaScript',
      },
      {
        icon: <FaReact />,
        name: 'React.js',
      },
      {
        icon: <FaAngular />,
        name: 'Angular',
      },
      {
        icon: <SiNextdotjs />,
        name: 'Next.js',
      },
      {
        icon: <SiStyledcomponents />,
        name: 'Styled-Components'
      },
      {
        icon: <SiTailwindcss />,
        name: 'Tailwind.css',
      },
      {
        icon: <FaFigma />,
        name: 'Figma',
      },
      {
        icon: <FaNodeJs />,
        name: 'Figma',
      },
    ] 
}


const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
      }}
      className="min-h-[80vh] flex items-center justify-center p-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList
            className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"
          >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" 
                          key={index}
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 
                            className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"
                          >
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1" 
                          key={index}
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 
                            className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"
                          >
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger  className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li 
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>        
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume
