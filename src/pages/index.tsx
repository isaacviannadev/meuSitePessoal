import React, { useState } from 'react';
import Footer from '../components/Footer';

import { ContainerSC, CardContainerSC } from '../styles/pages/home';

import 'animate.css';
import { Inicio } from '../components/Inicio';
import { Depoimento } from '../components/Depoimentos';
import { AlertModal } from '../components/AlertModal';
import Info from '../components/Infos';

const Home = () => {
  const [alertOpen, setAlertOpen] = useState<boolean>(true);

  return (
    <>
      <Inicio />

      <Info />

      <ContainerSC className='depo'>
        <CardContainerSC>
          <Depoimento />
        </CardContainerSC>
      </ContainerSC>

      <Footer />
      {alertOpen && (
        <AlertModal isOpen={alertOpen} onClose={() => setAlertOpen(false)} />
      )}
    </>
  );
};

export default Home;
