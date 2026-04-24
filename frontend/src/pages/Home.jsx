import React from 'react';
import SectionRenderer from '../sections/SectionRenderer';
import homePageData from '../data/home-page.json';

function Home() {
  const sections = homePageData.sections || [];

  return (
    <>
      {sections.map((section) => (
        <SectionRenderer key={section.id || section.position} section={section} />
      ))}
    </>
  );
}

export default Home;