import React from "react";
import { HeadProvider, Title, Link, Meta } from "react-head";

function About() {
  return (
    <HeadProvider>
      <div className="Home">
        <Title>About Me</Title>
        <Link rel="canonical" href="http://jeremygayed.com/" />
        <Meta name="example" content="whatever" />
      </div>
    </HeadProvider>
  );
}

export default About;
