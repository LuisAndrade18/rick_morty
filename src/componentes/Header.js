import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../api/Home';
import Episodios from '../api/Episodios';
import Personagens from '../api/Personagens';
import Logo from '../images/RnM.png';
import * as S from '../Styles/Styled'

const Header = () => {
  return (
    <BrowserRouter>
      <S.Header>
        <Link to="/">
          <img src={Logo} alt="Logo tematica Rick and Morty" />
        </Link>

        <nav>
          <ul>
          <li>
            <S.Navgt to="/">Home</S.Navgt>
          </li>
          <li>
            <S.Navgt to="/chars">Characteres</S.Navgt>
          </li>
          <li>
            <S.Navgt to="/eps">Episodes</S.Navgt>
          </li>
        </ul>
        </nav>
        
      </S.Header>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/chars" element={<Personagens />} />
        <Route path="/eps" element={<Episodios />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Header;
