/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { AreaDepoSC, ContainerSC, FotoDepoSC, NavDepoSC } from './style';

const depoimentos = [
  {
    id: 1,
    depoimento: 'Cara é bom demais, manda muito bem no desenvolvimento',
    foto: 'https://avatars.githubusercontent.com/u/60493567?v=4',
    nome: 'Isaac Vianna',
    cargo: 'Dev Frontend Jr',
  },
  {
    id: 2,
    depoimento: 'Cara é  Maravilhoso, manda muito bem em tudo',
    foto: 'https://avatars.githubusercontent.com/u/59629507?v=4',
    nome: 'Matheus Freitas',
    cargo: 'Analista de QA',
  },
  {
    id: 3,
    depoimento:
      'manda muito bem no desenvolvimento, manda muito bem no desenvolvimento manda muito bem no desenvolvimento manda muito bem no desenvolvimento',
    foto: 'https://avatars.githubusercontent.com/u/12091121?v=4',
    nome: 'Maurício Santos',
    cargo: 'Arquiteto de soluções Sr',
  },
  {
    id: 4,
    depoimento: ' é bom demais, manda muito bem no desenvolvimento',
    foto: 'https://avatars.githubusercontent.com/u/10777199?v=4',
    nome: 'Pedro Bittencourt',
    cargo: 'UX/UI Sr',
  },
];

export const Depoimento = () => {
  const [idDepo, setIdDepo] = useState(1);

  return (
    <>
      {depoimentos.map(
        ({ id, depoimento, foto, nome, cargo }) =>
          idDepo === id && (
            <ContainerSC
              key={id}
              className={'animate__animated animate__fadeInDown'}
            >
              <FotoDepoSC>
                <img src={foto} alt={'foto'} />
              </FotoDepoSC>
              <AreaDepoSC>
                <p className='subtitle'>{depoimento}</p>
                <div className='autor'>
                  <p>{nome}</p>
                  <span>{cargo}</span>
                </div>
              </AreaDepoSC>
            </ContainerSC>
          )
      )}
      <NavDepoSC>
        {depoimentos.map(({ id }) => (
          <div
            key={id}
            className={`navItem ${idDepo === id ? 'selected' : 'unselected'}`}
            onClick={() => setIdDepo(id)}
          ></div>
        ))}
      </NavDepoSC>
    </>
  );
};
