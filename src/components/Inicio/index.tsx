import React, { useState } from 'react';
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoArrowForward,
  IoArrowBack,
} from 'react-icons/io5';
import styled from 'styled-components';
import {
  ContentSC,
  ConteudoSC,
  DescricaoSC,
  LinkFowardSC,
  LinkBackSC,
} from '../../styles/pages/home';
import { calcularIdade } from '../../utils/functions';

const FirstSectionSC = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-top: 60px;

  @media only screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Intro = styled.div`
  background: url('/eu.png') no-repeat left top;
  background-size: contain;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px 20px;

  & .logo {
    width: 100%;
    max-width: 200px;
  }

  & .nome {
    display: flex;
    flex-direction: column;
    position: relative;

    p {
      line-height: 100%;
      margin-left: 30px;
      font-weight: 500;
      letter-spacing: 5px;
      font-size: 3.5rem;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 30px;
      width: 35px;
      height: 6px;
      background-color: var(--textYellow);
    }
  }

  .minhasRedes {
    display: flex;
    width: 100%;
    flex-direction: row;
    gap: 10px;
    align-items: center;

    svg {
      width: 24px;
      height: 24px;
      color: var(--textSecondary);
      transition: all 0.2s ease-in-out;

      &:hover {
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.27);
        transform: translateY(-5px);
        color: var(--textWhite);
      }
    }

    @media only screen and (max-width: 768px) {
      justify-content: end;
      svg {
        color: var(--textYellow);
        width: 36px;
        height: 36px;

        &:hover {
          transform: translateY(0);
          box-shadow: none;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    height: 320px;
  }
`;

export const Inicio = () => {
  const [linkSelected, setLinkSelected] = useState('sobre');
  const [historia, setHistoria] = useState(false);

  return (
    <FirstSectionSC>
      {/* <img className='foto' src='/eu.png' alt='Isaac' /> */}

      <ContentSC>
        <Intro>
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
        </Intro>

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
                utilizando as tecnologias mais requisitadas. React, Nextjs, TS e
                é claro HTML e CSS.
              </p>
            </DescricaoSC>
          ) : (
            <DescricaoSC className='animate__animated animate__slideInRight'>
              <span>Olá! É sempre um prazer...</span>

              <p>
                Tenho {calcularIdade(30, 11, 1987)} anos, sou carioca vivendo em
                Brasília, sou desenvolvedor desde 2018, antes disso trabalhava
                com serviços (bem diferente, eu sei), sempre fui apaixonado por
                tecnologia. Resolvi ser desenvolvedor e trago comigo esses mais
                de 15 anos de bagagem na área de serviço com foco em qualidade e
                na experiência do cliente.
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
      </ContentSC>
    </FirstSectionSC>
  );
};
