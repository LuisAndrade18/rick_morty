import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Episodios = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/episode')
      .then((resposta) => {
        setInfo(resposta.data.results);
      })
      .catch((error) => {
        alert('desculpe, houve erro ao requisitar a sua api', error);
      });
  }, []);

  return (
    <div>
      {info.map((item, index) => (
        <div key={index}>
          <h2>episodio {item.id}</h2>
          <h4>{item.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default Episodios;
