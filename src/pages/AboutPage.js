import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>I graduated from the University Of Texas at Austin in 2018 with a</p>
        <p>Bachelor's in Anthropology. After which I spent a month in a field</p>
        <p>school abroad. Currently I am a student at The Coding Bootcamp at UT</p>
        <p>Austin, where I am rapidly gaining experience in HTML, CSS, JavaScript,</p>
        <p>Jquery, and more to come. During my free time I enjoy heading to the</p>
        <p>gym where I practice a Krav Maga/MMA curriculum.</p>
      </Content>
    </div>
  );
}

export default AboutPage;
