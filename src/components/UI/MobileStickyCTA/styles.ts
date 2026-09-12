'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 40;
  background: var(--Background);
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 47.9375rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.9rem 0;
    color: var(--white);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;

    &:first-child {
      border-right: 1px solid rgba(255, 255, 255, 0.1);
    }

    &:last-child {
      background: var(--brand);
    }
  }
`;
