import React, { memo } from "react";

import "../styles/title.scss";

const Title = memo(() => {
  return (
    <section className="title_container">
      <div className="title_background"></div>
      <div className="title_filter"></div>{" "}
      <div className="title_contents">
        <h1>커피 좋아하는 개발자</h1>
        <div className="line"></div>
        <h1>임호균</h1>
        <h2>웹 포트폴리오</h2>
        <h4>
          안녕하세요. 주니어 프론트엔드 개발자 임호균입니다.
          <br /> 언제나 새로운 것을 개발하는 것을 즐기고 새로운 아이디어를
          생각하는 것을 좋아합니다.
        </h4>
      </div>
    </section>
  );
});

export default Title;
