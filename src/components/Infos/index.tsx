import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io5';
import {
  FirstSectionSC,
  ConteudoSC,
  DescricaoSC,
  LinkFowardSC,
  ContentSC,
} from '../../styles/pages/home';

const Info = () => {
  return (
    <FirstSectionSC isDark>
      <ContentSC>
        <ConteudoSC paddingTopOn>
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

        <div className='separator'></div>

        <ConteudoSC paddingTopOn>
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
      </ContentSC>
    </FirstSectionSC>
  );
};

export default Info;
