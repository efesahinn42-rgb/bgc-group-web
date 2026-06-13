'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  BurgerMenu,
  PhoneButton,
  WhatsAppButton,
  MobileMenuOverlay,
  MobileMenuContent,
} from './styles';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import AnimatedLink from '@/components/Common/AnimatedLink';
import { useState } from 'react';
import { links } from './constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <Image src="/images/bgc group logo_png.png" alt="BGC Group Logo" width={180} height={45} priority />
        </LogoContainer>

        {/* Desktop Nav */}
        <Nav>
          {links.map((link, i) => (
            <AnimatedLink key={i} title={link.linkTo} />
          ))}
        </Nav>

        {/* Desktop CTA */}
        <CallToActions>
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

        {/* Mobile Burger */}
        <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} color="#000" /> : <Menu size={28} color="#000" />}
        </BurgerMenu>
      </Inner>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <MobileMenuOverlay onClick={() => setIsOpen(false)}>
          <MobileMenuContent onClick={(e) => e.stopPropagation()}>
            {links.map((link, i) => (
              <AnimatedLink key={i} title={link.linkTo} />
            ))}
            <div className="mobile-cta">
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
            </div>
          </MobileMenuContent>
        </MobileMenuOverlay>
      )}
    </Wrapper>
  );
};

export default Header;
