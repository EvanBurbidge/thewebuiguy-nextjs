import React from 'react';
import { Image } from "react-datocms";
import ReactMarkdown from 'react-markdown';
import SectionHeader from './SectionHeader';
import Container from './container/Container';
import markdownStyles from './markdown-styles.module.css'

const About = ({ aboutMe = {} }) => (
  <div className="section-container h-auto md:h-screen lg:h-screen justify-center align-center" id="about">
    <span>
      <SectionHeader title="About Me"/>
    </span>
   <Container>
   <div className="md:flex lg:flex md:justify-between lg:justify-between">
      <div className="flex flex-col w-full md:w-1/2 lg:w-1/2">
        <h1 className="text-2xl mb-6 lg:text-5xl text-primaryDark font-bold tracking-tighter leading-tight hidden md:block lg:block">Who am i?</h1>
        <ReactMarkdown
          className={markdownStyles['markdown']}
          children={aboutMe.aboutMe}
          renderers={{
            link: ({ children, href }) => {
              return <a target="_blank" className="text-primary hover:text-primaryDark hover:underline"href={href}><a>{children}</a></a>
            }
          }}
        />
      </div>
      <Image data={aboutMe.aboutMeImg.responsiveImage} className="clip-circle invisible md:visible lg:visible"/>
    </div>
   </Container>
  </div>
);

export default About