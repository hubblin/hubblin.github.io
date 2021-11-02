import React from "react";
import "../styles/about.scss";
import img from "../images/myficture.jpg";

import {
  IoPerson,
  IoLocationSharp,
  IoMailSharp,
  IoCalendarClearOutline,
} from "react-icons/io5";

const About = () => {
  return (
    <section className="about-section">
      <div className="section-title">ABOUT ME</div>

      <div className="about-content">
        <img
          className="about-picture"
          src={img}
          alt="이미지 불러오기를 실패했습니다."
        ></img>
        <div className="about-info">
          <b className="info-title">"디테일은 퀄리티다"</b>
          <div className="info">
            <br />
            안녕하세요. 끊임없는 성장을 추구하는 열정이 있는 개발자 임호균
            입니다. 새로운 기능을 배우고 재미있는 아이디어로 여러 개발을 하는
            것을 좋아합니다. 컴퓨터 공학부에 재학 중이며 프론트엔드 개발자를
            지망하고 있습니다. '디테일은 퀄리티다' 라는 말처럼 꼼꼼하게 확인하고
            놓친 부분은 없는지 다시 한 번 확인하며 퀄리티 높은 작품을 만들고
            수정과 개선에 두려움없이 도전하는 개발자가 되겠습니다.
          </div>
          <ul>
            <li>
              <div className="info-li">
                <IoPerson className="icon" /> 임호균
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoLocationSharp className="icon" /> 부산광역시 중구
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoMailSharp className="icon" /> lhkworld16@gmail.com
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoCalendarClearOutline className="icon" /> 1997.03.10
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
