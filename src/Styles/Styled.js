import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import get_schwifty from '../font/get_schwifty.ttf';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
  @font-face {
    font-family: 'rick n morty';
    src: url(${get_schwifty});
  }
  body{
    background: url('https://www.freepnglogos.com/uploads/rick-and-morty/rick-and-morty-background-rick-morty-wallpaper-speedpaint-youtube-2.jpg') no-repeat;
    background-size: 100%;
    background-attachment: fixed;
  }
`;

export const Navgt = styled(Link)`
  text-decoration: none;
  padding: 10px;
  color: #619225;
  text-shadow: #97d941 0 0 4px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: solid 2px #402153;
  img {
    width: 200px;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  li {
    width: 30%;
    text-align: center;
    border: solid #6d1394;
    border-radius: 30px;
    padding: 5px 10px;
  }
  nav {
    width: 400px;
  }
`;
export const Intro = styled.div`
  width: 60%;
  min-width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  h1{
    text-align: center;
    font-family: 'rick n morty';
    margin: 20px;
  }
`