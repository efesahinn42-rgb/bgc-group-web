import Image from 'next/image';
import raft_footer_logo from '../../../../public/svgs/raft_footer_logo.svg';
import qr_code from '../../../../public/svgs/qr_code.svg';
import ic_google_playstore from '../../../../public/svgs/ic_google_playstore.svg';
import ic_baseline_apple from '../../../../public/svgs/ic_baseline_apple.svg';
import ic_chevron_down from '../../../../public/svgs/ic_chevron_down.svg';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';

const linksArr = [
  {
    title: 'Kurumsal',
    links: ['Hakkımızda', 'Kariyer', 'Basın'],
  },
  {
    title: 'Hizmetler',
    links: ['Filo Kiralama', 'Sigorta', 'Asistans'],
  },
  {
    title: 'İletişim',
    links: [
      'Hızlı Destek: 0850 888 0 155',
      'E-Posta: info@bgcgroup.com.tr',
      'Adres: Akabe, Şht. Furkan Doğan Cd. Bey Plaza Kat:1 No:3/122 Karatay / Konya',
    ],
  },
];

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  QRContainer,
  QRImageCtn,
  TextCtn,
  IconCtn,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  Translator,
  CopyRight,
} from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterLogo>
          <Image src="/images/bgc group logo_png.png" alt="bgc_group_logo" width={300} height={100} style={{ objectFit: 'contain' }} />
        </FooterLogo>
        <FooterMainContent>
          <FooterMiddle>
            <QRContainer>
              <QRImageCtn>
                <Image src={qr_code} alt="qr_code" />
              </QRImageCtn>
              <TextCtn>
                <p>BGC Group Mobil Uygulaması Çok Yakında Playstore ve Appstore&apos;da.</p>
                <IconCtn>
                  <Image src={ic_google_playstore} alt="playstore icon" />
                  <Image src={ic_baseline_apple} alt="apple icon" />
                </IconCtn>
              </TextCtn>
            </QRContainer>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, i) => (
                      <li key={i}>{link}</li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            <Translator>
              <h3>Türkçe (Türkiye)</h3>
              <Image src={ic_chevron_down} alt="chevron down" />
            </Translator>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              BGC Group A.Ş. © 2026
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
