import React from 'react'

const Header = () => {
  return (
    <nav className="header">
      <h1>
        <a href="/">
          <img src="./img/title.png" alt="" />
        </a>
      </h1>
      <ul className="header-middle">
        <li className="menu-list"> 회사 소개 </li>
        <li className="menu-list"> 서비스 </li>
        <li className="menu-list"> 함께가치 </li>
        <li className="menu-list"> 뉴스룸 </li>
      </ul>
      <div>
        <span className="menu-list">로그인</span> | <span className="menu-list">회원가입</span>
      </div>
    </nav>
  );
}

export default Header
