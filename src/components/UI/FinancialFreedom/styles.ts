'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 11.25rem;

  @media (max-width: 768px) {
    margint-top: 6.25rem;
  }
`;

export const Inner = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto 8.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-bottom: 6rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 56rem;
  margin: 0 auto 7.75rem;
  text-align: center;

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 5rem;

    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const BannerCtn = styled.div`
  margin-bottom: 5rem;
  width: 100%;
  position: relative;
  width: 100%;
  height: 38.4375rem;
  overflow: hidden;
  border-radius: 0.75rem;

  img {
    border-radius: 0.75rem;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Edges = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const Edge = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;

  p {
    max-width: 26rem;
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }
`;

export const Title = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const BriefNote = styled.div`
  padding: 10rem 4.5rem;
  background: radial-gradient(circle at center, #1A1A1A 0%, #080808 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  p {
    color: #FFFFFF;
    font-size: 7rem;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.02em;
    max-width: 1440px;
    text-align: center;
    text-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
  }

  p:last-child {
    color: #E30613; /* Highlight the last phrase */
  }

  @media (max-width: 768px) {
    padding: 5rem 1.5rem;
    p {
      font-size: 3.25rem;
    }
  }
`;
