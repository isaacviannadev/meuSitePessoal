import React, { useState } from 'react';
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoArrowForward,
  IoArrowBack,
} from 'react-icons/io5';
import {
  FirstSectionSC,
  ConteudoSC,
  DescricaoSC,
  LinkFowardSC,
  LinkBackSC,
} from '../../styles/pages/home';
import { calcularIdade } from '../../utils/functions';

export const Inicio = () => {
  const [linkSelected, setLinkSelected] = useState('sobre');
  const [historia, setHistoria] = useState(false);

  return (
    <FirstSectionSC>
      <img className='foto' src='/eu.png' alt='Isaac' />

      <div className='euDetalhes'>
        <img className='logo' src='/div.svg' alt='logo' />
        <div className='nome'>
          <p>Isaac</p>
          <p>Vianna</p>
        </div>

        <div className='minhasRedes'>
          <a
            href='https://www.linkedin.com/in/isaacvianna/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IoLogoLinkedin />
          </a>
          <a
            href='https://github.com/isaacviannadev'
            target='_blank'
            rel='noopener noreferrer'
          >
            <IoLogoGithub />
          </a>
        </div>
      </div>

      <ConteudoSC>
        <div className='links'>
          <a
            href='#'
            onClick={() => setLinkSelected('sobre')}
            className={linkSelected === 'sobre' ? 'selected' : 'unselected'}
          >
            <p>Sobre mim</p>
          </a>
          <a
            href='#'
            onClick={() => setLinkSelected('works')}
            className={linkSelected === 'works' ? 'selected' : 'unselected'}
          >
            <p>Trabalhos</p>
          </a>
          <a
            href='#'
            onClick={() => setLinkSelected('contato')}
            className={linkSelected === 'contato' ? 'selected' : 'unselected'}
          >
            <p>Contato</p>
          </a>
        </div>

        {!historia ? (
          <DescricaoSC className='animate__animated animate__slideInLeft'>
            <span>– Introdução</span>

            <p className='subtitle'>Desenvolvedor Web, Mobile e Desktop </p>
            <p>
              Especialista em front-end, trabalho principalmente com JS
              utilizando as tecnologias mais requisitadas. React, Nextjs, TS e é
              claro HTML e CSS.
            </p>
          </DescricaoSC>
        ) : (
          <DescricaoSC className='animate__animated animate__slideInRight'>
            <span>Olá! É sempre um prazer...</span>

            <p>
              Tenho {calcularIdade(30, 11, 1987)} anos, sou carioca vivendo em
              Brasília, sou desenvolvedor desde 2018, antes disso trabalhava com
              serviços (bem diferente, eu sei), sempre fui apaixonado por
              tecnologia. Resolvi ser desenvolvedor e trago comigo esses mais de
              15 anos de bagagem na área de serviço com foco em qualidade e na
              experiência do cliente.
            </p>
          </DescricaoSC>
        )}

        {!historia ? (
          <LinkFowardSC onClick={() => setHistoria(true)}>
            Minha história
            <IoArrowForward />
          </LinkFowardSC>
        ) : (
          <LinkBackSC onClick={() => setHistoria(false)}>
            <IoArrowBack />
            Introdução
          </LinkBackSC>
        )}
      </ConteudoSC>
    </FirstSectionSC>
  );
};
