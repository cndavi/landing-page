import { theme } from '../theme';
import { device } from '../util/media-query';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type ParagraphType = 'p' | 'span' | 'label';
export type ParagraphSize = 'large' | 'medium' | 'small';
export type TextTransformType = 'none' | 'lowercase' | 'uppercase' | 'capitalize';
export type TextAlignType = 'center' | 'left' | 'right' | 'justify';

export const typeStyle: Record<HeadingType | ParagraphSize, string> = {
  h1: `
    font-family: ${theme.font.heading};
    font-weight: 700;
    line-height: 1;
    font-size: 3.6rem;

    @media only screen and ${device.desktop} {
      font-size: 5.6rem;
    }
  `,
  h2: `
		font-family: ${theme.font.heading};
		font-weight: 700;
		line-height: 1.2;
    font-size: 3rem;

    @media only screen and ${device.desktop} {
      font-size: 4rem;
    }
  `,
  h3: `
		font-family: ${theme.font.heading};
		font-weight: 700;
		line-height: 1;
    font-size: 2.2rem;

    @media only screen and ${device.desktop} {
      font-size: 3.2rem;
    }
  `,
  h4: `
		font-family: ${theme.font.heading};
		font-weight: 700;
		line-height: 1;
    font-size: 1.9rem;

    @media only screen and ${device.desktop} {
      font-size: 2.4rem;
    }
  `,
  h5: `
    font-family: ${theme.font.heading};
    font-weight: 400;
    line-height: 1.33;
    font-size: 1.4rem;

    @media only screen and ${device.desktop} {
      font-size: 1.8rem;
    }
  `,
  h6: `
    font-family: ${theme.font.heading};
    font-weight: 700;
    line-height: 1.33;
    font-size: 1.6rem;
  `,
  large: `
    font-family: ${theme.font.body};
    font-size: 1.8rem;
    line-height: 1.4;

    @media only screen and ${device.desktop} {
      font-size: 2.2rem;
    }
  `,
  medium: `
    font-family: ${theme.font.body};
    line-height: 1.5;
    font-size: 1.4rem;

    @media only screen and ${device.desktop} {
      font-size: 1.6rem;
    }
  `,
  small: `
    font-family: ${theme.font.body};
    line-height: 1.3;
    font-size: 1.2rem;

    @media only screen and ${device.desktop} {
      font-size: 1.4rem;
    }
  `,
};
