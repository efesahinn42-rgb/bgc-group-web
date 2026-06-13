'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding: 1rem 0;
  border-bottom: 0.5px solid #eaeaea;
  background-color: var(--white);
  color: var(--Background);

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
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    
    img {
      transform: scale(1.8) translateX(25px) !important;
    }
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  position: relative;

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem;

    div {
      position: absolute;
      background: var(--emerald);
      width: '250px';
      height: '300px';
      border-radius: 25px;
      z-index: 1;
      top: 50px;
    }

    img {
      position: relative;
      z-index: 2;
      object-fit: cover;
    }
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
    position: absolute;
    top: 60px;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    right: 120px;
    z-index: 3;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-delay: 0.5s;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const AbsoluteLinks = styled(Link)`
  position: absolute;
  top: 40px;
  color: var(--link-color);
  font-size: 1rem;
  font-weight: 400;
`;

export const CallToActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    text-decoration: none;
  }

  div {
    span {
      color: #000000 !important;
      font-size: 1.125rem;
      font-weight: 600;
    }
  }

  @media (max-width: 1024px) {
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 220px;
    z-index: 3;
    right: 50px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-delay: 0.5s;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const PhoneButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  border-radius: 9999px;
  background-color: #f4f4f5; /* zinc-100 */
  color: #18181b !important; /* zinc-900 */
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #e4e4e7; /* zinc-200 */

  &:hover {
    background-color: #e4e4e7;
    transform: translateY(-2px);
  }
`;

export const WhatsAppButton = styled.div`
  display: flex;
  align-items: center;
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
