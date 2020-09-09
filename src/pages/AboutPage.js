import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import PDF from '../docs/Sanabria.resume.pdf'

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
        <a href='https://github.com/gwensanabria' target='_blank' rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} style={{ fontSize: 25, color: 'black' }} />
        </a>
        <a href='https://www.linkedin.com/in/gwendoline-sanabria/' target='_blank' rel='noopener noreferrer'>
        <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 25, marginLeft: 30, color: 'black', marginTop: 20 }} />
        </a>
        <a href={PDF} target="_blank" rel='noopener noreferrer'>
            <FontAwesomeIcon icon={faFile} style={{ fontSize: 25, marginLeft: 30, color: 'black' }} />
        </a>
      </Content>
    </div>
  );
}

export default AboutPage;
