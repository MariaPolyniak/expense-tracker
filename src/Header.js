import styled from "styled-components";

import {Link} from "react-router-dom";

const HeaderPart = styled.header`
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #F6C6EA;
      padding: 15px 30px;
    `
const Logo = styled.img`
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-left: 15px;
    `
const StyledLink = styled(Link)`
      text-decoration: none;
      background-color: transparent;
      color: #7952B3;
      border: none;
      font-size: 16px;
      letter-spacing: 3px;
      margin: 0 15px;
      padding: 0;
      &:hover {
        cursor: pointer;
        color: #F9F9F9;
      }
    `

function Header() {
    return (
        <HeaderPart>
            <Logo alt="logo" src="https://cdn.dribbble.com/users/2800664/screenshots/9756412/media/ace0e817a41d6c3b8fe960efe76ee17a.png?compress=1&resize=400x300"/>
            <nav>
                <StyledLink to={"/"}>Home</StyledLink>
                <StyledLink to={"/categories"}>Categories</StyledLink>
                <StyledLink to={"/income"}>Income</StyledLink>
                <StyledLink to={"/expense"}>Expense</StyledLink>
            </nav>
        </HeaderPart>
    )
}

export default Header;