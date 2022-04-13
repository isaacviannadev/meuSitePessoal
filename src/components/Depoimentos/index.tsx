/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { AreaDepoSC, ContainerSC, FotoDepoSC } from './style';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Mousewheel, Pagination } from 'swiper';

import { FirstSectionSC } from '../../styles/pages/home';

// import 'swiper/css/pagination';

const depoimentos = [
  {
    id: 0,
    depoimento:
      'Isaac é realmente diferenciado, a forma como encara os desafios é contagiante. A principal característica que eu destacaria é a resiliência, se todo grupo tivesse um "Isaac" seria muito mais fácil encarar as adversidades e mudanças de cenários que podem surgir em um ambiente corporativo.',
    foto: 'https://avatars.githubusercontent.com/u/60942995?v=4',
    nome: 'Marcos Roberto',
    cargo: 'Analista de dados - Firjan',
  },
  {
    id: 1,
    depoimento:
      'Trabalhar com o Isaac foi uma ótima experiência! Comprometido e zeloso nas entregas, sempre se esforça para cumprir com excelência tudo que estiver ao seu alcance. Como suas maiores qualidades, acredito que o foco na entrega e a colaboratividade/trabalho em equipe se destacam. Trabalharia novamente, sem pestanejar.',
    foto: 'https://media-exp1.licdn.com/dms/image/C4E03AQH-V0OUJ9HRxA/profile-displayphoto-shrink_800_800/0/1558462200456?e=1655337600&v=beta&t=Yod7tMd86bJrqrT4lGZmyc_Qeti81-7uB16qwV8AghQ',
    nome: 'Matheus Gomes',
    cargo: 'Dev Backend Sr - Lilly Estética',
  },
  {
    id: 2,
    depoimento:
      'Além de um excelente companheiro de trabalho, trazendo um clima extremamente leve pra equipe, Isaac traz para todos a sua vontade de “fazer dar certo”. Certamente, isso é inspirador para qualquer um! Percebo sua preocupação com coisas realmente importantes, como: arquitetura, performance e um código MUITO legível.',
    foto: 'https://media-exp1.licdn.com/dms/image/C4E03AQGohuWCaZUuqA/profile-displayphoto-shrink_800_800/0/1646275996253?e=1655337600&v=beta&t=IJQOsqwiEkWegnwV5lUsAQP8sk849FbQ2vTJQtnov3g',
    nome: 'Marcus Souza',
    cargo: 'Dev Fullstack Sr - Lilly Estética',
  },
  {
    id: 3,
    depoimento: ' é bom demais, manda muito bem no desenvolvimento',
    foto: 'https://avatars.githubusercontent.com/u/10777199?v=4',
    nome: 'Pedro Bittencourt',
    cargo: 'UX/UI Sr',
  },
];

export const Depoimento = () => {
  return (
    <FirstSectionSC>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 10000,
        }}
        modules={[Autoplay, Mousewheel, Pagination]}
        className='mySwiper'
      >
        {depoimentos.map(({ id, depoimento, foto, nome, cargo }) => {
          return (
            <SwiperSlide key={id}>
              <ContainerSC>
                <FotoDepoSC>
                  <img src={foto} alt={'foto'} />
                </FotoDepoSC>
                <AreaDepoSC>
                  <div className='aspas'>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 512 512'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'></path>
                    </svg>
                  </div>
                  <p className='subtitle'>{depoimento}</p>
                  <div className='autor'>
                    <p>{nome}</p>
                    <span>{cargo}</span>
                  </div>
                </AreaDepoSC>
              </ContainerSC>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </FirstSectionSC>
  );
};
