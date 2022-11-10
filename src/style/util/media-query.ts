/* eslint-disable no-shadow, @typescript-eslint/naming-convention */
export enum MediaQueries {
  mobileM = 375,
  mobileL = 414,
  tablet = 768,
  desktop = 1024,
  desktopM = 1280,
  desktopL = 1440,
  desktopXl = 1920,
}

export const device = {
  mobileS: `(max-width: ${MediaQueries.mobileL - 1}px)`,
  mobileM: `(min-width: ${MediaQueries.mobileM}px)`,
  mobileL: `(min-width: ${MediaQueries.mobileL}px)`,
  tablet: `(min-width: ${MediaQueries.tablet}px)`,
  desktop: `(min-width: ${MediaQueries.desktop}px)`,
  desktopM: `(min-width: ${MediaQueries.desktopM}px)`,
  desktopL: `(min-width: ${MediaQueries.desktopL}px)`,
  desktopXl: `(min-width: ${MediaQueries.desktopXl}px)`,
};

export const hover = '(hover: hover)';
