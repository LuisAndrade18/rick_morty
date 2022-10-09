import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Personagens = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((resposta) => {
        setInfo(resposta.data.results);
      })
      .catch((error) => {
        alert('desculpe, houve erro ao requisitar a sua api', error);
      });
  }, []);

  return (
    <div>
      <h1>olá</h1>
      {info.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <figure>
            <img src={item.image} alt="" />
          </figure>
        </div>
      ))}
    </div>
  );
};

export default Personagens;
