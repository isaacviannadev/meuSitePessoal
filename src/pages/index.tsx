import React, { useState } from 'react';
import Footer from '../components/Footer';

import {
  SectionDarkSC,
  ContainerSC,
  ConteudoSC,
  DescricaoSC,
  LinkFowardSC,
  LinkBackSC,
  CardContainerSC,
} from '../styles/pages/home';
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoArrowForward,
  IoArrowBack,
  IoLogoWhatsapp,
} from 'react-icons/io5';

import 'animate.css';
import { calcularIdade } from '../utils/functions';
import { Inicio } from '../components/Inicio';
import { Depoimento } from '../components/Depoimentos';

const Home = () => {
  return (
    <>
      <Inicio />

      <SectionDarkSC>
        <CardContainerSC>
          <ConteudoSC>
            <DescricaoSC className='animate__animated animate__slideInLeft'>
              <span>– Contato</span>

              <p className='subtitle'>
                Precisa de ajuda? quer um site ou aplicativo?
              </p>
              <p>Entre em contato comigo, vamos solucionar seu problema.</p>
              <LinkFowardSC
                href='https://api.whatsapp.com/send?phone=5561981025792&text=Ol%C3%A1,%20preciso%20de%20ajuda!%20Quero%20um%20site,%20sistema%20ou%20aplicativo,%20pode%20me%20ajudar%3F'
                target='_blank'
                rel='noreferrer'
              >
                Fazer contato
                <IoLogoWhatsapp />
              </LinkFowardSC>
            </DescricaoSC>
          </ConteudoSC>

          <ConteudoSC style={{ maxWidth: '500px' }}>
            <DescricaoSC className='animate__animated animate__slideInRight'>
              <p className='subtitle'>
                Não há limites para a tecnologia, e ela é igual para todos.
              </p>
              <p>
                Vamos somar nossas experiências e juntos, desenvolver algo
                inovador para seu negócio e para o mundo!
              </p>
            </DescricaoSC>
          </ConteudoSC>
        </CardContainerSC>
      </SectionDarkSC>

      <ContainerSC>
        <CardContainerSC>
          <Depoimento />
        </CardContainerSC>
      </ContainerSC>

      <Footer />
    </>
  );
};

export default Home;
