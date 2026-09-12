'use client';
import { Phone, MessageCircle } from 'lucide-react';
import { Wrapper } from './styles';

const MobileStickyCTA = () => {
  return (
    <Wrapper>
      <a href="tel:08508880155">
        <Phone size={18} />
        Ara
      </a>
      <a href="https://wa.me/908508880155" target="_blank" rel="noopener noreferrer">
        <MessageCircle size={18} />
        WhatsApp
      </a>
    </Wrapper>
  );
};

export default MobileStickyCTA;
