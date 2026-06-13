'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding: 1rem 0;
  border-bottom: 0.5px solid #eaeaea;
  background-color: var(--white);
  color: var(--Background);
  position: relative;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 0.75rem 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    object-fit: contain !important;
    transform: scale(3.5) translateX(-45px) !important;
    transform-origin: left center !important;
    transition: transform 0.3s ease;
  }

  @media (max-width: 1024px) {
    img {
      transform: scale(2.5) translateX(-15px) !important;
    }
  }

  @media (max-width: 768px) {
    img {
      transform: scale(1.8) translateX(25px) !important;
    }
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 3.75rem;
  position: relative;
  margin-right: -6.3rem;

  @media (max-width: 1024px) {
    gap: 1.5rem;
    margin-right: -2rem;
  }

  span {
    color: #000000 !important;
    font-size: 1.125rem;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
      color: #E30613 !important;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AbsoluteLinks = styled.a``;

export const CallToActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    text-decoration: none;
  }

  @media (max-width: 1024px) {
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

/* ——— Mobile Menu ——— */

export const MobileMenuOverlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 99;
  }
`;

export const MobileMenuContent = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.75rem;
    background: var(--emerald);
    margin: 5rem 1rem 0;
    padding: 2.5rem 2rem;
    border-radius: 1.25rem;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: slideDown 0.35s ease-out;

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    span {
      color: #000000 !important;
      font-size: 1.25rem;
      font-weight: 600;
    }

    .mobile-cta {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      width: 100%;
      margin-top: 0.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(0, 0, 0, 0.15);

      a {
        width: 100%;
        text-decoration: none;
      }
    }
  }
`;

export const PhoneButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  border-radius: 9999px;
  background-color: #f4f4f5;
  color: #18181b !important;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #e4e4e7;

  &:hover {
    background-color: #e4e4e7;
    transform: translateY(-2px);
  }
`;

export const WhatsAppButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  border-radius: 9999px;
  background-color: #25D366;
  color: #ffffff !important;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 14px 0 rgba(37, 211, 102, 0.39);

  &:hover {
    background-color: #128C7E;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.23);
  }
`;
