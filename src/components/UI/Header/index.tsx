'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  AbsoluteLinks,
  BurgerMenu,
  PhoneButton,
  WhatsAppButton,
} from './styles';
import { Phone, MessageCircle } from 'lucide-react';
import ic_bars from '../../../../public/svgs/ic_bars.svg';
import { GetStartedButton } from '@/components';
import AnimatedLink from '@/components/Common/AnimatedLink';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { links, menu } from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Image src="/images/bgc group logo_png.png" alt="BGC Group Logo" width={180} height={45} priority />
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? 'open' : 'closed'}
              initial="closed"
            ></motion.div>
            <Image src={ic_bars} alt="bars" />
          </BurgerMenu>
        </LogoContainer>
        <Nav className={isOpen ? 'active' : ''}>
          {links.map((link, i) => (
            <AnimatedLink key={i} title={link.linkTo} />
          ))}
        </Nav>
        <CallToActions className={isOpen ? 'active' : ''}>
          <a href="tel:08508880155" style={{ textDecoration: 'none' }}>
            <PhoneButton>
              <Phone size={18} />
              Bize Ulaşın
            </PhoneButton>
          </a>
          <a href="https://wa.me/908508880155" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <WhatsAppButton>
              <MessageCircle size={18} />
              WhatsApp
            </WhatsAppButton>
          </a>
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;
