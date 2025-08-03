import React from 'react';

export const PhoneSection = () => {
  return (
    // O <></> (Fragment) é um bom invólucro para a secção
    <>
      {/* Esta secção usa uma margem negativa para se sobrepor ao conteúdo anterior.
        O z-20 garante que fica à frente de outros elementos.
      */}
      <section className="relative -mt-[400px] md:-mt-[375px] mb-8 z-20">
        <div className="container mx-auto px-4 md:px-6">

          {/* Layout para Mobile: Mostra apenas um telemóvel no centro */}
          <div className="flex justify-center md:hidden">
            <div className="w-[280px] h-[550px] relative animate-slide-up opacity-0 [animation-delay:0.2s] animate-fill-both">
              <img 
                src="/assets/images/Erakulis-Founded-by-CR7-App.png" 
                alt="Founded by CR7 App" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Layout para Desktop: Escondido em mobile (hidden), visível em ecrãs médios e maiores (md:flex).
            Mostra três telemóveis.
          */}
          <div className="hidden md:flex justify-center items-end gap-2.5">
      
            {/* Telemóvel da Esquerda */}
            <div className="w-[280px] lg:w-[354px] h-[548px] lg:h-[692px] relative mt-5 animate-slide-up opacity-0 [animation-delay:0.2s] animate-fill-both">
              <img 
                src="/assets/images/Erakulis-Fitness-Dashboard-Interface.png" 
                alt="Fitness Dashboard Interface" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Telemóvel do Centro (um pouco mais alto) */}
            <div className="w-[304px] lg:w-[384px] h-[578px] lg:h-[730px] relative -mt-8 animate-slide-up opacity-0 [animation-delay:0.4s] animate-fill-both">
              <img 
                src="/assets/images/Erakulis-Founded-by-CR7-App.png" 
                alt="Founded by CR7 App" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Telemóvel da Direita */}
            <div className="w-[280px] lg:w-[354px] h-[548px] lg:h-[692px] relative mt-5 animate-slide-up opacity-0 [animation-delay:0.6s] animate-fill-both">
              <img 
                src="/assets/images/Sleep-Tracking-Interface.png" 
                alt="Sleep Tracking Interface" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
};