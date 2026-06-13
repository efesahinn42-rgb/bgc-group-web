'use client';
import { useState } from 'react';
import {
  Wrapper,
  Inner,
  Header,
  TestimonialWrapper,
  Testimonial,
  Testimony,
  UserInfo,
  Name,
  Avatar,
  PaginationButtonContainer,
  Previous,
  Next,
} from './styles';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { MaskText } from '@/components';
import { useIsMobile } from '../../../../libs/useIsMobile';
import { Props, desktopHeaderPhrase, testimonials } from './constants';

const JoinSection = () => {
  const [testimonialsArr, setTestimonialsArr] = useState<Props[]>(testimonials);

  const next = () => {
    const newArr = [...testimonialsArr.slice(1), testimonialsArr[0]];
    setTestimonialsArr(newArr);
  };

  const previous = () => {
    const newArr = [
      ...testimonialsArr.slice(-1),
      ...testimonialsArr.slice(0, -1),
    ];
    setTestimonialsArr(newArr);
  };

  const isMobile = useIsMobile();

  const mappedTestimonials = isMobile
    ? testimonialsArr.slice(0, 1)
    : testimonialsArr.slice(0, 3);
  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrase} tag="h1" />
        </Header>
        <TestimonialWrapper>
          {mappedTestimonials.map((t, i) => (
            <Testimonial key={i}>
              <Testimony>{t.testimony}</Testimony>
              <UserInfo>
                <Name>
                  <MaskText phrases={new Array(t.person)} tag="h3" />
                  <MaskText phrases={new Array('BGC Group Müşterisi')} tag="p" />
                </Name>
                <Avatar>
                  <Image src={t.avatar} alt="user avatar" />
                </Avatar>
              </UserInfo>
            </Testimonial>
          ))}
        </TestimonialWrapper>
        <PaginationButtonContainer>
          <Previous onClick={previous}>
            <ChevronLeft size={24} color="#e30613" />
          </Previous>
          <Next onClick={next}>
            <ChevronRight size={24} color="#e30613" />
          </Next>
        </PaginationButtonContainer>
      </Inner>
    </Wrapper>
  );
};

export default JoinSection;
