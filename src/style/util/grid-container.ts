/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { device } from './media-query';

export const gridContainer = () => {
  return `
    flex: 1;
    width: 100%;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 24px;

    @media ${device.tablet} {
      padding: 0 64px;
    }

    @media ${device.desktopM} {
      padding: 0 80px;
    }

    @media ${device.desktopL} {
      padding: 0 144px;
    }
  `;
};
