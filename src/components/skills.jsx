import React, { memo } from "react";

import "../styles/skills.scss";

import {
  ReactJs,
  Redux,
  Reduxsaga,
  Sass,
  Javascript,
  Html5,
  CssThree,
  Nodedotjs,
  Express,
  Mysql,
  R,
  Mongodb,
} from "@icons-pack/react-simple-icons";

const Skills = memo(({ refs }) => {
  return (
    <section ref={refs} className="skills-section">
      <div className="section-title">SKILLS</div>
      <div className="skills-content">
        <h3 className="skill-title">frontend</h3>
        <div className="skills-infos">
          <div className="skill-group">
            <div className="skill">
              <Html5 color="#E34F26" size={50} />
            </div>
            <p className="skill-info">HTML</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <CssThree color="#1572B6" size={50} />
            </div>
            <p className="skill-info">CSS</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Javascript color="#F7DF1E" size={50} />
            </div>
            <p className="skill-info">JS</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <ReactJs color="#61DAFB" size={50} />
            </div>
            <p className="skill-info">React.js</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Redux color="#764ABC" size={50} />
            </div>
            <p className="skill-info">Redux</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Reduxsaga color="#999999" size={50} />
            </div>
            <p className="skill-info">Redux-Saga</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Sass color="#CC6699" size={50} />
            </div>
            <p className="skill-info">SASS</p>
          </div>
        </div>
        <h3 className="skill-title">backend</h3>
        <div className="skills-infos">
          <div className="skill-group">
            <div className="skill">
              <Nodedotjs color="#339933" size={50} />
            </div>
            <p className="skill-info">Node.js</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Express color="#000000" size={50} />
            </div>
            <p className="skill-info">Express</p>
          </div>
        </div>
        <h3 className="skill-title">data</h3>
        <div className="skills-infos">
          <div className="skill-group">
            <div className="skill">
              <R color="#276DC3" size={50} />
            </div>
            <p className="skill-info">R</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Mysql color="#4479A1" size={50} />
            </div>
            <p className="skill-info">My-SQL</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Mongodb color="#47A248" size={50} />
            </div>
            <p className="skill-info">MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
});
export default Skills;
