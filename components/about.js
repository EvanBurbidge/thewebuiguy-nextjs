import React from 'react';
import { Image } from "react-datocms";
import ReactMarkdown from 'react-markdown';
import SectionHeader from './SectionHeader';
import Container from './container/Container';
import markdownStyles from './markdown-styles.module.css'
import LinkRenderer from './LinkRenderer';

const About = ({ aboutMe = {} }) => (
  <div className="section-container h-auto" id="about">
    <SectionHeader title="About Me" />
    <Container className="h-full">
      <div className="md:flex lg:flex md:justify-between lg:justify-between items-center align-center h-full">
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/2">
          <h1 className="text-2xl mb-6 lg:text-5xl text-primaryDark font-bold tracking-tighter leading-tight hidden md:block lg:block">Who am i?</h1>
          <ReactMarkdown
            className={markdownStyles['markdown']}
            children={aboutMe.aboutMe}
            renderers={{
              link: LinkRenderer,
            }}
          />
        </div>
        <Image data={aboutMe.aboutMeImg.responsiveImage} className="clip-circle invisible md:visible lg:visible border border-theme-primary" />
      </div>
    </Container>
  </div>
);

export default About