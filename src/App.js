import React from 'react';
import Header from './Components/Header';
import SecondSection from './Components/SecondSection';
import ThirdSection from './Components/ThirdSection';
import ServiceSection from './Components/ServiceSection';
import Swiper from './Components/Swiper';
import Customer from './Components/Customer';
import Card from './Components/Card';
import Form from './Components/Form';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <SecondSection />
      <ThirdSection />
      <ServiceSection />
      <Swiper />
      <Customer />
      <Card />
      <Form />
      <Footer />
    </div>
  );
};

export default App;