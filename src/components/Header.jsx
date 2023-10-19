import React from 'react'

const Header = () => {
  return (
    <nav>
      <h1>
        <img src="./img/title.png" alt="" />
      </h1>
      <ul>
        <li> 회사 소개 </li>
        <li> 서비스 </li>
        <li> 함께가치 </li>
        <li> 뉴스룸 </li>
      </ul>
      <div>
        <span>로그인</span> | <span>회원가입</span>
      </div>
    </nav>
  )
}

export default Header
