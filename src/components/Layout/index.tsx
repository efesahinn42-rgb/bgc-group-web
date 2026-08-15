'use client';

import { ReactLenis } from 'lenis/react';
import StyledComponentsRegistry from '../../../libs/registry';
import { GlobalStyles } from './GlobalStyles';
import { Footer, Header, SplashWrapper } from '..';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ReactLenis
        root
        options={{
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        }}
      >
        <GlobalStyles />
        <SplashWrapper />
        <div>
          <Header />
          {children}
          <Footer />
        </div>
      </ReactLenis>
    </StyledComponentsRegistry>
  );
};

export default Layout;
