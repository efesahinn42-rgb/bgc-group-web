'use client';
import Image from 'next/image';
import corporate from '../../../../public/images/corporate.png';
import ParallaxText from '@/components/Common/ParallaxImages';
import { Wrapper, Inner, ImageContainer, ParallaxImages, Div, BrandList, BrandItem } from './styles';
import RevealCover from '@/components/Common/RevealCover';
import { useIsMobile } from '../../../../libs/useIsMobile';
export const imageVariants = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.2,
    },
  },
};

const Featured = () => {
  const isMobile = useIsMobile();
  return (
    <Wrapper>
      <Inner>
        <ImageContainer>
          <RevealCover />
          <Div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            {isMobile ? (
              <Image
                src={corporate}
                alt="featured_mobile_banner"
                fill
              />
            ) : (
              <Image src={corporate} alt="big_banner" fill />
            )}
          </Div>
        </ImageContainer>
        <h2>Çözüm Ortaklarımız ve Referanslarımız</h2>
        <ParallaxImages>
          <ParallaxText baseVelocity={-2}>
            <BrandList>
              <BrandItem>ALLIANZ SİGORTA</BrandItem>
              <BrandItem>AXA SİGORTA</BrandItem>
              <BrandItem>MAPFRE SİGORTA</BrandItem>
              <BrandItem>TÜRKİYE SİGORTA</BrandItem>
              <BrandItem>TUR ASSIST</BrandItem>
              <BrandItem>MARMARA ASİSTANS</BrandItem>
              <BrandItem>RENAULT MAİS</BrandItem>
              <BrandItem>FORD FİLO</BrandItem>
              <BrandItem>AVİS FİLO</BrandItem>
              <BrandItem>GARENTA</BrandItem>
              <BrandItem>HEDEF FİLO</BrandItem>
            </BrandList>
          </ParallaxText>
        </ParallaxImages>
      </Inner>
    </Wrapper>
  );
};

export default Featured;
